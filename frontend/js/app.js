document.addEventListener("DOMContentLoaded", () => {
  const $ = (id) => document.getElementById(id);

  function escapeHtml(value) {
    return String(value ?? "").replace(/[&<>"']/g, (character) => {
      const replacements = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      };
      return replacements[character];
    });
  }

  let foodPage = 1;
  const foodPageSize = 24;

  async function loadFoods(page = foodPage) {
    const grid = $("food-db-grid");
    if (!grid) return;

    foodPage = Math.max(1, Number(page) || 1);
    grid.innerHTML = '<p class="empty-state">Loading foods…</p>';

    const params = new URLSearchParams({
      page: String(foodPage),
      limit: String(foodPageSize)
    });

    const filterFields = {
      q: "food-search-input",
      type: "type-filter",
      category: "category-filter",
      meal: "meal-filter",
      tag: "tag-filter",
      taste: "taste-filter",
      minProtein: "protein-filter",
      maxCalories: "calorie-filter"
    };

    for (const [parameter, elementId] of Object.entries(filterFields)) {
      const element = $(elementId);
      if (element && element.value.trim()) {
        params.set(parameter, element.value.trim());
      }
    }

    const sortElement = $("sort-foods");
    if (sortElement) {
      const selectedSort = sortElement.value;
      const sortValue = /Calories/i.test(selectedSort)
        ? "calories"
        : /Protein/i.test(selectedSort)
          ? "protein"
          : "name";
      params.set("sort", sortValue);
    }

    try {
      const response = await MV_API.get(`/foods?${params.toString()}`);
      const foods = Array.isArray(response.items) ? response.items : [];

      if (response.total === 0) {
        grid.innerHTML = `
          <p class="empty-state">
            The food database is empty. Put your complete data.json beside package.json,
            then restart the server or run npm run import-foods.
          </p>`;
      } else {
        grid.innerHTML = foods.map((food) => {
          const macros = food.macronutrients || {};
          const tags = Array.isArray(food.diet_tags)
            ? food.diet_tags
            : food.diet_tags
              ? [food.diet_tags]
              : [];
          const image = food.image_url || food.image || "";
          const imageMarkup = image
            ? `<img class="food-card-img" loading="lazy" src="${escapeHtml(image)}" alt="${escapeHtml(food.name || "Food")}" onerror="this.style.display='none'">`
            : '<div class="food-card-img food-image-placeholder" aria-hidden="true"></div>';
          const tagsMarkup = tags.length
            ? `<div class="tag-group">${tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}</div>`
            : "";

          return `
            <article class="food-card glass-panel">
              ${imageMarkup}
              <div class="food-card-body">
                <h3 class="food-card-title">${escapeHtml(food.name || "Unnamed food")}</h3>
                <p class="food-card-meta">
                  ${escapeHtml(food.category || "Food")}
                  ${food.type ? ` · ${escapeHtml(food.type)}` : ""}
                </p>
                ${tagsMarkup}
                <div class="macro-stats">
                  <span>${Number(macros.calories ?? food.calories ?? 0)} kcal</span>
                  <span>Protein ${Number(macros.protein_g ?? food.protein_g ?? 0)}g</span>
                  <span>Carbs ${Number(macros.carbohydrates_g ?? macros.carbs_g ?? food.carbs_g ?? 0)}g</span>
                  <span>Fat ${Number(macros.fat_g ?? food.fat_g ?? 0)}g</span>
                </div>
              </div>
            </article>`;
        }).join("");
      }

      if ($("food-count")) {
        const firstItem = response.total
          ? (response.page - 1) * foodPageSize + 1
          : 0;
        const lastItem = Math.min(response.page * foodPageSize, response.total);
        $("food-count").textContent = `Showing ${firstItem}–${lastItem} of ${response.total} foods`;
      }

      populateFilterOptions(response.filters || {});
      renderPagination(response.pages || 1);
    } catch (error) {
      grid.innerHTML = `
        <p class="empty-state">
          ${escapeHtml(error.message)}. Check your MongoDB connection and make sure data.json has been imported.
        </p>`;

      if ($("food-count")) {
        $("food-count").textContent = "Food database unavailable";
      }
      if ($("pagination")) {
        $("pagination").innerHTML = "";
      }
    }
  }

  function populateFilterOptions(filters) {
    const filterDefinitions = [
      ["type-filter", "types", "All Types"],
      ["category-filter", "categories", "All Categories"],
      ["meal-filter", "meals", "All Meal Types"],
      ["tag-filter", "tags", "All Diet Tags"],
      ["taste-filter", "tastes", "All Tastes"]
    ];

    for (const [elementId, filterKey, placeholder] of filterDefinitions) {
      const element = $(elementId);
      if (!element || element.dataset.optionsLoaded === "true") continue;

      const values = (filters[filterKey] || [])
        .flatMap((value) => Array.isArray(value) ? value : [value])
        .filter((value) => value !== null && value !== undefined && String(value).trim());
      const uniqueValues = [...new Set(values.map(String))]
        .sort((first, second) => first.localeCompare(second));
      const previousValue = element.value;

      element.innerHTML = `<option value="">${placeholder}</option>` + uniqueValues
        .map((value) => `<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`)
        .join("");
      element.dataset.optionsLoaded = "true";

      if (uniqueValues.includes(previousValue)) {
        element.value = previousValue;
      }
    }
  }

  function renderPagination(pageCount) {
    const pagination = $("pagination");
    if (!pagination) return;

    const totalPages = Math.max(1, Number(pageCount) || 1);
    pagination.innerHTML = `
      <button type="button" id="foods-prev" ${foodPage <= 1 ? "disabled" : ""}>PREVIOUS</button>
      <span>Page ${foodPage} of ${totalPages}</span>
      <button type="button" id="foods-next" ${foodPage >= totalPages ? "disabled" : ""}>NEXT</button>`;

    $("foods-prev")?.addEventListener("click", () => loadFoods(foodPage - 1));
    $("foods-next")?.addEventListener("click", () => loadFoods(foodPage + 1));
  }

  if ($("food-db-grid")) {
    const applyFilters = () => loadFoods(1);

    $("apply-filter")?.addEventListener("click", applyFilters);
    $("reset-filter")?.addEventListener("click", () => {
      [
        "food-search-input",
        "type-filter",
        "category-filter",
        "meal-filter",
        "tag-filter",
        "taste-filter",
        "protein-filter",
        "calorie-filter"
      ].forEach((id) => {
        const element = $(id);
        if (element) element.value = "";
      });

      if ($("sort-foods")) $("sort-foods").selectedIndex = 0;
      applyFilters();
    });

    $("sort-foods")?.addEventListener("change", applyFilters);
    [
      "type-filter",
      "category-filter",
      "meal-filter",
      "tag-filter",
      "taste-filter",
      "protein-filter",
      "calorie-filter"
    ].forEach((id) => $(id)?.addEventListener("change", applyFilters));

    $("food-search-input")?.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        applyFilters();
      }
    });

    let searchTimer;
    $("food-search-input")?.addEventListener("input", () => {
      clearTimeout(searchTimer);
      searchTimer = setTimeout(applyFilters, 250);
    });

    loadFoods(1);
  }

  const profileForm = $("profile-edit-form");
  if (profileForm) {
    if (!localStorage.getItem("mv_token")) {
      window.location.href = "index.html";
      return;
    }

    (async () => {
      try {
        const response = await MV_API.get("/profile");
        const profile = response.profile || {};
        const email = localStorage.getItem("mv_user") || "";

        if ($("user-display-email")) $("user-display-email").textContent = email;
        if ($("user-display-name")) {
          $("user-display-name").textContent = email.split("@")[0] || "User Account";
        }
        if ($("avatar-icon")) {
          $("avatar-icon").textContent = (email[0] || "U").toUpperCase();
        }

        Object.entries(profile).forEach(([key, value]) => {
          const element = $(`p-${key}`);
          if (element) element.value = value;
        });
      } catch (error) {
        alert(error.message);
      }
    })();

    profileForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const profile = {};

      profileForm.querySelectorAll(
        "input[id^='p-'], select[id^='p-'], textarea[id^='p-']"
      ).forEach((element) => {
        profile[element.id.slice(2)] = element.value;
      });

      try {
        await MV_API.put("/profile", profile);
        alert("Profile updated successfully!");
      } catch (error) {
        alert(error.message);
      }
    });

    $("profile-logout-btn")?.addEventListener("click", () => MV_AUTH.logout());
  }

  const savedMealsList = $("saved-meals-list");
  if (savedMealsList) {
    async function loadSavedMeals() {
      const response = await MV_API.get("/meals");
      const meals = Array.isArray(response.items) ? response.items : [];

      savedMealsList.innerHTML = meals.map((meal) => `
        <article class="glass-panel">
          <h3>${escapeHtml(meal.name)}</h3>
          <p>${escapeHtml(new Date(meal.createdAt || meal.date).toLocaleString())}</p>
          <p>${escapeHtml(JSON.stringify(meal.totals || {}))}</p>
          <button class="btn btn-secondary" data-delete="${meal._id}">DELETE</button>
        </article>`).join("") || '<p class="empty-state">No saved meals yet.</p>';

      savedMealsList.querySelectorAll("[data-delete]").forEach((button) => {
        button.addEventListener("click", async () => {
          if (!confirm("Delete this saved meal?")) return;

          try {
            await MV_API.delete(`/meals/${button.dataset.delete}`);
            await loadSavedMeals();
          } catch (error) {
            alert(error.message);
          }
        });
      });
    }

    if (MV_AUTH.require()) {
      loadSavedMeals().catch((error) => {
        savedMealsList.innerHTML = `<p class="empty-state">${escapeHtml(error.message)}</p>`;
      });
    }
  }

  const macroForm = $("macro-form");
  if (macroForm) {
    macroForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      if (!MV_AUTH.require()) return;

      const results = $("combination-results");
      results.textContent = "Generating…";

      try {
        const response = await MV_API.post("/planner/combinations", {
          calories: $("target-calories").value,
          protein: $("target-protein").value,
          carbs: $("target-carbs").value,
          fat: $("target-fat").value,
          tolerance: $("target-tolerance").value
        });

        results.innerHTML = response.items.map((combination, index) => `
          <div class="glass-panel" style="padding: 1rem; margin: 1rem 0;">
            <h4>Combination ${index + 1}</h4>
            <p>${combination.items.map((item) => `${escapeHtml(item.name)} (${item.grams}g)`).join(" + ")}</p>
            <p>${Object.entries(combination.totals).map(([key, value]) => `${escapeHtml(key)}: ${value}`).join(" · ")}</p>
            <button class="btn btn-primary" data-save="${index}">SAVE MEAL</button>
          </div>`).join("");

        results.querySelectorAll("[data-save]").forEach((button) => {
          button.addEventListener("click", async () => {
            const combination = response.items[Number(button.dataset.save)];

            try {
              await MV_API.post("/meals", {
                name: "Macro combination",
                items: combination.items,
                totals: combination.totals
              });
              alert("Meal saved");
            } catch (error) {
              alert(error.message);
            }
          });
        });
      } catch (error) {
        results.innerHTML = `<p class="empty-state">${escapeHtml(error.message)}</p>`;
      }
    });
  }
});

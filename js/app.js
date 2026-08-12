document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('food-search-input');
  if (searchInput) {
    renderFoodDatabase(foodDatabase);
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase();
      const filtered = foodDatabase.filter(item => 
        item.name.toLowerCase().includes(query) || 
        item.category.toLowerCase().includes(query)
      );
      renderFoodDatabase(filtered);
    });
  }

  const macroForm = document.getElementById('macro-form');
  if (macroForm) {
    macroForm.addEventListener('submit', (e) => {
      e.preventDefault();
      runMacroSolver();
    });
  }

  const savedContainer = document.getElementById('saved-meals-list');
  if (savedContainer) {
    renderSavedMeals();
  }
});

function renderFoodDatabase(items) {
  const grid = document.getElementById('food-db-grid');
  if (!grid) return;
  grid.innerHTML = items.map(item => `
    <div class="glass-panel food-card">
      <img src="${item.image_url}" alt="${item.name}" class="food-card-img" />
      <div class="food-card-body">
        <h4 class="food-card-title">${item.name}</h4>
        <div class="food-card-meta">${item.category} • ${item.serving_size.amount}${item.serving_size.unit} (${item.serving_size.description})</div>
        <div class="tag-group">
          ${item.diet_tags ? item.diet_tags.map(t => `<span class="tag tag-orange">${t}</span>`).join('') : ''}
          <span class="tag">${item.type}</span>
        </div>
        <div class="macro-stats">
          <span style="color: var(--orange);">${item.macronutrients.calories} KCAL</span>
          <span>P: ${item.macronutrients.protein_g}g</span>
          <span>C: ${item.macronutrients.carbohydrates_g}g</span>
          <span>F: ${item.macronutrients.fat_g}g</span>
        </div>
      </div>
    </div>
  `).join('');
}

function runMacroSolver() {
  const targetCal = parseFloat(document.getElementById('target-calories').value);
  const tolerancePct = parseFloat(document.getElementById('target-tolerance').value) / 100;

  const minCal = targetCal * (1 - tolerancePct);
  const maxCal = targetCal * (1 + tolerancePct);

  const resultsContainer = document.getElementById('combination-results');
  resultsContainer.innerHTML = '<p class="empty-state">Running subset-sum combination engine...</p>';

  let validCombinations = [];

  function search(index, currentCombo, sumCal, sumP, sumC, sumF) {
    if (sumCal >= minCal && sumCal <= maxCal) {
      validCombinations.push({
        items: [...currentCombo],
        totalCalories: sumCal,
        totalProtein: sumP,
        totalCarbs: sumC,
        totalFat: sumF
      });
    }

    if (sumCal > maxCal || index >= foodDatabase.length) return;

    for (let i = index; i < foodDatabase.length; i++) {
      const item = foodDatabase[i];
      const macros = item.macronutrients;
      search(
        i + 1,
        [...currentCombo, item],
        sumCal + macros.calories,
        sumP + macros.protein_g,
        sumC + macros.carbohydrates_g,
        sumF + macros.fat_g
      );
    }
  }

  search(0, [], 0, 0, 0, 0);

  if (validCombinations.length === 0) {
    resultsContainer.innerHTML = `<p class="empty-state">No combinations hit the target within ±${tolerancePct * 100}%. Try adjusting tolerance or targets.</p>`;
    return;
  }

  resultsContainer.innerHTML = validCombinations.slice(0, 3).map((combo, idx) => `
    <div class="glass-panel food-card" style="margin-bottom: 1rem; padding: 1.25rem;">
      <h4 style="color: var(--orange); font-weight: 900;">SOLVER OPTION #${idx + 1}</h4>
      <p style="font-size: 0.85rem; font-weight: 700; margin-top: 0.4rem; color: var(--navy);">
        ${combo.items.map(i => i.name).join(' + ')}
      </p>
      <div class="macro-stats" style="margin-top: 0.8rem;">
        <span style="color: var(--orange);">${combo.totalCalories.toFixed(0)} KCAL</span>
        <span>P: ${combo.totalProtein.toFixed(1)}g</span>
        <span>C: ${combo.totalCarbs.toFixed(1)}g</span>
        <span>F: ${combo.totalFat.toFixed(1)}g</span>
      </div>
      <button class="btn btn-primary btn-full" style="margin-top: 1rem;" onclick="saveMeal(${idx})">SAVE TO MY MEALS</button>
    </div>
  `).join('');

  window.lastCombos = validCombinations;
}

function saveMeal(idx) {
  if (!window.lastCombos) return;
  let saved = JSON.parse(localStorage.getItem('mv_saved_meals')) || [];
  const combo = window.lastCombos[idx];
  saved.push({
    name: `Meal Combo ${saved.length + 1}`,
    ...combo
  });
  localStorage.setItem('mv_saved_meals', JSON.stringify(saved));
  alert('Meal plan saved to LocalStorage!');
}

function renderSavedMeals() {
  const container = document.getElementById('saved-meals-list');
  let saved = JSON.parse(localStorage.getItem('mv_saved_meals')) || [];

  if (saved.length === 0) {
    container.innerHTML = `<p class="empty-state">No saved meal combinations stored in LocalStorage.</p>`;
    return;
  }

  container.innerHTML = saved.map((meal, index) => `
    <div class="glass-panel food-card" style="padding: 1.25rem;">
      <h4 style="font-weight: 900; color: var(--navy);">${meal.name}</h4>
      <p style="color: var(--orange); font-weight: 700; font-size: 1.1rem; margin-top: 0.2rem;">${meal.totalCalories.toFixed(0)} KCAL</p>
      <p style="font-size: 0.8rem; color: var(--text-muted); font-weight: 600; margin-top: 0.4rem;">
        ${meal.items.map(i => i.name).join(', ')}
      </p>
      <div class="macro-stats" style="margin-top: 1rem;">
        <span>P: ${meal.totalProtein.toFixed(1)}g</span>
        <span>C: ${meal.totalCarbs.toFixed(1)}g</span>
        <span>F: ${meal.totalFat.toFixed(1)}g</span>
      </div>
      <button class="btn btn-secondary btn-full" style="margin-top: 1rem;" onclick="deleteMeal(${index})">DELETE MEAL</button>
    </div>
  `).join('');
}

function deleteMeal(index) {
  let saved = JSON.parse(localStorage.getItem('mv_saved_meals')) || [];
  saved.splice(index, 1);
  localStorage.setItem('mv_saved_meals', JSON.stringify(saved));
  renderSavedMeals();
}
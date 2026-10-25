(function initializeMacroVerseApi() {
  const API_PREFIX = String(
    window.MV_API_BASE || "http://localhost:5000/api"
  ).replace(/\/+$/, "");
  const FOOD_LIBRARY_LIMIT = 5000;

  async function request(path, options = {}) {
    const token = localStorage.getItem("mv_token");
    const headers = {
      "Content-Type": "application/json",
      ...(options.headers || {})
    };

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    const normalizedPath = path.startsWith("/") ? path : `/${path}`;
    const response = await fetch(`${API_PREFIX}${normalizedPath}`, {
      ...options,
      headers
    });

    let data = {};
    try {
      data = await response.json();
    } catch (_error) {
      // Some server errors may return an empty body.
    }

    if (!response.ok) {
      if (response.status === 401 && token) {
        localStorage.removeItem("mv_token");
        localStorage.removeItem("mv_user");
      }
      throw new Error(data.message || `Request failed (${response.status})`);
    }

    return data;
  }

  window.MV_API = {
    request,
    get(path) {
      return request(path);
    },
    post(path, body) {
      return request(path, {
        method: "POST",
        body: JSON.stringify(body)
      });
    },
    put(path, body) {
      return request(path, {
        method: "PUT",
        body: JSON.stringify(body)
      });
    },
    delete(path) {
      return request(path, { method: "DELETE" });
    }
  };

  // The meal planner needs the full food catalogue, not only the first page.
  window.MV_LOAD_FOODS = async function loadFoodLibrary() {
    const result = await window.MV_API.get(`/foods?limit=${FOOD_LIBRARY_LIMIT}`);
    const foods = Array.isArray(result.items) ? result.items : [];

    window.MV_FOODS = foods;
    window.foodData = foods;
    window.FOOD_DATABASE = foods;

    return foods;
  };
})();

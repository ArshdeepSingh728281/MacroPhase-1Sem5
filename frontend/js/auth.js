document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("auth-modal");
  const form = document.getElementById("auth-form");
  const authButton = document.getElementById("auth-btn");

  const getToken = () => localStorage.getItem("mv_token");
  const getEmail = () => localStorage.getItem("mv_user");

  function updateAuthInterface() {
    const userDisplay = document.getElementById("user-display");

    if (userDisplay) {
      if (getEmail()) {
        userDisplay.textContent = `USER: ${getEmail().toUpperCase()}`;
        userDisplay.classList.remove("hidden");
      } else {
        userDisplay.classList.add("hidden");
      }
    }

    if (authButton) {
      authButton.textContent = getToken() ? "LOGOUT" : "SIGN IN / SIGN UP";
    }
  }

  function showAuthModal() {
    modal?.classList.remove("hidden");
  }

  function hideAuthModal() {
    modal?.classList.add("hidden");
  }

  window.MV_AUTH = {
    show: showAuthModal,
    hide: hideAuthModal,
    require() {
      if (!getToken()) {
        showAuthModal();
        return false;
      }
      return true;
    },
    logout() {
      localStorage.removeItem("mv_token");
      localStorage.removeItem("mv_user");
      updateAuthInterface();
      window.location.href = "index.html";
    }
  };

  authButton?.addEventListener("click", () => {
    if (getToken()) {
      window.MV_AUTH.logout();
    } else {
      showAuthModal();
    }
  });

  document.getElementById("close-modal")?.addEventListener("click", hideAuthModal);
  modal?.addEventListener("click", (event) => {
    if (event.target === modal) hideAuthModal();
  });

  form?.addEventListener("submit", async (event) => {
    event.preventDefault();

    const username = document.getElementById("auth-user")?.value.trim();
    const password = document.getElementById("auth-pass")?.value;
    if (!username || !password) return;

    const submitButton = form.querySelector('[type="submit"]');
    if (submitButton) submitButton.disabled = true;

    try {
      let result;
      try {
        result = await MV_API.post("/auth/login", {
          email: username,
          password
        });
      } catch (error) {
        const accountNotFound = /Invalid email or password|Account|not found/i.test(error.message);
        if (!accountNotFound) throw error;

        result = await MV_API.post("/auth/signup", {
          email: username,
          password
        });
      }

      localStorage.setItem("mv_token", result.token);
      localStorage.setItem("mv_user", result.user.email);
      hideAuthModal();
      updateAuthInterface();

      const profile = result.user?.profile || {};
      const onboardingComplete = profile.onboarding_completed === true
        || profile.onboarding_completed === "true";

      window.location.href = onboardingComplete
        ? "/my-meals.html"
        : "/questionnaire.html";
    } catch (error) {
      alert(error.message);
    } finally {
      if (submitButton) submitButton.disabled = false;
    }
  });

  document.querySelectorAll(".protected-link").forEach((link) => {
    link.addEventListener("click", (event) => {
      if (!getToken()) {
        event.preventDefault();
        showAuthModal();
      }
    });
  });

  updateAuthInterface();
});

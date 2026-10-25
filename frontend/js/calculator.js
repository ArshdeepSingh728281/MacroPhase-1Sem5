document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("step-by-step-form");
  if (!form) return;

  if (!localStorage.getItem("mv_token")) {
    window.location.href = "index.html";
    return;
  }

  const steps = [...document.querySelectorAll(".question-step")];
  let currentStep = 0;

  function updateStep() {
    steps.forEach((step, index) => {
      step.classList.toggle("active", index === currentStep);
    });

    const progress = ((currentStep + 1) / steps.length) * 100;
    const progressBar = document.getElementById("progress-bar");
    const stepCount = document.getElementById("step-count");
    const percentage = document.getElementById("step-percent");
    const previousButton = document.getElementById("prev-btn");
    const nextButton = document.getElementById("next-btn");

    if (progressBar) progressBar.style.width = `${progress}%`;
    if (stepCount) stepCount.textContent = `STEP ${currentStep + 1} OF ${steps.length}`;
    if (percentage) percentage.textContent = `${Math.round(progress)}%`;
    previousButton?.toggleAttribute("disabled", currentStep === 0);

    if (nextButton) {
      nextButton.textContent = currentStep === steps.length - 1
        ? "CALCULATE MY PLAN"
        : "CONTINUE →";
    }
  }

  document.querySelectorAll(".radio-card").forEach((card) => {
    card.addEventListener("click", () => {
      const radio = card.querySelector('input[type="radio"]');
      if (radio) radio.checked = true;

      document.querySelectorAll(".radio-card").forEach((item) => {
        item.classList.toggle("selected", Boolean(item.querySelector("input:checked")));
      });
    });
  });

  document.getElementById("prev-btn")?.addEventListener("click", () => {
    if (currentStep === 0) return;
    currentStep -= 1;
    updateStep();
  });

  document.getElementById("next-btn")?.addEventListener("click", async () => {
    if (currentStep < steps.length - 1) {
      currentStep += 1;
      updateStep();
      return;
    }

    const profile = {};
    steps.forEach((step) => {
      const key = step.dataset.key;
      const input = step.querySelector("input:checked") || step.querySelector(
        'input[type="range"], input:not([type="radio"]), select'
      );
      if (key && input) profile[key] = input.value;
    });

    profile.onboarding_completed = true;

    try {
      await MV_API.put("/profile", profile);
      const popup = document.getElementById("success-popup");

      if (popup) {
        popup.classList.remove("hidden");
      } else {
        alert("Profile saved successfully.");
        window.location.href = "my-meals.html";
      }
    } catch (error) {
      alert(`Could not save your profile: ${error.message}`);
    }
  });

  document.getElementById("popup-confirm-btn")?.addEventListener("click", () => {
    window.location.href = "my-meals.html";
  });

  document.getElementById("popup-change-btn")?.addEventListener("click", () => {
    document.getElementById("success-popup")?.classList.add("hidden");
    currentStep = 0;
    updateStep();
  });

  document.querySelectorAll('input[type="range"]').forEach((range) => {
    range.addEventListener("input", () => {
      const step = range.closest(".question-step");
      const valueDisplay = step?.querySelector(".slider-value-display span:first-child");
      if (valueDisplay) valueDisplay.textContent = range.value;

      if (range.id === "q-weight_change_target") {
        const value = Number(range.value);
        const targetDisplay = document.getElementById("val-weight-change");
        const sublabel = document.getElementById("sublabel-weight-change");

        if (targetDisplay) targetDisplay.textContent = value > 0 ? `+${value}` : String(value);
        if (sublabel) {
          sublabel.textContent = value > 0
            ? "Weight / Muscle Gain Target"
            : value < 0
              ? "Fat Loss Target"
              : "Maintain Current Weight";
        }
      }
    });
  });

  updateStep();
});

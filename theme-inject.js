(function () {
  const css = `
    body, .v-main, .v-application--wrap {
      background-color: #111 !important;
      color: #ddd !important;
    }

    .v-navigation-drawer, .v-toolbar {
      background-color: #000 !important;
      color: #fff !important;
    }

    .v-btn {
      background-color: #333 !important;
      color: #fff !important;
    }
  `;

  function injectStyle() {
    if (!document.getElementById('theme-inline')) {
      const style = document.createElement("style");
      style.id = "theme-inline";
      style.textContent = css;
      document.head.appendChild(style);
      console.log("[Theme] CSS injected");
    }
  }

  function hideSpinners() {
    // hide typical loading containers
    const spinners = document.querySelectorAll('[class*="loading"], [class*="spinner"], [class*="progress"]');
    spinners.forEach(el => {
      el.style.display = "none";
    });

    // force app visibility
    const app = document.querySelector("#app");
    if (app) app.style.opacity = "1";
  }

  function waitForVueMount(retries = 0) {
    const mainView = document.querySelector(".v-main"); // or a specific content marker
    if (mainView && mainView.children.length > 0) {
      injectStyle();
      hideSpinners();
    } else if (retries < 40) {
      setTimeout(() => waitForVueMount(retries + 1), 500);
    } else {
      console.warn("[Theme] Timed out waiting for Vue");
    }
  }

  // Delay startup to avoid interfering with first paint
  window.addEventListener("load", () => {
    setTimeout(waitForVueMount, 300);
  });
})();
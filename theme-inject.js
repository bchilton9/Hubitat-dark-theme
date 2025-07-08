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
    const style = document.createElement("style");
    style.id = "theme-inline";
    style.textContent = css;
    document.head.appendChild(style);
    console.log("[Theme] Inline CSS applied");
  }

  function forceReveal() {
    const spinners = document.querySelectorAll('[class*="loading"], [class*="spinner"], [class*="progress"]');
    spinners.forEach(el => {
      el.style.display = "none";
    });

    const app = document.querySelector("#app");
    if (app) app.style.opacity = "1";

    console.log("[Theme] Forced content reveal");
  }

  function init() {
    injectStyle();
    forceReveal();
  }

  // Wait until app is populated
  function waitUntilReady(attempts = 0) {
    const app = document.querySelector("#app");
    if (app && app.innerHTML.length > 500) {
      init();
    } else if (attempts < 20) {
      setTimeout(() => waitUntilReady(attempts + 1), 500);
    } else {
      console.warn("[Theme] Vue app never fully loaded");
    }
  }

  waitUntilReady();
})();
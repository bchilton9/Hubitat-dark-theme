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
    if (!document.getElementById("theme-inline")) {
      const style = document.createElement("style");
      style.id = "theme-inline";
      style.textContent = css;
      document.head.appendChild(style);
      console.log("[Theme] Inline CSS applied");
    }
  }

  function waitForAppMount() {
    const observer = new MutationObserver(() => {
      const spinnerGone = !document.querySelector(".v-progress-circular");
      const mainContentLoaded = document.querySelector(".v-main, .dashboard-tile");

      if (spinnerGone && mainContentLoaded) {
        injectStyle();
        observer.disconnect();
        console.log("[Theme] DOM mutation triggered injection");
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    setTimeout(() => {
      injectStyle(); // fallback after timeout
      console.warn("[Theme] Fallback applied after timeout");
    }, 15000);
  }

  window.addEventListener("load", waitForAppMount);
})();
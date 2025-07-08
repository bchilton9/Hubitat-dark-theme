(function(){
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

  function isReady() {
    const app = document.getElementById("app");
    return app && app.innerHTML.length > 100;
  }

  function waitUntilReady() {
    if (isReady()) injectStyle();
    else setTimeout(waitUntilReady, 500);
  }

  waitUntilReady();
})();
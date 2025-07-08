(function injectThemeWhenReady() {
  const cssUrl = "https://hubitat.chilsoft.com/hubitat.css"; // your dark theme CSS

  function injectCSS() {
    if (document.getElementById("theme-style")) return;

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = cssUrl;
    link.id = "theme-style";
    document.head.appendChild(link);
  }

  function waitForVue() {
    const appEl = document.getElementById("app");
    if (!appEl || appEl.innerHTML.trim().length < 10) {
      return setTimeout(waitForVue, 300); // wait for Vue hydration
    }

    injectCSS();
  }

  waitForVue();
})();
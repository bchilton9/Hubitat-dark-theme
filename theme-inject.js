(function(){
  const url = "https://hubitat.chilsoft.com/hubitat.css";
  const MAX = 20000, INTERVAL = 500;
  let elapsed = 0;

  function applyTheme() {
    if (document.getElementById("theme-style")) return true;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = url;
    link.id = "theme-style";
    document.head.appendChild(link);
    console.log("[Theme] CSS injected");
    return true;
  }

  function isAppReady() {
    const app = document.getElementById("app");
    return app && app.innerHTML.length > 100;
  }

  function tryInject() {
    if (isAppReady()) {
      applyTheme();
    } else if (elapsed < MAX) {
      elapsed += INTERVAL;
      setTimeout(tryInject, INTERVAL);
    } else {
      console.warn("[Theme] Vue didn’t mount within timeout");
    }
  }

  document.addEventListener("readystatechange", () => {
    if (document.readyState === "complete") tryInject();
  });

  tryInject();
})();
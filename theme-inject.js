(function () {
  const DARK_URL = "https://hubitat.chilsoft.com/theme/hubitat-dark.css";
  const LIGHT_URL = "https://hubitat.chilsoft.com/theme/hubitat-light.css";

  const THEME_ID = "hubitat-theme-style";
  const STORAGE_KEY = "hubitat-theme";
  const DEFAULT_THEME = "dark";

  function applyTheme(mode) {
    let existing = document.getElementById(THEME_ID);
    if (existing) existing.remove();

    const link = document.createElement("link");
    link.id = THEME_ID;
    link.rel = "stylesheet";
    link.href = mode === "dark" ? DARK_URL : LIGHT_URL;
    document.head.appendChild(link);

    localStorage.setItem(STORAGE_KEY, mode);
    console.log(`[Hubitat Theme] ${mode} theme enabled.`);
  }

  function toggleTheme() {
    const current = localStorage.getItem(STORAGE_KEY) || DEFAULT_THEME;
    const next = current === "dark" ? "light" : "dark";
    applyTheme(next);
    toggleBtn.textContent = next === "dark" ? "🌓" : "🌕";
  }

  function createToggleButton() {
    const btn = document.createElement("button");
    btn.innerText = "🌓";
    btn.title = "Toggle theme";
    Object.assign(btn.style, {
      position: "fixed",
      bottom: "15px",
      right: "15px",
      zIndex: 99999,
      padding: "10px",
      borderRadius: "50%",
      border: "none",
      cursor: "pointer",
      fontSize: "20px",
      boxShadow: "0 0 10px rgba(0,0,0,0.4)",
      background: "#444",
      color: "#fff"
    });
    btn.addEventListener("click", toggleTheme);
    document.body.appendChild(btn);
    return btn;
  }

  const toggleBtn = createToggleButton();
  const stored = localStorage.getItem(STORAGE_KEY) || DEFAULT_THEME;
  toggleBtn.textContent = stored === "dark" ? "🌓" : "🌕";
  applyTheme(stored);

  // Hide spinner fallback
  setTimeout(() => {
    const spinner = document.querySelector('.flex.justify-content-center.align-items-center');
    if (spinner && spinner.offsetHeight > 100) {
      spinner.style.display = 'none';
      console.log('[Hubitat Theme] Spinner force-hidden.');
    }
  }, 4000);
})();
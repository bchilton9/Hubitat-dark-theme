(function() {
  const css = `
    html, body {
      background-color: #111 !important;
      color: #eee !important;
    }

    .main-page-v2-wrapper,
    .device-tile-overrides,
    .ui-bg-white,
    .bg-hubitat-light-gray-1,
    .bg-hubitat-neutral-10 {
      background-color: #1a1a1a !important;
      color: #eee !important;
    }

    .border-300 {
      border-color: #444 !important;
    }

    .text-blue-600 {
      color: #66ccff !important;
    }

    .hover\\:bg-hubitat-neutral-15:hover {
      background-color: #2a2a2a !important;
    }

    a {
      color: #76c2ff !important;
    }

    /* Spinner override */
    .v-overlay,
    .loading-spinner,
    [class*="spinner"],
    [class*="loader"] {
      display: none !important;
    }
  `;

  function injectCSS() {
    const style = document.createElement("style");
    style.textContent = css;
    document.head.appendChild(style);
    console.log("[Theme] Dark theme injected.");
  }

  function waitForVueRender() {
    const target = document.querySelector(".main-page-v2-wrapper");
    if (target) {
      injectCSS();
      return;
    }

    // Wait and try again until Vue renders the content
    setTimeout(waitForVueRender, 300);
  }

  waitForVueRender();
})();
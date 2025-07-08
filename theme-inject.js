(function () {
  const DARK_STYLES = `
    body, html {
      background-color: #121212 !important;
      color: #e0e0e0 !important;
    }
    a, .text-blue-600 {
      color: #80d0ff !important;
    }
    .main-page-v2-wrapper,
    .device-tile-overrides,
    .header-container,
    .stats-container,
    .surface-ground,
    .p-toast {
      background-color: #1e1e1e !important;
      color: #e0e0e0 !important;
      border-color: #333 !important;
    }
    .ui-bg-white {
      background-color: #2a2a2a !important;
    }
    .border-300 {
      border-color: #444 !important;
    }
    .hover\\:bg-hubitat-neutral-15:hover {
      background-color: #333 !important;
    }
    .bg-hubitat-light-gray-1 {
      background-color: #1e1e1e !important;
    }
    .text-blue-600 {
      color: #4fc3f7 !important;
    }
    .p-toast {
      background: #222 !important;
    }
  `;

  function applyTheme() {
    if (document.getElementById('dark-theme-style')) return;

    const style = document.createElement('style');
    style.id = 'dark-theme-style';
    style.textContent = DARK_STYLES;
    document.head.appendChild(style);

    console.log('[Theme] Dark theme applied.');
  }

  // Defer just enough to allow the app's scripts to finish first
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(applyTheme, 500); // Wait a bit longer for slow UI apps
  });
})();
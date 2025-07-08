(function () {
  const DARK_STYLES = `
    body, html {
      background-color: #121212 !important;
      color: #e0e0e0 !important;
    }
    a, .text-blue-600, .text-primary {
      color: #4fc3f7 !important;
    }
    .main-page-v2-wrapper,
    .device-tile-overrides,
    .header-container,
    .stats-container,
    .surface-ground,
    .p-toast,
    .p-dialog,
    .p-panel,
    .p-dropdown,
    .p-inputtext,
    .p-button,
    .ui-bg-white,
    .bg-hubitat-light-gray-1,
    .bg-white,
    .bg-gray-100,
    .bg-hubitat-neutral-10,
    .hover\\:bg-hubitat-neutral-15:hover {
      background-color: #1e1e1e !important;
      color: #e0e0e0 !important;
      border-color: #333 !important;
    }
    .text-black, .text-gray-900, .text-gray-700 {
      color: #e0e0e0 !important;
    }
    .border-300, .border-gray-300 {
      border-color: #444 !important;
    }
    .p-button {
      background-color: #333 !important;
      border-color: #555 !important;
      color: #fff !important;
    }
    .p-button:hover {
      background-color: #555 !important;
    }
    .form-control, .p-inputtext {
      background-color: #2a2a2a !important;
      color: #e0e0e0 !important;
      border-color: #555 !important;
    }
    .p-dropdown-label {
      color: #e0e0e0 !important;
    }
    .p-tabview-nav li {
      background-color: #1c1c1c !important;
      color: #ccc !important;
    }
    .p-tabview-nav li.p-highlight {
      background-color: #333 !important;
      border-bottom: 2px solid #4fc3f7 !important;
    }
    .p-tabview-panels {
      background-color: #1a1a1a !important;
    }
    .p-toast {
      background: #222 !important;
      color: #eee !important;
    }
    .text-orange-600, .text-yellow-600 {
      color: #fbc02d !important;
    }
    .text-green-600 {
      color: #81c784 !important;
    }
    .text-red-600 {
      color: #e57373 !important;
    }
    .p-dialog .p-dialog-header,
    .p-dialog .p-dialog-content,
    .p-dialog .p-dialog-footer {
      background: #1a1a1a !important;
      color: #ddd !important;
      border-color: #333 !important;
    }
    table, thead, tbody, tr, th, td {
      background-color: #1e1e1e !important;
      color: #e0e0e0 !important;
      border-color: #333 !important;
    }
    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-track {
      background: #1e1e1e;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #555;
      border-radius: 10px;
    }
    .btn, .btn-primary, .btn-secondary {
      background-color: #333 !important;
      color: #fff !important;
      border: 1px solid #555 !important;
    }
    .btn:hover {
      background-color: #444 !important;
    }
    .alert, .notification {
      background-color: #222 !important;
      border-color: #333 !important;
      color: #fff !important;
    }
  `;

  function enableDarkTheme() {
    if (document.getElementById('dark-theme-style')) return;
    const style = document.createElement('style');
    style.id = 'dark-theme-style';
    style.textContent = DARK_STYLES;
    document.head.appendChild(style);
    console.log('[Hubitat Theme] Dark mode enabled.');
  }

  function disableDarkTheme() {
    const style = document.getElementById('dark-theme-style');
    if (style) style.remove();
    console.log('[Hubitat Theme] Dark mode disabled.');
  }

  function applyThemeFromStorage() {
    const mode = localStorage.getItem('hubitat-theme') || 'dark';
    if (mode === 'dark') {
      enableDarkTheme();
    } else {
      disableDarkTheme();
    }
  }

  function createToggleButton() {
    const btn = document.createElement('button');
    btn.innerText = '🌓';
    btn.title = 'Toggle dark/light theme';
    btn.style.position = 'fixed';
    btn.style.bottom = '15px';
    btn.style.right = '15px';
    btn.style.zIndex = 99999;
    btn.style.padding = '10px';
    btn.style.borderRadius = '50%';
    btn.style.border = 'none';
    btn.style.cursor = 'pointer';
    btn.style.fontSize = '20px';
    btn.style.boxShadow = '0 0 10px rgba(0,0,0,0.4)';
    btn.style.background = '#444';
    btn.style.color = '#fff';

    btn.addEventListener('click', () => {
      const isDark = document.getElementById('dark-theme-style');
      if (isDark) {
        disableDarkTheme();
        localStorage.setItem('hubitat-theme', 'light');
      } else {
        enableDarkTheme();
        localStorage.setItem('hubitat-theme', 'dark');
      }
    });

    document.body.appendChild(btn);
  }

  // Init
  applyThemeFromStorage();
  createToggleButton();

  // Hide spinner fallback
  setTimeout(() => {
    const spinner = document.querySelector('.flex.justify-content-center.align-items-center');
    if (spinner && spinner.offsetHeight > 100) {
      spinner.style.display = 'none';
      console.log('[Hubitat Theme] Spinner force-hidden.');
    }
  }, 4000);
})();
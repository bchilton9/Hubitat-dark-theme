# Hubitat Dark Theme

A custom dark mode CSS theme for Hubitat’s admin interface, designed to override the default light UI. This stylesheet improves readability, adds consistent theming, removes white flash elements, and is mobile-friendly. Great for use with reverse proxy setups like Nginx Proxy Manager (NPM), Caddy, or manually via browser extensions.

It’s not perfect yet but it works. 

## Features

- Full dark mode override for all built-in pages
- Improved contrast and readability
- Mobile-friendly layout adjustments
- Theme-safe scrollbars, buttons, inputs, tables, tabs, dropdowns, etc.

## Installation Options

### 🔁 Option 1: **Reverse Proxy CSS Injection (Recommended)**

This is the most seamless way to apply the dark mode without touching Hubitat files.

#### ✅ Requirements
- A reverse proxy like **Nginx Proxy Manager**, **Caddy**, or **Traefik**
- An externally hosted `.css` file (e.g. GitHub Pages, custom web server)

#### ✅ Example for **Nginx Proxy Manager**

1. **Host your dark CSS file** somewhere public (e.g., `https://yoursite.com/hubitat-dark.css`).
2. Go to your Hubitat proxy config in NPM.
3. Add this to the **Custom Nginx Configuration**:

```nginx
sub_filter ‘</head>’ ‘<link rel=“stylesheet” href=“https://yoursite.com/hubitat-dark.css”></head>’;
sub_filter_once on;
```

> This injects the CSS before the page loads by modifying HTML in real-time.

### 🧩 Option 2: **Browser Extension (Temporary / Per User)**

Use browser extensions like:

- **Stylus** (Chrome/Firefox)
- **User JavaScript and CSS**
- **Tampermonkey** (with custom script to inject CSS)

Then paste in the full contents of `hubitat-dark.css`.

### 🧪 Option 3: **Hubitat Custom Dashboard Code Injection** (limited)

You can attempt injecting this stylesheet via custom code in dashboards, but it won’t apply to the full admin interface. Use only if you need dark mode **in dashboards only**.

## Hosting the CSS

You can host `hubitat-dark.css` on:

- GitHub Pages (public repo)
- Your own server
- A file host that supports raw links (e.g., `cdn.jsdelivr.net`, Cloudflare R2, etc.)

Example GitHub Pages link:

```
https://yourgithubusername.github.io/hubitat-dark/hubitat-dark.css
```

## Tips

- Works great on mobile (tested on iOS Safari and Android Chrome)
- Set your browser to request dark mode (`prefers-color-scheme: dark`) to match auto-dark themes
- Ensure your reverse proxy supports `sub_filter` or equivalent (some need modules enabled)

## Screenshots

![Dashboard](./screenshots/dashboard.png)
![Settings](./screenshots/settings.png)

## 📜 License

MIT – free to use and modify. Not affiliated with Hubitat.

## 🛠 Made By

[ChilSoft.com](https://chilsoft.com) with caffeine and questionable commits.

## ⚠️ Disclaimer

This site and its contents are provided for informational and educational purposes only.

Use any code, tools, or instructions at your own risk.  
We are **not responsible** for any damage to your device, data loss, or unintended consequences.

Always proceed with care — and make backups.

© **2025 ChilSoft**. All rights reserved.

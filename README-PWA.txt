
# PWA Enablement for GitHub Pages (whatsbrowingapp)

**Files included**
- `manifest.json`
- `sw.js`
- `icons/icon-192.png`
- `icons/icon-512.png`

## How to use
1) Copy these files into the **root** of your repo `whatsbrowingapp` (keep `icons/` as-is).
2) Add to `<head>` in `index.html`:
   ```html
   <link rel="manifest" href="/whatsbrowingapp/manifest.json">
   <meta name="theme-color" content="#111827">
   <link rel="icon" href="/whatsbrowingapp/icons/icon-192.png">
   ```
3) Register the service worker (near the end of `index.html` or in `app.js`):
   ```html
   <script>
   if ('serviceWorker' in navigator) {
     window.addEventListener('load', () => {
       navigator.serviceWorker.register('/whatsbrowingapp/sw.js')
         .catch(e => console.log('SW registration failed', e));
     });
   }
   </script>
   ```
4) Commit & push → wait ~1–2 mins for GitHub Pages.
5) Verify: Chrome DevTools → Application → Manifest (should show Installable). Run Lighthouse → PWA.

# Share Your Game via Link — Step-by-Step

Your game is now **mobile-ready** and **shareable via a single link**. Choose the fastest option for you.

## Fastest (No Account, 30 seconds) — Local Tunnel
1. Open **Terminal / Command Prompt** in this folder (`FINAL Draft Game`)
2. Run:
   ```
   npm install
   npm start
   ```
   Keep that window open — it says `Serving! http://localhost:3000`
3. Open a **second** terminal in the same folder and run:
   ```
   npx localtunnel --port 3000
   ```
4. You get a public URL like `https://happy-paws-1234.loca.lt` — **open it on your phone** or send to friends. Anyone with the link can play instantly.
   - The Share button inside the game also copies this link.

> Alternative: `npx serve . -l 3000` then `ngrok http 3000` if you have ngrok.

## Easiest Permanent Link (1 minute, no terminal)
1. Go to **https://app.netlify.com/drop**
2. Drag the **entire `FINAL Draft Game` folder** onto the page
3. Wait 10 seconds → you get `https://your-game-xxxxx.netlify.app`
4. Share that link. It works on phone, tablet, laptop forever. HTTPS included.

Same with **Vercel**: `https://vercel.com/new` → drag folder.

## GitHub Pages (Free, Permanent, With Auto-Deploy)
1. Create a new repo at https://github.com/new (e.g., `house-organizer`)
2. In this folder, run:
   ```
   git remote add origin https://github.com/YOURNAME/house-organizer.git
   git push -u origin master
   ```
3. On GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**
4. Wait 1 minute → your link is `https://YOURNAME.github.io/house-organizer/`

The file `.github/workflows/deploy.yml` is already included — pushes auto-deploy.

## VS Code (Same Wi-Fi)
1. VS Code → Right-click `index.html` → **Open with Live Server**
2. Copy the `http://127.0.0.1:5500` URL
3. On your phone (same Wi-Fi), open `http://YOUR_LAPTOP_IP:5500` (find IP via `ipconfig` on Windows)

## Install to Home Screen (PWA)
1. Open your public link on phone's Chrome/Safari
2. Menu → **Add to Home Screen** / **Install App**
3. Icon “A” on green appears on home screen — launches like a native app, full-screen.

---
Tip: After deploying, test on both phone and laptop — all items are now ~22% larger and drag with green glow.

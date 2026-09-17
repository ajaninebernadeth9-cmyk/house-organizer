# Type A: House Organizer — Mobile-Ready Edition

A cozy, modern drag-and-drop puzzle game. Organize scattered household items into correct drawers, shelves and compartments before the timer runs out. **Now fully responsive — play beautifully on phone, tablet and laptop through a single shareable link. No install, no build step.**

## ✨ What's New — Mobile & Visibility Upgrade (v2.0)

- **Larger, clearer objects:** Item circles increased from 70px → **86px desktop / 70px phone** (was 52px), icons 60px → 72px, slots 46px → 56px. Every shoe, utensil and plant is instantly readable on a 5" phone.
- **Clean responsive layout:** Fluid breakpoints for 360px, 480px, 600px, 768px, 1024px and 1400px+. HUD stacks vertically on phones, house windows keep 44px+ touch targets, buttons are 48–56px minimum (WCAG).
- **Laptop optimized:** Max width 1180px (1280px on large screens), larger typography (title clamp 38–52px, tagline 17px), more breathing room, sharper shadows.
- **Phone optimized:** `viewport-fit=cover`, `100dvh`, safe-area insets, `touch-action: manipulation`, hover-less adaptations, bottom HUD, larger drag zones that glow green, no horizontal scroll.
- **One-tap sharing:** New **Share Link** button (Web Share API + clipboard fallback) + PWA `manifest.json` so the game can be **installed to home screen** and shared via any link.
- **Instant link deployment:** `package.json` + `netlify.toml` + `vercel.json` + GitHub Pages workflow included — push and get a public URL in 1 minute.

## Play

Open `index.html` in any modern browser (Chrome/Edge/Firefox/Safari). No build step required.
- **Start Screen:** Cozy house illustration → tap a glowing window to choose a room. Share button copies the link.
- **Difficulty:** Easy (45s / 3 items) · Medium (60s / 6) · Hard (80s / 9).
- **Rooms (sequential unlock):** Level 1 Garage → 2 Garden → 3 Living Room → 4 Kitchen → 5 Bedroom → 6 Bathroom (1F/2F/3F).
- Drag (or touch-drag) items to highlighted compartments. Correct = soft glow + `+1` + chime. Wrong = shake + soft error + item returns with spring.
- **Tip on phone:** Drag with your thumb — compartments outline in green when you hover over them.

## 📱 Accessible Through a Link — 3 Easiest Ways

Pick ONE — all give you a public URL you can open on any phone/laptop and share.

### Option A — Instant Share From Your Computer (30 seconds, no account)
```bash
# in this folder
npm install
npm start
# then in another terminal:
npx localtunnel --port 3000
# → you get https://xxxx.loca.lt — open on phone, share with anyone
# alternative: npx serve . -l 3000 then ngrok http 3000
```

### Option B — Netlify Drop (no install, 1 minute)
1. Go to https://app.netlify.com/drop
2. Drag the entire `FINAL Draft Game` folder onto the page
3. Get `https://your-name-xxx.netlify.app` — share it. Auto HTTPS, auto responsive.

### Option C — GitHub Pages (free, permanent link) ✅ LIVE
**Your permanent link:**
> **https://ajaninebernadeth9-cmyk.github.io/house-organizer/**

Set up once:
```bash
git init
git add .
git commit -m "feat: mobile-ready v2.1"
git branch -M main
git remote add origin https://github.com/ajaninebernadeth9-cmyk/house-organizer.git
git push -u origin main
# then: GitHub → Settings → Pages → Source: GitHub Actions (done)
# workflow file auto-enables Pages: .github/workflows/deploy.yml
# every future git push → auto-redeploys to the same link
```

**Vercel alternative:** `npx vercel --prod` in this folder (config already in `vercel.json`).

### Option D — VS Code Live Server (local network)
VS Code → right-click `index.html` → **Open with Live Server** → copy the `http://127.0.0.1:5500` link → on same Wi-Fi open `http://YOUR_LAPTOP_IP:5500` on phone.

> PWA: On phone, open the link → browser menu → **Add to Home Screen** / **Install App**. Works offline after first load (manifest.json included).

## Development Tools
- **Stack:** HTML5 + CSS3 + Vanilla JavaScript (no framework, instant load, runs anywhere).
- **Code Editor:** VS Code — open folder `FINAL Draft Game`, install `ritwickdey.LiveServer`.
- **Graphics:** Photographic backgrounds + flat-shaded SVG icons with 3–5 stop gradients. Each palette matches its compartment.
- **Audio:** Web Audio API — procedural blips/chords, toggled via HUD.
- **Responsive:** Mobile-first CSS with `clamp()`, `dvh`, `env(safe-area-inset-*)`, `@media (hover:none)`.

## Design System — Larger & Cleaner
- **Palette:** Warm creams (#FFFBF7), browns (#C9A86D), sage (#7EA862), amber (#E8A84C), danger (#D9645A). Tested for contrast.
- **Typography:** `Baloo 2` 500–800, labels 10–11px uppercase, score 20px, titles clamp 34–52px.
- **Shapes:** 26px cards, 50px pills, 14px compartments, 86px items (72px icons) with drop-shadow 6–18px.
- **Motion:** spring `cubic-bezier(.34,1.56,.64,1)`, shake 0.32s, pop 0.34s, confetti 1.6–3.2s.

## File Map
- `index.html` — House SVG + 6 windows, HUD, overlays, Share button, PWA meta. `style.css?v=31`, `game.js?v=31`.
- `style.css` — Design system + responsive breakpoints (360/480/600/768/1024/1400). Larger items/slots/buttons throughout.
- `game.js` — Item pool, **responsive item sizing** (`getResponsiveItemSize()`), pointer drag with clamping, categories/rooms/star calc/audio.
- `manifest.json` — PWA manifest (standalone, theme #7EA862, 192/512 icons).
- `package.json` — `npm start` (serve) + `npm run tunnel` (localtunnel public link).
- `netlify.toml` / `vercel.json` — zero-config deployment headers & caching.
- `.github/workflows/deploy.yml` — GitHub Pages auto-deploy.
- `assets/` — 6 room photos (bathroom, bedroom, garage, garden, kitchen, living_room).

## Customization
- Add a room: extend `ROOMS` + `ROOM_LAYOUTS` + `CATEGORIES` + add `.room--myroom` in `style.css`.
- Tune difficulty: edit `DIFFICULTIES` in `game.js`.
- Change sizes: edit `getResponsiveItemSize()` and CSS `.item`/`.slot` rules.

## Testing Checklist (phone + laptop)
- [ ] Open link on phone — all items large and not overlapping? 
- [ ] Drag with thumb — compartments glow green?
- [ ] Rotate phone — layout adapts without scroll?
- [ ] Tap Share Link — copies URL / opens share sheet?
- [ ] Laptop 1366px and 1920px — house and items look crisp and large?
- [ ] Install to home screen — icon shows "A" on green?

---
Built for a satisfying, tactile organization feel — like a premium mobile puzzle, instantly shareable via link.

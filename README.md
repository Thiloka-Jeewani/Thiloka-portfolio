# Thiloka Kulathunga — Portfolio

A responsive HTML, CSS and vanilla JavaScript portfolio for software engineering and AI/ML internships. No build step or runtime dependencies.

## Run locally

From this repository directory:

```powershell
python -m http.server 8080 --bind 127.0.0.1 --directory thiloka-portfolio
```

Open http://127.0.0.1:8080. Opening `thiloka-portfolio/index.html` directly also works; a local server is recommended for testing downloads and network requests.

## Project catalog

**New:** Pac-Man Search Algorithms (collaborative Intelligent Agents coursework); Sri Lanka Bus Tracker; Smart Solar Installation & Grid Compliance (collaborative team project linked from Thiloka’s GitHub profile).

**Preserved:** AI-Powered Travel Planning System, Fresh Wash Laundry Management System, LuxStay Hotel Booking System (HotelRio), Vehicle Rental Mobile Application (DriveMate), MOVIE-SENTIBOT, Smart Greenhouse System.

**Preserved team achievements:** NeuroForge — Intelligent Document Assistant; ShareBite LK. Their original team roles, event descriptions and source links remain in the Hackathons section. All five certificates, education, personal details and original resume remain available.

See [PROJECT_AUDIT.md](PROJECT_AUDIT.md) for repository evidence, factual corrections, excluded candidates and image provenance. No new accuracy, impact or production-readiness claims were introduced.

## Design and behavior

- Dark navy and optional persisted light theme, restrained blue/violet/cyan accents.
- Responsive project cards, category filters, technology badges and native expandable technical details.
- Genuine repository screenshots, local WebP previews, and a clearly labeled graphic when no screenshot is available.
- Sticky glass navigation, active-section indicator, mobile menu with Escape/outside-click dismissal.
- Keyboard focus styles, skip link, accessible filter state/count announcements, keyboard-operated profile card.
- Reduced-motion support, including a static role label when requested.
- Categorized skills, education timeline, certificate previews and email/social/resume links.
- Search/social metadata and a local SVG favicon.

## Edit projects

Edit the `projects` array in `thiloka-portfolio/projects.js`. Each object contains:

```javascript
{
  id: 'unique-id',
  title: 'Project name',
  categories: ['Full-Stack', 'Web Development'],
  stack: ['Actual', 'Technologies'],
  description: 'Concise, verified purpose.',
  features: ['Verified technical feature'],
  github: 'https://github.com/owner/exact-repository',
  image: 'assets/projects/preview.webp', // null uses a labeled project graphic
  contribution: 'Documented personal contribution, or null',
  demo: 'https://verified-demo.example' // optional; verify before adding
}
```

Supported categories: `AI / Machine Learning`, `Full-Stack`, `Web Development`, `Mobile / IoT`. Only categories used in the catalog appear. `script.js` renders data with DOM text APIs rather than interpolated HTML. Keep IDs and repository links unique. Place image files under `assets/projects/`, optimize previews, and record their source in the audit.

## Files

- `thiloka-portfolio/index.html`: existing content, semantic navigation, gallery containers and metadata.
- `thiloka-portfolio/style.css`: existing styles plus responsive visual refinements.
- `thiloka-portfolio/projects.js`: nine-project catalog.
- `thiloka-portfolio/script.js`: filters, accessible cards, theme, navigation and role rotation.
- `thiloka-portfolio/assets/`: original assets retained; optimized WebP previews and favicon added.
- `netlify.toml`: static publish directory.
- `PROJECT_AUDIT.md`: evidence and limitations.
- `PROJECTS_ORIGINAL.html`: original project markup retained as a factual-change reference, not loaded by the site.
- `TEST_RESULTS.md`: browser validation results.
- `tests/portfolio.cjs`: optional browser regression checks.
- `docs/`: desktop/mobile previews and final browser report.

## Verification

Test at 320, 375, 430, 768, 1024 and 1440 pixels. Check all category buttons, expand technical details, use mobile navigation and Escape, download the CV, open certificates, switch themes and reload, and emulate reduced motion. The gallery should have nine unique cards under All. Confirm images load and document width equals viewport width. Check browser DevTools for errors.

Optional automated regression check (Node.js and Microsoft Edge required):

```powershell
npm install --no-save --prefix .qa playwright
node tests/portfolio.cjs
```

Keep the local server running on port 8080. This tooling is for development only; no packages are shipped with the website.

## Deploy to Netlify

1. Push this repository directory to GitHub and import it in Netlify.
2. Leave the build command empty and the base directory unset.
3. Set the publish directory to `thiloka-portfolio`; the included `netlify.toml` supplies it automatically.
4. Deploy and check navigation, local assets, CV download and external links on the HTTPS preview.

For manual deployment, drag the **contents of the `thiloka-portfolio` folder** to Netlify Drop. If importing the parent downloads folder instead, set the base directory to `Thiloka-portfolio-main`. No SPA redirects or environment variables are required. This update has not been deployed.

Google Fonts is optional: system-font fallbacks keep the site usable if the font service is unavailable. The site makes no GitHub API requests at runtime.

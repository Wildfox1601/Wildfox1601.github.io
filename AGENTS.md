# Portfolio maintenance guide

This repository is Tarun Murali’s systems, networking, and cloud engineering portfolio. GitHub Pages serves the repository at `tarun-murali.me`. Read `context.md` when it is available for design rationale and project history. Use the current source files to confirm routes, behaviors, and links.

## Design and scope

- Preserve the current look and responsive layout during content updates. Keep changes scoped to the requested content or behavior and preserve existing work in the checkout.
- Reuse the existing dark slate surfaces, sky blue and cyan accents, and emerald status indicators. Use the design tokens in `style.css` and the Tailwind utilities already used by the page.
- Keep Plus Jakarta Sans for interface text and JetBrains Mono for terminal text, technical labels, and telemetry. Follow existing card, badge, icon, spacing, focus, and hover patterns. Use the existing Font Awesome icon set.
- Keep the shared navigation, mobile drawer, footer, and network status indicators consistent across the static pages. Preserve the homepage’s readable bio, terminal commands, and profile photo layout during unrelated edits.

## How the site works

- Keep the site build-free with static HTML, `style.css`, native JavaScript modules, and the existing CDN assets. Serve the repository root so root-relative paths such as `/style.css`, `/js/main.js`, and `/resources/` resolve correctly.
- Each page loads `/js/main.js` as an ES module. After `DOMContentLoaded`, it initializes the router, the mobile drawer, the article reader modal, and the feature modules. Page modules use page-specific element IDs to attach behavior and skip pages without their controls. Keep HTML IDs and their module references in sync.
- `js/data.js` holds project cards, writeups, blog posts, homelab node details, and terminal command responses. `js/pages/` renders the lists and handles page interactions. For content updates, edit the relevant data or HTML and reuse the existing renderers.
- The homepage bio and Social links are static HTML. `js/cli.js` renders responses from `cliCommands` in `js/data.js`. The homepage and Social page use `resources/profile_photo.jpg` for the profile photo.
- The Contact form is a client-side demo that shows a toast and resets the inputs. Its latency widget displays simulated RTT values. The email links open the visitor’s mail client.

## Routing

- GitHub Pages serves physical files. `/` maps to `index.html`, and each subpage has its own directory and `index.html`, such as `projects/index.html` for `/projects/`. The other content routes are `/writeups`, `/blog`, `/homelab`, `/resume`, `/social`, and `/contact`.
- `CNAME` records the custom domain, and GitHub Pages serves `404.html` for missing pages. Keep physical routes and root-relative links working so bookmarks, direct visits, and refreshes work on the deployed site.
- `getNormalizedRoute()` in `js/router.js` converts navigation paths to keys such as `/social`. It handles full URLs, trailing slashes, `index.html` or `index.htm`, and a leading `/<repo>.github.io` path prefix. The router uses these keys for both route status lookups and the active navigation state.
- To add a route, create its directory and `index.html` using an existing page as a template. Add its desktop and mobile navigation links to the static pages if the route should appear in shared navigation. Add an explicit entry in `pageStatusConfig` if you want to manage its availability there. Unlisted routes use the default `active` state.

## Maintenance and under construction

`pageStatusConfig` in `js/router.js` controls each route. Change the desired route’s entry, such as `'/homelab': 'maintenance'`. Keep the two notice routes, `/maintenance` and `/construction`, active. Set the original route back to `active` when it is ready to reopen.

| State | Visitor experience |
| --- | --- |
| `active` | Opens the requested page. |
| `maintenance` | Shows `maintenance/index.html` for a temporary service window or upgrade. |
| `construction` | Shows `construction/index.html` while a section is being built or updated. |

- On a direct visit, `checkRouteStatus()` runs when the router module loads and again at initialization. It uses `window.location.replace()` to open the notice. The router also intercepts ordinary same-tab link clicks to flagged routes.
- Both redirect paths pass the original route in an encoded `from` query parameter, as in `/maintenance/?from=%2Fhomelab`. `js/pages/maintenance.js` decodes it with `URLSearchParams` and escapes it before displaying it. A visit to either notice page without `from` shows its generic message.
- The 503 and 501 badges, maintenance estimate, and construction progress are static page copy. Route changes are manual, and redirection takes place in the browser after the static page loads.

## Projects, résumé, and social links

- Add project cards to `projectsData` in `js/data.js`. The default Projects grid follows array order. To put a project first, place it first in the array.
- Give each project a unique `id`, a concise description grounded in the repository, relevant tags, and a direct GitHub repository URL. Use an existing category from `projects/index.html` (`networking`, `automation`, `security`, or `linux`) so the existing filters find the card. Preserve the existing card template in `js/pages/projects.js` for content updates.
- Keep the structured résumé in `resume/index.html` in sync with the current résumé PDF in `resources/`. Download and View Full PDF should point to the same current file. The Print button in `js/pages/resume.js` prints the webpage.
- Keep Tarun’s phone number exclusively in the résumé PDF. Omit it from page text, `tel:` links, metadata, comments, and JavaScript, including the homepage terminal’s `contact` response. Use the supplied email and profile links for public contact information.
- Edit profile links in `social/index.html`. Preserve the existing card layout and use `target="_blank" rel="noopener"` for external profiles. The two Instagram cards are placeholders until profile URLs are added as `href` values.

## Local verification

- Run `python3 -m http.server 8080` from the repository root to preview locally. Open `http://localhost:8080/` and visit the changed routes directly. Check the affected links, interactions, and layout at desktop and mobile widths.
- For project changes, verify the default card order, repository links, category filters, and search. For résumé changes, verify the on-page content against the PDF, the PDF links, the print view, and phone number placement.
- For route or notice changes, check direct visits and navigation clicks. Verify the expected notice URL, the original route in the notice, and normal navigation once the route is set back to `active`.
- Review `git diff` and run `git diff --check` before handing off. Keep changes to GitHub Pages deployment and the custom domain within the scope of the request.

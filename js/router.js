/**
 * Tarun Murali - Network Engineer Portfolio
 * Router & Maintenance / Construction State Manager
 */

/**
 * Page Status Configuration
 * Options per route: 'active' | 'maintenance' | 'construction'
 * Set any route to 'maintenance' or 'construction' to divert visitors when working on that section.
 */
export const pageStatusConfig = {
    '/': 'active',
    '/projects': 'active',
    '/writeups': 'construction',
    '/blog': 'construction',
    '/resume': 'active',
    '/social': 'active',
    '/homelab': 'maintenance',
    '/contact': 'active',
    '/maintenance': 'active',
    '/construction': 'active'
};

/**
 * Normalizes any URL path into a standard route key:
 * e.g. "/social", "/social/", "/social/index.html", "/repo/social/" -> "/social"
 */
export function getNormalizedRoute(pathname) {
    let path = pathname;
    if (!path && typeof window !== 'undefined') {
        path = window.location.pathname;
    }
    if (!path) path = '/';
    path = path.toLowerCase();

    // Strip hostname if a full URL was passed
    try {
        if (path.startsWith('http://') || path.startsWith('https://')) {
            path = new URL(path).pathname.toLowerCase();
        }
    } catch (e) {}

    // Remove GitHub Pages repository name prefix (e.g. /wildfox1601.github.io/ or similar)
    const repoMatch = path.match(/^\/[^\/]+\.github\.io/);
    if (repoMatch) {
        path = path.substring(repoMatch[0].length);
    }

    // Strip index.html or index.htm
    if (path.endsWith('/index.html') || path.endsWith('/index.htm')) {
        path = path.substring(0, path.lastIndexOf('/index.htm'));
    } else if (path === '/index.html' || path === '/index.htm' || path === 'index.html') {
        path = '/';
    }

    // Strip trailing slash
    if (path.endsWith('/') && path.length > 1) {
        path = path.slice(0, -1);
    }

    if (!path || path === '') {
        path = '/';
    }

    return path;
}

/**
 * Gets base path prefix (e.g. "" on custom domain, or "/repo-name" if hosted on a subpath)
 */
export function getBasePath() {
    if (typeof window === 'undefined') return '';
    const path = window.location.pathname.toLowerCase();
    const repoMatch = path.match(/^\/[^\/]+\.github\.io/);
    return repoMatch ? repoMatch[0] : '';
}

/**
 * Enforces maintenance or construction redirection if the route is flagged
 */
export function checkRouteStatus() {
    if (typeof window === 'undefined') return false;

    const currentRoute = getNormalizedRoute();
    const status = pageStatusConfig[currentRoute] || 'active';
    const basePath = getBasePath();

    if (status === 'maintenance' && currentRoute !== '/maintenance') {
        window.location.replace(`${basePath}/maintenance/?from=${encodeURIComponent(currentRoute)}`);
        return true;
    } else if (status === 'construction' && currentRoute !== '/construction') {
        window.location.replace(`${basePath}/construction/?from=${encodeURIComponent(currentRoute)}`);
        return true;
    }
    return false;
}

// Run check immediately on module load if in browser
if (typeof window !== 'undefined') {
    checkRouteStatus();
}

export function initRouter() {
    if (typeof window === 'undefined') return;

    const currentRoute = getNormalizedRoute();
    const basePath = getBasePath();

    // Check again when DOM is initialized
    if (checkRouteStatus()) return;

    // Intercept clicks on links that are configured for maintenance or construction
    document.body.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if (!link) return;

        const href = link.getAttribute('href');
        if (!href || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#') || link.target === '_blank') {
            return;
        }

        const targetRoute = getNormalizedRoute(href);
        const targetStatus = pageStatusConfig[targetRoute];

        if (targetStatus === 'maintenance' && targetRoute !== '/maintenance') {
            e.preventDefault();
            window.location.href = `${basePath}/maintenance/?from=${encodeURIComponent(targetRoute)}`;
        } else if (targetStatus === 'construction' && targetRoute !== '/construction') {
            e.preventDefault();
            window.location.href = `${basePath}/construction/?from=${encodeURIComponent(targetRoute)}`;
        }
    });

    // Update active nav link based on current path
    document.querySelectorAll('.nav-item').forEach(link => {
        const href = link.getAttribute('href');
        if (!href || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#')) return;
        
        const linkRoute = getNormalizedRoute(href);
        if (linkRoute === currentRoute) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

/**
 * Tarun Murali - Network Engineer Portfolio
 * Router & Maintenance / Construction State Manager
 */

// Route mapping configuration
const routeMap = {
    '/': 'page-home',
    '/projects': 'page-projects',
    '/writeups': 'page-writeups',
    '/blog': 'page-blog',
    '/resume': 'page-resume',
    '/social': 'page-social',
    '/homelab': 'page-homelab',
    '/contact': 'page-contact',
    '/maintenance': 'page-maintenance',
    '/construction': 'page-construction'
};

/**
 * Page Status Configuration
 * Options per route: 'active' | 'maintenance' | 'construction'
 * Set any route to 'maintenance' or 'construction' to divert visitors when working on that section.
 */
export const pageStatusConfig = {
    '/': 'active',
    '/projects': 'active',
    '/writeups': 'active',
    '/blog': 'maintenance',
    '/resume': 'active',
    '/social': 'active',
    '/homelab': 'construction',
    '/contact': 'active',
    '/maintenance': 'active',
    '/construction': 'active'
};

export function navigateTo(path, pushState = true) {
    let targetPath = path.toLowerCase();
    if (targetPath.endsWith('/') && targetPath.length > 1) {
        targetPath = targetPath.slice(0, -1);
    }
    
    // Determine status of requested route
    const status = pageStatusConfig[targetPath] || 'active';
    let targetPageId = routeMap[targetPath] || 'page-home';

    // Redirect to maintenance or construction view if configured
    if (status === 'maintenance' && targetPath !== '/maintenance') {
        targetPageId = 'page-maintenance';
        updateStatusNotice(targetPath, 'maintenance');
    } else if (status === 'construction' && targetPath !== '/construction') {
        targetPageId = 'page-construction';
        updateStatusNotice(targetPath, 'construction');
    }

    // Hide all pages, show target page
    document.querySelectorAll('.page-view').forEach(page => {
        page.classList.remove('active');
    });
    const activePage = document.getElementById(targetPageId);
    if (activePage) {
        activePage.classList.add('active');
    }

    // Update active navbar link
    document.querySelectorAll('.nav-item').forEach(link => {
        const linkRoute = link.getAttribute('data-route');
        if (linkRoute === targetPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Close mobile drawer
    const mobileDrawer = document.getElementById('mobile-nav-drawer');
    if (mobileDrawer) {
        mobileDrawer.classList.remove('open');
    }

    // Update URL history
    if (pushState && window.location.pathname !== targetPath) {
        history.pushState({ path: targetPath }, '', targetPath);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateStatusNotice(targetPath, type) {
    if (type === 'maintenance') {
        const titleEl = document.getElementById('maintenance-target-name');
        if (titleEl) {
            titleEl.textContent = `The ${targetPath} section is currently undergoing scheduled system maintenance.`;
        }
    } else if (type === 'construction') {
        const titleEl = document.getElementById('construction-target-name');
        if (titleEl) {
            titleEl.textContent = `The ${targetPath} section is currently under construction and deployment.`;
        }
    }
}

export function initRouter() {
    // Delegated click event for [data-route] links
    document.body.addEventListener('click', (e) => {
        const routeLink = e.target.closest('[data-route]');
        if (routeLink) {
            e.preventDefault();
            const path = routeLink.getAttribute('data-route');
            navigateTo(path);
        }
    });

    // Handle browser back/forward buttons
    window.addEventListener('popstate', () => {
        navigateTo(window.location.pathname, false);
    });

    // Initial routing on page load
    navigateTo(window.location.pathname, false);
}

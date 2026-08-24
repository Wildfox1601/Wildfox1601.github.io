/**
 * Maintenance & Under Construction Page Modules
 */

export function initMaintenancePage() {
    const params = new URLSearchParams(window.location.search);
    const from = params.get('from');
    if (from) {
        const noticeEl = document.getElementById('maintenance-target-name');
        if (noticeEl) {
            noticeEl.innerHTML = `The <strong class="text-cyan-400 font-mono">${escapeHTML(from)}</strong> section is currently undergoing scheduled network maintenance and upgrades.`;
        }
    }
}

export function initConstructionPage() {
    const params = new URLSearchParams(window.location.search);
    const from = params.get('from');
    if (from) {
        const noticeEl = document.getElementById('construction-target-name');
        if (noticeEl) {
            noticeEl.innerHTML = `The <strong class="text-cyan-400 font-mono">${escapeHTML(from)}</strong> section is currently under active construction and deployment.`;
        }
    }
}

function escapeHTML(str) {
    if (!str) return '';
    return str.replace(/[&<>'"]/g, 
        tag => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
        }[tag] || tag)
    );
}

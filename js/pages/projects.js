/**
 * Projects Page Module
 */

import { projectsData } from '../data.js';
import { escapeHTML } from '../toast.js';

export function initProjectsPage() {
    const container = document.getElementById('projects-container');
    const projectFilterGroup = document.getElementById('project-filter-group');
    const projectSearchInput = document.getElementById('project-search-input');

    if (!container) return;

    function renderProjects(filter = 'all', searchQuery = '') {
        const filtered = projectsData.filter(p => {
            const matchesFilter = filter === 'all' || p.category === filter;
            const matchesSearch = searchQuery === '' || 
                p.title.toLowerCase().includes(searchQuery) ||
                p.description.toLowerCase().includes(searchQuery) ||
                p.tags.some(t => t.toLowerCase().includes(searchQuery));
            return matchesFilter && matchesSearch;
        });

        if (filtered.length === 0) {
            container.innerHTML = `<div class="col-span-full text-center py-12 text-slate-400 font-mono">No matching projects found.</div>`;
            return;
        }

        container.innerHTML = filtered.map(p => `
            <div class="net-card net-card-interactive flex flex-col justify-between">
                <div>
                    <div class="flex justify-between items-start mb-3">
                        <h3 class="text-lg font-bold text-white">${escapeHTML(p.title)}</h3>
                        <span class="text-xs font-mono text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20">${p.category.toUpperCase()}</span>
                    </div>
                    <p class="text-slate-300 text-sm mb-4 leading-relaxed">${escapeHTML(p.description)}</p>
                </div>
                <div>
                    <div class="flex flex-wrap gap-1.5 mb-4">
                        ${p.tags.map(t => `<span class="text-[11px] font-mono text-cyan-300 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">${escapeHTML(t)}</span>`).join('')}
                    </div>
                    <a href="${p.github}" target="_blank" rel="noopener" class="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:underline">
                        <i class="fab fa-github"></i> View Repository <i class="fas fa-external-link-alt text-[10px]"></i>
                    </a>
                </div>
            </div>
        `).join('');
    }

    renderProjects();

    if (projectFilterGroup) {
        projectFilterGroup.addEventListener('click', (e) => {
            if (e.target.classList.contains('filter-btn')) {
                projectFilterGroup.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                const filter = e.target.getAttribute('data-filter');
                const query = projectSearchInput ? projectSearchInput.value.toLowerCase().trim() : '';
                renderProjects(filter, query);
            }
        });
    }

    if (projectSearchInput) {
        projectSearchInput.addEventListener('input', (e) => {
            const activeBtn = projectFilterGroup ? projectFilterGroup.querySelector('.filter-btn.active') : null;
            const filter = activeBtn ? activeBtn.getAttribute('data-filter') : 'all';
            renderProjects(filter, e.target.value.toLowerCase().trim());
        });
    }
}

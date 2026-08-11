/**
 * Writeups Page Module
 */

import { writeupsData } from '../data.js';
import { escapeHTML } from '../toast.js';

export function initWriteupsPage(openReaderModal) {
    const container = document.getElementById('writeups-container');
    const writeupFilterGroup = document.getElementById('writeup-filter-group');
    const writeupSearchInput = document.getElementById('writeup-search-input');

    if (!container) return;

    function renderWriteups(filter = 'all', searchQuery = '') {
        const filtered = writeupsData.filter(w => {
            const matchesFilter = filter === 'all' || w.category === filter;
            const matchesSearch = searchQuery === '' || 
                w.title.toLowerCase().includes(searchQuery) ||
                w.summary.toLowerCase().includes(searchQuery);
            return matchesFilter && matchesSearch;
        });

        if (filtered.length === 0) {
            container.innerHTML = `<div class="col-span-full text-center py-12 text-slate-400 font-mono">No writeups found matching query.</div>`;
            return;
        }

        container.innerHTML = filtered.map(w => `
            <div class="net-card net-card-interactive flex flex-col justify-between">
                <div>
                    <div class="flex justify-between items-center mb-2">
                        <span class="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">${w.difficulty}</span>
                        <span class="text-xs font-mono text-slate-400">${w.date}</span>
                    </div>
                    <h3 class="text-lg font-bold text-white mb-2">${escapeHTML(w.title)}</h3>
                    <p class="text-slate-300 text-sm mb-4 leading-relaxed">${escapeHTML(w.summary)}</p>
                </div>
                <button class="open-writeup-btn text-left text-xs font-mono text-sky-400 hover:underline flex items-center gap-1.5" data-id="${w.id}">
                    <i class="fas fa-book-open"></i> Read Full Write-up <i class="fas fa-arrow-right text-[10px]"></i>
                </button>
            </div>
        `).join('');
    }

    renderWriteups();

    if (writeupFilterGroup) {
        writeupFilterGroup.addEventListener('click', (e) => {
            if (e.target.classList.contains('filter-btn')) {
                writeupFilterGroup.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                const filter = e.target.getAttribute('data-filter');
                const query = writeupSearchInput ? writeupSearchInput.value.toLowerCase().trim() : '';
                renderWriteups(filter, query);
            }
        });
    }

    if (writeupSearchInput) {
        writeupSearchInput.addEventListener('input', (e) => {
            const activeBtn = writeupFilterGroup ? writeupFilterGroup.querySelector('.filter-btn.active') : null;
            const filter = activeBtn ? activeBtn.getAttribute('data-filter') : 'all';
            renderWriteups(filter, e.target.value.toLowerCase().trim());
        });
    }

    container.addEventListener('click', (e) => {
        const btn = e.target.closest('.open-writeup-btn');
        if (btn) {
            const id = btn.getAttribute('data-id');
            const item = writeupsData.find(w => w.id === id);
            if (item && openReaderModal) {
                openReaderModal(item.title, item.content);
            }
        }
    });
}

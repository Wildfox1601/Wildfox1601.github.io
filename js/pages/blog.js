/**
 * Blog Page Module
 */

import { blogData } from '../data.js';
import { escapeHTML } from '../toast.js';

export function initBlogPage(openReaderModal) {
    const container = document.getElementById('blog-container');
    const blogSearchInput = document.getElementById('blog-search-input');

    if (!container) return;

    function renderBlog(searchQuery = '') {
        const filtered = blogData.filter(b => {
            return searchQuery === '' || 
                b.title.toLowerCase().includes(searchQuery) ||
                b.summary.toLowerCase().includes(searchQuery);
        });

        if (filtered.length === 0) {
            container.innerHTML = `<div class="col-span-full text-center py-12 text-slate-400 font-mono">No articles found matching search query.</div>`;
            return;
        }

        container.innerHTML = filtered.map(b => `
            <div class="net-card net-card-interactive flex flex-col justify-between">
                <div>
                    <div class="flex justify-between items-center mb-2 text-xs font-mono text-slate-400">
                        <span><i class="far fa-calendar me-1"></i>${b.date}</span>
                        <span><i class="far fa-clock me-1"></i>${b.readTime}</span>
                    </div>
                    <h3 class="text-lg font-bold text-white mb-2">${escapeHTML(b.title)}</h3>
                    <p class="text-slate-300 text-sm mb-4 leading-relaxed">${escapeHTML(b.summary)}</p>
                </div>
                <button class="open-blog-btn text-left text-xs font-mono text-cyan-400 hover:underline flex items-center gap-1.5" data-id="${b.id}">
                    <i class="fas fa-newspaper"></i> Read Article <i class="fas fa-arrow-right text-[10px]"></i>
                </button>
            </div>
        `).join('');
    }

    renderBlog();

    if (blogSearchInput) {
        blogSearchInput.addEventListener('input', (e) => {
            renderBlog(e.target.value.toLowerCase().trim());
        });
    }

    container.addEventListener('click', (e) => {
        const btn = e.target.closest('.open-blog-btn');
        if (btn) {
            const id = btn.getAttribute('data-id');
            const item = blogData.find(b => b.id === id);
            if (item && openReaderModal) {
                openReaderModal(item.title, item.content);
            }
        }
    });
}

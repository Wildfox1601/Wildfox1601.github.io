/**
 * Homelab Topology Page Module
 */

import { nodeDetailsMap } from '../data.js';
import { escapeHTML } from '../toast.js';

export function initHomelabPage() {
    const nodeModal = document.getElementById('node-modal');
    const nodeModalTitle = document.getElementById('node-modal-title');
    const nodeModalIcon = document.getElementById('node-modal-icon');
    const nodeModalBody = document.getElementById('node-modal-body');
    const nodeModalClose = document.getElementById('node-modal-close');

    document.querySelectorAll('.node-card').forEach(card => {
        card.addEventListener('click', () => {
            const nodeKey = card.getAttribute('data-node');
            const data = nodeDetailsMap[nodeKey];
            if (!data || !nodeModal) return;

            nodeModalTitle.textContent = data.title;
            nodeModalIcon.innerHTML = `<i class="${data.icon}"></i>`;
            
            nodeModalBody.innerHTML = `
                <div class="bg-slate-900/80 p-3 rounded-lg border border-slate-800 space-y-2 font-mono text-xs">
                    <div><span class="text-slate-400">MANAGEMENT IP:</span> <strong class="text-cyan-400">${data.ip}</strong></div>
                    <div><span class="text-slate-400">OPERATING SYSTEM:</span> <strong class="text-white">${data.os}</strong></div>
                    <div><span class="text-slate-400">PRIMARY ROLE:</span> <span class="text-slate-200">${data.role}</span></div>
                    <div><span class="text-slate-400">HARDWARE SPECS:</span> <span class="text-slate-300">${data.specs}</span></div>
                </div>
                <div>
                    <h4 class="text-xs font-mono text-emerald-400 font-bold mb-2">RUNNING SERVICES & PROTOCOLS:</h4>
                    <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                        ${data.services.map(s => `<li class="bg-slate-900 p-2 rounded border border-slate-800 text-slate-300 flex items-center gap-2"><i class="fas fa-check text-emerald-400 text-[10px]"></i> ${escapeHTML(s)}</li>`).join('')}
                    </ul>
                </div>
            `;

            nodeModal.classList.add('open');
        });
    });

    if (nodeModalClose) {
        nodeModalClose.addEventListener('click', () => {
            nodeModal.classList.remove('open');
        });
    }
    if (nodeModal) {
        nodeModal.addEventListener('click', (e) => {
            if (e.target === nodeModal) {
                nodeModal.classList.remove('open');
            }
        });
    }
}

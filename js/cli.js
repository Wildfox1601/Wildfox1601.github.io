/**
 * Tarun Murali - Network Engineer Portfolio
 * Interactive Terminal / CLI Module
 */

import { cliCommands } from './data.js';
import { escapeHTML } from './toast.js';

export function initCLI() {
    const cliForm = document.getElementById('terminal-cli-form');
    const cliInput = document.getElementById('terminal-cli-input');
    const cliHistory = document.getElementById('terminal-output-history');

    if (!cliForm || !cliInput || !cliHistory) return;

    cliForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const cmd = cliInput.value.trim();
        if (!cmd) return;

        // Render command prompt line
        const cmdEntry = document.createElement('div');
        cmdEntry.className = 'font-mono text-xs';
        cmdEntry.innerHTML = `<span class="text-emerald-400">tarun@net-core:~$</span> <span class="text-white">${escapeHTML(cmd)}</span>`;
        cliHistory.appendChild(cmdEntry);

        // Process command logic
        const lowerCmd = cmd.toLowerCase();
        if (lowerCmd === 'clear') {
            cliHistory.innerHTML = '';
        } else if (cliCommands[lowerCmd]) {
            const response = document.createElement('pre');
            response.className = 'text-sky-300 font-mono text-xs whitespace-pre-wrap pl-2 border-l border-sky-500/40 my-1';
            response.textContent = cliCommands[lowerCmd];
            cliHistory.appendChild(response);
        } else {
            const errorResp = document.createElement('div');
            errorResp.className = 'text-red-400 font-mono text-xs pl-2 my-1';
            errorResp.textContent = `bash: ${cmd}: command not found. Type 'help' for available commands.`;
            cliHistory.appendChild(errorResp);
        }

        cliInput.value = '';
        cliHistory.scrollTop = cliHistory.scrollHeight;
    });
}

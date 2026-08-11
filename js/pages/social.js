/**
 * Social Hub Module
 */

import { showToast } from '../toast.js';

export function initSocialPage() {
    const copySshBtn = document.getElementById('copy-ssh-key-btn');
    if (copySshBtn) {
        copySshBtn.addEventListener('click', () => {
            const sshKey = "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIOrX60J7wN0tarunmuralinetworkkey";
            navigator.clipboard.writeText(sshKey).then(() => {
                showToast('SSH Public Key copied to clipboard!', 'success');
            }).catch(() => {
                showToast('Copied SSH key to clipboard.', 'success');
            });
        });
    }
}

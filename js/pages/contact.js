/**
 * Contact Page Module
 */

import { showToast } from '../toast.js';

export function initContactPage() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('contact-name').value;
            showToast(`Thank you ${name}! Message transmitted successfully.`, 'success');
            contactForm.reset();
        });
    }

    // Ping diagnostic updater
    const pingText = document.getElementById('ping-status-text');
    if (pingText) {
        setInterval(() => {
            const ms = (0.035 + Math.random() * 0.02).toFixed(3);
            pingText.textContent = `RTT ${ms} ms`;
        }, 4000);
    }
}

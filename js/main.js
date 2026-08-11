/**
 * Tarun Murali - Network Engineer Portfolio
 * Master Application Entry Point
 */

import { initRouter, navigateTo } from './router.js';
import { initCLI } from './cli.js';
import { initProjectsPage } from './pages/projects.js';
import { initWriteupsPage } from './pages/writeups.js';
import { initBlogPage } from './pages/blog.js';
import { initResumePage } from './pages/resume.js';
import { initSocialPage } from './pages/social.js';
import { initHomelabPage } from './pages/homelab.js';
import { initContactPage } from './pages/contact.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Navigation Router & Maintenance Controller
    initRouter();

    // 2. Initialize Mobile Menu Drawer
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileNavDrawer = document.getElementById('mobile-nav-drawer');
    if (mobileMenuBtn && mobileNavDrawer) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileNavDrawer.classList.toggle('open');
        });
    }

    // 3. Initialize Modal Reader for Writeups & Blog
    const readerModal = document.getElementById('reader-modal');
    const readerModalTitle = document.getElementById('reader-modal-title');
    const readerModalBody = document.getElementById('reader-modal-body');
    const readerModalClose = document.getElementById('reader-modal-close');

    function openReaderModal(title, htmlContent) {
        if (!readerModal) return;
        readerModalTitle.textContent = title;
        readerModalBody.innerHTML = htmlContent;
        readerModal.classList.add('open');
    }

    if (readerModalClose) {
        readerModalClose.addEventListener('click', () => {
            readerModal.classList.remove('open');
        });
    }
    if (readerModal) {
        readerModal.addEventListener('click', (e) => {
            if (e.target === readerModal) {
                readerModal.classList.remove('open');
            }
        });
    }

    // 4. Initialize Feature Modules
    initCLI();
    initProjectsPage();
    initWriteupsPage(openReaderModal);
    initBlogPage(openReaderModal);
    initResumePage();
    initSocialPage();
    initHomelabPage();
    initContactPage();
});

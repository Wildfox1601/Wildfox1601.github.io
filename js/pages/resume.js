/**
 * Resume Page Module
 */

import { showToast } from '../toast.js';

export function initResumePage() {
    const printResumeBtn = document.getElementById('print-resume-btn');
    if (printResumeBtn) {
        printResumeBtn.addEventListener('click', () => {
            window.print();
        });
    }

    const downloadResumeBtn = document.getElementById('download-resume-btn');
    if (downloadResumeBtn) {
        downloadResumeBtn.addEventListener('click', () => {
            showToast('Generating Tarun_Murali_Resume.pdf download...', 'info');
            setTimeout(() => {
                showToast('Resume ready for download!', 'success');
            }, 800);
        });
    }
}

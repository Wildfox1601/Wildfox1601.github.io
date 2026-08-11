# 🌐 Tarun Murali - Network & Systems Engineer Portfolio

A modern, high-performance portfolio website built for an entry-level **Network Engineer**, **Linux SysAdmin**, and **Cybersecurity Enthusiast**. 

Designed with a clean infrastructure engineering aesthetic (dark slate palette, cyan/sky blue accents, and emerald status indicators), standard HTML5 History API client-side routing across 8 endpoints, and zero heavy framework dependencies.

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Build](https://img.shields.io/badge/Status-Operational-10b981.svg)
![Stack](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20ES6%20Modules-06b6d4.svg)

---

## ✨ Features

- **🌐 Network & Infrastructure Theme**: Sleek slate design (`#080c14`), typography tuned with *Plus Jakarta Sans* & *JetBrains Mono*, and live network interface status badge (`● ETH0 UP | 10 Gbps`).
- **💻 Dual-Layer About Me Terminal**: Displays a clear narrative bio paragraph at first glance, followed by an interactive Linux CLI prompt (`tarun@net-core:~$`) supporting commands like `help`, `cat skills.json`, `ping 8.8.8.8`, `show interfaces`, `uptime`, and `clear`.
- **🗺️ Interactive Homelab Topology**: Interactive network map featuring clickable nodes (OPNsense Firewall, L2/L3 Core Switch, Proxmox VE Node, TrueNAS, Pi-hole) with hardware spec inspector modals and a complete VLAN segmentation matrix.
- **📁 Projects, Writeups & Technical Blog**: Filterable and searchable showcases covering network automation, Cisco Packet Tracer OSPF labs, Wireshark PCAPs, and TryHackMe writeups with built-in modal article reader.
- **📄 Interactive Resume / CV**: Formatted structured resume detailing CCNA preparation, core skills, education, printable view, and PDF download trigger.
- **🚧 Route Maintenance & Construction System**: Built-in status fallback pages (`/under-maintenance` and `/under-construction`) with configurable route toggles in `js/router.js`.

---

## 📂 Project Structure

```
├── index.html                  # Core HTML container & ES6 module entry point
├── style.css                   # Custom styles, dark theme tokens & animations
├── README.md                   # Project documentation
└── js/
    ├── main.js                 # Master application entry point & module orchestrator
    ├── router.js               # History API SPA router & maintenance state manager
    ├── data.js                 # Data models (Projects, Writeups, Blog, Homelab nodes, CLI)
    ├── cli.js                  # About Me terminal & command parser
    ├── toast.js                # Toast notifications helper
    └── pages/
        ├── projects.js         # Projects grid & category filters
        ├── writeups.js         # CTF/Lab writeups & modal reader
        ├── blog.js             # Technical blog articles renderer
        ├── resume.js           # Resume print & PDF download triggers
        ├── social.js           # Social link hub & SSH public key copy
        ├── homelab.js          # Topology map & node inspector modal
        ├── contact.js          # Contact form & network ping diagnostic
        ├── maintenance.js      # Under maintenance page view
        └── construction.js     # Under construction page view
```

---

## 🚀 Quick Start (Local Development)

Because this website uses native ES6 JavaScript modules, it can be served using any simple HTTP server without build tools:

```bash
# 1. Clone the repository
git clone https://github.com/your-username/network-portfolio.git
cd network-portfolio

# 2. Start a local HTTP server (Python 3)
python3 -m http.server 8080

# 3. Open in your browser
# Navigate to http://localhost:8080/
```

Alternatively, you can use Node's `npx serve`:
```bash
npx serve .
```

---

## 🚧 How to Toggle Maintenance / Construction Mode

To put any specific page (e.g. `/homelab` or `/projects`) into maintenance or construction mode while editing, open [`js/router.js`](js/router.js) and update `pageStatusConfig`:

```javascript
export const pageStatusConfig = {
    '/': 'active',               // Options: 'active' | 'maintenance' | 'construction'
    '/projects': 'construction',  // Redirects /projects to under construction page
    '/homelab': 'maintenance',   // Redirects /homelab to scheduled maintenance page
    '/writeups': 'active',
    '/blog': 'active',
    '/resume': 'active',
    '/social': 'active',
    '/contact': 'active'
};
```

---

## 🌐 Deployment

### Deploying to GitHub Pages
1. Push the code to your GitHub repository.
2. In GitHub, navigate to **Settings** -> **Pages**.
3. Under **Build and deployment**, select **Deploy from a branch** and choose `main` / `/ (root)`.
4. Click **Save**. Your site will be live at `https://your-username.github.io/repository-name/`.

---

## 📬 Contact

- **Name**: Tarun Murali
- **Email**: [sudo.tarun@proton.me](mailto:sudo.tarun@proton.me)
- **Target Roles**: Entry-Level Network Engineer / Junior Network Security Engineer

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

/**
 * Tarun Murali - Network Engineer Portfolio
 * Data Models & Data Stores
 */

export const projectsData = [
    {
        id: 'linux-server-hardening',
        title: "Linux Server Monitoring & Hardening Lab",
        category: "linux",
        tags: ["Linux CLI", "Ubuntu/Debian", "SSH Hardening", "Systemd", "UFW Firewall", "Cron", "Log Analysis"],
        description: "Configured Linux virtual machines for service administration and troubleshooting; practiced user and permission management, SSH access, firewall rules, package updates, systemd services, log analysis, scheduled jobs, and basic host hardening.",
        // ATTACH YOUR GITHUB REPO LINK HERE:
        github: "https://github.com/Wildfox1601",
        featured: true
    },
    {
        id: 'enterprise-network-lab',
        title: "Enterprise Network Troubleshooting Lab",
        category: "networking",
        tags: ["Cisco Packet Tracer", "GNS3", "VLANs", "Inter-VLAN Routing", "DHCP", "DNS", "NAT", "Wireshark", "tcpdump"],
        description: "Built routed and switched topologies in Packet Tracer/GNS3 covering subnetting, VLANs, inter-VLAN routing, DHCP, DNS, NAT, and SSH; used Wireshark, tcpdump, ping, and traceroute to isolate connectivity and configuration issues.",
        // ATTACH YOUR GITHUB REPO LINK HERE:
        github: "https://github.com/Wildfox1601",
        featured: true
    },
    {
        id: 'python-health-check',
        title: "Python Infrastructure Health-Check Automation",
        category: "automation",
        tags: ["Python 3", "Socket", "System Monitoring", "Log Parsing", "Status Reporting", "Automation"],
        description: "Developed Python scripts to check host reachability and service availability, inspect CPU/memory/disk usage, parse Linux logs, and generate simple status reports for repeatable infrastructure monitoring.",
        // ATTACH YOUR GITHUB REPO LINK HERE:
        github: "https://github.com/Wildfox1601/infra-health-check",
        featured: true
    },
    {
        id: 'netpulse',
        title: "NetPulse Traffic & Packet Inspector",
        category: "networking",
        tags: ["Python", "Scapy", "Wireshark CLI", "Socket"],
        description: "A multi-threaded python packet analyzer that captures live network interface packets, parses Ethernet/IP/TCP headers, and detects anomaly traffic spikes.",
        // ATTACH YOUR GITHUB REPO LINK HERE:
        github: "https://github.com/Wildfox1601",
        featured: false
    },
    {
        id: 'wireguard-deployer',
        title: "WireGuard Mesh VPN Deployer",
        category: "linux",
        tags: ["Bash", "WireGuard", "Linux Kernel", "IPTables"],
        description: "Zero-dependency shell script to automate secure peer-to-peer WireGuard VPN mesh tunnels between Ubuntu servers with NAT traversal.",
        // ATTACH YOUR GITHUB REPO LINK HERE:
        github: "https://github.com/Wildfox1601",
        featured: false
    },
    {
        id: 'pyids',
        title: "PyIDS - Signature Intrusion Detector",
        category: "security",
        tags: ["Python", "Scapy", "Signature Engine", "Security"],
        description: "Lightweight rule-based intrusion detection system monitoring live network interfaces for port scans, SYN floods, and brute-force patterns.",
        // ATTACH YOUR GITHUB REPO LINK HERE:
        github: "https://github.com/Wildfox1601",
        featured: false
    }
];

export const writeupsData = [
    {
        id: 'ospf-cisco',
        title: "Multi-Area OSPF Configuration & Troubleshooting in Cisco Packet Tracer",
        category: "cisco",
        difficulty: "Intermediate",
        date: "2026-07-20",
        summary: "Comprehensive guide detailing Area 0 backbone integration, ABR routing tables, hello/dead timer tuning, and verifying LSDB convergence.",
        content: `<h3>Lab Overview</h3>
        <p>In this lab exercise, I configured a 3-router Cisco topology with OSPF Area 0 (Backbone) and Area 1. The goal was to establish reliable inter-area routing and verify link redundancy.</p>
        <h3>Key Configuration Commands</h3>
        <pre class="bg-slate-900 p-3 rounded font-mono text-xs text-sky-300">
Router(config)# router ospf 1
Router(config-router)# router-id 1.1.1.1
Router(config-router)# network 192.168.10.0 0.0.0.255 area 0
Router(config-router)# network 10.0.0.0 0.0.0.3 area 1
        </pre>
        <h3>Troubleshooting Notes</h3>
        <p>During initial bring-up, OSPF adjacency stuck in <code>EXSTART/EXCHANGE</code> due to an MTU mismatch on the serial interface link. Adjusting interface MTU resolved neighbor state transition to <code>FULL</code>.</p>`
    },
    {
        id: 'pcap-analysis',
        title: "Malware Traffic PCAP Analysis with Wireshark & TShark",
        category: "pcap",
        difficulty: "Hard",
        date: "2026-06-15",
        summary: "Investigating a packet capture file to dissect DNS tunneling C2 beacons, suspicious HTTP POST payloads, and extracting exfiltrated files.",
        content: `<h3>Investigation Summary</h3>
        <p>Analyzed a network PCAP capture to identify host infection vectors and Command & Control (C2) communication channels.</p>
        <h3>Wireshark Filters Used</h3>
        <pre class="bg-slate-900 p-3 rounded font-mono text-xs text-cyan-300">
dns.flags.response == 0 && dns.qry.name contains "c2"
http.request.method == "POST" && ip.src == 192.168.1.45
tcp.flags.syn == 1 && tcp.flags.ack == 0
        </pre>
        <p>Identified encoded base64 strings in DNS TXT record queries, uncovering exfiltrated credentials.</p>`
    },
    {
        id: 'thm-networking',
        title: "TryHackMe: Networking Basics & Protocol Attacks Room",
        category: "thm",
        difficulty: "Easy",
        date: "2026-05-10",
        summary: "Walkthrough of ARP spoofing, TCP handshake manipulation, DNS spoofing mechanics, and defensive remediation techniques.",
        content: `<h3>Room Highlights</h3>
        <p>Covered fundamental network attack vectors including ARP poisoning, Man-in-the-Middle (MitM) positioning, and how Dynamic ARP Inspection (DAI) on switches mitigates spoofing.</p>`
    }
];

export const blogData = [
    {
        id: 'subnetting-guide',
        title: "Demystifying Subnetting & CIDR: A Practical Guide for Freshers",
        date: "2026-08-01",
        readTime: "6 min read",
        summary: "Break down IP subnetting, wildcard masks, and slash notation with easy binary shortcuts designed for network engineering job prep.",
        content: `<h3>Understanding Subnetting</h3>
        <p>Subnetting is the process of dividing a single IP network into multiple smaller network segments. Mastering CIDR notation (e.g. <code>/24</code>, <code>/27</code>, <code>/30</code>) is essential for any network engineer.</p>
        <h3>Quick Cheat Sheet</h3>
        <ul>
            <li><strong>/30</strong>: 2 usable host IPs (Ideal for Point-to-Point WAN links)</li>
            <li><strong>/29</strong>: 6 usable host IPs (Ideal for small server clusters)</li>
            <li><strong>/24</strong>: 254 usable host IPs (Standard LAN subnet)</li>
        </ul>`
    },
    {
        id: 'linux-networking-cli',
        title: "Why Every Aspiring Network Engineer Should Master Linux Networking CLI",
        date: "2026-07-12",
        readTime: "8 min read",
        summary: "Exploring modern Linux networking tools like iproute2, ss, tcpdump, dig, and netplan that replace deprecated legacy commands.",
        content: `<h3>Modern Linux Networking Utilities</h3>
        <p>Forget <code>ifconfig</code> and <code>netstat</code>! Modern Linux distributions use the powerful <code>iproute2</code> suite.</p>
        <pre class="bg-slate-900 p-3 rounded font-mono text-xs text-sky-300">
# Check interfaces and IP addresses
ip -c a

# View routing table
ip route show

# Monitor socket connections
ss -tulpn
        </pre>`
    },
    {
        id: 'wireguard-guide',
        title: "Configuring a Site-to-Site WireGuard VPN on Ubuntu Server",
        date: "2026-06-28",
        readTime: "10 min read",
        summary: "Step-by-step tutorial on generating public/private keys, configuring WireGuard wg0 interfaces, and routing traffic securely across cloud nodes.",
        content: `<h3>Why WireGuard?</h3>
        <p>WireGuard is extremely lightweight, uses state-of-the-art cryptography (Noise protocol framework, Curve25519, ChaCha20-Poly1305), and operates directly in kernel space for maximum performance.</p>`
    }
];

export const nodeDetailsMap = {
    'router': {
        title: 'OPNsense Edge Firewall & Gateway',
        icon: 'fas fa-shield-halved',
        ip: '192.168.1.1',
        os: 'OPNsense 24.1 (HardenedBSD)',
        role: 'WAN Router / Firewall / DHCP / DNS Resolver / Unbound',
        specs: 'Intel Celeron N5105 Quad-Core, 16GB RAM, 4x 2.5GbE Intel i225-V NICs',
        services: ['Unbound DNS with TLS', 'Suricata IDS/IPS', 'HAProxy Reverse Proxy', 'OpenVPN / WireGuard Server']
    },
    'switch': {
        title: 'Managed Core Switch (L2/L3)',
        icon: 'fas fa-network-wired',
        ip: '192.168.1.2',
        os: 'Switch OS / VLAN Trunking',
        role: 'Managed Core Switch / Inter-VLAN Routing / Port Security',
        specs: '8-Port 2.5GbE RJ45 + 2-Port 10G SFP+ Uplinks',
        services: ['802.1Q VLAN Trunking (10, 20, 30, 40)', '802.3ad LACP Port Channel', 'IGMP Snooping', 'STP / RSTP']
    },
    'proxmox': {
        title: 'Proxmox VE Virtualization Node',
        icon: 'fas fa-server',
        ip: '192.168.1.100',
        os: 'Proxmox VE 8.1 (Debian 12 Bookworm)',
        role: 'Hypervisor Node for LXC Containers & KVM VMs',
        specs: 'AMD Ryzen 7 5700G (8C/16T), 64GB DDR4 ECC RAM, 2TB NVMe ZFS Mirror',
        services: ['LXC Docker Host', 'Home Assistant VM', 'Grafana & Prometheus Metrics', 'Nginx Proxy Manager']
    },
    'nas': {
        title: 'TrueNAS Core Storage Server',
        icon: 'fas fa-database',
        ip: '192.168.1.150',
        os: 'TrueNAS CORE (ZFS)',
        role: 'Central Network Attached Storage / NFS & SMB Shares',
        specs: '4x 4TB Western Digital Red NAS Drives in ZFS RAID-Z1 (12TB usable)',
        services: ['NFS Shares for Proxmox', 'SMB Corporate File Storage', 'Rsync Automated Backups']
    },
    'pihole': {
        title: 'Pi-hole & WireGuard Remote Access Node',
        icon: 'fab fa-raspberry-pi',
        ip: '192.168.1.200',
        os: 'Raspberry Pi OS 64-bit',
        role: 'Primary Network DNS Sinkhole & Remote Mesh Gateway',
        specs: 'Raspberry Pi 4 Model B (4GB RAM)',
        services: ['Pi-hole Ad & Telemetry Blocking', 'WireGuard Remote Access Peer', 'Keepalived Failover']
    }
};

export const cliCommands = {
    'help': `Available commands:
  help               - Display this help message
  cat skills.json    - Output JSON matrix of technical skills
  ping 8.8.8.8       - Test network connectivity to Google Public DNS
  show interfaces    - List network interface statuses (eth0, wg0, br0)
  uptime             - View current system uptime
  contact            - Print direct contact methods
  clear              - Wipe terminal output history`,
    
    'cat skills.json': `{
  "engineer": "Tarun M (Tarun Murali)",
  "focus": "Network Engineering & Linux Infrastructure",
  "networking": ["TCP/IP", "OSI Model", "Subnetting", "VLANs", "Routing", "DHCP", "DNS", "NAT", "SSH", "Wireshark", "tcpdump", "Nmap", "Cisco Packet Tracer", "GNS3"],
  "linux": ["Ubuntu/Debian", "Bash", "SSH", "systemd", "User/Permissions", "Logs", "Package Mgmt", "Proxmox", "Cron", "Hardening"],
  "programming": ["Python", "Bash scripting", "C"],
  "cloud_security": ["AWS (EC2, VPC, IAM)", "Network Security", "Vulnerability Assessment", "IDS/SIEM", "Splunk"],
  "ai_tools": ["Hermes", "OpenClaw", "LM Studio", "Ollama", "llama.cpp", "Agentic Coding"],
  "education": "BE CSE @ Agni College of Technology (CGPA: 8.18)",
  "status": "Open to Entry-Level Network Engineering Roles"
}`,
    
    'ping 8.8.8.8': `PING 8.8.8.8 (8.8.8.8) 56(84) bytes of data.
64 bytes from 8.8.8.8: icmp_seq=1 ttl=117 time=14.2 ms
64 bytes from 8.8.8.8: icmp_seq=2 ttl=117 time=13.8 ms
64 bytes from 8.8.8.8: icmp_seq=3 ttl=117 time=14.1 ms
--- 8.8.8.8 ping statistics ---
3 packets transmitted, 3 received, 0% packet loss, time 2003ms`,
    
    'show interfaces': `eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST> mtu 1500
        inet 192.168.1.105  netmask 255.255.255.0  broadcast 192.168.1.255
        speed 10000Mb/s duplex full link UP
wg0:  flags=209<UP,POINTOPOINT,RUNNING> mtu 1420 (WireGuard Mesh)
        inet 10.8.0.2  netmask 255.255.255.0
br0:  flags=4163<UP,BROADCAST,RUNNING> mtu 1500 (VLAN Bridge 10/20)
        inet 192.168.10.1  netmask 255.255.255.0`,
    
    'uptime': ` 21:05:00 up 45 days, 18 hours, 12 mins,  2 users,  load average: 0.08, 0.05, 0.01`,
    
    'contact': `Name: Tarun M (Tarun Murali)
Email: tarunmr2005@gmail.com
Phone: +91-9566293397
LinkedIn: https://linkedin.com/in/tarun--murali
GitHub: https://github.com/Wildfox1601
Portfolio: https://www.tarun-murali.me`
};

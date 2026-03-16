// ─── PERSONAL INFO ───────────────────────────────────────────────────────────
export const PERSON = {
  name:       "Joseph Abia",
  initials:   "JA",
  title:      "Network Architect & Engineer",
  tagline:    "I design resilient networks, build full-stack web applications, and secure digital infrastructure.",
  location:   "Nigeria",
  email:      "josephabia@email.com",      // ← update
  whatsapp:   "+2348000000000",            // ← update
  available:  true,
};

// ─── SOCIAL LINKS ────────────────────────────────────────────────────────────
export const SOCIALS = {
  linkedin:  "https://linkedin.com/in/josephabia",   // ← update
  github:    "https://github.com/joseph231",
  instagram: "https://instagram.com/josephabia",     // ← update
  whatsapp:  `https://wa.me/${PERSON.whatsapp.replace(/\D/g, "")}`,
};

// ─── NAVIGATION ──────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Home",     href: "/"        },
  { label: "About",    href: "/about"   },
  { label: "Projects", href: "/projects"},
  { label: "Skills",   href: "/skills"  },
  { label: "Resume",   href: "/resume"  },
  { label: "Contact",  href: "/contact" },
];

// ─── STATS (shown on hero) ───────────────────────────────────────────────────
export const STATS = [
  { value: "5+",  label: "Years Experience"    },
  { value: "20+", label: "Networks Designed"   },
  { value: "10+", label: "Projects Delivered"  },
  { value: "1",   label: "IBM Cert in Progress"},
];

// ─── ROLES (shown as pills on hero) ─────────────────────────────────────────
export const ROLES = [
  { label: "Network Architect",     highlight: true  },
  { label: "Network Engineer",      highlight: false },
  { label: "IT Support Specialist", highlight: false },
  { label: "Web Developer",         highlight: false },
  { label: "Cybersecurity (IBM)",   highlight: true  },
];

// ─── SKILLS ──────────────────────────────────────────────────────────────────
export const SKILL_GROUPS = [
  {
    icon: "🌐",
    category: "Network Architecture",
    items: [
      "Cisco Routing & Switching",
      "OSPF / BGP / EIGRP",
      "SD-WAN",
      "VLAN Design & Subnetting",
      "Firewall Configuration",
      "Network Documentation",
    ],
  },
  {
    icon: "🛠️",
    category: "IT Support & Infrastructure",
    items: [
      "Windows Server",
      "Active Directory",
      "DHCP / DNS",
      "Helpdesk & ITIL",
      "Hardware Troubleshooting",
      "Virtualization (VMware)",
    ],
  },
  {
    icon: "💻",
    category: "Web Development",
    items: [
      "Next.js / React",
      "Node.js",
      "TypeScript",
      "PostgreSQL / Supabase",
      "Tailwind CSS",
      "REST APIs",
    ],
  },
  {
    icon: "🔐",
    category: "Cybersecurity",
    items: [
      "Vulnerability Assessment",
      "SIEM (IBM QRadar)",
      "Network Security",
      "Nmap / Wireshark",
      "Security Auditing",
      "IBM Cybersecurity Analyst (in progress)",
    ],
  },
];

// ─── EXPERIENCE ──────────────────────────────────────────────────────────────
export const EXPERIENCE = [
  {
    role:    "Network Architect & Engineer",
    org:     "Self-Employed / Contract",
    period:  "2020 — Present",
    points: [
      "Designed and deployed multi-site enterprise networks using Cisco infrastructure and OSPF routing.",
      "Implemented VLAN segmentation, QoS policies, and firewall rules for client organizations.",
      "Produced full network topology documentation and handover packages for each project.",
    ],
  },
  {
    role:    "IT Support Specialist",
    org:     "Contract / Various Organizations",
    period:  "2019 — Present",
    points: [
      "Provided Tier 1–2 helpdesk support, managing Active Directory users and Windows Server environments.",
      "Resolved hardware, software, and connectivity issues with a strong first-call resolution rate.",
      "Set up and maintained LAN infrastructure, printers, and endpoint security for SME clients.",
    ],
  },
  {
    role:    "Web Developer",
    org:     "Freelance",
    period:  "2022 — Present",
    points: [
      "Built full-stack web applications using Next.js, Supabase, and TypeScript.",
      "Delivered e-commerce platforms with payment integration, admin dashboards, and authentication.",
      "Collaborated with clients on UI/UX design, turning brand identities into polished digital products.",
    ],
  },
];

// ─── EDUCATION & CERTIFICATIONS ───────────────────────────────────────────────
export const CERTIFICATIONS = [
  {
    name:   "IBM Cybersecurity Analyst Professional Certificate",
    by:     "IBM / Coursera",
    status: "in-progress" as const,
    year:   "2025",
  },
  {
    name:   "Cisco CCNA",
    by:     "Cisco Networking Academy",
    status: "completed" as const,
    year:   "2021",
  },
  {
    name:   "CompTIA Network+",
    by:     "CompTIA",
    status: "completed" as const,
    year:   "2020",
  },
  {
    name:   "Next.js / Full-Stack Development",
    by:     "Vercel / Self-Study",
    status: "completed" as const,
    year:   "2023",
  },
];
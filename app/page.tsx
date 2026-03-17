import Link from "next/link";
import { PERSON, ROLES, STATS, SOCIALS } from "@/lib/data";

export default function HomePage() {
  return (
    <div style={{ background: "#F0F4FF" }}>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        style={{
          minHeight: "calc(100vh - 72px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(135deg, #F0F4FF 0%, #EBF2FF 40%, #F5F0FF 100%)",
        }}
      >
        {/* Dot grid overlay */}
        <div aria-hidden style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(15,82,186,0.12) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          zIndex: 0,
        }} />

        {/* Top-right blue glow */}
        <div aria-hidden style={{
          position: "absolute", top: "-15%", right: "-8%",
          width: "600px", height: "600px",
          background: "radial-gradient(circle, rgba(15,82,186,0.12) 0%, transparent 65%)",
          zIndex: 0,
        }} />

        {/* Bottom-left purple accent glow */}
        <div aria-hidden style={{
          position: "absolute", bottom: "-10%", left: "-5%",
          width: "400px", height: "400px",
          background: "radial-gradient(circle, rgba(99,60,200,0.07) 0%, transparent 70%)",
          zIndex: 0,
        }} />

        {/* Horizontal light streak */}
        <div aria-hidden style={{
          position: "absolute", top: "30%", left: 0, right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(15,82,186,0.15), transparent)",
          zIndex: 0,
        }} />

        <div className="site-wrap" style={{ position: "relative", zIndex: 1, padding: "5rem 3rem" }}>
          <div style={{ maxWidth: "780px" }}>

            {/* Eyebrow */}
            <div className="animate-fade-up" style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.75rem", animationDelay: "0.05s" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--color-brand-blue)" }}>
                <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#10B981", animation: "pulse-dot 2s ease-in-out infinite", flexShrink: 0 }} />
                Available for work
              </span>
              <span style={{ height: "1px", width: "40px", background: "var(--color-brand-blue)", opacity: 0.4 }} />
              <span style={{ fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--color-ink-secondary)" }}>
                Nigeria &nbsp;·&nbsp; Remote &nbsp;·&nbsp; Worldwide
              </span>
            </div>

            {/* Name — single line */}
            <h1 className="text-display animate-fade-up" style={{ animationDelay: "0.1s", marginBottom: "2rem" }}>
              Joseph{" "}
              <span style={{ color: "var(--color-brand-blue)" }}>
                Abia
                <span style={{ display: "inline-block", width: "10px", height: "10px", borderRadius: "50%", background: "var(--color-brand-blue)", marginLeft: "6px", marginBottom: "12px", verticalAlign: "bottom" }} />
              </span>
            </h1>

            {/* Role pills */}
            <div className="animate-fade-up" style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem", animationDelay: "0.22s" }}>
              {ROLES.map((role) => (
                <span key={role.label} className={role.highlight ? "badge badge-blue" : "badge badge-neutral"}>
                  {role.label}
                </span>
              ))}
            </div>

            {/* Tagline */}
            <p className="animate-fade-up" style={{ fontSize: "1.05rem", color: "var(--color-ink-secondary)", lineHeight: 1.85, maxWidth: "540px", fontWeight: 300, marginBottom: "2.75rem", animationDelay: "0.28s" }}>
              {PERSON.tagline}
            </p>

            {/* CTAs */}
            <div className="animate-fade-up" style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "1.75rem", animationDelay: "0.34s" }}>
              <Link href="/projects" className="btn-primary">
                View My Work <ArrowIcon />
              </Link>
              <Link href="/contact" className="btn-outline">
                Get In Touch
              </Link>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-ghost">
                Download CV <DownloadIcon />
              </a>
            </div>

            {/* Socials */}
            <div className="animate-fade-up" style={{ display: "flex", gap: "0.625rem", animationDelay: "0.4s" }}>
              <SocialBtn href={SOCIALS.linkedin}  label="LinkedIn"  icon={<LinkedInIcon />}  />
              <SocialBtn href={SOCIALS.github}    label="GitHub"    icon={<GitHubIcon />}    />
              <SocialBtn href={SOCIALS.instagram} label="Instagram" icon={<InstagramIcon />} />
              <SocialBtn href={SOCIALS.whatsapp}  label="WhatsApp"  icon={<WhatsAppIcon />}  />
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
          <span style={{ fontSize: "0.62rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--color-ink-muted)" }}>Scroll</span>
          <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, var(--color-brand-blue), transparent)", animation: "scrollLine 1.8s ease-in-out infinite" }} />
        </div>
      </section>

      {/* ── STATS BAND ───────────────────────────────────────── */}
      <section style={{ background: "var(--color-surface-card)", borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)", padding: "3rem 0" }}>
        <div className="site-wrap">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2rem" }} className="stats-grid">
            {STATS.map((stat) => (
              <div key={stat.label} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "2.75rem", lineHeight: 1, letterSpacing: "-0.03em", marginBottom: "0.375rem" }}>
                  <span style={{ color: "var(--color-brand-blue)" }}>{stat.value}</span>
                </div>
                <p style={{ fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-ink-secondary)" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT I DO ────────────────────────────────────────── */}
      <section style={{ padding: "6rem 0" }}>
        <div className="site-wrap">
          <div style={{ marginBottom: "3.5rem" }}>
            <p className="text-eyebrow" style={{ marginBottom: "0.75rem" }}>What I Do</p>
            <h2 className="text-heading">Multi-disciplinary tech<br />professional</h2>
            <div className="section-bar" />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.25rem" }} className="services-grid">
            {SERVICES.map((service) => (
              <div key={service.title} className="card" style={{ padding: "2.25rem" }}>
                <div style={{ width: "48px", height: "48px", background: "var(--color-brand-blue-light)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem", marginBottom: "1.25rem" }}>
                  {service.icon}
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.05rem", color: "var(--color-ink)", marginBottom: "0.625rem", letterSpacing: "-0.01em" }}>
                  {service.title}
                </h3>
                <p style={{ fontSize: "0.875rem", color: "var(--color-ink-secondary)", lineHeight: 1.8, fontWeight: 300, marginBottom: "1.25rem" }}>
                  {service.desc}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {service.tags.map((tag) => (
                    <span key={tag} className="badge badge-neutral">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ─────────────────────────────────────────── */}
      <section style={{ background: "var(--color-ink)", padding: "5rem 0", position: "relative", overflow: "hidden" }}>
        <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`, backgroundSize: "40px 40px" }} />
        <div aria-hidden style={{ position: "absolute", bottom: "-30%", left: "50%", transform: "translateX(-50%)", width: "600px", height: "300px", background: "radial-gradient(ellipse, rgba(15,82,186,0.3) 0%, transparent 70%)" }} />

        <div className="site-wrap" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <p style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: "1.25rem" }}>
            Let&apos;s work together
          </p>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1.75rem, 4vw, 3rem)", color: "#ffffff", letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: "1.5rem" }}>
            Have a project in mind?
          </h2>
          <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.55)", maxWidth: "440px", margin: "0 auto 2.5rem", lineHeight: 1.8, fontWeight: 300 }}>
            Whether it&apos;s building a network, a website, or securing your infrastructure — I&apos;m ready.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "var(--color-brand-blue)", color: "white", fontFamily: "var(--font-body)", fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", padding: "0.9rem 2.25rem", borderRadius: "2px", transition: "opacity 0.2s" }}>
              Start a Conversation <ArrowIcon />
            </Link>
            <a href={SOCIALS.whatsapp} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "transparent", color: "rgba(255,255,255,0.8)", fontFamily: "var(--font-body)", fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", padding: "0.9rem 2.25rem", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "2px" }}>
              <WhatsAppIcon /> WhatsApp Me
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes scrollLine {
          0%   { transform: scaleY(0); transform-origin: top;    opacity: 1; }
          50%  { transform: scaleY(1); transform-origin: top;    opacity: 1; }
          100% { transform: scaleY(1); transform-origin: bottom; opacity: 0; }
        }
        @media (max-width: 768px) {
          .stats-grid    { grid-template-columns: repeat(2, 1fr) !important; }
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

// ── SERVICE DATA ──────────────────────────────────────────────────────────────
const SERVICES = [
  { icon: "🌐", title: "Network Architecture & Engineering", desc: "Designing and deploying enterprise-grade networks — from topology planning and OSPF routing to VLAN segmentation and firewall policies, Installation of CCTV systems and IOT Devices for homes and offices.", tags: ["Cisco", "OSPF", "SD-WAN", "VLAN", "Firewall", "CCTV", "IOT", "CABLING"] },
  { icon: "💻", title: "Full-Stack Web Development",         desc: "Building fast, scalable web applications with modern technologies. From admin dashboards to e-commerce platforms with payment integrations.", tags: ["Next.js", "Python", "Supabase", "TypeScript", "REST APIs"] },
  { icon: "🛠️", title: "IT Support & Infrastructure",        desc: "End-to-end IT support — Active Directory management, Windows Server administration, hardware troubleshooting and helpdesk operations.", tags: ["Windows Server", "Active Directory", "ITIL", "VMware"] },
  { icon: "🔐", title: "Cybersecurity Analysis",             desc: "Conducting vulnerability assessments, security audits and SIEM analysis. Currently completing IBM Cybersecurity Analyst Professional Certificate.", tags: ["IBM QRadar", "Nmap", "Wireshark", "Security Auditing"] },
];

// ── ICONS ─────────────────────────────────────────────────────────────────────
function ArrowIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>;
}
function DownloadIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>;
}
function SocialBtn({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="social-icon">{icon}</a>;
}
function LinkedInIcon() {
  return <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;
}
function GitHubIcon() {
  return <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>;
}
function InstagramIcon() {
  return <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>;
}
function WhatsAppIcon() {
  return <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>;
}
import type { Metadata } from "next";
import Link from "next/link";
import { PERSON, SOCIALS, EXPERIENCE, CERTIFICATIONS } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Joseph Abia — Network Architect, Web Developer and Cybersecurity Analyst.",
};

export default function AboutPage() {
  return (
    <div style={{ background: "var(--color-surface)" }}>

      {/* ── PAGE HEADER ──────────────────────────────────────── */}
      <section style={{
        background: "linear-gradient(135deg, #F0F4FF 0%, #EBF2FF 50%, #F5F0FF 100%)",
        borderBottom: "1px solid var(--color-border)",
        padding: "5rem 0 4rem",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Dot grid */}
        <div aria-hidden style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(15,82,186,0.10) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }} />
        <div aria-hidden style={{
          position: "absolute", top: "-20%", right: "-5%",
          width: "400px", height: "400px",
          background: "radial-gradient(circle, rgba(15,82,186,0.10) 0%, transparent 65%)",
        }} />

        <div className="site-wrap" style={{ position: "relative", zIndex: 1 }}>
          <p className="text-eyebrow" style={{ marginBottom: "0.75rem" }}>About Me</p>
          <h1 className="text-heading" style={{ marginBottom: "1rem" }}>
            The person behind<br />the work
          </h1>
          <div className="section-bar" style={{ margin: "0 0 1.25rem" }} />
          <p style={{ fontSize: "0.925rem", color: "var(--color-ink-secondary)", maxWidth: "500px", lineHeight: 1.8, fontWeight: 300 }}>
            A multi-disciplinary tech professional based in Nigeria, building resilient networks,
            modern web applications, and securing digital infrastructure.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ─────────────────────────────────────── */}
      <section style={{ padding: "5rem 0" }}>
        <div className="site-wrap">
          <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: "5rem", alignItems: "start" }} className="about-grid">

            {/* ── LEFT COLUMN ── */}
            <div>
              {/* Avatar */}
              <div style={{
                width: "100%",
                aspectRatio: "3/4",
                background: "linear-gradient(155deg, #0D1117 0%, #0F52BA 100%)",
                borderRadius: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-display)",
                fontSize: "5rem",
                fontWeight: 800,
                color: "rgba(255,255,255,0.9)",
                letterSpacing: "-0.03em",
                position: "relative",
                overflow: "hidden",
                marginBottom: "1.5rem",
              }}>
                {/* Pattern overlay */}
                <div aria-hidden style={{
                  position: "absolute", inset: 0,
                  backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }} />
                <span style={{ position: "relative", zIndex: 1 }}>JA</span>

                {/* Bottom label */}
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0,
                  padding: "1rem",
                  background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
                  textAlign: "center",
                }}>
                  <p style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-body)" }}>
                    Network Architect
                  </p>
                </div>
              </div>

              {/* Availability badge */}
              <div style={{
                display: "flex", alignItems: "center", gap: "0.5rem",
                padding: "0.625rem 1rem",
                background: "#ECFDF5",
                border: "1px solid rgba(6,95,70,0.15)",
                borderRadius: "100px",
                marginBottom: "1.5rem",
                width: "fit-content",
              }}>
                <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#10B981", animation: "pulse-dot 2s ease-in-out infinite", flexShrink: 0 }} />
                <span style={{ fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-success)" }}>
                  Available for work
                </span>
              </div>

              {/* Quick details */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0", marginBottom: "1.75rem" }}>
                {[
                  { label: "Location",    value: "Nigeria"              },
                  { label: "Availability", value: "Remote · Worldwide"  },
                  { label: "Email",       value: PERSON.email           },
                  { label: "Experience",  value: "5+ Years"             },
                  { label: "Languages",   value: "English"              },
                ].map((item) => (
                  <div key={item.label} style={{
                    display: "flex", justifyContent: "space-between", alignItems: "flex-start",
                    padding: "0.75rem 0",
                    borderBottom: "1px solid var(--color-border)",
                    gap: "1rem",
                  }}>
                    <span style={{ fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-ink-secondary)", flexShrink: 0 }}>
                      {item.label}
                    </span>
                    <span style={{ fontSize: "0.82rem", color: "var(--color-ink)", fontWeight: 500, textAlign: "right" }}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Social icons */}
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                <SocialLink href={SOCIALS.linkedin}  label="LinkedIn"  icon={<LinkedInIcon />}  />
                <SocialLink href={SOCIALS.github}    label="GitHub"    icon={<GitHubIcon />}    />
                <SocialLink href={SOCIALS.instagram} label="Instagram" icon={<InstagramIcon />} />
                <SocialLink href={SOCIALS.whatsapp}  label="WhatsApp"  icon={<WhatsAppIcon />}  />
              </div>
            </div>

            {/* ── RIGHT COLUMN ── */}
            <div>
              {/* Bio */}
              <div style={{ marginBottom: "3rem" }}>
                <p className="text-eyebrow" style={{ marginBottom: "0.75rem" }}>Background</p>
                <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.5rem", color: "var(--color-ink)", marginBottom: "1.25rem", letterSpacing: "-0.01em" }}>
                  Building infrastructure that works,<br />applications that last.
                </h2>
                <div className="section-bar" style={{ margin: "0 0 1.5rem" }} />

                <p style={{ fontSize: "0.925rem", color: "var(--color-ink-secondary)", lineHeight: 1.9, marginBottom: "1rem", fontWeight: 300 }}>
                  I&apos;m Joseph Abia — a Network Architect, Engineer and Web Developer based in Nigeria with over
                  5 years of hands-on experience designing enterprise networks, deploying IT infrastructure,
                  and building full-stack web applications.
                </p>
                <p style={{ fontSize: "0.925rem", color: "var(--color-ink-secondary)", lineHeight: 1.9, marginBottom: "1rem", fontWeight: 300 }}>
                  My journey started with networking — configuring Cisco routers, designing OSPF topologies
                  and managing enterprise LANs. Over time I expanded into web development, delivering
                  production-grade applications using Next.js, Supabase and TypeScript.
                </p>
                <p style={{ fontSize: "0.925rem", color: "var(--color-ink-secondary)", lineHeight: 1.9, fontWeight: 300 }}>
                  I&apos;m currently completing the IBM Cybersecurity Analyst Professional Certificate,
                  adding threat detection, SIEM analysis and vulnerability assessment to my toolkit.
                  My goal is to be a complete infrastructure professional — building it, running it, and securing it.
                </p>
              </div>

              {/* What sets me apart */}
              <div style={{ marginBottom: "3rem" }}>
                <p className="text-eyebrow" style={{ marginBottom: "1.25rem" }}>What sets me apart</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="strengths-grid">
                  {STRENGTHS.map((s) => (
                    <div key={s.title} style={{
                      padding: "1.5rem",
                      background: "var(--color-surface-card)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "4px",
                      transition: "box-shadow 0.2s",
                    }}>
                      <div style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>{s.icon}</div>
                      <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.9rem", color: "var(--color-ink)", marginBottom: "0.5rem" }}>
                        {s.title}
                      </h4>
                      <p style={{ fontSize: "0.82rem", color: "var(--color-ink-secondary)", lineHeight: 1.7, fontWeight: 300 }}>
                        {s.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA buttons */}
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link href="/projects" className="btn-primary">
                  See My Projects <ArrowIcon />
                </Link>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline">
                  Download CV <DownloadIcon />
                </a>
                <Link href="/contact" className="btn-ghost">
                  Get In Touch <ArrowIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE TIMELINE ───────────────────────────────── */}
      <section style={{ padding: "5rem 0", background: "var(--color-surface-card)", borderTop: "1px solid var(--color-border)" }}>
        <div className="site-wrap">
          <div style={{ marginBottom: "3rem" }}>
            <p className="text-eyebrow" style={{ marginBottom: "0.75rem" }}>Experience</p>
            <h2 className="text-heading">Work history</h2>
            <div className="section-bar" style={{ margin: "1rem 0 0" }} />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {EXPERIENCE.map((exp, i) => (
              <div key={i} style={{
                display: "grid",
                gridTemplateColumns: "200px 1fr",
                gap: "3rem",
                padding: "2.5rem 0",
                borderBottom: i < EXPERIENCE.length - 1 ? "1px solid var(--color-border)" : "none",
              }} className="exp-row">
                {/* Left — date + org */}
                <div>
                  <span style={{
                    display: "inline-block",
                    fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.08em",
                    color: "var(--color-brand-blue)",
                    padding: "0.3rem 0.75rem",
                    background: "var(--color-brand-blue-light)",
                    border: "1px solid rgba(15,82,186,0.15)",
                    borderRadius: "100px",
                    marginBottom: "0.625rem",
                  }}>
                    {exp.period}
                  </span>
                  <p style={{ fontSize: "0.82rem", color: "var(--color-ink-secondary)", fontWeight: 500 }}>
                    {exp.org}
                  </p>
                </div>

                {/* Right — role + points */}
                <div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.1rem", color: "var(--color-ink)", marginBottom: "1rem", letterSpacing: "-0.01em" }}>
                    {exp.role}
                  </h3>
                  <ul style={{ display: "flex", flexDirection: "column", gap: "0.625rem", listStyle: "none" }}>
                    {exp.points.map((point, j) => (
                      <li key={j} style={{ display: "flex", gap: "0.75rem", fontSize: "0.875rem", color: "var(--color-ink-secondary)", lineHeight: 1.7, fontWeight: 300 }}>
                        <span style={{ color: "var(--color-brand-blue)", fontWeight: 700, flexShrink: 0, marginTop: "1px" }}>—</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ───────────────────────────────────── */}
      <section style={{ padding: "5rem 0" }}>
        <div className="site-wrap">
          <div style={{ marginBottom: "3rem" }}>
            <p className="text-eyebrow" style={{ marginBottom: "0.75rem" }}>Credentials</p>
            <h2 className="text-heading">Certifications</h2>
            <div className="section-bar" style={{ margin: "1rem 0 0" }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem" }} className="cert-grid">
            {CERTIFICATIONS.map((cert) => (
              <div key={cert.name} style={{
                padding: "1.75rem",
                background: "var(--color-surface-card)",
                border: "1px solid var(--color-border)",
                borderRadius: "4px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: "1rem",
                transition: "box-shadow 0.2s, transform 0.2s",
              }} className="card">
                <div>
                  <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.95rem", color: "var(--color-ink)", marginBottom: "0.3rem" }}>
                    {cert.name}
                  </p>
                  <p style={{ fontSize: "0.78rem", color: "var(--color-ink-secondary)" }}>
                    {cert.by} · {cert.year}
                  </p>
                </div>
                <span className={cert.status === "completed" ? "badge badge-success" : "badge badge-warning"} style={{ flexShrink: 0 }}>
                  {cert.status === "completed" ? "✓ Completed" : "In Progress"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .about-grid      { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .strengths-grid  { grid-template-columns: 1fr !important; }
          .cert-grid       { grid-template-columns: 1fr !important; }
          .exp-row         { grid-template-columns: 1fr !important; gap: 0.75rem !important; }
        }
      `}</style>
    </div>
  );
}

// ── STRENGTHS DATA ────────────────────────────────────────────────────────────
const STRENGTHS = [
  { icon: "🔁", title: "Cross-disciplinary thinking",  desc: "I see the full stack — from physical cables to cloud APIs. That perspective helps me solve problems others miss."        },
  { icon: "🏗️", title: "Build-first approach",         desc: "I don't just plan — I deliver. Every project comes with clean documentation and production-ready output."               },
  { icon: "📡", title: "Network-first mindset",        desc: "Most developers don't understand the network layer. I do — which means my web apps are built for real infrastructure." },
  { icon: "🔐", title: "Security awareness",           desc: "With IBM Cybersecurity training, I approach every system with a security-first mindset from day one."                   },
];

// ── HELPER COMPONENTS ─────────────────────────────────────────────────────────
function SocialLink({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="social-icon">
      {icon}
    </a>
  );
}

function ArrowIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>;
}
function DownloadIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>;
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
import type { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default:  "Joseph Abia — Network Architect & Engineer",
    template: "%s | Joseph Abia",
  },
  description:
    "Portfolio of Joseph Abia — Network Architect, Engineer, Full-Stack Web Developer and IBM Cybersecurity Analyst in training.",
  keywords: [
    "Network Architect", "Network Engineer", "Web Developer",
    "Cybersecurity", "IT Support", "Next.js", "Nigeria",
  ],
  authors: [{ name: "Joseph Abia" }],
  openGraph: {
    type:      "website",
    locale:    "en_US",
    siteName:  "Joseph Abia Portfolio",
    title:     "Joseph Abia — Network Architect & Engineer",
    description:
      "Network Architect, Web Developer, and Cybersecurity Analyst. Designing resilient infrastructure and building modern web applications.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
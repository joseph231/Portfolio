import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Joseph Abia — Network Architect & Engineer",
  description: "Portfolio of Joseph Abia — Network Architect, Engineer, Web Developer and Cybersecurity Analyst.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
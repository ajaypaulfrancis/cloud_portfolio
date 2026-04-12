import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ajay Paul | DevOps Lead",
  description: "DevOps Lead with 9+ years of experience in cloud platforms, automation, and OpenShift. SME in Ansible, Terraform, and AWS.",
  keywords: ["DevOps", "Ansible", "OpenShift", "AWS", "Terraform", "Cloud", "Automation"],
  authors: [{ name: "Ajay Paul", url: "https://ajpaul.cloud" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({

  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});


export const metadata: Metadata = {
  title: "DTI-SAU Calculator Varity",
  description: "A variety of calculators for different purposes",
  keywords: [
    "calculator",
    "math",
    "science",
    "finance",
    "health",
    "education",
    "engineering",
    "statistics",
    "programming",
    "conversion",
    "tools",
    "utility",
    "DTI-SAU",
    "Next.js",
    "TypeScript",
    "Web App",
  ],
  authors: [{ name: "DTI-SAU", url: "https://dti-sau.com" }],
  creator: "DTI-SAU",
  icons:
  {
    icon: "/next.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kanit.className}`}
      >
        {children}
      </body>
    </html>
  );
}

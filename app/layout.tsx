import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FormRecorder – Record Browser Forms, Replay for Testing",
  description: "Browser extension captures form interactions and generates Playwright/Puppeteer test scripts. Manage recordings and validate replays from your web dashboard."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="40e34d70-59f5-40e8-b182-ce58f885e447"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}

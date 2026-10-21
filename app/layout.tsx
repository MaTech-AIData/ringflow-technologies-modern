import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

export const metadata: Metadata = {
  title: {
    default: "Ring Flow Technologies",
    template: "%s | Ring Flow Technologies",
  },

  description:
    "One business number. Total control. Manage calls, leads, WhatsApp conversations and customer communications with Ring Flow Technologies.",

  icons: {
    icon: [
      {
        url: "/ringflow-favicon.png",
        type: "image/png",
      },
    ],
    shortcut: "/ringflow-favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
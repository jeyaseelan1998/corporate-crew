import type { Metadata } from "next";
import Layout from "@/src/Layout";
import "../src/assets/css/globals.css";
import "../src/assets/font/poppins_900/stylesheet.css";
import "../src/assets/font/hind/stylesheet.css";

export const metadata: Metadata = {
  title: "Corporate Crew",
  description: "Get your business started with Corporate crew",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="body"
      >
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}

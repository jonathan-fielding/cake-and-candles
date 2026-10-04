import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { CakeSlice } from "@/components/CakeArt";
import SiteNav from "@/components/SiteNav";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Crumbs & Candles: my little corner of cake",
    template: "%s · Crumbs & Candles",
  },
  description:
    "A personal website all about cake: types of cake, a short history, my favourite recipes, and the baking tips I wish I'd known sooner.",
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fff8f0" },
    { media: "(prefers-color-scheme: dark)", color: "#1f1512" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <header className="site-header">
          <div className="container header-inner">
            <Link href="/" className="brand">
              <CakeSlice className="brand-mark" />
              Crumbs &amp; Candles
            </Link>
            <SiteNav />
          </div>
        </header>
        <main id="main">{children}</main>
        <footer className="site-footer">
          <div className="container footer-inner">
            <p>
              Baked with love (and far too much butter) by me. Every recipe
              here has been tested in my own slightly temperamental oven.
            </p>
            <nav aria-label="Footer">
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/types/">Types of cake</Link></li>
                <li><Link href="/history/">History</Link></li>
                <li><Link href="/recipes/">Recipes</Link></li>
                <li><Link href="/tips/">Tips &amp; mistakes</Link></li>
              </ul>
            </nav>
            <p className="small">© {new Date().getFullYear()} Crumbs &amp; Candles. Go and put the kettle on.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}

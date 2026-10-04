"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/types/", label: "Types" },
  { href: "/history/", label: "History" },
  { href: "/recipes/", label: "Recipes" },
  { href: "/candles/", label: "Candles" },
  { href: "/tips/", label: "Tips" },
];

export default function SiteNav() {
  // usePathname() returns the path without the basePath, so this works
  // the same locally and on GitHub Pages.
  const pathname = usePathname();

  return (
    <nav aria-label="Main" className="site-nav">
      <ul>
        {links.map(({ href, label }) => {
          const active = pathname.startsWith(href);
          return (
            <li key={href}>
              <Link href={href} aria-current={active ? "page" : undefined}>
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

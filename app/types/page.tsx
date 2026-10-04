import type { Metadata } from "next";
import Link from "next/link";
import TypeArt from "@/components/TypeArt";
import { cakeTypes, families, typesInFamily } from "@/lib/cakeTypes";

export const metadata: Metadata = {
  title: "Types of cake",
  description: `A friendly field guide to ${cakeTypes.length} types of cake from around the world, grouped by how they're made.`,
};

export default function TypesPage() {
  return (
    <div className="container section">
      <header className="page-header">
        <p className="eyebrow">A field guide</p>
        <h1>Types of cake</h1>
        <p className="lead">
          Cakes fall loosely into two big families: <strong>foam cakes</strong>,
          which get their lift from whisked eggs, and <strong>butter cakes</strong>,
          which get theirs from fat and baking powder. Then there are the
          glorious exceptions. Here are {cakeTypes.length} I&apos;ve baked,
          eaten or queued for, grouped by how they&apos;re made. Pick one to
          find out where it comes from and how it&apos;s done.
        </p>
      </header>

      <nav className="family-jump" aria-label="Cake families">
        <ul>
          {families.map((family) => (
            <li key={family.id}>
              <a href={`#${family.id}`}>{family.title}</a>
            </li>
          ))}
        </ul>
      </nav>

      {families.map((family) => (
        <section
          key={family.id}
          id={family.id}
          className="type-family"
          aria-labelledby={`${family.id}-heading`}
        >
          <h2 id={`${family.id}-heading`}>{family.title}</h2>
          <p className="muted">{family.blurb}</p>
          <ul className="type-grid">
            {typesInFamily(family.id).map((t) => (
              <li key={t.slug}>
                <Link
                  href={`/types/${t.slug}/`}
                  className="card card-link type-card"
                  style={{ "--accent": t.accent } as React.CSSProperties}
                >
                  <TypeArt className="type-card-art" shape={t.shape} accent={t.accent} crumb={t.crumb} />
                  <h3>{t.name}</h3>
                  <p className="tag">{t.origin}</p>
                  <p>{t.summary}</p>
                  <p className="small type-card-texture">{t.texture}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <aside className="callout">
        <p>
          Want to bake one of these? My <Link href="/recipes/">recipes page</Link>{" "}
          has a Victoria sponge, a lemon drizzle, a chocolate cake, a carrot cake
          and a Basque cheesecake to get you started.
        </p>
      </aside>
    </div>
  );
}

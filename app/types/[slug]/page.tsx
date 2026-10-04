import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import TypeArt from "@/components/TypeArt";
import { cakeTypes, getCakeType, getFamily, typesInFamily } from "@/lib/cakeTypes";
import { getRecipe } from "@/lib/recipes";

// Only the slugs below exist; a static export can't render others on demand.
export const dynamicParams = false;

export function generateStaticParams() {
  return cakeTypes.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/types/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const cake = getCakeType(slug);
  if (!cake) return {};
  return { title: cake.name, description: cake.summary };
}

export default async function CakeTypePage({
  params,
}: PageProps<"/types/[slug]">) {
  const { slug } = await params;
  const cake = getCakeType(slug);
  if (!cake) notFound();

  const family = getFamily(cake.family);
  const siblings = typesInFamily(cake.family).filter((t) => t.slug !== cake.slug);
  const recipe = cake.recipe && getRecipe(cake.recipe.slug);

  const index = cakeTypes.indexOf(cake);
  const prev = cakeTypes[(index - 1 + cakeTypes.length) % cakeTypes.length];
  const next = cakeTypes[(index + 1) % cakeTypes.length];

  return (
    <article
      className="container section type-detail"
      style={{ "--accent": cake.accent } as React.CSSProperties}
    >
      <p className="breadcrumb">
        <Link href="/types/">← All types of cake</Link>
      </p>

      <header className="recipe-header">
        <div>
          <p className="eyebrow">
            <Link href={`/types/#${family.id}`}>{family.title}</Link>
          </p>
          <h1>{cake.name}</h1>
          <p className="lead">{cake.summary}</p>
        </div>
        <TypeArt className="recipe-art" shape={cake.shape} accent={cake.accent} crumb={cake.crumb} />
      </header>

      <dl className="recipe-facts">
        <div>
          <dt>Comes from</dt>
          <dd>{cake.origin}</dd>
        </div>
        <div>
          <dt>Dates from</dt>
          <dd>{cake.era}</dd>
        </div>
        <div>
          <dt>Rises on</dt>
          <dd>{cake.lift}</dd>
        </div>
        <div>
          <dt>Texture</dt>
          <dd>{cake.texture}</dd>
        </div>
      </dl>

      <div className="type-body">
        <div>
          <section aria-labelledby="story-heading">
            <h2 id="story-heading">The story</h2>
            {cake.about.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </section>

          <section className="method" aria-labelledby="method-heading">
            <h2 id="method-heading">How it&apos;s made</h2>
            <ol>
              {cake.method.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </section>
        </div>

        <aside className="type-aside">
          <div className="callout">
            <h2>Try it with</h2>
            <p>{cake.tryIt}</p>
          </div>

          {recipe && cake.recipe && (
            <Link
              href={`/recipes/${recipe.slug}/`}
              className="card card-link type-recipe"
              style={{ "--accent": recipe.accent } as React.CSSProperties}
            >
              <span className="eyebrow">Bake it</span>
              <strong>{recipe.title} →</strong>
              <span className="muted small">{cake.recipe.note}</span>
            </Link>
          )}

          {siblings.length > 0 && (
            <nav aria-labelledby="family-heading">
              <h2 id="family-heading">More {family.title.toLowerCase()}</h2>
              <ul className="type-chips">
                {siblings.map((t) => (
                  <li key={t.slug}>
                    <Link href={`/types/${t.slug}/`}>{t.name}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </aside>
      </div>

      <nav className="type-pager" aria-label="Other types of cake">
        <Link href={`/types/${prev.slug}/`} rel="prev">
          <span className="muted small">Previous</span>
          <span>← {prev.name}</span>
        </Link>
        <Link href={`/types/${next.slug}/`} rel="next">
          <span className="muted small">Next</span>
          <span>{next.name} →</span>
        </Link>
      </nav>
    </article>
  );
}

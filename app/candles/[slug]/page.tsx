import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CandleArt } from "@/components/CandleArt";
import { candles, getCandle, getCandleGroup } from "@/lib/candles";

// Only the slugs below exist; a static export can't render others on demand.
export const dynamicParams = false;

export function generateStaticParams() {
  return candles.map((candle) => ({ slug: candle.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/candles/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const candle = getCandle(slug);
  if (!candle) return {};
  return { title: candle.name, description: candle.summary };
}

export default async function CandlePage({
  params,
}: PageProps<"/candles/[slug]">) {
  const { slug } = await params;
  const candle = getCandle(slug);
  if (!candle) notFound();

  const group = getCandleGroup(candle.group);
  const siblings = candles.filter((c) => c.group === candle.group && c.slug !== candle.slug);
  const index = candles.indexOf(candle);
  const next = candles[(index + 1) % candles.length];

  return (
    <article
      className="container section candle-page"
      style={{ "--accent": candle.art.accent } as React.CSSProperties}
    >
      <p className="breadcrumb">
        <Link href="/candles/">← All candles</Link>
      </p>

      <header className="recipe-header">
        <div>
          <p className="eyebrow">{group.title}</p>
          <h1>{candle.name}</h1>
          {candle.intro.map((para, i) => (
            <p key={i} className={i === 0 ? "lead" : undefined}>
              {para}
            </p>
          ))}
        </div>
        <CandleArt className="candle-page-art" {...candle.art} />
      </header>

      <dl className="recipe-facts candle-facts">
        {candle.facts.map((fact) => (
          <div key={fact.label}>
            <dt>{fact.label}</dt>
            <dd>{fact.value}</dd>
          </div>
        ))}
      </dl>

      <div className="candle-body">
        <section className="card candle-tips" aria-labelledby="tips-heading">
          <h2 id="tips-heading">How I use them</h2>
          <ul>
            {candle.tips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </section>

        <div>
          {candle.watchOut && (
            <aside className="callout">
              <h2 className="callout-title">Watch out</h2>
              <p>{candle.watchOut}</p>
            </aside>
          )}
          <p className="small muted candle-safety-link">
            There&apos;s more in my <Link href="/candles/#safety">candle safety and etiquette notes</Link>.
          </p>
        </div>
      </div>

      <nav className="candle-siblings" aria-labelledby="siblings-heading">
        <h2 id="siblings-heading">{group.moreTitle}</h2>
        <ul className="type-chips">
          {siblings.map((c) => (
            <li key={c.slug}>
              <Link href={`/candles/${c.slug}/`}>{c.name}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <nav className="next-recipe" aria-label="Next candle">
        <span className="muted">Next up:</span>{" "}
        <Link href={`/candles/${next.slug}/`}>{next.name} →</Link>
      </nav>
    </article>
  );
}

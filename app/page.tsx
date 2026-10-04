import Link from "next/link";
import { CakeSlice, LayerCake, Whisk } from "@/components/CakeArt";
import { recipes } from "@/lib/recipes";

const sections = [
  {
    href: "/types/",
    title: "Types of cake",
    text: "Sponge, chiffon, genoise, pound, angel food and more: what makes each one tick.",
    accent: "var(--berry)",
  },
  {
    href: "/history/",
    title: "A short history",
    text: "From honey breads in ancient Egypt to the birthday cake with candles on top.",
    accent: "var(--caramel)",
  },
  {
    href: "/recipes/",
    title: "My recipes",
    text: `${recipes.length} cakes I bake again and again, written out properly at last.`,
    accent: "var(--chocolate)",
  },
  {
    href: "/candles/",
    title: "Types of candles",
    text: "Spirals, numbers, sparklers and trick candles, plus every other kind of candle and wax.",
    accent: "var(--flame)",
  },
  {
    href: "/tips/",
    title: "Tips & mistakes",
    text: "Everything I've learned the hard way, so you don't have to.",
    accent: "var(--pistachio)",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">Hello, and welcome</p>
            <h1>I really, really love cake.</h1>
            <p className="lead">
              This is my little corner of the internet for everything cake:
              the different kinds, where they came from, the recipes I keep
              coming back to, and the mistakes I&apos;ve made so you don&apos;t
              have to.
            </p>
            <div className="button-row">
              <Link href="/recipes/" className="button">
                Get baking
              </Link>
              <Link href="/types/" className="button button-ghost">
                Meet the cakes
              </Link>
            </div>
          </div>
          <LayerCake className="hero-art" />
        </div>
      </section>

      <section className="container section">
        <h2 className="section-title">Where would you like to start?</h2>
        <ul className="card-grid">
          {sections.map((s) => (
            <li key={s.href}>
              <Link href={s.href} className="card card-link" style={{ "--accent": s.accent } as React.CSSProperties}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <span className="card-cta" aria-hidden="true">
                  Take a look →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="container section about">
        <Whisk className="about-icon" />
        <div>
          <h2>A bit about me</h2>
          <p>
            I&apos;m a home baker, not a professional. I started with fairy
            cakes at my nan&apos;s kitchen table and never really stopped. These
            days I bake most weekends, usually for friends, often for no reason
            at all. I believe there&apos;s no occasion too small for cake, and
            that a slightly sunken sponge still tastes wonderful.
          </p>
        </div>
      </section>

      <section className="container section">
        <h2 className="section-title">Fresh out of the oven</h2>
        <ul className="recipe-strip">
          {recipes.slice(0, 3).map((r) => (
            <li key={r.slug}>
              <Link href={`/recipes/${r.slug}/`} className="mini-recipe">
                <CakeSlice className="mini-art" accent={r.accent} />
                <span>
                  <strong>{r.title}</strong>
                  <span className="muted">{r.summary}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { CakeSlice } from "@/components/CakeArt";
import { recipes } from "@/lib/recipes";

export const metadata: Metadata = {
  title: "Recipes",
  description: "The cake recipes I bake again and again, with ingredients and step-by-step methods.",
};

export default function RecipesPage() {
  return (
    <div className="container section">
      <header className="page-header">
        <p className="eyebrow">From my kitchen</p>
        <h1>My favourite cake recipes</h1>
        <p className="lead">
          These are the recipes I&apos;ve baked so many times the cards are
          splattered with batter. Each one has been tested in my own kitchen.
          Oven temperatures are for a conventional oven, with fan and gas
          marks alongside.
        </p>
      </header>

      <ul className="recipe-grid">
        {recipes.map((r) => (
          <li key={r.slug}>
            <Link
              href={`/recipes/${r.slug}/`}
              className="card card-link recipe-card"
              style={{ "--accent": r.accent } as React.CSSProperties}
            >
              <CakeSlice className="recipe-card-art" accent={r.accent} />
              <h2>{r.title}</h2>
              <p>{r.summary}</p>
              <p className="meta small">
                <span>Serves {r.serves}</span>
                <span>{r.difficulty}</span>
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

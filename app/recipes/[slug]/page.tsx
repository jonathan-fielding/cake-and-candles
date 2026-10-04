import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CakeSlice } from "@/components/CakeArt";
import { getRecipe, recipes } from "@/lib/recipes";

// Only the slugs below exist; a static export can't render others on demand.
export const dynamicParams = false;

export function generateStaticParams() {
  return recipes.map((recipe) => ({ slug: recipe.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/recipes/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const recipe = getRecipe(slug);
  if (!recipe) return {};
  return { title: recipe.title, description: recipe.summary };
}

export default async function RecipePage({
  params,
}: PageProps<"/recipes/[slug]">) {
  const { slug } = await params;
  const recipe = getRecipe(slug);
  if (!recipe) notFound();

  const index = recipes.indexOf(recipe);
  const next = recipes[(index + 1) % recipes.length];

  return (
    <article
      className="container section recipe"
      style={{ "--accent": recipe.accent } as React.CSSProperties}
    >
      <p className="breadcrumb">
        <Link href="/recipes/">← All recipes</Link>
      </p>

      <header className="recipe-header">
        <div>
          <h1>{recipe.title}</h1>
          <p className="lead">{recipe.intro}</p>
        </div>
        <CakeSlice className="recipe-art" accent={recipe.accent} />
      </header>

      <dl className="recipe-facts">
        <div>
          <dt>Serves</dt>
          <dd>{recipe.serves}</dd>
        </div>
        <div>
          <dt>Prep</dt>
          <dd>{recipe.prepTime}</dd>
        </div>
        <div>
          <dt>Bake</dt>
          <dd>{recipe.bakeTime}</dd>
        </div>
        <div>
          <dt>Difficulty</dt>
          <dd>{recipe.difficulty}</dd>
        </div>
        <div className="wide">
          <dt>You&apos;ll need</dt>
          <dd>{recipe.tin}</dd>
        </div>
      </dl>

      <div className="recipe-body">
        <section className="ingredients card" aria-labelledby="ingredients-heading">
          <h2 id="ingredients-heading">Ingredients</h2>
          {recipe.ingredients.map((group, i) => (
            <div key={group.title ?? i}>
              {group.title && <h3>{group.title}</h3>}
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="method" aria-labelledby="method-heading">
          <h2 id="method-heading">Method</h2>
          <ol>
            {recipe.method.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>

          {recipe.notes && (
            <aside className="callout">
              <h3>My notes</h3>
              <ul>
                {recipe.notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </aside>
          )}
        </section>
      </div>

      <nav className="next-recipe" aria-label="Next recipe">
        <span className="muted">Fancy another?</span>{" "}
        <Link href={`/recipes/${next.slug}/`}>{next.title} →</Link>
      </nav>
    </article>
  );
}

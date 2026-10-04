import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Types of cake",
  description: "A friendly guide to the main families of cake and what makes each one different.",
};

type CakeType = {
  name: string;
  family: "Foam" | "Butter" | "Other";
  texture: string;
  description: string;
  tryIt: string;
};

const cakeTypes: CakeType[] = [
  {
    name: "Sponge",
    family: "Foam",
    texture: "Light, springy, open crumb",
    description:
      "In the strictest sense, a sponge is leavened by whisked eggs, often with little or no fat. In Britain we also use the word for creamed cakes like the Victoria sponge. Either way, it's a soft, airy cake that loves jam and cream.",
    tryIt: "Swiss roll, Victoria sponge, trifle sponge",
  },
  {
    name: "Genoise",
    family: "Foam",
    texture: "Fine, dry-ish, even crumb",
    description:
      "A whole-egg foam: eggs and sugar whisked over warm water until thick, then flour and a little melted butter folded in. It's quite plain on its own, which is why it's usually brushed with syrup and layered with fillings.",
    tryIt: "Layered gâteaux, fraisier, tiramisu cakes",
  },
  {
    name: "Chiffon",
    family: "Foam",
    texture: "Tall, moist, very tender",
    description:
      "Invented in 1920s Los Angeles, chiffon uses oil instead of butter plus whipped egg whites. The oil keeps it soft even when chilled, so it's perfect for cream-filled and fridge cakes.",
    tryIt: "Pandan chiffon, orange chiffon, Japanese strawberry shortcake",
  },
  {
    name: "Angel food",
    family: "Foam",
    texture: "Snowy white, airy, chewy-soft",
    description:
      "Made with egg whites only, no yolks and no fat at all. It's baked in an ungreased tube pan so the batter can cling to the sides as it climbs, then cooled upside down so it doesn't collapse.",
    tryIt: "With macerated strawberries and whipped cream",
  },
  {
    name: "Butter cake",
    family: "Butter",
    texture: "Rich, moist, close crumb",
    description:
      "The classic creamed cake: butter and sugar beaten until fluffy, then eggs and flour added, with baking powder for lift. Most birthday cakes and layer cakes are butter cakes.",
    tryIt: "Yellow cake, chocolate layer cake, cupcakes",
  },
  {
    name: "Pound cake",
    family: "Butter",
    texture: "Dense, buttery, tight crumb",
    description:
      "Originally a pound each of butter, sugar, eggs and flour, with no chemical leavening at all. Modern versions are a little lighter, but it's still the buttery, sliceable loaf you want with a cup of tea.",
    tryIt: "Madeira cake, quatre-quarts, marble cake",
  },
  {
    name: "Oil cake",
    family: "Butter",
    texture: "Very moist, soft, keeps for days",
    description:
      "Mixed rather than creamed, with oil in place of butter. You trade a little buttery flavour for a cake that stays moist for ages. My chocolate fudge cake and carrot cake both work this way.",
    tryIt: "Carrot cake, chocolate cake, olive oil cake",
  },
  {
    name: "Cheesecake",
    family: "Other",
    texture: "Creamy, rich, custard-like",
    description:
      "Technically more of a custard tart than a cake, but nobody's going to argue when it's on the table. Baked versions set with eggs; no-bake ones set in the fridge with cream or gelatine.",
    tryIt: "New York, Basque burnt, Japanese cotton cheesecake",
  },
  {
    name: "Flourless cake",
    family: "Other",
    texture: "Fudgy, dense, almost truffle-like",
    description:
      "Held together by eggs and chocolate or ground nuts rather than flour. They puff up in the oven, sink as they cool, and end up gloriously rich.",
    tryIt: "Torta caprese, flourless chocolate cake",
  },
  {
    name: "Fruit cake",
    family: "Other",
    texture: "Dense, moist, heavy with fruit",
    description:
      "More fruit than cake, often fed with brandy for weeks before it's eaten. It's the backbone of British Christmas and wedding cakes, and it keeps almost indefinitely.",
    tryIt: "Christmas cake, Dundee cake, simnel cake",
  },
];

const families: { name: CakeType["family"]; blurb: string }[] = [
  {
    name: "Foam",
    blurb: "These rise mainly on air whisked into eggs. Light, delicate, and a little nerve-racking to fold.",
  },
  {
    name: "Butter",
    blurb: "These rely on fat (creamed butter or oil) and usually baking powder. Rich, forgiving and dependable.",
  },
  {
    name: "Other",
    blurb: "The wonderful rule-breakers that don't sit neatly in either camp.",
  },
];

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
          glorious exceptions. Here are the ones I bake and love.
        </p>
      </header>

      {families.map((family) => (
        <section key={family.name} className="type-family" aria-labelledby={`family-${family.name}`}>
          <h2 id={`family-${family.name}`}>
            {family.name === "Other" ? "Everything else" : `${family.name} cakes`}
          </h2>
          <p className="muted">{family.blurb}</p>
          <div className="type-grid">
            {cakeTypes
              .filter((t) => t.family === family.name)
              .map((t) => (
                <article key={t.name} className="card type-card">
                  <h3>{t.name}</h3>
                  <p className="tag">{t.texture}</p>
                  <p>{t.description}</p>
                  <p className="small">
                    <strong>Try it as:</strong> {t.tryIt}
                  </p>
                </article>
              ))}
          </div>
        </section>
      ))}

      <aside className="callout">
        <p>
          Want to bake one of these? My <Link href="/recipes/">recipes page</Link>{" "}
          has a sponge, an oil cake, a butter loaf and a cheesecake to get you started.
        </p>
      </aside>
    </div>
  );
}

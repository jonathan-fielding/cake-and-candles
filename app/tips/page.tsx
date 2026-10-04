import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Baking tips & common mistakes",
  description: "The cake baking tips I wish I'd known sooner, and how to fix the most common mistakes.",
};

const tips = [
  {
    title: "Weigh, don't scoop",
    text: "Digital scales are the best few pounds you'll ever spend on baking. A scooped cup of flour can vary by 30g or more, and that's the difference between tender and tough.",
  },
  {
    title: "Bring things to room temperature",
    text: "Cold eggs and hard butter don't trap air properly and can make the batter curdle. I take mine out an hour before I start. In a hurry? Put the eggs in a bowl of warm water for 10 minutes.",
  },
  {
    title: "Get to know your oven",
    text: "Most ovens run hotter or cooler than the dial says. A cheap oven thermometer will tell you the truth, and will explain a lot of past disasters.",
  },
  {
    title: "Line your tins properly",
    text: "Grease the tin, line the base with baking paper, then grease the paper. It takes two minutes and saves you from the heartbreak of a cake that won't come out.",
  },
  {
    title: "Cream for longer than you think",
    text: "Butter and sugar should go pale and fluffy, which takes 3–5 minutes with an electric mixer. This is where a butter cake gets most of its lift.",
  },
  {
    title: "Fold gently, then stop",
    text: "Once the flour goes in, mix only until you can't see any dry streaks. Use a big metal spoon or spatula and cut through the middle, turning the bowl as you go.",
  },
  {
    title: "Check early, and check properly",
    text: "Start checking 5 minutes before the recipe says. A skewer should come out clean (or with a few moist crumbs for chocolate cake), and the top should spring back when pressed.",
  },
  {
    title: "Cool completely before decorating",
    text: "I know, it's agony. But frosting a warm cake means melted buttercream sliding off the sides. Patience, and maybe make a cup of tea.",
  },
];

const mistakes = [
  {
    problem: "My cake sank in the middle",
    causes: "Opening the oven door too early, too much raising agent, underbaking, or an oven that's too cool.",
    fix: "Keep the door shut for at least the first two-thirds of the bake, measure baking powder carefully, and check your oven temperature.",
  },
  {
    problem: "It's domed and cracked on top",
    causes: "The oven is too hot, so the outside sets before the middle has finished rising.",
    fix: "Lower the temperature by 10–20°C, or wrap the tin with a damp strip of tea towel or baking strips so it bakes more evenly.",
  },
  {
    problem: "It's dry and crumbly",
    causes: "Overbaking, too much flour (usually from scooping), or not enough fat or sugar.",
    fix: "Weigh your flour, check the cake early, and brush layers with a little sugar syrup if you need to rescue one.",
  },
  {
    problem: "It's dense, heavy or rubbery",
    causes: "Under-creamed butter and sugar, overmixing once the flour is in, or old baking powder.",
    fix: "Cream well, fold gently, and test your baking powder by dropping a teaspoon into hot water. It should fizz enthusiastically.",
  },
  {
    problem: "The batter curdled",
    causes: "Eggs added too quickly or too cold, so the emulsion breaks.",
    fix: "Add eggs one at a time with a spoonful of flour each. If it does split, carry on; it'll usually come back together once the flour is in.",
  },
  {
    problem: "It stuck to the tin",
    causes: "No lining, or turning it out too soon or too late.",
    fix: "Line the base, leave it 5–10 minutes before turning out, and run a thin knife around the edge first.",
  },
  {
    problem: "The fruit sank to the bottom",
    causes: "The batter is too thin to hold it, or the fruit is wet or heavy.",
    fix: "Toss fruit in a little of the flour before adding it, and make sure it's dry. Chop very large pieces smaller.",
  },
];

export default function TipsPage() {
  return (
    <div className="container section">
      <header className="page-header">
        <p className="eyebrow">Learned the hard way</p>
        <h1>Baking tips &amp; common mistakes</h1>
        <p className="lead">
          I&apos;ve made every one of the mistakes on this page, some of them
          more than once. Here&apos;s what I&apos;ve learned, so your next cake
          comes out just the way you hoped.
        </p>
      </header>

      <section aria-labelledby="tips-heading">
        <h2 id="tips-heading">My golden rules</h2>
        <ol className="tip-grid">
          {tips.map((tip, i) => (
            <li key={tip.title} className="card tip-card">
              <span className="tip-number" aria-hidden="true">
                {i + 1}
              </span>
              <h3>{tip.title}</h3>
              <p>{tip.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="mistakes-heading" className="section-gap">
        <h2 id="mistakes-heading">What went wrong?</h2>
        <p className="muted">Tap a problem to see the usual culprits and how I fix them.</p>
        <div className="faq">
          {mistakes.map((m) => (
            <details key={m.problem}>
              <summary>{m.problem}</summary>
              <dl>
                <dt>Usually because</dt>
                <dd>{m.causes}</dd>
                <dt>What to do</dt>
                <dd>{m.fix}</dd>
              </dl>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}

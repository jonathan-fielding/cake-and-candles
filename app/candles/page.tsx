import type { Metadata } from "next";
import Link from "next/link";
import { CandleArt, CandleCake } from "@/components/CandleArt";
import { candleGroups, candles } from "@/lib/candles";

export const metadata: Metadata = {
  title: "Types of candles",
  description:
    "Birthday and cake candles first, then every other kind: tapers, pillars, votives, tealights, jars and the waxes they're made from. Plus candle safety and a short history.",
};

const safety = [
  {
    title: "Blowing out",
    text: "The birthday person gets the first go, and nobody helps unless they're asked. Little ones can blow from the side, or I hold the cake low and tilted slightly towards them. Once they're out, pull the candles straight up so the wicks don't smoulder in the icing.",
  },
  {
    title: "Wax on the icing",
    text: "Use the little holders, or stand candles on a disc of fondant or a chocolate button. Light them at the very last moment and blow them out after one chorus. If wax does drip, let it set, then flick it off with the tip of a knife. It lifts cleanly once it's hard.",
  },
  {
    title: "Sparklers and fountains",
    text: "They're small fireworks, so read the packet and only use indoor ones inside. Light them at the table, keep them away from hair, sleeves, balloons and bunting, and never let children hold them. The wires stay hot, so lift them out with tongs and drop them in a glass of water.",
  },
  {
    title: "Carrying a lit cake",
    text: "Light the candles where the cake will be eaten if you can. If you have to carry it in, have someone open the doors for you, walk slowly, and hold it away from your face. Long hair tied back, please.",
  },
  {
    title: "Germs, a little bit",
    text: "A food scientist at Clemson University measured it: blowing out candles left around 14 times more bacteria on the icing. I'm not going to stop, but if someone has a cold, give them a cupcake of their own to blow out.",
  },
  {
    title: "Everyday candles",
    text: "Never leave a lit candle in an empty room, keep them out of draughts and away from curtains and shelves, and keep the wick trimmed to about 5mm. Stand every candle on something heat-proof.",
  },
];

const history = [
  {
    when: "Ancient Greece",
    title: "A cake that glowed like the moon",
    text: "The story often goes that Greeks offered round honey cakes lit with candles to Artemis, goddess of the moon, so they shone like the moon itself. The evidence is thin, but it's a lovely story and I tell it anyway.",
  },
  {
    when: "1746",
    title: "A count's enormous birthday cake",
    text: "One of the earliest written descriptions of a birthday cake with candles comes from Germany, from a celebration for Count Nikolaus Ludwig von Zinzendorf. His cake was described as being as big as any oven could bake, with a hole for a candle for every year of his life.",
  },
  {
    when: "18th–19th century",
    title: "Kinderfest and the light of life",
    text: "German families celebrated children's birthdays with a cake and a candle for each year, plus one extra for the year to come. I tell more of this in my history of cake.",
  },
  {
    when: "1893",
    title: "The song arrives",
    text: "Sisters Mildred and Patty Hill published a children's song called 'Good Morning to All'. Its tune became 'Happy Birthday to You'. In 2015 a US court ruled that the copyright claim on the song wasn't valid, so now anyone can sing it.",
  },
  {
    when: "1900s",
    title: "Forty candles to a box",
    text: "Cheap paraffin wax made thin, brightly coloured cake candles easy to mass produce, and the twisted spiral candle became the one we all know. Number candles, trick candles and singing lotus flowers came later, to everyone's delight.",
  },
  {
    when: "Today",
    title: "One breath, one wish",
    text: "The rule in our house is that you make a wish silently and blow out every candle in one breath, or it won't come true. Nobody has ever been able to tell me where that rule came from, but I'm not willing to risk breaking it.",
  },
];

export default function CandlesPage() {
  return (
    <div className="container section">
      <header className="page-header candles-header">
        <div>
          <p className="eyebrow">Light them up</p>
          <h1>Types of candles</h1>
          <p className="lead">
            A cake isn&apos;t a birthday cake until it has candles on it. So
            here&apos;s my guide to every kind I&apos;ve put on a cake, and
            then all the others: the ones on the dinner table and the waxes
            they&apos;re all made from. There&apos;s also some safety advice
            and a short history of birthday candles.
          </p>
        </div>
        <CandleCake className="candles-hero-art" />
      </header>

      <nav aria-label="On this page" className="family-jump">
        <ul>
          {candleGroups.map((group) => (
            <li key={group.id}>
              <a href={`#${group.id}`}>{group.eyebrow}</a>
            </li>
          ))}
          <li>
            <a href="#safety">Safety</a>
          </li>
          <li>
            <a href="#history">History</a>
          </li>
        </ul>
      </nav>

      {candleGroups.map((group) => (
        <section key={group.id} id={group.id} className="type-family" aria-labelledby={`${group.id}-heading`}>
          <p className="eyebrow">{group.eyebrow}</p>
          <h2 id={`${group.id}-heading`}>{group.title}</h2>
          <p className="muted">{group.blurb}</p>
          <ul className={group.id === "cake" ? "candle-grid candle-grid-feature" : "candle-grid"}>
            {candles
              .filter((c) => c.group === group.id)
              .map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/candles/${c.slug}/`}
                    className="card card-link candle-card"
                    style={{ "--accent": c.art.accent } as React.CSSProperties}
                  >
                    <CandleArt className="candle-card-art" {...c.art} />
                    <div>
                      <h3>{c.name}</h3>
                      <p>{c.summary}</p>
                    </div>
                  </Link>
                </li>
              ))}
          </ul>
        </section>
      ))}

      <section id="safety" className="type-family" aria-labelledby="safety-heading">
        <p className="eyebrow">Mind your fingers</p>
        <h2 id="safety-heading">Safety and etiquette</h2>
        <p className="muted">
          Candles and cake are a wonderful mix, right up until someone&apos;s
          fringe catches. These are the rules I follow.
        </p>
        <ul className="tip-grid">
          {safety.map((item, i) => (
            <li key={item.title} className="card tip-card">
              <span className="tip-number" aria-hidden="true">
                {i + 1}
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="history" className="type-family narrow" aria-labelledby="history-heading">
        <p className="eyebrow">Where it all started</p>
        <h2 id="history-heading">A short history of birthday candles</h2>
        <p className="muted">
          Nobody knows exactly when the first candle went on the first cake,
          but here&apos;s how I understand it.
        </p>
        <ol className="timeline candle-timeline">
          {history.map((item) => (
            <li key={item.when}>
              <p className="timeline-when">{item.when}</p>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <aside className="callout">
        <p>
          Now you need something to put them on. My{" "}
          <Link href="/recipes/">recipes page</Link> has a Victoria sponge and
          a chocolate fudge cake that have both carried a lot of candles, and
          there&apos;s more birthday cake history in my{" "}
          <Link href="/history/">short history of cake</Link>.
        </p>
      </aside>
    </div>
  );
}

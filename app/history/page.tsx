import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "A short history of cake",
  description: "How cake went from honey-sweetened bread to the layered, frosted centrepiece we know today.",
};

const timeline = [
  {
    when: "Ancient Egypt",
    title: "Bread, but sweeter",
    text: "The earliest 'cakes' were really enriched breads, sweetened with honey and studded with dates or nuts. Egyptian bakers were skilled enough that the line between bread and cake was already starting to blur.",
  },
  {
    when: "Ancient Rome",
    title: "Cakes for the gods (and guests)",
    text: "Romans baked libum, a small cheese cake offered to household gods, and placenta, a layered dish of dough, cheese and honey that Cato wrote down around 160 BC. It's often called an ancestor of cheesecake.",
  },
  {
    when: "Medieval Europe",
    title: "The word arrives",
    text: "English borrowed 'cake' from the Old Norse kaka in the 1200s. Cakes of the time were usually yeast-raised and heavy with dried fruit, spices and honey: closer to a festive bread than a sponge.",
  },
  {
    when: "1600s–1700s",
    title: "Hoops, icing and lots of eggs",
    text: "Bakers began using round tins and hoops, and icing made from boiled sugar and egg white appeared. Eventually beaten eggs replaced yeast as the way to make cakes rise. The pound cake, with its pound each of four ingredients, dates from this time.",
  },
  {
    when: "18th-century Germany",
    title: "Birthday cake and candles",
    text: "The Kinderfest tradition put a cake with candles in front of children on their birthday, one candle for each year plus one for the year to come. I like to think that's where the whole thing really began.",
  },
  {
    when: "1840s",
    title: "Baking powder changes everything",
    text: "Chemical leaveners had been around for a while, but in 1843 Alfred Bird in Birmingham made a baking powder for his wife, who couldn't eat eggs or yeast. Reliable rising agents made light cakes possible for everyday home bakers.",
  },
  {
    when: "Victorian Britain",
    title: "Afternoon tea and the Victoria sponge",
    text: "Afternoon tea became fashionable, and with it a jam-filled sponge named after Queen Victoria. It's still the cake I'd pick if I could only bake one ever again.",
  },
  {
    when: "1900s",
    title: "Oven dials, chiffon and cake mix",
    text: "Gas and electric ovens with thermostats made baking far more predictable. A Los Angeles baker named Harry Baker invented chiffon cake in 1927 and kept it secret for twenty years, and boxed cake mixes took off after the Second World War.",
  },
  {
    when: "Today",
    title: "Every kind of cake, everywhere",
    text: "Bake-off shows, cake decorating videos and recipes from every corner of the world mean we can bake just about anything at home. Which is great news for me, and for anyone who lives near me.",
  },
];

export default function HistoryPage() {
  return (
    <div className="container section narrow">
      <header className="page-header">
        <p className="eyebrow">Once upon a crumb</p>
        <h1>A short history of cake</h1>
        <p className="lead">
          People have been baking something sweet to celebrate for thousands of
          years. This isn&apos;t a scholarly account, just the bits of cake
          history I find most fun to tell people at parties (whether they ask
          or not).
        </p>
      </header>

      <ol className="timeline">
        {timeline.map((item) => (
          <li key={item.when}>
            <p className="timeline-when">{item.when}</p>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

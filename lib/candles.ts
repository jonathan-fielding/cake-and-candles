export type CandleGroupId = "cake" | "home" | "wax";

export type CandleGroup = {
  id: CandleGroupId;
  title: string;
  eyebrow: string;
  blurb: string;
  // Heading for the "see also" list on each candle's page.
  moreTitle: string;
};

// Which drawing to use for a candle. See components/CandleArt.tsx.
export type CandleShape =
  | "spiral"
  | "number"
  | "letter"
  | "sparkler"
  | "trick"
  | "flower"
  | "slim"
  | "novelty"
  | "taper"
  | "pillar"
  | "votive"
  | "tealight"
  | "jar"
  | "floating"
  | "gel";

export type CandleArtSpec = {
  shape: CandleShape;
  wax: string;
  accent?: string;
  glyph?: string;
};

export type Candle = {
  slug: string;
  name: string;
  group: CandleGroupId;
  summary: string;
  intro: string[];
  facts: { label: string; value: string }[];
  tips: string[];
  watchOut?: string;
  art: CandleArtSpec;
};

export const candleGroups: CandleGroup[] = [
  {
    id: "cake",
    title: "Birthday and cake candles",
    eyebrow: "On the cake",
    moreTitle: "More cake candles",
    blurb:
      "The little ones that go on top. They only have to burn for a verse of Happy Birthday, so they're thin, bright and gone in a puff.",
  },
  {
    id: "home",
    title: "Candles around the house",
    eyebrow: "On the table",
    moreTitle: "More candles for the house",
    blurb:
      "The shapes and sizes you'll find on dinner tables, windowsills and the edge of the bath, sorted by how they're made to stand and burn.",
  },
  {
    id: "wax",
    title: "What candles are made of",
    eyebrow: "In the wax",
    moreTitle: "Other waxes",
    blurb:
      "Any of the shapes above can be made from different waxes, and the wax changes how a candle burns, smells and looks.",
  },
];

export const candles: Candle[] = [
  // ---------- On the cake ----------
  {
    slug: "spiral-birthday-candles",
    name: "Classic spiral candles",
    group: "cake",
    summary: "The thin, twisted, pastel candles that come forty to a box.",
    intro: [
      "If you close your eyes and picture a birthday cake, these are the candles on it. They're thin sticks of paraffin wax, twisted into a spiral and dyed every colour of the sweet shop, and they usually come with a bag of little plastic holders.",
      "They burn fast on purpose. You get just enough time to light them all, carry the cake in, sing, make a wish and blow, and not much more. I always keep a spare box in the baking drawer, because somebody always forgets.",
    ],
    facts: [
      { label: "Burns for", value: "About 5–10 minutes" },
      { label: "Usually made from", value: "Paraffin wax" },
      { label: "Best for", value: "Any birthday, any age, any cake" },
    ],
    tips: [
      "Use the holders. They catch the drips that would otherwise run straight into the icing.",
      "Light from the middle of the cake outwards so you don't lean over lit candles.",
      "For a big birthday, cluster them in a ring rather than spreading them evenly. It looks fuller and is easier to blow out.",
    ],
    watchOut:
      "With a lot of candles the heat adds up fast and the icing underneath can start to soften. Light them at the last moment.",
    art: { shape: "spiral", wax: "#f2a7c3", accent: "#e05d6f" },
  },
  {
    slug: "number-candles",
    name: "Number candles",
    group: "cake",
    summary: "One big moulded numeral instead of a whole forest of little candles.",
    intro: [
      "Number candles are moulded in the shape of a digit, with a wick at the top. They're the kind solution for anyone past about thirty, when a candle per year starts to look like a fire hazard, and they're brilliant for a first birthday photo.",
      "They come plain, glittery, metallic, outlined in white, or covered in sprinkles. The good ones have a little spike moulded into the base that pushes straight into the cake.",
    ],
    facts: [
      { label: "Burns for", value: "Around 10 minutes, depending on size" },
      { label: "Usually made from", value: "Paraffin wax" },
      { label: "Best for", value: "Milestone birthdays and anniversaries" },
    ],
    tips: [
      "Blow them out quickly and they'll last for several birthdays. I have a well-used 4 that has done three different children.",
      "Push them in before the cake goes out, so you aren't wrestling with them in front of everyone.",
      "Two numbers side by side look best on a cake at least 20cm across.",
    ],
    watchOut:
      "The wick sits right on top of a fat block of wax, so they drip more than they look like they will. Don't leave them burning while you hunt for the knife.",
    art: { shape: "number", wax: "#f3c74f", accent: "#d98a2b", glyph: "4" },
  },
  {
    slug: "letter-candles",
    name: "Letter candles",
    group: "cake",
    summary: "A row of single letters that spell out a name or HAPPY BIRTHDAY.",
    intro: [
      "Letter candles come in sets that spell HAPPY BIRTHDAY, or as single letters so you can spell a name. Each letter has its own wick, and they're usually joined to a short pick so they stand in a neat line.",
      "I love them on a long traybake, where there's room to spell the whole thing out. On a round cake they work better in a gentle curve around one side.",
    ],
    facts: [
      { label: "Burns for", value: "About 5–10 minutes" },
      { label: "Usually made from", value: "Paraffin wax" },
      { label: "Best for", value: "Traybakes and loaf cakes, and anyone with a short name" },
    ],
    tips: [
      "Lay them out on the counter first and check the spelling. I once served a cake that said HAPPY BITRHDAY.",
      "Use a long match or a taper to light a whole row without singeing your knuckles.",
    ],
    art: { shape: "letter", wax: "#9fd3e6", accent: "#3f8fb0", glyph: "A" },
  },
  {
    slug: "sparkler-and-fountain-candles",
    name: "Sparkler and fountain candles",
    group: "cake",
    summary: "Fizzing cake sparklers and ice fountains for when a flame isn't dramatic enough.",
    intro: [
      "Cake sparklers are short wires coated in a firework mix that fizzes and throws off tiny cold-looking sparks. Ice fountains are their bigger cousins: a cardboard tube on a spike that shoots up a fountain of sparks for half a minute or so. You'll see them arrive on the table at restaurants with the lights turned down.",
      "They're small fireworks, not candles, and you can't blow them out. You just have to enjoy the show and wait for them to finish.",
    ],
    facts: [
      { label: "Burns for", value: "Roughly 30–60 seconds" },
      { label: "Made from", value: "A metal wire or card tube and firework composition" },
      { label: "Best for", value: "Big entrances and dimmed lights" },
    ],
    tips: [
      "Read the packet. Some are made for use indoors, others are outdoor only.",
      "Light them at the table, not in the kitchen, and keep them well away from hair, balloons and paper bunting.",
      "Lift out the spent wires with tongs once they've cooled, before anyone cuts a slice.",
    ],
    watchOut:
      "The wire stays hot for a while after the sparks stop, and fine ash settles on the icing. Never let small children hold one, and scrape away the top of the icing where the sparks landed.",
    art: { shape: "sparkler", wax: "#9aa1ab", accent: "#f0a95a" },
  },
  {
    slug: "trick-relighting-candles",
    name: "Trick relighting candles",
    group: "cake",
    summary: "The ones that flicker back to life seconds after you blow them out.",
    intro: [
      "These look exactly like ordinary spiral candles, which is the whole point. The wick has tiny flecks of magnesium in it. When you blow the flame out, the wick keeps glowing, the magnesium catches and sparkles, and that's hot enough to relight the wax vapour.",
      "The birthday person blows, everyone cheers, and then one by one the candles pop back on. It never stops being funny, at least to everyone except the person doing the blowing.",
    ],
    facts: [
      { label: "Burns for", value: "About 5–10 minutes" },
      { label: "Usually made from", value: "Paraffin wax with magnesium in the wick" },
      { label: "Best for", value: "Siblings, dads and anyone with a sense of humour" },
    ],
    tips: [
      "Mix two or three in with ordinary candles so the trick takes a moment to spot.",
      "To put them out for good, pinch the wick with damp fingers or dip the top in a glass of water.",
    ],
    watchOut:
      "Save them for people who'll find it funny, and not for anyone who struggles for breath and will keep blowing harder. Make sure every one is properly out, in water, before it goes in the bin.",
    art: { shape: "trick", wax: "#b9e4c9", accent: "#6f9a4f" },
  },
  {
    slug: "musical-flower-candles",
    name: "Musical flower candles",
    group: "cake",
    summary: "The plastic lotus that bursts open, spins and plays Happy Birthday.",
    intro: [
      "You light the fuse in the middle, a fountain of sparks shoots up, the petals spring open to reveal a ring of tiny candles, and the whole thing spins while a tinny chip plays Happy Birthday. Usually over and over again, long after everyone has stopped singing.",
      "It's gloriously over the top and children adore it. I bought one as a joke and now I'm asked for it every year.",
    ],
    facts: [
      { label: "Burns for", value: "A few minutes, while the music plays on" },
      { label: "Made from", value: "Plastic petals, small wax candles and a centre fountain" },
      { label: "Best for", value: "Children's parties and people who enjoy chaos" },
    ],
    tips: [
      "Stand it on a small plate next to the cake rather than pushing the spike into the sponge. It's heavy and leans.",
      "Fold the petals closed before lighting, or they won't open with the same drama.",
    ],
    watchOut:
      "The petals are plastic and sit very close to the flames. Keep an eye on it the whole time it's lit, and take the battery out afterwards or it may sing in the drawer for weeks.",
    art: { shape: "flower", wax: "#f07a8d", accent: "#d6455d" },
  },
  {
    slug: "tall-taper-cake-candles",
    name: "Tall taper cake candles",
    group: "cake",
    summary: "Long, slim, elegant candles for grown-up cakes and dinner party desserts.",
    intro: [
      "These are skinny tapers about twice the height of a spiral candle, often in muted colours, metallic gold or soft gradients. A handful standing at different heights on a simple buttercream cake looks like it came from a smart bakery.",
      "Because they're taller they burn for longer, so they're good when you want to carry the cake in slowly and let the room take it in.",
    ],
    facts: [
      { label: "Burns for", value: "About 15–20 minutes" },
      { label: "Usually made from", value: "Paraffin, sometimes beeswax" },
      { label: "Best for", value: "Grown-up birthdays, anniversaries and naked cakes" },
    ],
    tips: [
      "Cut a few shorter with a hot knife so they stand at staggered heights.",
      "Push them in at least 2cm so they don't topple as the cake travels.",
    ],
    watchOut:
      "Tall candles drip further. Use holders or a little disc of fondant underneath, and blow them out before the wax reaches the icing.",
    art: { shape: "slim", wax: "#e8d3b0", accent: "#c9a14a" },
  },
  {
    slug: "novelty-shaped-candles",
    name: "Novelty and character candles",
    group: "cake",
    summary: "Little moulded stars, animals, footballs and favourite characters.",
    intro: [
      "These are moulded candles in just about any shape you can think of: stars, dinosaurs, unicorns, footballs, tiny cakes and cartoon characters. Each one has a wick on top and a spike underneath.",
      "One good novelty candle is often enough to make a plain cake feel personal. They tend to be saved afterwards rather than thrown away.",
    ],
    facts: [
      { label: "Burns for", value: "About 10 minutes" },
      { label: "Usually made from", value: "Painted paraffin wax" },
      { label: "Best for", value: "Themed parties and keepsakes" },
    ],
    tips: [
      "Blow them out early if you want to keep them. The painted details melt first.",
      "Pair one novelty candle with plain spirals in a matching colour.",
    ],
    art: { shape: "novelty", wax: "#ffd166", accent: "#e0782f" },
  },

  // ---------- Around the house ----------
  {
    slug: "taper-candles",
    name: "Taper candles",
    group: "home",
    summary: "Long, slender candles that narrow towards the top and stand in a candlestick.",
    intro: [
      "A taper is a long, thin candle with a slightly wider base that slots into a candlestick. They're the oldest shape we still use every day: for centuries, a taper was simply what a candle was.",
      "They come in every length from short chamber candles to tall church tapers, and they're dipped or moulded. Dipped tapers, made by dunking a wick into wax over and over, have a lovely uneven, handmade look.",
    ],
    facts: [
      { label: "Burns for", value: "About 6–10 hours for a 25cm taper" },
      { label: "Usually made from", value: "Paraffin, beeswax or stearin" },
      { label: "Best for", value: "Candlesticks, tablescapes and power cuts" },
    ],
    tips: [
      "If a taper is loose in the holder, warm the base in hot water for a minute and press it in, or use a little candle putty.",
      "Keep them out of draughts. A draught makes a taper burn unevenly and drip down one side.",
    ],
    art: { shape: "taper", wax: "#fbf3e4", accent: "#c9a14a" },
  },
  {
    slug: "dinner-candles",
    name: "Dinner candles",
    group: "home",
    summary: "Unscented, usually dripless tapers made for the dining table.",
    intro: [
      "Dinner candles are a kind of taper, sized and made for the dining table. They're almost always unscented, because nothing should compete with the food, and they're usually labelled dripless, which means a harder wax that pools neatly instead of running down.",
      "This is the candle I light when there's a proper pudding on the way. Low, warm light and a cake in the middle of the table is my idea of a perfect evening.",
    ],
    facts: [
      { label: "Burns for", value: "About 7–9 hours" },
      { label: "Usually made from", value: "Hard paraffin or stearin blends" },
      { label: "Best for", value: "Dinner parties and Sunday lunches" },
    ],
    tips: [
      "Light them just before people sit down, so they're still tall when the cake arrives.",
      "Keep them below eye level or well above it, so guests can see each other across the table.",
      "Unscented really matters. A vanilla candle next to a lemon tart is not a pleasant mix.",
    ],
    art: { shape: "taper", wax: "#8c2f39", accent: "#c9a14a" },
  },
  {
    slug: "pillar-candles",
    name: "Pillar candles",
    group: "home",
    summary: "Chunky, freestanding candles that burn for days.",
    intro: [
      "A pillar is a thick candle that stands on its own without a holder. They range from small squat ones to great church pillars, and the wax is firm enough to keep its shape as the middle burns down.",
      "A good pillar burns into a hollow with a thin wall of wax that glows from inside, which is my favourite thing about them.",
    ],
    facts: [
      { label: "Burns for", value: "Anywhere from 30 to over 100 hours" },
      { label: "Usually made from", value: "Paraffin, palm, beeswax or blends" },
      { label: "Best for", value: "Fireplaces, lanterns and long winter evenings" },
    ],
    tips: [
      "On the first burn, leave it lit long enough for the melted pool to reach almost to the edge, roughly an hour for every 2.5cm (inch) across. Otherwise it tunnels down the middle and wastes the rest.",
      "Always stand pillars on a plate or tray, never straight on wood.",
    ],
    watchOut:
      "Don't let a pillar burn for more than about four hours at a time. The wick mushrooms and the flame gets too big.",
    art: { shape: "pillar", wax: "#f7e7ce", accent: "#d98a2b" },
  },
  {
    slug: "votive-candles",
    name: "Votive candles",
    group: "home",
    summary: "Small, stubby candles that are meant to melt completely inside a holder.",
    intro: [
      "A votive is a little cylinder of wax, about 5cm tall. The name comes from votive offerings: candles lit in churches with a prayer or a wish. Unlike a pillar, a votive is designed to melt into a pool of liquid, so it always needs a holder that fits snugly around it.",
      "Rows of votives in coloured glass are the easiest way I know to make a garden table look magical.",
    ],
    facts: [
      { label: "Burns for", value: "About 10–15 hours" },
      { label: "Usually made from", value: "Paraffin, soy or blends" },
      { label: "Best for", value: "Glass holders, weddings and garden tables" },
    ],
    tips: [
      "Add a few drops of water to the bottom of the holder before you put the candle in. The leftover wax pops out much more easily.",
      "Use a holder only slightly wider than the candle so the wax pool feeds the flame.",
    ],
    art: { shape: "votive", wax: "#f6d6de", accent: "#d6455d" },
  },
  {
    slug: "tealights",
    name: "Tealights",
    group: "home",
    summary: "Tiny candles in their own little metal or clear plastic cups.",
    intro: [
      "Tealights are small discs of wax that come ready to use in a thin cup. They were originally made to sit under a teapot warmer and keep the tea hot, which is how they got their name. I find that very fitting for a cake website.",
      "They're cheap, safe-ish and everywhere, and a dozen of them down a table looks lovely.",
    ],
    facts: [
      { label: "Burns for", value: "About 4 hours, or 8 for long-burn ones" },
      { label: "Usually made from", value: "Paraffin, sometimes soy" },
      { label: "Best for", value: "Teapot and fondue warmers, lanterns and table runs" },
    ],
    tips: [
      "Put them in a holder. The cup gets hot enough to mark a table or melt plastic.",
      "Space them at least 10cm apart. Bunched together, they heat each other up until the whole pool can catch light.",
    ],
    watchOut:
      "Never put tealights on top of a TV, a radiator or anything else that's warm already.",
    art: { shape: "tealight", wax: "#fffaf2", accent: "#b7bcc4" },
  },
  {
    slug: "container-candles",
    name: "Container and jar candles",
    group: "home",
    summary: "Wax poured straight into a glass, tin or ceramic pot.",
    intro: [
      "Container candles are poured into the vessel they burn in: a glass jar, a tin, a ceramic pot or a teacup. Because the container holds the wax, they can use soft waxes like soy and coconut that would slump if you tried to make a pillar from them.",
      "Most scented candles are container candles. They're also the easiest kind to make at home, and a vintage teacup candle makes a sweet present for a fellow baker.",
    ],
    facts: [
      { label: "Burns for", value: "From 20 to 80 hours, depending on size" },
      { label: "Usually made from", value: "Soy, coconut, rapeseed or paraffin blends" },
      { label: "Best for", value: "Scented candles and gifts" },
    ],
    tips: [
      "Trim the wick to about 5mm before every burn, to stop soot and that black mushroom on the wick.",
      "Burn it until the melt pool reaches the sides the first time, or it will tunnel.",
      "Stop when there's about 1cm of wax left. The bottom of the glass can get hot enough to crack.",
    ],
    art: { shape: "jar", wax: "#f3e1c8", accent: "#a8572b" },
  },
  {
    slug: "floating-candles",
    name: "Floating candles",
    group: "home",
    summary: "Flat little discs and flowers that bob on a bowl of water.",
    intro: [
      "Floating candles are shaped to sit on water: wide and flat, with a weighted base so they stay upright. Most are simple discs, but you can buy flowers, hearts and stars.",
      "A shallow bowl of water with a few floating candles and some petals is one of my favourite centrepieces, because it's low enough to talk over and you can't knock it into the cake.",
    ],
    facts: [
      { label: "Burns for", value: "About 4–8 hours" },
      { label: "Usually made from", value: "Paraffin" },
      { label: "Best for", value: "Centrepieces, bowls and garden water features" },
    ],
    tips: [
      "Dry the wick before lighting if it got splashed.",
      "Add the candles to the water just before guests arrive, so the wicks stay dry.",
    ],
    art: { shape: "floating", wax: "#ffffff", accent: "#4d9fc4" },
  },
  {
    slug: "scented-candles",
    name: "Scented candles",
    group: "home",
    summary: "Candles with fragrance oil blended into the wax.",
    intro: [
      "A scented candle has fragrance oil mixed into the wax before it's poured. Candle makers talk about 'cold throw', how much you can smell it before it's lit, and 'hot throw', how well it fills a room once it's burning.",
      "My kitchen is usually scented with cake anyway, but I do have a soft vanilla one for the living room. Any candle shape can be scented, though most are jars.",
    ],
    facts: [
      { label: "Burns for", value: "Depends on size and wax" },
      { label: "Usually made from", value: "Soy, coconut, paraffin or blends, plus fragrance" },
      { label: "Best for", value: "Living rooms, bathrooms and cosy evenings" },
    ],
    tips: [
      "Let a new scented candle burn for an hour or two before you decide whether you like it. The hot throw is often quite different from the cold.",
      "Keep scented candles away from the table when you're eating, and especially away from the cake.",
    ],
    watchOut:
      "Strong fragrances can bother people with asthma or allergies, and some essential oils aren't good for cats and dogs. Ventilate the room and keep pets away from the flame.",
    art: { shape: "jar", wax: "#d9c2ef", accent: "#7d5ba6" },
  },

  // ---------- In the wax ----------
  {
    slug: "paraffin-wax",
    name: "Paraffin wax",
    group: "wax",
    summary: "The cheap, reliable, everyday wax that most candles are made from.",
    intro: [
      "Paraffin is a by-product of refining crude oil, and it's been the standard candle wax since the second half of the 1800s. It's inexpensive, takes colour and scent beautifully, and can be made harder or softer for any kind of candle.",
      "Almost every birthday candle you've ever blown out was paraffin. Some people avoid it because it comes from fossil fuels, which is a fair reason. I still use it on cakes, because nothing else makes a spiral candle quite so cheerful.",
    ],
    facts: [
      { label: "Comes from", value: "Crude oil refining" },
      { label: "Melts at", value: "Roughly 46–68°C, depending on the grade" },
      { label: "Best for", value: "Birthday candles, pillars, tapers and tealights" },
    ],
    tips: [
      "Paraffin carries strong scents well, so a little goes a long way in a scented candle.",
      "Keep the wick trimmed; a long wick on a paraffin candle is the usual cause of black soot.",
    ],
    art: { shape: "pillar", wax: "#f4f1ea", accent: "#9aa1ab" },
  },
  {
    slug: "beeswax",
    name: "Beeswax",
    group: "wax",
    summary: "Golden, honey-scented wax made by bees, with a bright, slow flame.",
    intro: [
      "Beeswax is made by honeybees to build their combs, and beekeepers melt and filter it after the honey is taken. It's naturally golden and smells faintly of honey, even before you light it.",
      "It has a high melting point, so beeswax candles burn slowly with a warm, bright flame and drip very little. You'll often read that beeswax cleans the air. I've never seen good evidence for that, but I don't need it to: they're just lovely.",
    ],
    facts: [
      { label: "Comes from", value: "Honeybee comb" },
      { label: "Melts at", value: "About 62–64°C" },
      { label: "Best for", value: "Tapers, pillars and hand-rolled candles" },
    ],
    tips: [
      "A white bloom on old beeswax is normal. Rub it with a soft cloth or warm it with a hairdryer and the shine comes back.",
      "Rolled beeswax sheets are the easiest candle-making project for children. No melting needed.",
    ],
    art: { shape: "taper", wax: "#e7b33c", accent: "#b9801c" },
  },
  {
    slug: "soy-wax",
    name: "Soy wax",
    group: "wax",
    summary: "A soft, creamy wax made from soybean oil, perfect for jars.",
    intro: [
      "Soy wax is made by hydrogenating soybean oil, which turns the liquid oil into a solid. It's soft and has a low melting point, so it's nearly always poured into containers.",
      "It burns slowly and cleanly and holds scent well, which is why so many small candle makers love it. The one quirk I find funny as a baker is 'frosting': a white, crystalline bloom on the surface of the wax. It's harmless and doesn't change how the candle burns.",
    ],
    facts: [
      { label: "Comes from", value: "Soybean oil" },
      { label: "Melts at", value: "About 49–54°C" },
      { label: "Best for", value: "Container and scented candles" },
    ],
    tips: [
      "Soy candles take a full first burn to the edge to set up a good 'memory'. Give it a couple of hours.",
      "Keep soy candles out of direct sun; the soft wax can sweat or soften on a hot windowsill.",
    ],
    art: { shape: "jar", wax: "#fbf5ea", accent: "#6f9a4f" },
  },
  {
    slug: "coconut-wax",
    name: "Coconut wax",
    group: "wax",
    summary: "Silky, creamy coconut wax, usually blended into luxury candles.",
    intro: [
      "Coconut wax is made from hydrogenated coconut oil. On its own it's very soft, so it's nearly always blended with soy, rapeseed or a little paraffin to firm it up.",
      "It's bright white, looks smooth and creamy like a perfect buttercream, and gives a good scent throw. It's also one of the pricier waxes, which is why you mostly find it in fancy candles.",
    ],
    facts: [
      { label: "Comes from", value: "Coconut oil" },
      { label: "Melts at", value: "Low, so it's almost always blended" },
      { label: "Best for", value: "Luxury container candles" },
    ],
    tips: [
      "Check the label: 'coconut wax' often means a blend, which is fine, but it's nice to know what's in it.",
    ],
    art: { shape: "jar", wax: "#ffffff", accent: "#7b4a2e" },
  },
  {
    slug: "rapeseed-wax",
    name: "Rapeseed wax",
    group: "wax",
    summary: "A plant wax from the yellow fields you see all over Britain in spring.",
    intro: [
      "Rapeseed wax is made by hydrogenating rapeseed oil, the same crop that turns British fields bright yellow in April and May. It behaves a lot like soy: soft, creamy and best in containers.",
      "The appeal for many makers in the UK is that it can be grown much closer to home than soy, coconut or palm.",
    ],
    facts: [
      { label: "Comes from", value: "Rapeseed (canola) oil" },
      { label: "Melts at", value: "Low, similar to soy" },
      { label: "Best for", value: "Container candles and wax melts" },
    ],
    tips: [
      "It's often blended with a little coconut to make it creamier and give a smoother top.",
    ],
    art: { shape: "jar", wax: "#f4e27a", accent: "#c9a14a" },
  },
  {
    slug: "palm-wax",
    name: "Palm wax",
    group: "wax",
    summary: "A hard plant wax that sets in pretty feathered crystals.",
    intro: [
      "Palm wax comes from palm oil. It's hard enough to make pillars and votives without additives, and as it cools it can set into a beautiful feathered or crystalline pattern, a bit like frost on a window.",
      "Palm oil farming has been linked to the clearing of rainforest, so if you buy palm wax candles, look for ones made with certified sustainable palm oil.",
    ],
    facts: [
      { label: "Comes from", value: "Palm oil" },
      { label: "Melts at", value: "About 58–62°C" },
      { label: "Best for", value: "Pillars and votives" },
    ],
    tips: [
      "Look for the RSPO certification mark, which shows the palm oil came from certified sustainable sources.",
    ],
    art: { shape: "pillar", wax: "#e9d7b9", accent: "#6f9a4f" },
  },
  {
    slug: "gel-candles",
    name: "Gel candles",
    group: "wax",
    summary: "Clear, jelly-like candles that can hold shells, glitter or fake fruit.",
    intro: [
      "Gel candles aren't wax at all. They're mineral oil thickened with a polymer resin into a clear, rubbery jelly. Because you can see through them, makers suspend things inside: shells, glass beads, glitter, or fake fruit to make candles that look exactly like a sundae or a cocktail.",
      "I have a soft spot for the ones that look like desserts. Just keep them well away from the actual desserts, so nobody gets confused.",
    ],
    facts: [
      { label: "Comes from", value: "Mineral oil and polymer resin" },
      { label: "Melts at", value: "Higher than most waxes, and burns hotter" },
      { label: "Best for", value: "Decorative and novelty candles" },
    ],
    tips: [
      "Only use thick, heat-resistant glass. Gel burns hotter than wax and thin glass can crack.",
    ],
    watchOut:
      "Don't embed anything that can catch light, like dried flowers or paper, and stop burning when there's still 2–3cm of gel left.",
    art: { shape: "gel", wax: "#a8dcf0", accent: "#e05d6f" },
  },
];

export function getCandle(slug: string): Candle | undefined {
  return candles.find((candle) => candle.slug === slug);
}

export function getCandleGroup(id: CandleGroupId): CandleGroup {
  const group = candleGroups.find((g) => g.id === id);
  if (!group) throw new Error(`Unknown candle group: ${id}`);
  return group;
}

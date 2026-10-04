import { getRecipe } from "@/lib/recipes";

export type FamilyId =
  | "foam"
  | "creamed"
  | "mixed"
  | "assembled"
  | "cheesecake"
  | "flourless"
  | "yeasted"
  | "keeping";

export type Family = {
  id: FamilyId;
  title: string;
  blurb: string;
};

// The drawing used for each type. See components/TypeArt.tsx.
export type CakeShape = "slice" | "ring" | "loaf" | "dome" | "roll" | "disc" | "check";

export type CakeType = {
  slug: string;
  name: string;
  family: FamilyId;
  origin: string;
  era: string;
  lift: string;
  texture: string;
  summary: string;
  about: string[];
  method: string[];
  tryIt: string;
  recipe?: { slug: string; note: string };
  shape: CakeShape;
  accent: string;
  crumb?: string;
};

export const families: Family[] = [
  {
    id: "foam",
    title: "Whisked foam cakes",
    blurb:
      "These rise mainly on air whisked into eggs. Light, delicate, and a little nerve-racking to fold.",
  },
  {
    id: "creamed",
    title: "Creamed butter cakes",
    blurb:
      "Butter and sugar beaten until fluffy, then eggs and flour. Rich, forgiving and dependable.",
  },
  {
    id: "mixed",
    title: "Stirred and oil cakes",
    blurb:
      "Wet into dry, a quick stir, and into the tin. Oil or buttermilk keeps them moist for days.",
  },
  {
    id: "assembled",
    title: "Layered and assembled cakes",
    blurb:
      "The showpieces: several parts made separately, then stacked, soaked, glazed or wrapped.",
  },
  {
    id: "cheesecake",
    title: "Cheesecakes",
    blurb:
      "Set with eggs rather than raised with flour. Technically custard tarts, but we'll let it slide.",
  },
  {
    id: "flourless",
    title: "Flourless and nut cakes",
    blurb:
      "Held together by eggs, chocolate or ground almonds. Dense, rich, and often gluten-free.",
  },
  {
    id: "yeasted",
    title: "Yeasted cakes",
    blurb:
      "Halfway between bread and cake, raised slowly with yeast and usually saved for a festival.",
  },
  {
    id: "keeping",
    title: "Fruit, spice and keeping cakes",
    blurb:
      "Dense cakes made to last, and often better for the wait. Tins at the back of the cupboard, mostly.",
  },
];

export const cakeTypes: CakeType[] = [
  // ---------- Foam ----------
  {
    slug: "sponge",
    name: "Fatless sponge",
    family: "foam",
    origin: "Europe",
    era: "1600s",
    lift: "Whisked whole eggs",
    texture: "Light, springy, open crumb",
    summary: "Eggs, sugar and flour, and not much else. The original sponge.",
    about: [
      "In the strictest sense a sponge is leavened only by whisked eggs, with little or no fat. It's one of the oldest cakes that doesn't use yeast; the earliest English recipe I know of is in Gervase Markham's The English Huswife from 1615.",
      "In Britain we also use the word for creamed cakes like the Victoria sponge, which confuses everyone. A true fatless sponge is lighter and drier, and it bends without cracking, which is why it's the one for rolling.",
    ],
    method: [
      "Whisk eggs and caster sugar for a good 5–8 minutes until pale and thick enough to leave a ribbon trail.",
      "Sift the flour over in two or three goes and fold it in with a big metal spoon, cutting through the middle and turning the bowl.",
      "Pour into a lined tin straight away and bake until it springs back. For a Swiss roll, roll it up in sugared paper while it's still warm.",
    ],
    tryIt:
      "Rolled around raspberry jam as a Swiss roll, or torn into a trifle with custard and sherry.",
    shape: "roll",
    accent: "#e05d6f",
  },
  {
    slug: "genoise",
    name: "Genoise",
    family: "foam",
    origin: "Genoa, Italy, then France",
    era: "1700s",
    lift: "Whole eggs whisked over heat",
    texture: "Fine, even, slightly dry crumb",
    summary: "The French pâtissier's sponge: whole eggs whisked warm, with a little melted butter.",
    about: [
      "Genoise takes its name from Genoa, but it was French pastry chefs who made it the base of nearly every gâteau. Warming the eggs and sugar over a pan of simmering water lets them whip up higher and hold more air.",
      "On its own it's quite plain and a touch dry. That's deliberate: it's built to be brushed with syrup or liqueur and layered with cream, fruit or buttercream, soaking up flavour without going soggy.",
    ],
    method: [
      "Whisk eggs and sugar in a bowl over barely simmering water until just warm, then off the heat until tripled in volume and cool.",
      "Fold in sifted flour in batches, then a little melted butter, loosened first with a spoonful of the batter so it doesn't sink.",
      "Bake straight away, cool, then split into layers and brush each one generously with syrup.",
    ],
    tryIt: "A strawberry fraisier, or any layered gâteau with crème pâtissière and fresh fruit.",
    shape: "slice",
    accent: "#e98aa0",
  },
  {
    slug: "chiffon",
    name: "Chiffon",
    family: "foam",
    origin: "Los Angeles, USA",
    era: "1927",
    lift: "Whipped egg whites and baking powder",
    texture: "Tall, moist and very tender",
    summary: "Oil instead of butter, whipped whites for height. Stays soft even in the fridge.",
    about: [
      "Chiffon was invented by Harry Baker, an insurance salesman turned caterer, who kept the recipe secret for twenty years before selling it to General Mills in 1947. His trick was vegetable oil, which nobody put in cakes at the time.",
      "Because oil stays liquid when cold, chiffon keeps its soft, bouncy texture straight from the fridge. That makes it a favourite across East and South-East Asia for cream cakes and the bright green pandan chiffon.",
    ],
    method: [
      "Whisk yolks, oil, liquid and sugar into the flour and baking powder to make a smooth, loose batter.",
      "Whip the whites with sugar to firm, glossy peaks and fold them into the yolk batter in three goes.",
      "Bake in an ungreased tube tin, then cool it upside down so the cake hangs and stretches rather than sinking.",
    ],
    tryIt: "Pandan or orange chiffon on its own, or a Japanese strawberry shortcake with cream.",
    shape: "ring",
    accent: "#6f9a4f",
  },
  {
    slug: "angel-food",
    name: "Angel food cake",
    family: "foam",
    origin: "United States",
    era: "Late 1800s",
    lift: "Whipped egg whites only",
    texture: "Snowy white, airy, chewy-soft",
    summary: "Egg whites, sugar and flour. No yolks, no fat, and a crumb like a cloud.",
    about: [
      "Angel food cake turned up in American cookbooks in the late 1800s, once rotary egg beaters made whipping a dozen whites something a person could reasonably do before lunch.",
      "There's no fat at all, so it's pure white inside with a slightly chewy, springy bite. It's lovely, and also the reason a lot of yolks end up as custard in my house.",
    ],
    method: [
      "Whip the whites with cream of tartar to soft peaks, then add sugar gradually until glossy and holding firm but not stiff peaks.",
      "Sift flour and more sugar over the top and fold very gently in several additions.",
      "Bake in an ungreased tube tin so the batter can cling and climb, then cool upside down, ideally balanced on a bottle.",
    ],
    tryIt: "Macerated strawberries and softly whipped cream. Cut it with a serrated knife, gently sawing.",
    shape: "ring",
    accent: "#e9b949",
    crumb: "#fbeedb",
  },
  {
    slug: "castella",
    name: "Castella",
    family: "foam",
    origin: "Nagasaki, Japan",
    era: "1500s",
    lift: "Whisked whole eggs",
    texture: "Bouncy, moist and close, with a honeyed crust",
    summary: "A honey sponge brought to Japan by Portuguese traders and perfected over centuries.",
    about: [
      "Portuguese merchants arrived in Nagasaki in the 16th century and brought a sweet egg bread with them. The name is thought to come from Castile, in Spain. Japanese bakers made it their own, and Nagasaki is still famous for it.",
      "It uses bread flour and honey or syrup, which gives it a surprisingly dense, moist, almost chewy texture and a dark caramelised top and bottom. It's baked as a big block and sliced into neat bars.",
    ],
    method: [
      "Whisk eggs and sugar to a thick foam, then beat in warm honey and a little milk.",
      "Fold in strong bread flour, then pour into a paper-lined wooden frame or deep tin and stir gently to pop large bubbles.",
      "Bake low and slow, then wrap tightly in cling film while warm and leave overnight so the crumb settles and turns moist.",
    ],
    tryIt: "A thick slice with green tea, trimmed of its sides so you get the dark top and bottom.",
    shape: "loaf",
    accent: "#a8572b",
    crumb: "#f2c45f",
  },
  {
    slug: "tres-leches",
    name: "Tres leches",
    family: "foam",
    origin: "Latin America",
    era: "1900s",
    lift: "Whisked eggs",
    texture: "Soaked, cold and creamy, yet still light",
    summary: "A sponge drenched in three milks until it's practically pudding.",
    about: [
      "Mexico, Nicaragua and several other countries all lay claim to tres leches. Many food historians link its spread to the tinned evaporated and condensed milk sold across Latin America in the 20th century, sometimes with recipes printed on the label.",
      "The base is a plain whisked sponge, sturdy enough to drink up a startling amount of liquid without falling apart. Done right it's soaked through but not soggy.",
    ],
    method: [
      "Bake a plain whisked sponge in a deep rectangular dish and let it cool.",
      "Mix evaporated milk, condensed milk and cream (the three milks), prick the cake all over and pour it over slowly.",
      "Chill for several hours or overnight, then cover with whipped cream or meringue.",
    ],
    tryIt: "Very cold, with a dusting of cinnamon and a few slices of mango or strawberries.",
    shape: "disc",
    accent: "#d98a2b",
    crumb: "#f7dca8",
  },

  // ---------- Creamed ----------
  {
    slug: "victoria-sponge",
    name: "Victoria sponge",
    family: "creamed",
    origin: "England",
    era: "Mid 1800s",
    lift: "Creamed butter and self-raising flour",
    texture: "Soft, buttery, tender crumb",
    summary: "Two buttery sponges, jam and cream. Named after Queen Victoria, loved by everyone.",
    about: [
      "Named after Queen Victoria, who was said to enjoy a slice with her afternoon tea. Baking powder had only just been invented, and it made this lighter, simpler creamed cake possible.",
      "Despite the name it's a butter cake, not a true sponge. It's built on equal weights of eggs, butter, sugar and flour, which makes it easy to remember and to scale.",
    ],
    method: [
      "Cream soft butter and caster sugar until pale and fluffy, then beat in the eggs one at a time.",
      "Fold in self-raising flour and a splash of milk, divide between two sandwich tins and bake until golden.",
      "Once cold, sandwich with raspberry jam and buttercream or whipped cream, and dust with icing sugar.",
    ],
    tryIt: "A pot of tea, and a garden if you have one.",
    recipe: { slug: "victoria-sponge", note: "Here's how I make mine, with weighed eggs." },
    shape: "slice",
    accent: "#e05d6f",
  },
  {
    slug: "pound",
    name: "Pound cake",
    family: "creamed",
    origin: "Britain",
    era: "Early 1700s",
    lift: "Air beaten into butter and eggs",
    texture: "Dense, buttery, tight crumb",
    summary: "Once literally a pound each of butter, sugar, eggs and flour.",
    about: [
      "The original pound cake used a pound each of butter, sugar, eggs and flour, and no baking powder at all, because it hadn't been invented. All the lift came from a very long beating.",
      "The French call it quatre-quarts, four quarters. Modern versions add a little raising agent and are a bit lighter, but it's still the sturdy, sliceable loaf that keeps well and toasts beautifully.",
    ],
    method: [
      "Beat butter and sugar for longer than feels sensible, until very pale and light.",
      "Add the eggs slowly, then fold in the flour with a little salt and vanilla or lemon zest.",
      "Bake low and slow in a loaf tin until a skewer comes out clean, then cool in the tin.",
    ],
    tryIt: "Toasted and buttered, or with poached fruit. Marble it with cocoa for a classic marble cake.",
    shape: "loaf",
    accent: "#e9b949",
  },
  {
    slug: "bundt",
    name: "Bundt cake",
    family: "creamed",
    origin: "Minneapolis, USA",
    era: "1950",
    lift: "Creamed butter and baking powder",
    texture: "Moist, close crumb with a crisp fluted crust",
    summary: "Less a recipe than a tin: a heavy fluted ring that makes any batter look grand.",
    about: [
      "H. David Dalquist of Nordic Ware made the first cast-aluminium Bundt tin in 1950, modelled on the European Gugelhupf moulds. Sales were slow until the Tunnel of Fudge cake, baked in one, came second in the 1966 Pillsbury Bake-Off.",
      "The hole in the middle helps a heavy batter bake evenly, and the flutes give it lots of crust. Pound cake and soured-cream batters are the classic fillings.",
    ],
    method: [
      "Grease every crease of the tin with soft butter and dust with flour. Skimp here and the cake will stick.",
      "Make a rich creamed batter, often with soured cream or buttermilk, and spoon it into the tin.",
      "Bake, cool for 10 minutes only, then turn out and finish with a pourable glaze.",
    ],
    tryIt: "A lemon or orange glaze dripping down the ridges, served in thick wedges.",
    shape: "ring",
    accent: "#d98a2b",
  },
  {
    slug: "upside-down",
    name: "Upside-down cake",
    family: "creamed",
    origin: "United States",
    era: "1920s",
    lift: "Creamed butter and baking powder",
    texture: "Soft, buttery cake under sticky caramelised fruit",
    summary: "Fruit and caramel on the bottom of the tin, cake on top, then a brave flip.",
    about: [
      "Cooks have baked cakes over fruit in skillets for centuries, but the upside-down cake as we know it took off in the 1920s, when tinned pineapple rings became widely available in America.",
      "It's the most retro cake I make and I'm not sorry. Glacé cherries in the pineapple holes are compulsory, as far as I'm concerned.",
    ],
    method: [
      "Melt butter and brown sugar in the base of the tin and arrange the fruit in a pattern on top.",
      "Spread a simple creamed batter over the fruit and bake until golden.",
      "Rest for five minutes, then put a plate over the tin and flip it in one confident movement.",
    ],
    tryIt: "Warm, with custard. Pineapple is classic; plums, pears and rhubarb are wonderful too.",
    shape: "disc",
    accent: "#e9b949",
  },
  {
    slug: "lemon-drizzle",
    name: "Lemon drizzle",
    family: "creamed",
    origin: "Britain",
    era: "Late 1900s",
    lift: "Creamed butter and self-raising flour",
    texture: "Tender, damp crumb under a crunchy sugar crust",
    summary: "A buttery loaf soaked in lemon syrup while it's still hot from the oven.",
    about: [
      "Lemon drizzle is a newcomer compared with most cakes here, but it's become a fixture of British cafés and office birthdays. I've never met a cake stall without one.",
      "The trick is pouring a sharp lemon and sugar syrup over the cake the moment it comes out of the oven. The hot crumb drinks it in and the sugar sets into a crunchy, sparkly top.",
    ],
    method: [
      "Cream butter and sugar with plenty of lemon zest, beat in eggs, then fold in flour and milk.",
      "Bake in a loaf tin until a skewer comes out clean.",
      "Prick all over while hot and spoon over lemon juice mixed with granulated sugar, then leave to cool in the tin.",
    ],
    tryIt: "A mug of tea at four o'clock. Swap in lime or orange, or add poppy seeds.",
    recipe: { slug: "lemon-drizzle", note: "My recipe, with the crunchy granulated sugar top." },
    shape: "loaf",
    accent: "#e9b949",
  },

  // ---------- Mixed and oil ----------
  {
    slug: "carrot",
    name: "Carrot cake",
    family: "mixed",
    origin: "Europe, then Britain and the USA",
    era: "1940s onwards",
    lift: "Bicarbonate of soda and baking powder",
    texture: "Moist, dense and spiced",
    summary: "Grated carrot, warm spice and oil, under a thick blanket of cream cheese frosting.",
    about: [
      "Carrots have sweetened puddings since the Middle Ages, when sugar was expensive. Carrot cake had a revival in Britain under wartime rationing, then became an American café classic in the 1960s and 70s, cream cheese frosting and all.",
      "Most versions use oil rather than butter and are simply stirred together, so it's one of the easiest cakes to make and one of the best keepers.",
    ],
    method: [
      "Whisk sugar, oil and eggs together, then stir in flour, raising agents and spices.",
      "Fold in grated carrot, plus walnuts, raisins or orange zest if you like.",
      "Bake, cool completely and spread with cream cheese frosting.",
    ],
    tryIt: "Cut into squares with coffee. It's even better on day two.",
    recipe: { slug: "carrot-cake", note: "My spiced version with orange zest and walnuts." },
    shape: "slice",
    accent: "#e0782f",
    crumb: "#d9964a",
  },
  {
    slug: "devils-food",
    name: "Devil's food cake",
    family: "mixed",
    origin: "United States",
    era: "Around 1900",
    lift: "Bicarbonate of soda",
    texture: "Dark, moist and fudgy",
    summary: "The deep, dark answer to angel food cake.",
    about: [
      "Devil's food appeared in American cookbooks around the turn of the 20th century, named as the wicked opposite of angel food cake. Where angel food is white and fat-free, this is as dark and rich as a cake gets.",
      "Old recipes cream butter; many modern ones, mine included, use oil and hot coffee or water. The heat blooms the cocoa, and plenty of bicarbonate of soda gives a dark, open, very tender crumb.",
    ],
    method: [
      "Whisk cocoa with hot coffee or water to bloom it.",
      "Combine with flour, sugar, bicarbonate of soda, eggs, buttermilk and oil or melted butter. The batter will be thin.",
      "Bake in layers and fill and cover with a dark chocolate frosting.",
    ],
    tryIt: "A tall glass of cold milk. Birthdays, mostly.",
    recipe: {
      slug: "chocolate-fudge-cake",
      note: "My chocolate fudge cake is made exactly this way.",
    },
    shape: "slice",
    accent: "#7b4a2e",
    crumb: "#5a3324",
  },
  {
    slug: "red-velvet",
    name: "Red velvet",
    family: "mixed",
    origin: "United States",
    era: "1930s onwards",
    lift: "Bicarbonate of soda with buttermilk and vinegar",
    texture: "Soft, fine, velvety crumb",
    summary: "A mild cocoa cake with a red crumb and tangy frosting.",
    about: [
      "Velvet cakes were 19th-century American cakes made smoother with cocoa or cornflour. The reddish tint originally came from natural cocoa reacting with buttermilk and vinegar. Food colouring took over in the 1930s and 40s, helped by a Texas extract company that sold the dye with a recipe.",
      "It's only lightly chocolatey, with a little tang from the buttermilk. The frosting matters as much as the cake.",
    ],
    method: [
      "Mix buttermilk, oil or butter, eggs, vinegar and red colouring.",
      "Stir into flour, a small amount of cocoa and bicarbonate of soda.",
      "Bake in layers and frost with cream cheese frosting, or the old-fashioned cooked-flour ermine frosting.",
    ],
    tryIt: "Cupcakes, piled high with cream cheese frosting and a few crumbs on top.",
    shape: "slice",
    accent: "#b22f47",
    crumb: "#b0303f",
  },
  {
    slug: "olive-oil",
    name: "Olive oil cake",
    family: "mixed",
    origin: "Italy and Spain",
    era: "Traditional",
    lift: "Whisked eggs and baking powder",
    texture: "Moist, fragrant, with a crisp crust",
    summary: "A simple Mediterranean cake made with good olive oil and citrus.",
    about: [
      "In olive-growing parts of Italy and Spain, oil was always the everyday fat, so it went into cakes as naturally as butter did further north. A grassy oil gives a lovely savoury note.",
      "It's one of the easiest cakes I know, it keeps for days, and it happens to be dairy-free if you use juice instead of milk.",
    ],
    method: [
      "Whisk eggs and sugar until pale, then slowly stream in olive oil.",
      "Fold in flour, baking powder, citrus zest and a little juice or milk.",
      "Bake in a round tin until the top is deep golden and crackly.",
    ],
    tryIt: "Roasted plums, a spoon of yoghurt, or a glass of something sweet.",
    shape: "disc",
    accent: "#6f9a4f",
    crumb: "#f0cf6e",
  },

  // ---------- Assembled ----------
  {
    slug: "black-forest",
    name: "Black Forest gâteau",
    family: "assembled",
    origin: "Southern Germany",
    era: "1930s",
    lift: "Whisked eggs",
    texture: "Soft chocolate sponge, cream and cherries",
    summary: "Chocolate sponge, kirsch, cherries and whipped cream. The 1970s dinner party star.",
    about: [
      "Schwarzwälder Kirschtorte is named after kirsch, the cherry brandy of the Black Forest region, which soaks every layer. It was first recorded in the 1930s and became a worldwide classic after the war.",
      "In Britain it's tied up with the 1970s dinner party, but a proper one, boozy and not too sweet, is a beautiful thing.",
    ],
    method: [
      "Bake a chocolate whisked sponge and split it into three layers.",
      "Brush each layer generously with kirsch syrup, then fill with whipped cream and sour cherries.",
      "Cover in cream, press chocolate shavings onto the sides and finish with cherries on top.",
    ],
    tryIt: "Chilled, and after a big Sunday lunch. Use morello cherries if you can find them.",
    shape: "slice",
    accent: "#b22f47",
    crumb: "#5a3324",
  },
  {
    slug: "sachertorte",
    name: "Sachertorte",
    family: "assembled",
    origin: "Vienna, Austria",
    era: "1832",
    lift: "Whisked egg whites",
    texture: "Dense chocolate cake under a snapping glaze",
    summary: "Chocolate cake, a thin layer of apricot jam and a glossy chocolate glaze.",
    about: [
      "Franz Sacher created it at sixteen for Prince Metternich's household in 1832. His son later made it famous at the Hotel Sacher, which then spent years in court with the bakery Demel over who could call theirs the original.",
      "It's quite a dry, firm cake on purpose. The apricot jam and the unsweetened cream alongside do the rest.",
    ],
    method: [
      "Make a chocolate butter cake lightened with whisked egg whites, and bake it in a round tin.",
      "Split it, fill with warm apricot jam and brush jam over the top and sides.",
      "Pour over a cooked chocolate glaze in one go and let it set to a shine.",
    ],
    tryIt: "Unsweetened whipped cream, mit Schlag, and a strong coffee.",
    shape: "disc",
    accent: "#7b4a2e",
    crumb: "#5a3324",
  },
  {
    slug: "opera",
    name: "Opera cake",
    family: "assembled",
    origin: "Paris, France",
    era: "1955",
    lift: "Whisked eggs and egg whites",
    texture: "Thin, neat layers; soft, rich and coffee-soaked",
    summary: "Almond sponge, coffee syrup, coffee buttercream and ganache, in perfect stripes.",
    about: [
      "The Paris pâtisserie Dalloyau claims the opera cake from 1955, said to be named for the Palais Garnier opera house. Others credit Gaston Lenôtre. Either way it's French pastry at its most precise.",
      "It's made from joconde, a thin almond sponge, layered with coffee and chocolate. Every slice should show its stripes.",
    ],
    method: [
      "Bake thin sheets of joconde sponge with ground almonds and whipped whites.",
      "Soak each sheet in strong coffee syrup and layer with coffee buttercream and ganache.",
      "Chill, pour a thin chocolate glaze over the top, then trim the edges with a hot knife.",
    ],
    tryIt: "A small rectangle with an espresso. It's very rich.",
    shape: "slice",
    accent: "#7b4a2e",
    crumb: "#c99050",
  },
  {
    slug: "battenberg",
    name: "Battenberg",
    family: "assembled",
    origin: "England",
    era: "1880s",
    lift: "Creamed butter and baking powder",
    texture: "Soft sponge, sticky jam and chewy marzipan",
    summary: "A pink and yellow chequerboard, glued with jam and wrapped in marzipan.",
    about: [
      "It's usually said to celebrate the 1884 marriage of Queen Victoria's granddaughter to Prince Louis of Battenberg, with the four squares for the four Battenberg princes. Historians aren't so sure, but I like the story.",
      "Underneath it's a simple almond butter cake baked in two colours. Building it is the fun bit.",
    ],
    method: [
      "Bake a butter cake in a divided tin, half plain and half coloured pink.",
      "Trim into four equal strips and stick them together in a chequerboard with apricot jam.",
      "Brush the outside with jam and wrap tightly in rolled marzipan, then crimp the top edges.",
    ],
    tryIt: "Thin slices with a cup of tea, so everyone can admire the squares.",
    shape: "check",
    accent: "#e98aa0",
  },
  {
    slug: "mille-crepe",
    name: "Mille crêpe",
    family: "assembled",
    origin: "Japan, from French crêpes",
    era: "1980s",
    lift: "None; it isn't baked",
    texture: "Many silky layers, soft and creamy",
    summary: "Twenty or more thin crêpes stacked with cream. No oven needed.",
    about: [
      "The name is French for 'a thousand crêpes', but the cake as most people know it was popularised by Tokyo cafés in the 1980s, and later by bakeries in New York and across Asia.",
      "It takes patience rather than skill. Each crêpe is spread thinly with pastry cream or whipped cream, and the cut edge shows every layer.",
    ],
    method: [
      "Make a rested crêpe batter and cook twenty or more very thin crêpes. Let them cool fully.",
      "Spread each one with a thin layer of pastry cream lightened with whipped cream, and stack.",
      "Chill until firm, then finish with icing sugar or a brûléed sugar top.",
    ],
    tryIt: "Matcha cream between the layers, or a few berries on top.",
    shape: "slice",
    accent: "#6f9a4f",
    crumb: "#f6d58f",
  },
  {
    slug: "baumkuchen",
    name: "Baumkuchen",
    family: "assembled",
    origin: "Germany, now hugely popular in Japan",
    era: "1700s",
    lift: "Whisked eggs",
    texture: "Fine, moist rings, like tree bark",
    summary: "The 'tree cake', built one thin layer at a time on a turning spit.",
    about: [
      "Baumkuchen means 'tree cake', because each slice shows rings like a sawn log. It's a traditional German spit cake. A German baker, Karl Juchheim, introduced it to Japan in 1919, and it's now more common there than in Germany.",
      "Each layer of batter is brushed onto a rotating spit and browned before the next goes on. It takes skill and special kit, so I buy mine.",
    ],
    method: [
      "Make a rich, light batter with whisked eggs, butter and a little almond or marzipan.",
      "Brush a thin coat onto a turning spit over the heat and let it brown, then repeat, often fifteen to twenty times.",
      "Slide off the spit, cool, and glaze with chocolate or sugar icing.",
    ],
    tryIt: "Thin slices with tea or coffee. A grill-pan version at home gives a stripy slab.",
    shape: "ring",
    accent: "#a8572b",
  },
  {
    slug: "dobos",
    name: "Dobos torte",
    family: "assembled",
    origin: "Budapest, Hungary",
    era: "1885",
    lift: "Whisked eggs",
    texture: "Thin sponge, chocolate buttercream and a crisp caramel top",
    summary: "Five thin sponges, chocolate buttercream and a crown of caramel wedges.",
    about: [
      "József C. Dobos, a Budapest confectioner, introduced it in 1885. Buttercream was a novelty then, and his caramel top kept the cake from drying out, so it travelled well.",
      "Making it is a project, but the shiny amber wedges on top are worth it.",
    ],
    method: [
      "Bake five or six very thin sponge layers.",
      "Layer them with chocolate buttercream, keeping the best layer back for the top.",
      "Pour hot caramel over that layer, cut it into wedges before it sets, and arrange them on the cake.",
    ],
    tryIt: "Small slices with coffee. Use a hot knife for the caramel.",
    shape: "slice",
    accent: "#d98a2b",
  },

  // ---------- Cheesecakes ----------
  {
    slug: "basque-cheesecake",
    name: "Basque burnt cheesecake",
    family: "cheesecake",
    origin: "San Sebastián, Spain",
    era: "1990",
    lift: "None; set by eggs",
    texture: "Creamy and barely set, under a scorched top",
    summary: "Crustless, baked very hot and fast, and meant to look like a beautiful mess.",
    about: [
      "Santiago Rivera created it at La Viña, his family's bar in San Sebastián's old town, in 1990. Visitors queue for slices to this day.",
      "There's no base. A very hot oven caramelises the top almost to black while the middle stays soft and custardy, and the crumpled paper is part of the look.",
    ],
    method: [
      "Line a deep tin with scrunched baking paper standing well above the rim.",
      "Beat cream cheese and sugar, then eggs, cream and a spoonful of flour.",
      "Bake at a high heat until very dark on top and still wobbly in the middle, then cool and chill.",
    ],
    tryIt: "Just below room temperature, on its own. It doesn't need anything else.",
    recipe: { slug: "basque-cheesecake", note: "My version, and how to get the wobble right." },
    shape: "disc",
    accent: "#a8572b",
    crumb: "#f6e3b4",
  },
  {
    slug: "new-york-cheesecake",
    name: "New York cheesecake",
    family: "cheesecake",
    origin: "New York, USA",
    era: "1900s",
    lift: "None; set by eggs",
    texture: "Dense, smooth and rich",
    summary: "Tall, dense and creamy, on a biscuit crust.",
    about: [
      "Cream cheese was first made commercially in New York State in the 1870s, and the city's delis and diners turned it into this tall, rich cheesecake in the first half of the 20th century.",
      "It's denser than European cheesecakes made with curd cheese or ricotta. Some versions add soured cream to the batter or spread it on top for a little tang.",
    ],
    method: [
      "Press a crumb base of biscuits and melted butter into a springform tin and bake briefly.",
      "Beat cream cheese, sugar, eggs and soured cream until smooth, without whipping in air.",
      "Bake low and slow, often in a water bath, then cool in the turned-off oven to prevent cracks.",
    ],
    tryIt: "A sharp berry compote or a cherry topping.",
    shape: "disc",
    accent: "#e05d6f",
    crumb: "#fbeed2",
  },
  {
    slug: "japanese-cheesecake",
    name: "Japanese cotton cheesecake",
    family: "cheesecake",
    origin: "Japan",
    era: "1960s–70s",
    lift: "Folded meringue",
    texture: "Jiggly, airy and soufflé-like",
    summary: "Half cheesecake, half soufflé, with a wobble that makes everyone smile.",
    about: [
      "Japanese bakers adapted German Käsekuchen into something much lighter in the 1960s and 70s. It's now sold all over East Asia, often still warm and jiggling on the counter.",
      "Folded meringue makes it rise like a soufflé, so it's lighter and less sweet than a New York cheesecake.",
    ],
    method: [
      "Melt cream cheese, butter and milk together, then whisk in yolks and a little flour and cornflour.",
      "Whip the whites to soft peaks and fold them through gently.",
      "Bake in a water bath at a low temperature, then cool slowly in the oven so it doesn't crack.",
    ],
    tryIt: "Warm and plain, or chilled with a dusting of icing sugar.",
    shape: "disc",
    accent: "#e9b949",
    crumb: "#f8e3a3",
  },

  // ---------- Flourless ----------
  {
    slug: "flourless-chocolate",
    name: "Flourless chocolate cake",
    family: "flourless",
    origin: "Europe and the USA",
    era: "1900s",
    lift: "Whisked eggs",
    texture: "Fudgy, dense, almost truffle-like",
    summary: "Chocolate, butter, eggs and sugar. Rich enough that a thin slice will do.",
    about: [
      "There's no flour at all, so the eggs do everything: whisked for lift, then holding the chocolate together as it sets. It's a Passover favourite and the dessert I bring for gluten-free friends.",
      "It puffs in the oven, sinks as it cools, and ends up somewhere between a mousse and a brownie.",
    ],
    method: [
      "Melt dark chocolate and butter together gently.",
      "Whisk eggs and sugar until thick, then fold in the chocolate.",
      "Bake until just set at the edges and soft in the middle. Let it sink and cool completely.",
    ],
    tryIt: "Crème fraîche and raspberries cut through the richness.",
    shape: "disc",
    accent: "#7b4a2e",
    crumb: "#4a2a1e",
  },
  {
    slug: "torta-caprese",
    name: "Torta caprese",
    family: "flourless",
    origin: "Capri, Italy",
    era: "1920s",
    lift: "Whisked eggs",
    texture: "Moist and nutty, with a thin crisp crust",
    summary: "Chocolate and almond cake from Capri, born, so the story goes, of a forgotten ingredient.",
    about: [
      "Legend says a baker on Capri forgot the flour in an almond cake for some visiting gangsters in the 1920s, and they loved it. Whether that's true or not, it's now a classic all along the Amalfi coast.",
      "Ground almonds replace the flour, so it's naturally gluten-free and keeps moist for days.",
    ],
    method: [
      "Melt dark chocolate and butter, then beat in sugar and yolks.",
      "Fold in ground almonds, then whipped egg whites.",
      "Bake until the top cracks and the centre is just set, and dust with icing sugar.",
    ],
    tryIt: "A scoop of vanilla gelato, or a little limoncello alongside.",
    shape: "disc",
    accent: "#7b4a2e",
    crumb: "#6b3e26",
  },
  {
    slug: "tarta-de-santiago",
    name: "Tarta de Santiago",
    family: "flourless",
    origin: "Galicia, Spain",
    era: "1500s",
    lift: "Whisked eggs",
    texture: "Moist, dense and almondy",
    summary: "Almonds, eggs and sugar, with the cross of St James stencilled on top.",
    about: [
      "An almond cake from Santiago de Compostela, first mentioned in 1577 and fed to pilgrims walking the Camino ever since. It now has protected status in the EU.",
      "A Santiago bakery added the cross of St James, stencilled in icing sugar, in the 1920s, and everyone copied it. It's so simple you'll make it again and again.",
    ],
    method: [
      "Whisk eggs and sugar until pale, then fold in ground almonds and lemon zest.",
      "Bake in a shallow round tin until golden and set.",
      "Once cool, lay a paper cross on top and dust over icing sugar, then lift it off.",
    ],
    tryIt: "A small glass of sweet sherry, or with coffee in the afternoon.",
    shape: "disc",
    accent: "#d98a2b",
    crumb: "#e8c07f",
  },

  // ---------- Yeasted ----------
  {
    slug: "panettone",
    name: "Panettone",
    family: "yeasted",
    origin: "Milan, Italy",
    era: "1400s onwards",
    lift: "Natural sourdough starter",
    texture: "Tall, feathery, soft and stringy",
    summary: "Milan's Christmas bread-cake, risen over days and studded with candied peel.",
    about: [
      "Stories about panettone in Milan go back to the 15th century, though the tall, airy version we buy today took shape in the 20th, when Milanese bakers started making it on an industrial scale.",
      "A good one takes days, with a sourdough starter and several rises. It's hung upside down to cool so its fragile dome doesn't collapse.",
    ],
    method: [
      "Build a dough over several stages from a natural starter, adding egg yolks, butter and sugar.",
      "Work in candied orange, citron and raisins, then rise in a tall paper mould.",
      "Bake, then skewer through the base and hang upside down until cold.",
    ],
    tryIt: "Torn into chunks with coffee, or used for the best bread and butter pudding of your life.",
    shape: "dome",
    accent: "#d98a2b",
    crumb: "#f2c45f",
  },
  {
    slug: "stollen",
    name: "Stollen",
    family: "yeasted",
    origin: "Dresden, Germany",
    era: "1400s",
    lift: "Yeast",
    texture: "Dense, buttery and fruity, with a marzipan centre",
    summary: "A buttery fruit loaf with a marzipan heart, buried under icing sugar.",
    about: [
      "Stollen was first recorded in Dresden in the 15th century, when church rules banned butter during Advent. Bakers needed the Pope's permission, the so-called Butter Letter of 1490, to use butter again.",
      "It's shaped to look like a swaddled baby, and the thick coat of butter and icing sugar helps it keep for weeks.",
    ],
    method: [
      "Make an enriched yeast dough and knead in dried fruit, candied peel and almonds.",
      "Roll it out, lay a log of marzipan along the middle and fold the dough over.",
      "Bake, brush with lots of melted butter while hot, and roll in icing sugar.",
    ],
    tryIt: "Thick slices through December, maybe lightly toasted.",
    shape: "loaf",
    accent: "#6f9a4f",
    crumb: "#ecc98a",
  },
  {
    slug: "kugelhopf",
    name: "Kugelhopf",
    family: "yeasted",
    origin: "Alsace, Austria and southern Germany",
    era: "Traditional",
    lift: "Yeast",
    texture: "Light, brioche-like and buttery",
    summary: "A tall, fluted yeasted cake with raisins and almonds, and the Bundt's great-grandparent.",
    about: [
      "Kugelhopf (or Gugelhupf) is baked across Alsace, Austria and southern Germany, and every region spells it differently. It's tied to Sunday breakfasts and celebrations, and Marie Antoinette is said to have loved it.",
      "It's baked in a tall, swirled ceramic mould, with whole almonds in the bottom of each groove.",
    ],
    method: [
      "Soak raisins in kirsch or rum, and make a soft, buttery brioche-style dough.",
      "Put an almond in each flute of the buttered mould, then add the dough with the raisins worked in.",
      "Rise until nearly at the top, bake, then dust with icing sugar.",
    ],
    tryIt: "Breakfast with coffee, or toasted the next day.",
    shape: "ring",
    accent: "#a8572b",
  },
  {
    slug: "rum-baba",
    name: "Rum baba",
    family: "yeasted",
    origin: "France, by way of Poland",
    era: "1700s",
    lift: "Yeast",
    texture: "Spongy, soaked and syrupy",
    summary: "A light yeasted cake soaked in rum syrup until it's dripping.",
    about: [
      "The story goes that the exiled Polish king Stanisław Leszczyński, living in Lorraine, soaked his dry kugelhopf in wine. Parisian pastry chefs later turned it into the rum baba and its ring-shaped cousin, the savarin.",
      "The dough is almost a batter, and the open crumb is built for drinking up syrup.",
    ],
    method: [
      "Beat a soft, sticky yeast dough with eggs and butter.",
      "Rise in small moulds or a ring tin, then bake until deep golden.",
      "Soak the warm babas in hot rum syrup, then glaze with apricot.",
    ],
    tryIt: "Chantilly cream, and possibly an extra splash of rum.",
    shape: "dome",
    accent: "#a8572b",
    crumb: "#e5a85a",
  },

  // ---------- Keeping ----------
  {
    slug: "fruitcake",
    name: "Fruitcake",
    family: "keeping",
    origin: "Britain and Europe",
    era: "Medieval onwards",
    lift: "Creamed butter, a little raising agent",
    texture: "Dense, moist, heavy with fruit",
    summary: "More fruit than cake, fed with brandy for weeks before it's eaten.",
    about: [
      "Cakes packed with dried fruit and spice go back to the Middle Ages, when they were a luxury for feasts. In Britain they're still the backbone of Christmas and wedding cakes.",
      "It's baked slowly, wrapped and 'fed' with brandy or rum for weeks. It keeps almost indefinitely, which is why it's traditional to save the top tier of a wedding cake for a christening.",
    ],
    method: [
      "Soak a large amount of dried fruit in brandy or tea overnight.",
      "Make a rich creamed batter with dark sugar and spices, and fold in the fruit.",
      "Bake low and slow in a well-lined tin, then wrap and feed it with spirits every week or so.",
    ],
    tryIt: "Under marzipan and royal icing at Christmas, or with a slice of Wensleydale in Yorkshire.",
    shape: "loaf",
    accent: "#7b4a2e",
    crumb: "#8a5a3a",
  },
  {
    slug: "parkin",
    name: "Parkin",
    family: "keeping",
    origin: "Northern England",
    era: "Traditional",
    lift: "Bicarbonate of soda",
    texture: "Dark, sticky and chewy",
    summary: "Oatmeal gingerbread from the north of England, made for Bonfire Night.",
    about: [
      "Parkin is a Yorkshire and Lancashire gingerbread made with oatmeal and black treacle. It's traditionally eaten on 5 November around the bonfire.",
      "It's dry-ish when it comes out of the oven. Wrap it and wait a few days, and it turns wonderfully sticky.",
    ],
    method: [
      "Melt butter, black treacle, golden syrup and brown sugar together.",
      "Stir into oatmeal, flour, ginger and bicarbonate of soda with a little milk and egg.",
      "Bake in a square tin, then wrap and leave for at least three days before cutting.",
    ],
    tryIt: "Squares by the bonfire, or warm with custard.",
    shape: "loaf",
    accent: "#7b4a2e",
    crumb: "#6b3e26",
  },
  {
    slug: "mooncake",
    name: "Mooncake",
    family: "keeping",
    origin: "China",
    era: "Centuries old",
    lift: "Hardly any; it's pressed, not risen",
    texture: "Thin tender crust around a dense, rich filling",
    summary: "Pressed pastries with rich fillings, shared at the Mid-Autumn Festival.",
    about: [
      "Mooncakes are given and shared at the Mid-Autumn Festival, when the moon is at its fullest. They're eaten across China and East and South-East Asia, in dozens of regional styles.",
      "Cantonese mooncakes have a thin, glossy pastry around lotus seed or red bean paste, sometimes with a salted duck egg yolk at the centre like a little moon. They rest for a couple of days after baking so the crust softens.",
    ],
    method: [
      "Make a soft pastry from flour, golden syrup, oil and a little alkaline water.",
      "Wrap thin pastry around balls of lotus paste and salted yolks, and press them in a patterned mould.",
      "Bake, brush with egg wash, bake again, then rest for a day or two before eating.",
    ],
    tryIt: "Cut into small wedges and shared with jasmine or oolong tea.",
    shape: "disc",
    accent: "#d98a2b",
    crumb: "#b8763a",
  },
];

export function getCakeType(slug: string): CakeType | undefined {
  return cakeTypes.find((t) => t.slug === slug);
}

export function getFamily(id: FamilyId): Family {
  const family = families.find((f) => f.id === id);
  if (!family) throw new Error(`Unknown cake family: ${id}`);
  return family;
}

export function typesInFamily(id: FamilyId): CakeType[] {
  return cakeTypes.filter((t) => t.family === id);
}

// Fail the build if a type points at a recipe that doesn't exist.
for (const t of cakeTypes) {
  if (t.recipe && !getRecipe(t.recipe.slug)) {
    throw new Error(`Cake type "${t.slug}" links to missing recipe "${t.recipe.slug}"`);
  }
}

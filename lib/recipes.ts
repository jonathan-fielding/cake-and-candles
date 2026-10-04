export type IngredientGroup = {
  title?: string;
  items: string[];
};

export type Recipe = {
  slug: string;
  title: string;
  summary: string;
  intro: string;
  serves: string;
  prepTime: string;
  bakeTime: string;
  difficulty: "Easy" | "Medium" | "A little fiddly";
  tin: string;
  ingredients: IngredientGroup[];
  method: string[];
  notes?: string[];
  accent: string;
};

export const recipes: Recipe[] = [
  {
    slug: "victoria-sponge",
    title: "Victoria Sponge",
    summary: "Two buttery sponges, raspberry jam and softly whipped cream.",
    intro:
      "This is the cake I make more than any other. It's the one I learned first, the one I bake for birthdays when nobody can decide, and the one I judge every village fete by. The secret is weighing the eggs and matching everything else to them.",
    serves: "8–10",
    prepTime: "25 minutes",
    bakeTime: "20–25 minutes",
    difficulty: "Easy",
    tin: "Two 20cm (8in) round sandwich tins",
    ingredients: [
      {
        title: "For the sponge",
        items: [
          "4 large eggs (about 225g out of their shells), at room temperature",
          "225g unsalted butter, very soft",
          "225g caster sugar",
          "225g self-raising flour",
          "1 tsp baking powder",
          "1 tsp vanilla extract",
          "2 tbsp milk",
        ],
      },
      {
        title: "For the filling",
        items: [
          "150g good raspberry jam",
          "200ml double cream",
          "1 tbsp icing sugar, plus extra for dusting",
        ],
      },
    ],
    method: [
      "Heat the oven to 180°C (160°C fan, gas 4). Grease both tins and line the bases with circles of baking paper.",
      "Beat the butter and sugar together for a good 3–4 minutes until pale and fluffy. Don't rush this; it's where the lightness comes from.",
      "Beat in the eggs one at a time with a spoonful of the flour each, so the mixture doesn't curdle. Add the vanilla.",
      "Sift in the rest of the flour and the baking powder and fold gently with a large metal spoon. Loosen with the milk until the batter drops easily off the spoon.",
      "Divide evenly between the tins (I weigh them), smooth the tops and bake for 20–25 minutes, until golden and springy and a skewer comes out clean.",
      "Leave in the tins for 5 minutes, then turn out onto a wire rack and cool completely. Warm sponges will melt the cream.",
      "Whip the cream with the icing sugar to soft peaks. Spread jam over the flat side of one sponge, then the cream, and sandwich with the other sponge.",
      "Dust the top with icing sugar and serve the same day, ideally with a pot of tea.",
    ],
    notes: [
      "For a truly traditional version, use buttercream instead of fresh cream. It keeps better too.",
      "If your eggs weigh more or less than 225g, adjust the butter, sugar and flour to match.",
    ],
    accent: "#e05d6f",
  },
  {
    slug: "lemon-drizzle",
    title: "Lemon Drizzle Loaf",
    summary: "A tender loaf soaked in sharp lemon syrup with a crackly sugar crust.",
    intro:
      "When I want something that's tangy rather than sweet, this is it. The trick is to pour the drizzle over while the cake is still hot from the oven, so it drinks in every drop and the sugar sets into a crunchy, glittery lid.",
    serves: "10",
    prepTime: "15 minutes",
    bakeTime: "45–50 minutes",
    difficulty: "Easy",
    tin: "One 900g (2lb) loaf tin",
    ingredients: [
      {
        title: "For the cake",
        items: [
          "175g unsalted butter, softened",
          "175g caster sugar",
          "3 large eggs, at room temperature",
          "175g self-raising flour",
          "Finely grated zest of 2 unwaxed lemons",
          "3 tbsp milk",
        ],
      },
      {
        title: "For the drizzle",
        items: ["Juice of 2 lemons (about 80ml)", "100g granulated sugar"],
      },
    ],
    method: [
      "Heat the oven to 180°C (160°C fan, gas 4). Grease the loaf tin and line it with a strip of baking paper that overhangs the long sides.",
      "Beat the butter, sugar and lemon zest until light and fluffy, about 3 minutes.",
      "Beat in the eggs one at a time, then fold in the flour and the milk until just combined.",
      "Scrape into the tin, level the top and bake for 45–50 minutes, until a skewer comes out clean. If it browns too quickly, lay a sheet of foil loosely over the top.",
      "While it bakes, stir the lemon juice and granulated sugar together. Don't let the sugar dissolve completely; the grains make the crust.",
      "As soon as the cake comes out, prick it all over with a skewer, right to the bottom, and spoon the drizzle evenly over the top.",
      "Leave it in the tin until completely cold, then lift out using the paper.",
    ],
    notes: [
      "Granulated sugar gives a crunchier top than caster sugar. Trust me on this one.",
      "Swap one lemon for a lime, or add a tablespoon of poppy seeds to the batter.",
    ],
    accent: "#e9b949",
  },
  {
    slug: "chocolate-fudge-cake",
    title: "Chocolate Fudge Cake",
    summary: "A deep, dark, moist chocolate cake with a glossy fudge frosting.",
    intro:
      "Every cake lover needs one reliable chocolate cake, and this is mine. It's an all-in-one, oil-based batter, which keeps it moist for days. The hot coffee deepens the chocolate flavour without making it taste of coffee.",
    serves: "12",
    prepTime: "30 minutes",
    bakeTime: "30–35 minutes",
    difficulty: "Medium",
    tin: "Two 20cm (8in) round tins, at least 5cm deep",
    ingredients: [
      {
        title: "For the cake",
        items: [
          "225g plain flour",
          "300g caster sugar",
          "75g cocoa powder",
          "1½ tsp bicarbonate of soda",
          "1 tsp baking powder",
          "½ tsp fine salt",
          "2 large eggs",
          "250ml buttermilk (or milk with 1 tbsp lemon juice)",
          "125ml sunflower oil",
          "2 tsp vanilla extract",
          "250ml hot coffee (or hot water)",
        ],
      },
      {
        title: "For the fudge frosting",
        items: [
          "200g dark chocolate (about 70%), chopped",
          "200g unsalted butter, softened",
          "300g icing sugar, sifted",
          "2 tbsp cocoa powder",
          "3 tbsp milk",
          "Pinch of salt",
        ],
      },
    ],
    method: [
      "Heat the oven to 180°C (160°C fan, gas 4). Grease and line both tins.",
      "Whisk the flour, sugar, cocoa, bicarbonate of soda, baking powder and salt together in a large bowl.",
      "In a jug, whisk the eggs, buttermilk, oil and vanilla. Pour into the dry ingredients and whisk until smooth.",
      "Carefully whisk in the hot coffee. The batter will be very thin; that's exactly right.",
      "Divide between the tins and bake for 30–35 minutes, until the cakes spring back and a skewer comes out with just a few moist crumbs.",
      "Cool in the tins for 10 minutes, then turn out onto a rack to cool completely.",
      "For the frosting, melt the chocolate gently and let it cool until barely warm. Beat the butter until creamy, then beat in the icing sugar and cocoa, followed by the melted chocolate, milk and salt, until thick and glossy.",
      "Sandwich the cakes with a third of the frosting, then spread the rest over the top and sides in generous swoops.",
    ],
    notes: [
      "The cake keeps beautifully in an airtight tin for 3–4 days.",
      "If the frosting is too soft to spread, chill it for 10 minutes and beat again.",
    ],
    accent: "#7b4a2e",
  },
  {
    slug: "carrot-cake",
    title: "Spiced Carrot Cake",
    summary: "Warmly spiced, packed with carrot and walnuts, under cream cheese frosting.",
    intro:
      "I think carrot cake is the most comforting cake there is. It's forgiving, it gets better on the second day, and the cream cheese frosting is non-negotiable. I like mine with plenty of cinnamon and a little orange zest.",
    serves: "12",
    prepTime: "30 minutes",
    bakeTime: "35–40 minutes",
    difficulty: "Easy",
    tin: "One 23cm (9in) square tin",
    ingredients: [
      {
        title: "For the cake",
        items: [
          "250g self-raising flour",
          "1 tsp bicarbonate of soda",
          "2 tsp ground cinnamon",
          "1 tsp ground ginger",
          "½ tsp grated nutmeg",
          "250g light soft brown sugar",
          "200ml sunflower oil",
          "4 large eggs",
          "Finely grated zest of 1 orange",
          "300g carrots, coarsely grated",
          "100g walnuts, roughly chopped",
          "75g sultanas (optional)",
        ],
      },
      {
        title: "For the frosting",
        items: [
          "100g unsalted butter, softened",
          "150g icing sugar, sifted",
          "300g full-fat cream cheese, cold from the fridge",
          "1 tsp vanilla extract",
          "A few chopped walnuts, to decorate",
        ],
      },
    ],
    method: [
      "Heat the oven to 180°C (160°C fan, gas 4). Grease the tin and line it with baking paper.",
      "Whisk the flour, bicarbonate of soda and spices together in a bowl.",
      "In a large bowl, whisk the sugar, oil, eggs and orange zest until smooth and slightly thickened.",
      "Fold in the dry ingredients, then the carrots, walnuts and sultanas.",
      "Pour into the tin and bake for 35–40 minutes, until risen and firm and a skewer comes out clean.",
      "Cool in the tin for 15 minutes, then turn out onto a rack and leave until completely cold.",
      "For the frosting, beat the butter and icing sugar until smooth, then beat in the cream cheese and vanilla briefly, just until combined. Overbeating makes it runny.",
      "Spread over the top of the cake, scatter with walnuts and cut into squares.",
    ],
    notes: [
      "Squeeze excess moisture out of the grated carrot if it looks very wet.",
      "Keep the frosted cake in the fridge, but let it come back towards room temperature before serving.",
    ],
    accent: "#e0782f",
  },
  {
    slug: "basque-cheesecake",
    title: "Burnt Basque Cheesecake",
    summary: "A crustless cheesecake with a caramelised top and a just-set, creamy middle.",
    intro:
      "This one feels like a cheat because it's meant to look a mess. You bake it hot and fast until the top is almost black, and the middle stays soft and custardy. It's the cake I make when I want to show off without really trying.",
    serves: "10–12",
    prepTime: "15 minutes, plus chilling",
    bakeTime: "50–55 minutes",
    difficulty: "A little fiddly",
    tin: "One 20cm (8in) springform tin, at least 7cm deep",
    ingredients: [
      {
        items: [
          "900g full-fat cream cheese, at room temperature",
          "250g caster sugar",
          "5 large eggs, at room temperature",
          "400ml double cream",
          "1 tsp vanilla extract",
          "½ tsp fine salt",
          "30g plain flour",
        ],
      },
    ],
    method: [
      "Heat the oven to 220°C (200°C fan, gas 7). Scrunch up two large overlapping sheets of baking paper, then flatten them and press into the tin so they stand well above the rim. The creases are part of the look.",
      "Beat the cream cheese and sugar together on low speed until completely smooth, about 2 minutes. Scrape down the bowl.",
      "Add the eggs one at a time, beating well after each, then mix in the cream, vanilla and salt.",
      "Sift the flour over the mixture and beat on low just until it disappears.",
      "Pour into the lined tin and bake for 50–55 minutes, until the top is a deep, burnished brown and the centre still wobbles a lot when you nudge the tin.",
      "Cool in the tin at room temperature for at least 2 hours. It will sink and settle; that's what you want.",
      "Chill for at least 4 hours or overnight, then peel away the paper and slice with a hot, dry knife.",
    ],
    notes: [
      "The wobble is the point. If it's firm in the oven, it'll be dry once chilled.",
      "Serve it slightly below room temperature for the creamiest texture.",
    ],
    accent: "#a8572b",
  },
];

export function getRecipe(slug: string): Recipe | undefined {
  return recipes.find((recipe) => recipe.slug === slug);
}

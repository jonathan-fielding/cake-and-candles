# Crumbs & Candles

My personal website all about cake: types of cake, a short history, my favourite recipes, and baking tips. It's built with [Next.js](https://nextjs.org) (App Router, TypeScript), exported as a static site and deployed to GitHub Pages.

## Run it locally

You need Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

To build the static site the same way GitHub Pages does:

```bash
npm run build          # writes the finished site to out/
npx serve out          # or any static file server
```

### Testing under a sub-path

On GitHub Pages a project site lives at `https://<user>.github.io/<repo>/`, so every link and asset needs the `/<repo>` prefix. The prefix comes from the `NEXT_PUBLIC_BASE_PATH` environment variable, which is empty by default. To check that everything works under a prefix:

```bash
NEXT_PUBLIC_BASE_PATH=/cake npm run build
mkdir -p /tmp/site && rm -rf /tmp/site/cake && cp -R out /tmp/site/cake
npx serve /tmp/site    # then open http://localhost:3000/cake/
```

## Project layout

- `app/`: the pages (`/`, `/types/`, `/history/`, `/recipes/`, `/recipes/[slug]/`, `/tips/`), the shared layout and the styles
- `components/`: the navigation and the inline SVG cake illustrations
- `lib/recipes.ts`: recipe data. Add a recipe here and its page is generated automatically at build time.
- `.github/workflows/deploy.yml`: builds and deploys to GitHub Pages
- `public/.nojekyll`: stops GitHub Pages from hiding the `_next/` folder

## Publish to GitHub Pages

1. Create an empty repository on GitHub, for example `cake`. Don't add a README, licence or `.gitignore`.
2. Push this folder to it:

   ```bash
   git remote add origin https://github.com/<your-username>/<repo>.git
   git push -u origin main
   ```

   Or, with the GitHub CLI, do both steps in one command:

   ```bash
   gh repo create <repo> --public --source=. --remote=origin --push
   ```

3. On GitHub, open the repository's **Settings → Pages** and under **Build and deployment → Source** choose **GitHub Actions**.
4. Open the **Actions** tab. If the first run failed because Pages wasn't enabled yet, open the "Deploy to GitHub Pages" workflow and click **Run workflow** (or just push again).
5. When it finishes, the site is live at `https://<your-username>.github.io/<repo>/`.

From then on, every push to `main` redeploys the site. The workflow reads the correct base path from GitHub (`actions/configure-pages`), so it works whatever you name the repository, and with a custom domain or a `<username>.github.io` repository too.

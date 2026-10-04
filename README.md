# majornutcracker

Main website of Major Nutcracker — _We crack complex problems_.

A single-page [Next.js](https://nextjs.org) site exported as static HTML and
deployed to GitHub Pages. Unknown routes redirect to the home page.

## Development

Requires Node (see `.nvmrc`) and Yarn Classic.

```sh
yarn install
yarn dev        # http://localhost:3000
yarn lint
yarn typecheck
yarn build      # static export to ./out
```

## Deployment

[.github/workflows/deploy.yml](.github/workflows/deploy.yml) builds and
publishes to GitHub Pages on every push to `main`. In the repository settings,
set **Pages → Source** to **GitHub Actions**.

The workflow takes the base path from `actions/configure-pages`, so the same
build works as a project site (`<owner>.github.io/<repo>`), a user site or a
custom domain. To reproduce a project-site build locally:

```sh
NEXT_PUBLIC_BASE_PATH=/majornutcracker yarn build
```

## Brand

- Colors: void `#101014`, deep violet `#6C63FF`, soft violet `#A5A0FF`,
  coral `#FF8A65`, cloud `#F5F4F7` — defined as Tailwind tokens in
  [app/globals.css](app/globals.css)
- Fonts: Sora (logo, titles), DM Sans (body)
- Images in [public/brand](public/brand); app icons in [app](app)

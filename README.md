# Your brain is dumb, color is a lie, and purple is impossible.

[![RevealJS](https://img.shields.io/badge/reveal.js-000?style=for-the-badge&labelColor=F2E142&logo=reveal.js&logoColor=111&color=222)](https://revealjs.com/)
[![Pug](https://img.shields.io/badge/Pug-000?style=for-the-badge&labelColor=A86454&logo=pug&logoColor=white&color=222)](https://pugjs.org/)
[![Sass](https://img.shields.io/badge/Sass-000?style=for-the-badge&labelColor=CD6799&logo=sass&logoColor=white&color=222)](https://sass-lang.com/)

A lightning talk for the Yay-Yay Conf [Networking & Lightning Talk Challenge](https://weyweyweb.com/social-events/), Torremolinos, 28 October 2026. It lives at [ahoylemon.github.io/color-is-a-lie](https://ahoylemon.github.io/color-is-a-lie/), and the working doc is [`docs/TALK.md`](docs/TALK.md).

Built from Lemon's [reveal.js](https://revealjs.com/) talk template, with Pug and Sass. The deck runs on the Lemon deck system: a 1280×720 canvas, Syne, Yrsa and Share Tech Mono, statements hung high and flush left, and one dissolve between slides. This talk's own styles are partials in `scss/talk/`.

## Prerequisites

You'll need both [Node.js](https://nodejs.org/) and [Bun](https://bun.sh/). The build scripts run on Node (through `tsx`, and some chain `npm run`), and the demo TypeScript build shells out to `bun build`.

## Getting Started

1. Clone the repository
1. Run `bun install`[^1] to install dependencies. It also warns you if the deck's three fonts aren't installed locally (they load from Google Fonts, but a local copy keeps the deck right offline).
1. Run `bun run dev` to start the development server

Pushes to `main` deploy to GitHub Pages. `bun run setup` has already run for this talk, and running it again rewrites the title, URL and description.

[^1]: Any bun command works with npm as well, eg `npm install`, `npm run dev`, etc. Use `bun run test`, not `bun test`: the latter is bun's own test runner and ignores the script.

## Commands

```bash
bun run dev             # Start the dev server with live reload
bun run build           # Build all Pug, Sass and demo TypeScript
bun run test            # Check Sass compiles, TypeScript typechecks, the script tests pass, and every Pug page renders
bun run update:reveal   # Copy reveal.js from node_modules into the vendored reveal/ folder
bun run check:fonts     # Warn if Yrsa, Syne or Share Tech Mono aren't installed locally
```

## How do I edit the deck?

- The slides are in `pug/sections/`, one file per beat, included in order from [`pug/index.pug`](pug/index.pug): `_01-color-isnt-real.pug` to `_08-denouement.pug` are the yes path, and `_09-heel.pug` is the no path. [`docs/TALK.md`](docs/TALK.md) has the run. The template's catalogue of every slide template ([`pug/examples/_example-slides.pug`](pug/examples/_example-slides.pug)) stays in the repo to copy from, but the deck doesn't include it.
  - [`pug/partials/_mixins.pug`](pug/partials/_mixins.pug) has the shared mixins, like `+demo`, `+image`, `+iframe` and `+gag`. This talk's own (`+eyedropper`, and the spectrum and lens drawings) are in [`pug/partials/_talk-mixins.pug`](pug/partials/_talk-mixins.pug).
- The look lives in [`scss/lemon/`](scss/lemon/), and [`docs/LEMON-DECK.md`](docs/LEMON-DECK.md) explains it. Put this talk's own styles in a partial in [`scss/talk/`](scss/talk/), pulled in by an `@use` line in [`scss/talk.scss`](scss/talk.scss).
- **Need help with demos?** See [`demos/demos.md`](demos/demos.md)
- Edit [`js/reveal-config.js`](js/reveal-config.js) for reveal.js settings, but leave the canvas, `display`, `center` and `transition` alone unless you've read why they're set.
- Working with an AI tool? [`docs/REPO.md`](docs/REPO.md) is the repo guide it reads.
- Need additional reveal.js help? Check out the [reveal.js documentation](https://revealjs.com/).

## Updating reveal.js

When you want to update to the latest version of reveal.js:

1. Update the reveal.js dependency: `bun update reveal.js`
2. Copy the new files: `bun run update:reveal`
3. Walk the deck, then commit the updated `reveal/` folder

## License

[CC-BY-4.0](LICENSE) - Creative Commons Attribution 4.0 International License

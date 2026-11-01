# Development

drjonnicholson.com uses the My Scholar theme, based on Astro Erudite v2 and keeps the same core direction: ship a fast, owned, Markdown-first static site with minimal client JavaScript and plain CSS that is easy to inspect.

## Principles

- Prefer native Astro, HTML, and CSS before adding framework islands.
- Keep dependencies light. A small local component is often better than a UI dependency for one widget.
- Own theme primitives: colors, spacing, typography, shape, motion, and icons are local tokens or local files.
- Keep content schema-first. Validate data with Zod instead of allowing loosely shaped content.
- Keep Markdown portable. Prefer `.md`, Sätteri plugins, directives, callouts, math, and code transforms over MDX-only content. Sätteri Markdown pipeline for callouts, links, headings, math, and code
- Keep pages dense but readable. This is an academic/research site, not a marketing landing page.
- Preserve static output. Avoid client-side state unless the interaction clearly needs it.

## Project map

- `astro.config.ts`: Astro, sitemap, image, server, and Markdown processor configuration.
- `src/site.config.ts`: user-facing site, profile, navigation, publication, and footer config.
- `src/content.config.ts`: content collection loaders and schemas.
- `src/schemas.ts`: reusable config and content schema definitions.
- `src/icon.config.ts`: semantic icons, profile icons, project link icons, and publication link icons.
- `src/pages/`: routes.
- `src/layouts/`: shared page shells.
- `src/components/`: UI components grouped by domain.
- `src/lib/`: content processing and feature logic.
- `src/styles/`: global CSS tokens and shared styling.
- `src/content/`: user-editable content.
- `public/`: static assets served from `/`.

## Commands

```bash
npm install
npm dev
npm sync
npm format
npm format:check
npm lint
npm lint:styles
npm test:markdown
npm astro check
npm build
npm preview
npm clean
```

Use `npm routine` for the standard pre-PR local pass.

## Development loop

1. Read the nearest config and schema before editing behavior.
2. Make the smallest content/schema/component change that satisfies the task.
3. Run the narrowest useful check first.
4. Run `npm routine` and `npm build` before a pull request.
5. For visual changes, start `npm dev` and capture desktop and mobile screenshots of affected pages.

## Content rules

- Experience is defined in `src/content/experience.json`.
- Publications are loaded from BibTeX at `src/content/publications/main.bib`.

Do not introduce MDX unless the feature genuinely needs component islands inside content. If MDX is needed, document the reason and update install/customization
docs.

## CSS rules

- Use existing tokens from `src/styles/color.css`, `layout.css`, `typography.css`, and `shape.css`.
- Prefer component-scoped CSS in `.astro` files for one component's layout.
- Put shared reusable styling in `src/styles/`.
- Avoid Tailwind and utility-class systems unless the project direction changes.
- Check light and dark modes for all color changes.

## Icon rules

- Prefer semantic icon names from `src/icon.config.ts` in app components.
- Use local SVGs in `src/assets/icons/` for brand/tool icons that are part of the theme.
- Add Iconify sets only when they replace many local one-off assets or unlock a coherent icon family.

# Project Specification — Clementine Work

**Status:** Draft 0.1  
**Product type:** Static frontend website  
**Tagline:** An Independent Digital Workshop

## 1. Purpose

Clementine Work is the public-facing identity of an independent digital workshop. It may grow to include independently developed products, selected client or collaboration work, and engineering experiments. It should not imply a team, commercial service offering, or research capability that does not yet exist.

## 2. Product goals

- Establish a clear and recognizable public identity.
- Present work and information with accurate context.
- Provide a responsive, accessible, fast website.
- Keep the initial implementation simple and maintainable.
- Allow the site to evolve without coupling it to the other portfolio repository.

## 3. Target experience

A digital workshop for building independent products, crafting useful digital solutions, and exploring software engineering ideas.

## 4. Information architecture

### Home
Workshop identity, concise positioning, primary visual emblem, and selected calls to action.

### Workshop
What Clementine Work is, its working principles, and the three activity areas.

### Works
Selected products and projects, with accurate status, role, scope, and public links.

### Engineering Lab
Experiments, prototypes, technical explorations, and learnings; clearly distinguish experiments from shipped products.

### Notes
Technical writing and project notes suitable for public release.

### Contact
A clear contact path, added when a public contact address or channel is selected.

## 5. Visual direction

Primary identity: the detailed steampunk skull artwork. Secondary signature: Clementine Work wordmark/silhouette artwork. Preserve supplied logo artwork; do not redraw, distort, crop essential details, or recolor without an approved asset variant. Visual direction: Industrial Steampunk × Futuristic Blueprint. Balance dark mechanical sections with warm ivory editorial sections. Use brass/copper sparingly; blueprint grids, gears, measurement marks, and engraved details must remain subordinate to readable content.

### Shared visual foundation

- Palette: Obsidian `#171817`, Charcoal `#242725`, Gunmetal `#454B49`, Antique Brass `#B08D57`, Muted Copper `#986B50`, Warm Ivory `#EAE4D8`, Aged Paper `#D8D0C1`.
- Typography candidates: Space Grotesk for headings, Inter for body text, IBM Plex Mono for technical labels, and restrained Cormorant Garamond accents.
- Shared visual language does not require shared runtime code or a shared component package.

## 6. Initial technical constraints

- React + TypeScript + Vite.
- Static frontend; no backend or database in the initial scope.
- CSS design tokens; use plain CSS or CSS Modules unless a concrete need supports another styling dependency.
- Keep content separate from presentation where practical.
- Use semantic HTML and accessible interaction patterns.
- Respect `prefers-reduced-motion`.
- Optimize images; prefer appropriate modern formats and responsive sizing.
- Avoid adding dependencies without a specific requirement.
- Deployment target: Cloudflare Pages is the current proposal, pending repository and domain setup.
- CI proposal: install from lockfile, lint, typecheck, tests, and production build.

## 7. Non-goals for the initial release

- CMS or admin dashboard.
- Authentication and user accounts.
- Database or API backend.
- Complex animation, scroll choreography, or parallax before the layout is validated.
- Analytics or tracking without an explicit privacy and product decision.
- Shared package or monorepo architecture.

## 8. Content and publication rules

- Do not present planned ideas as released products.
- Label experiments, prototypes, and production-ready products accurately.
- Do not imply a team, client roster, or commercial service availability unless confirmed.
- Use only approved project screenshots, assets, and public links.

## 9. Quality attributes

- Responsive at mobile, tablet, and desktop breakpoints.
- Keyboard-accessible navigation and controls.
- Sufficient text and interface contrast.
- Meaningful page titles, descriptions, and social metadata.
- No broken links, placeholder claims, or unoptimized oversized assets.
- Build output must be reproducible from the committed lockfile.

## 10. Initial acceptance criteria

- [ ] Project scaffold installs cleanly from the lockfile.
- [ ] Development and production build commands are documented.
- [ ] Responsive page shell and navigation exist.
- [ ] Initial page sections follow the approved information architecture.
- [ ] Logo assets are integrated without destructive modification.
- [ ] Design tokens cover colors, typography, spacing, and borders.
- [ ] Lint, typecheck, tests, and build run in CI.
- [ ] No secrets, private data, or unapproved employer materials are present.
- [ ] Keyboard navigation and reduced-motion behavior are checked.
- [ ] Deployment configuration is documented and verified before release.

## 11. Open decisions

- Final domain and public contact channel.
- Final approved logo variants and asset formats.
- Final font hosting strategy (local or provider-hosted).
- Exact project content, screenshots, and publication permissions.
- Final deployment configuration and environment variables, if any.
- Final motion and interaction specification.

## 12. Engineering governance

Follow the current repository guidance and the user's [AI Engineering Standard](https://github.com/imandodo01/ai-engineering-standard). Before implementation, read its current `AGENTS.md` and relevant policies, then inspect this repository's instructions, structure, and Git state. Keep changes small, verify them, inspect the final diff, and report checks actually performed.

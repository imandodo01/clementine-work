# Clementine Work

> An Independent Digital Workshop

## Project status

The visual identity, page structure, and development foundation are in place. The project is now in the **content refinement and pre-release** phase. The Works collection intentionally remains in an honest empty state until there are projects approved for public presentation.

## Requirements

- Node.js 22 LTS
- npm 10 or compatible

## Local development

```bash
npm ci
npm run dev
```

## Verification

```bash
npm ci
npm run lint
npm run typecheck
npm run test
npm run build
```

The user has confirmed that the clean install and all listed checks pass on the current development branch. Re-run them after subsequent code or dependency changes.

## Project documentation

- [Project specification](docs/PROJECT_SPEC.md)
- [Content inventory](docs/CONTENT_INVENTORY.md)
- [AI Engineering Standard](https://github.com/imandodo01/ai-engineering-standard)

## Scope discipline

Do not add backend services, authentication, a database, analytics, or third-party integrations unless a documented requirement justifies them. Keep Engineering Lab, Notes, and Contact deferred until their publication conditions are met.

# pnpm workspace

This is a pnpm workspace that contains two packages:

- `packages/ui`: a React component library
- `apps/site`: a Next.js app that uses the `ui` package

## Technologies

- ESLint
- Prettier
- TypeScript

## Running commands at the workspace root

To run a command at the workspace root, you can use the `pnpm` command with the `--filter` option:

```bash
pnpm --filter site build
```

This will run the `build` script in the `site` package's `package.json` file.

See https://pnpm.io/filtering

## Linking packages

To link the `ui` package to the `site` app, run:

```bash
cd apps/site
pnpm add ui --workspace
```

This will add the workspace `ui` package as a dependency to the `site` app's `package.json` file.

# pnpm workspace

This is a pnpm workspace that contains two packages:

- `packages/ui`: a React component library
- `apps/site`: a Next.js app that uses the `ui` package

## Linking packages

To link the `ui` package to the `site` app, run:

```bash
pnpm --filter site add ui --workspace
```

This will add the `ui` package to the `site` app's `package.json` file as a workspace dependency.

## Running commands at the workspace root

To run a command at the workspace root, you can use the `pnpm` command with the `--filter` option:

```bash
pnpm --filter site build
```

This will run the `build` script in the `site` package's `package.json` file.

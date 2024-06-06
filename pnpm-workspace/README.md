# pnpm workspace

This is a pnpm workspace that contains two packages:

- `packages/ui`: a React component library
- `apps/site`: a Next.js app that uses the `ui` package

## Linking packages

To link the `ui` package to the `site` app, run:

```bash
pnpm add ui --workspace --filter site
```

This will add the `ui` package to the `site` app's `package.json` file as a workspace dependency.

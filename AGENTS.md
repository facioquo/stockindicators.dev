# stockindicators.dev

Simple landing page for the stockindicators.dev domain — a developer menu site linking to Stock Indicators SDK packages for various languages.
It is built with the [Astro](https://astro.build) framework.

## Useful commands

Prefer the [VS Code tasks](.vscode/tasks.json) for running most development commands.

```bash
# Install dependencies
pnpm install

# Start local dev server
pnpm run dev

# Build site for production
pnpm run build

# Preview production build
pnpm run preview

# Lint (Prettier, ESLint, Markdownlint)
pnpm run lint
pnpm run lint:fix   # auto-fix where possible
```

## Pull request conventions

PR titles must follow Conventional Commits format: `type: Subject`

- `type` is lowercase: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`, `plan`
- `Subject` starts with an uppercase letter; keep total title length ≤ 65 characters

Ignore this convention for PRs labeled `bot`, `dependencies`, or `automated`.

## External references

- [Astro official documentation](https://docs.astro.build/)
- [Astro GitHub repository](https://github.com/withastro/astro)

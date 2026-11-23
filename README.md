[![image](https://raw.githubusercontent.com/facioquo/stockindicators.dev/main/public/assets/social-card.png)](https://stockindicators.dev)

# stockindicators.dev

Simple landing page for base stock indicators domain.

```bash
# Install dependencies
pnpm install

# Start local dev server
pnpm run dev

# Build site for production
pnpm run build

# Preview production build
pnpm run preview

# Apply Prettier, ESLint, and markdownlint fixes
pnpm run lint:fix
```

`pnpm install` runs scripts on the Node.js release that `package.json` pins in `devEngines.runtime`, downloading it when needed. Each fixer also runs alone: `pnpm run format`, `pnpm run lint:eslint:fix`, and `pnpm run lint:md:fix`.

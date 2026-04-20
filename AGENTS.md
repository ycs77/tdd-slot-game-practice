# AGENTS.md

## Keep This File Strict

- Do not add repo tours, architecture summaries, or file inventories.
- Only keep constraints, non-obvious behavior, and things an agent must not do.
- If a fact is easy to find with grep, it probably does not belong here.

## Constraints

- Node.js v24
- pnpm 10+
- TypeScript formatting: 2 spaces, single quotes, no semicolons, trailing commas
- Vitest

## Commands

- `pnpm lint --fix`
- `pnpm lint [...files] --fix`
- `pnpm typecheck`
- `pnpm test --run`

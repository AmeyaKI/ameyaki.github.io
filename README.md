# ameyaki.github.io

Personal site for [Ameya Kiwalkar](https://ameyaki.github.io), built with Vite + React + TypeScript and deployed to GitHub Pages.

## Local development

This is a Node project (not Python). Dependencies install into `./node_modules` in the project folder—similar to a Python venv, but for JavaScript.

**One-time setup** (uses [nvm](https://github.com/nvm-sh/nvm) + Node 22 from `.nvmrc`):

```bash
./scripts/setup.sh
```

Or manually:

```bash
nvm use          # or: nvm install
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Updating content

Edit files in `src/data/`:

| File | Contents |
|------|----------|
| `profile.ts` | Name, bio, education, social links |
| `skills.ts` | Skill groups and tags |
| `building.ts` | “What I'm building” cards |
| `contributing.ts` | “Where I'm contributing” cards |

### Adding a work card

Push an object into `buildingItems` or `contributingItems`:

```ts
{
  title: 'Project name',
  subtitle: 'Optional context',
  period: 'Jan 2026 – Present',
  summary: ['One or two short sentences in your own words.'],
  tags: ['Python', 'PyTorch'],
}
```

Empty slots (up to 3 per section) render as placeholder shells when arrays have fewer than 3 entries.

## Deployment

Pushes to `main` trigger [.github/workflows/deploy.yml](.github/workflows/deploy.yml), which builds and deploys to GitHub Pages. Ensure **Settings → Pages → Build and deployment** is set to **GitHub Actions**.

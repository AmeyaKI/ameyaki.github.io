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


| File          | Contents                           |
| ------------- | ---------------------------------- |
| `profile.ts`  | Name, bio, education, social links |
| `skills.ts`   | Skill groups and tags              |
| `activity.ts` | Bullet list for “what i'm up to”   |


### Adding activity bullets

Edit strings in `activity.ts`:

```ts
export const activityBullets = [
  'building something cool with pytorch',
  'interning somewhere neat',
]
```

## Deployment

Pushes to `main` trigger [.github/workflows/deploy.yml](.github/workflows/deploy.yml), which builds and deploys to GitHub Pages. Ensure **Settings → Pages → Build and deployment** is set to **GitHub Actions**.
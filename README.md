# Cyfred Odarve — Technical Portfolio

A data-driven technical portfolio built with React, TypeScript, Vite and Tailwind CSS and deployed with GitHub Actions to GitHub Pages.

## Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- GitHub Actions
- GitHub Pages

## Run locally

```bash
npm install
npm run dev
```

Production check:

```bash
npm run build
npm run preview
```

## Project structure

```text
cyfred-portfolio/
├── .github/workflows/deploy.yml
├── public/
│   ├── assets/
│   │   └── Cyfred_Odarve_Master_IT_Resume.pdf
│   └── projects/
│       ├── cooperative-platform/
│       └── diamonds-parfum/
├── src/
│   ├── components/
│   │   ├── ProjectCard.tsx
│   │   └── ProjectModal.tsx
│   ├── data/
│   │   └── projects.ts
│   ├── types/
│   │   └── project.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
└── ...
```

## Add a new project

You normally only need to do two things.

### 1. Add its images

Create a folder under `public/projects/`:

```text
public/projects/my-new-project/
├── cover.png
├── screen-01.png
└── screen-02.png
```

### 2. Add one object to `src/data/projects.ts`

```ts
{
  id: 'my-new-project',
  title: 'My New Project',
  kicker: 'Cloud · DevOps · Platform Engineering',
  summary: 'Short recruiter-friendly explanation of the project.',
  challenge: 'What engineering or business problem had to be solved?',
  contribution: [
    'Designed the architecture.',
    'Implemented the deployment workflow.',
    'Built monitoring and operational controls.',
  ],
  outcome: 'What was delivered or improved?',
  tags: ['AWS', 'Docker', 'Kubernetes'],
  image: './projects/my-new-project/cover.png',
  gallery: [
    './projects/my-new-project/cover.png',
    './projects/my-new-project/screen-01.png',
    './projects/my-new-project/screen-02.png',
  ],
  href: 'https://optional-live-system.example.com',
  repo: 'https://github.com/optional/source-repository',
  badge: 'Featured Project',
  featured: true,
},
```

The homepage and case-study modal render automatically from this data. You do **not** need to add a new React card component for each project.

If a project has no public live URL or public source code, simply omit `href` and/or `repo`.

## Image guidance

For consistent project cards:

- Cover image: 16:9 or similar landscape ratio
- Recommended width: 1200–1600 px
- PNG, JPG or WebP
- Remove credentials, personal data, private IPs and confidential production details before publishing
- Use screenshots that communicate the system clearly rather than showing every screen

## Publish to GitHub

Create an empty GitHub repository, for example `cyfred-portfolio`, then run from this folder:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/cyfred-portfolio.git
git push -u origin main
```

Then open the GitHub repository:

**Settings → Pages → Build and deployment → Source → GitHub Actions**

The included `.github/workflows/deploy.yml` builds and publishes the site after pushes to `main`.

## Updating the portfolio later

After adding a project or changing content:

```bash
git add .
git commit -m "Add new portfolio project"
git push
```

GitHub Actions will build and redeploy the portfolio automatically.

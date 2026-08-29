# Adding Portfolio Projects

The project section is data-driven.

## Fast workflow

1. Create `public/projects/<project-id>/`.
2. Copy the sanitized screenshots into that folder.
3. Open `src/data/projects.ts`.
4. Copy an existing project object.
5. Change its content and image paths.
6. Save. Vite updates the page automatically in development.

## Required fields

- `id`: unique lowercase slug, e.g. `aws-rds-migration`
- `title`: display title
- `kicker`: short category line
- `summary`: short overview shown on the card
- `challenge`: problem/context shown in the case study
- `contribution`: bullet list of your work
- `outcome`: result or delivered capability
- `tags`: technologies or competencies

## Optional fields

- `image`: card cover image
- `gallery`: screenshots in the case-study viewer
- `href`: public live system URL
- `repo`: public GitHub/source URL
- `badge`: small label such as `Featured Project`
- `featured`: reserved for future sorting/filtering

## Example

```ts
{
  id: 'aws-rds-migration',
  title: 'AWS RDS Database Modernization',
  kicker: 'AWS · MySQL · Migration',
  summary: 'Modernized a production database workload for managed AWS infrastructure.',
  challenge: 'The existing workload required a safer migration path with backup, compatibility and availability planning.',
  contribution: [
    'Assessed database compatibility and dependencies.',
    'Designed backup and rollback procedures.',
    'Prepared RDS configuration, connectivity and monitoring.',
  ],
  outcome: 'Established a controlled migration path and improved operational readiness.',
  tags: ['AWS RDS', 'MySQL', 'CloudWatch'],
  image: './projects/aws-rds-migration/cover.png',
  gallery: [
    './projects/aws-rds-migration/cover.png',
    './projects/aws-rds-migration/architecture.png',
  ],
  badge: 'Database Engineering',
},
```

# Prism Health Lab Web

This is the monorepo for the Prism Health Lab website and landing-page factory.

## Directory Structure

```
/apps
  /web            ← Next.js site
    /components   ← shared UI
    /pages
      /_generated ← landing-page factory output
    /lib          ← Supabase, Swell clients
/packages
  /ui             ← design-system if extracted
/scripts          ← one-off CLIs (e.g. sitemap push)
```

## Getting Started

1. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```
2. Copy `.env.example` to `.env.local` and fill in secrets.
3. Run the dev server:
   ```sh
   cd apps/web
   npm run dev
   ```

## Code Quality
- ESLint, Prettier, Husky, and lint-staged are configured for code quality and formatting.

## Deployment
- Vercel is used for preview and production deployments.

---

For more details, see the project plan in Notion or contact the team. 
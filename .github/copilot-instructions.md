# Copilot Instructions for AI Coding Agents

## Project Overview
- **Framework**: Next.js (App Router, TypeScript)
- **Authentication**: Clerk (see `.env.local` for required keys)
- **Styling**: Tailwind CSS, Geist font
- **UI**: Modular, with reusable components in `src/components/`
- **Pages**: Located in `src/app/` (App Router) and `src/pages/` (legacy support)

## Key Patterns & Conventions
- **Authentication**: Use Clerk hooks/components for auth flows. See `src/app/sign-in/[[...sign-in]]/page.tsx` and `src/app/sign-up/[[...sign-up]]/page.tsx` for examples.
- **Layout**: The root layout is in `src/app/layout.tsx`. All pages should use this for consistent theming and auth context.
- **Navigation**: Use the `Navbar.client.tsx` component for top-level navigation. Place sign-in/out logic in `SignInButton.client.tsx`.
- **Styling**: Use Tailwind utility classes. Global styles are in `src/app/globals.css`.
- **Routing**: Prefer the App Router (`src/app/`). Use dynamic routes as in the sign-in/up flows.
- **Public Assets**: Place static files in `public/`.

## Developer Workflows
- **Install dependencies**: `npm install` (or `yarn`, `pnpm`, `bun`)
- **Start dev server**: `npm run dev` (or `yarn dev`, etc.)
- **Run tests**: `npm test`
- **Environment**: Set Clerk keys in `.env.local` as described in the README.
- **Deploy**: Use Vercel for production deployment.

## Integration Points
- **Clerk**: All authentication logic is handled via Clerk. Do not implement custom auth.
- **Fonts**: Geist font is loaded via Vercel's font integration.

## Examples
- **Sign-in page**: `src/app/sign-in/[[...sign-in]]/page.tsx`
- **Navbar**: `src/components/Navbar.client.tsx`
- **Root layout**: `src/app/layout.tsx`

## Additional Notes
- Do not modify files in `public/` except to add static assets.
- Use TypeScript for all new code.
- Follow the folder structure in the README for new features.

---
For more details, see `README.md` and Clerk/Next.js documentation.
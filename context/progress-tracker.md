# Progress Tracker

Update this file after every meaningful implementation
change.

## Current Phase

- Wallet Scanning

## Current Goal

- Implement Alchemy wallet scanning for the connected authenticated wallet

## Completed

- Removed AI analyzer execution from `/api/wallet/scan`
- Moved wallet scan and AI analyzer calls into `useWalletScan` with React Query mutations
- Added separate step state reporting for scan and analyzer phases in bottom-nav
- Added a GSAP typing animation for the homepage h1 heading via a client-only wrapper component
- Added a GSAP staggered slide-in intro for the homepage insight bars with the following paragraph sliding in after them
- Chained the homepage Get Started button into the intro animation so it slides up after the intro content appears
- Fixed the homepage CTA link animation to target the rendered anchor element and animate it after the intro content
- Animated the homepage feature cards to slide in from the top in sequence via a GSAP client component

## In Progress

- Updates UI sidebar implementation for analyzer news results
  - Dialog now includes a sticky "Ask AI to translate" CTA at the bottom
  - Sidebar now stays hidden until wallet analysis data and ready updates are available
- Authentication workflow — Supabase Web3 sign-in integration:
  - Read `lib/supabase/config.toml` and keep Supabase sign-in with Web3 enabled.
  - On successful Web3 sign-in, get the session and update the UI immediately.
- AI analyzer updates API route (`app/api/updates/route.ts`) — in progress: add server route that accepts a comma-separated list of symbols (query or body), calls CryptoCompare, and logs the response

## Open Questions

- Which explicit Sepolia `tx.to` addresses should be added to the local protocol registry for known dApps and bridges?

## Next Up

- Wallet connect UI component
- Login flow implementation

## Architecture Decisions

- Using wagmi v2 with `createConfig` and injected connector for wallet support
- Supabase split into client.ts (anon key) and server.ts (service role key)
- TanStack Query for async state management
- Both wagmi and React Query providers wrap the app
- SIWE flow has been removed per updated auth spec; Web3 auth should use Supabase Web3 flow directly

## Architecture Decisions

- [Decisions made that affect the system design or
  data model — include why the decision was made]

## Session Notes

- Setup System complete - core infrastructure files created and building successfully
- Project structure: /lib/{wagmi, supabase}, /providers, /hooks
- Wagmi configured with injected connector on mainnet + sepolia
- Dependencies installed: wagmi v2, viem, @tanstack/react-query, @supabase/supabase-js
- Build completes with no TypeScript errors
- Layout system work started - navbar, sidebar, bottom nav, and page shell are being added
- Layout system completed - responsive shell components now compile cleanly
- Homepage simplified to navbar, bottom nav, and the generalAI image
- Wallet analysis sidebar is now rendered beside the homepage AI image with glassmorphism styling and GSAP animations

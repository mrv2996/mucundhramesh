# Codebase audit: dead code, unused add-ons, duplication

Read-only audit. Nothing has been changed. Pick which batch(es) to approve.

## Executive summary
The live site uses 6 pages and about 15 custom components. Around it sits a large layer of leftovers from older site versions: 11 unused sections/pages, 16 unused images (about 2.7 MB), 31 unused stock UI parts and the add-ons only they need. None of it ships to visitors' pages today (unused code is dropped at build), but it slows editing and invites mistakes, e.g. the old "Technical Systems" title lived in an unlinked page.

## Findings

| ID | Category | File / dependency | Evidence | Confidence | Risk | Action |
|---|---|---|---|---|---|---|
| F1 | Dead page | src/pages/CaseStudies.tsx | Not in App routes, imported nowhere | High | Low | Delete |
| F2 | Dead sections | AdvisedCompanies, CaseStudiesSection, Courses, NextEvent, Podcast, Projects, Recommendations, Skills, Tools, YouTube (src/components) | Zero imports anywhere | High | Low | Delete (RecommendationsSection holds full quote text: keep a copy if you want it later) |
| F3 | Unused images | agent-output-example, agent-query-example, capgemini-hierarchy, companies-row1/2, company-logos(-with-sweep), elena-headshot x3, mucundh-headshot.png, mucundh-pro-photo, salesforce-hierarchy-blurred/original, sweep-logo, proxymity-logo.svg | File name referenced nowhere in src | High | Low | Delete |
| F4 | Unused stock UI parts | 31 files in src/components/ui (calendar, chart, form, sidebar, table, tabs, select, drawer, etc.) | No `ui/<name>` imports | High | Low | Delete |
| F5 | Hook used only by dead UI | src/hooks/use-mobile.tsx | Only consumer is ui/sidebar.tsx (F4) | High | Low | Delete with F4 |
| F6 | Unused add-ons | zod, @hookform/resolvers, react-hook-form, date-fns, react-day-picker, recharts, cmdk, vaul, input-otp, embla extras, matching @radix-ui packages | Only imported by F4 files or nothing | Medium | Medium | Remove after F4, confirm build |
| F7 | Leftover stylesheet | src/App.css | Not imported anywhere; Vite starter styles | High | Low | Delete |
| F8 | Leftover public files | public/favicon.ico, favicon.png, placeholder.svg | index.html uses favicon-new.png only | Medium | Low | Requires verification (browsers request /favicon.ico by default; keep favicon.ico) |
| F9 | Duplicate data | Recommendation text in HomeRecommendation and dead RecommendationsSection; company lists in HeroSection and journey.ts | Same names/domains in 2 places | Medium | Low | Resolved by F2; company list fine to leave |
| F10 | Inline IIFE in render | CaseStudyLayout Execution numbering | Mutable counter inside render | High | Low | Simplify (no visible change) |
| F11 | Suppressed lint rule | HeroSection CountUp `eslint-disable exhaustive-deps` | Hidden dependency on `match/target` | Medium | Low | Leave or tidy; works today |
| F12 | No tests | whole project | No test files | High | n/a | Add small tests for RouteScroll redirects and case-study link list |

Not flagged: tailwindcss-animate (used in tailwind config), lovable-tagger, logo.dev key (public key by design). No backend, no secrets in code, no console logging found.

## Cleanup batches (proposed, not started)
- Batch 0: record current build state.
- Batch 1: F10, F7.
- Batch 2: F1, F2, F3 (dead pages, sections, images).
- Batch 3: F4, F5, then F6 (stock UI parts and their add-ons), build check after each.
- Batch 4: F8 after verification; F12 tests.
Each batch is independent, reversible from history, and must leave every page looking identical. Check: all 6 pages load at phone and desktop width with no errors.

Smallest safe first step: Batch 2 (F1-F3), zero visible change.

# Architecture
- Use RouteScroll inside BrowserRouter as the single route/hash scroll coordinator, so fixed-header offsets and page-top navigation remain consistent.
- Keep published case-study links in src/lib/case-studies.ts and reuse RelatedCaseStudies for backlinks, so menus and related reading use the same valid routes.
- Display the external Market Compass dashboard through its public URL rather than copying its server-dependent app; provide a direct link for small screens and embed restrictions.
- New portfolio pages use usePageMeta for scoped title and description updates, so returning home restores the original metadata.
- Set navigation bar link type scale explicitly on every item (small size below the md breakpoint, one step larger above) instead of relying on Button or NavigationMenu defaults, so no single item renders larger than its neighbours.
- The full case-study/project collection lives on /work; the homepage shows only three selected previews, and RouteScroll redirects old homepage anchors (#case-studies, #projects, #skills) there so existing links keep working.
- Shared contact/CV/award URLs live in src/lib/site.ts; CV actions render only when CV_URL is set, so no dead CV links ship.
- Case studies render through CaseStudyLayout (Context/Strategy/Execution accordion/Result + Impact/Tools sidebar) and all work cards through WorkCard with Problem/Action/Result data in src/lib/work.tsx, so every case and card share one format.

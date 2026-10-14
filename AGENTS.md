# Architecture
- Use RouteScroll inside BrowserRouter as the single route/hash scroll coordinator, so fixed-header offsets and page-top navigation remain consistent.
- Keep published case-study links in src/lib/case-studies.ts and reuse RelatedCaseStudies for backlinks, so menus and related reading use the same valid routes.
- Display the external Market Compass dashboard through its public URL rather than copying its server-dependent app; provide a direct link for small screens and embed restrictions.
- New portfolio pages use usePageMeta for scoped title and description updates, so returning home restores the original metadata.

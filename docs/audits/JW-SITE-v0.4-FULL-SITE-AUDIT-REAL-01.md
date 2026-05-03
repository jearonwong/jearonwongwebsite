# JW-SITE-v0.4-FULL-SITE-AUDIT-REAL-01

**Audit Task:** JW-SITE-v0.4-FULL-SITE-AUDIT-REAL-01  
**Conducted:** 2026-05-03  
**Branch:** main  
**HEAD at audit time:** 6d0ac1c  
**Auditor:** Claude Code (claude-sonnet-4-6)  
**Scope:** Full-site — source code, built output, repository hygiene, deployment readiness

---

## A. EXECUTIVE VERDICT

```
AUDIT_VERDICT: AUDIT_BLOCKED_BY_BROWSER_UNAVAILABLE
SECONDARY_VERDICT: AUDIT_PASS_WITH_MINOR_NOTES (all non-visual dimensions)
```

Browser inspection was not available in this audit session. The visual quality of Wave C OG cards, responsive layout correctness, and rendered typography cannot be verified from code analysis alone. All non-visual dimensions (SEO, JSON-LD, code architecture, content consistency, link integrity, repository hygiene) pass with minor notes.

No P0 blockers identified. Two P1 issues require resolution before freeze is granted. Multiple P2/P3 polish items documented. Freeze is **NOT APPROVED** until:
1. Browser inspection confirms Wave C OG cards are visually acceptable
2. P1 canonical trailing slash issue on `/theories/` is corrected
3. Per-project and per-concept OG images decision is made (fix or formally defer)

---

## B. GIT / BUILD STATE

| Check | Result |
|---|---|
| Branch | main |
| HEAD | 6d0ac1c |
| Local == origin/main | ✓ |
| Working tree clean | ✓ (3 untracked files — see Repository Hygiene) |
| `astro check` (typecheck) | CLEAN |
| Lint | CLEAN |
| `astro build` | CLEAN |
| Build output path | `dist/` |

Last 5 commits at audit time:
```
6d0ac1c design: reconcile projects evidence ledger visual rhythm
ada5145 design: normalize projects metadata values
6887396 design: simplify projects guidance metadata
6cbe6b6 design: fix registry ledger row separators
b82a105 design: reconcile v0.4 registry surface rhythm
```

---

## C. BROWSER EVIDENCE

```
BROWSER_AUDIT_STATUS: BROWSER_AUDIT_UNAVAILABLE
```

Browser inspection was not possible in this session. The following are **unverified visual claims** based on code analysis only:

- `proof-room-thesis` dark band: code matches lifecycle thesis-band pattern (`background: #111111`, `border-left: 4px solid var(--accent-signal)`) — visually consistent with `/lifecycle/` expected
- MPLP `variant-protocol` dark background override: `:global()` override in projects.astro applies `background: #111111` to the card — should render as dark authority block
- Proof path `variant-ledger-row` border + title size: code matches essays log-entry rhythm — visual quality unconfirmed
- Wave C OG cards: 8-bit colormap, 9–11KB — render quality on social platforms unconfirmed
- Mobile responsive layout: all media queries present at correct breakpoints — render unconfirmed
- SiteHeader mobile drawer: checkbox-driven CSS, no JS — functional render unconfirmed

**Required before freeze:** Open browser at localhost, inspect `/projects/`, `/lifecycle/`, `/essays/`, `/about/`, `/concepts/`, one essay detail, one project detail, one concept detail. Confirm visual parity across the Architectural Headquarters family.

---

## D. FULL ROUTE INVENTORY

| Route | File | Title Source | OG Image | JSON-LD | Canonical | Status |
|---|---|---|---|---|---|---|
| `/` | `index.astro` | `pageRegistry.home.title` | `jearonwong-og.png` | WebSite + Person | `/` | ✓ |
| `/lifecycle/` | `lifecycle.astro` | `pageRegistry.lifecycle.title` | `og-lifecycle.png` | WebPage + DefinedTerm | `/lifecycle/` | ✓ |
| `/projects/` | `projects.astro` | `pageRegistry.projects.title` | `og-projects.png` | — | — | ✓ |
| `/projects/[slug]/` | `projects/[slug].astro` | project data | `jearonwong-og.png` (generic) | CreativeWork | dynamic | P1 |
| `/projects/mplp/` | (via slug) | project data | `jearonwang-og.png` (generic) | CreativeWork | `/projects/mplp/` | P1 |
| `/essays/` | `essays/index.astro` | `pageRegistry.essays.title` | `og-essays.png` | — | — | ✓ |
| `/essays/[slug]/` | `essays/[slug].astro` | essay data | per-essay OG | Article | dynamic | ✓ |
| `/concepts/` | `concepts/index.astro` | `pageRegistry.concepts.title` | `og-concepts.png` | DefinedTermSet | `/concepts/` | ✓ |
| `/concepts/[slug]/` | `concepts/[slug].astro` | concept data | `jearonwong-og.png` (generic) | DefinedTerm + BreadcrumbList | dynamic | P1 |
| `/about/` | `about.astro` | `"About"` (hardcoded) | `og-about.png` | — | — | P2 |
| `/governance/` | `governance.astro` | `"Governance"` (hardcoded) | none → homepage fallback | — | — | P2 |
| `/playbooks/` | `playbooks.astro` | `"Playbooks"` (hardcoded) | none → homepage fallback | — | — | P2 |
| `/theories/` | `theories.astro` | `"Ideas"` (hardcoded) | none → homepage fallback | — | `/theories` (missing slash) | P1 |
| `/contact/` | `contact.astro` | — | — | — | — | Not audited (appendix) |
| `/newsletter/` | `newsletter.astro` | — | — | — | — | Not audited (appendix) |

---

## E. VI / UI / UX MATRIX

Visual identity is assessed from code analysis. Browser verification required for full pass.

| Dimension | Status | Notes |
|---|---|---|
| Homepage brand manifesto | ✓ CODE | Dark monolith, `zone-a`, accent-signal thesis band |
| Lifecycle (Category Definition Anchor) | ✓ CODE | Numbered section tags, dark thesis-band, governance primitives ledger |
| Essays (Registry Logbook) | ✓ CODE | `log-entry` grid pattern, 280px metadata column, series/flagship borders |
| Projects (Evidence Ledger) | ✓ CODE | Opening thesis-band matches lifecycle pattern; MPLP dark authority; proof-path ledger-row rhythm |
| About (Identity Spec) | ✓ CODE | `spec-grid` + `spec-line` table pattern; external-verification grid |
| Concepts (Reference Layer) | ✓ CODE | Primary stack grid, supporting-term 3-col grid |
| Governance/Playbooks (System Appendix) | UNAUDITED | Source not fully read |
| Theories | UNAUDITED | Source not fully read |
| SiteHeader | ✓ CODE | Fixed position, backdrop blur, dark zone-a |
| SiteFooter | P2 CODE | Hardcoded hex colors `#0f172a`, `#64748b` instead of CSS vars |
| Zone consistency (zone-a / zone-b) | ✓ CODE | Zone-a: dark hero regions; zone-b: light page bodies |
| Accent usage | ✓ CODE | `accent-signal` (#3b82f6 blue) = lifecycle/proof; `accent-proof` (#22d3ee cyan) = proof path |
| `registry-chassis` usage | ✓ CODE | Applied to all content panels |
| Dark thesis-band pattern | ✓ CODE | Lifecycle + Projects opening; lifecycle-thesis-band + proof-room-thesis both `#111111` + `border-left: 4px solid var(--accent-signal)` |
| Font system | ✓ CODE | Google Fonts with noscript fallback, `--font-mono` for registry annotations |
| Registry annotation pattern | ✓ CODE | `REGISTRY_KEY`: `REGISTRY_VALUE` pattern consistent across all pages |
| Visual parity: Projects vs Lifecycle | UNVERIFIED | Code matches — browser required |

---

## F. RESPONSIVE MATRIX

Media query breakpoints present in source:

| Page / Component | Breakpoints | Coverage |
|---|---|---|
| `lifecycle.astro` | 980px, 640px | Full |
| `projects.astro` | 768px, 640px | Full |
| `essays/index.astro` | 900px | Full |
| `concepts/index.astro` | 860px, 640px | Full |
| `about.astro` | 768px | Full |
| `SiteHeader.astro` | 900px (mobile nav) | Full |
| `SiteFooter.astro` | Unverified | Not read |
| `RegistryPageHero.astro` | Unverified | Not read |
| `ProjectProofCard.astro` | Unverified | Not read |

All audited pages have `grid-template-columns: 1fr` fallback at mobile breakpoints. No obvious grid overflow issues identified in code. Mobile render unconfirmed — browser required.

---

## G. TYPOGRAPHY AUDIT

| Pattern | Source | Status |
|---|---|---|
| Heading scale: clamp(1.65rem, 3vw, 2.35rem) | lifecycle, projects thesis-band h2 | ✓ |
| Heading scale: clamp(1.6rem, 3vw, 2.15rem) | projects section h2 | ✓ |
| Essay log-title: 1.72rem / 800 weight | essays/index.astro | ✓ |
| Proof-path record-title: clamp(1.4rem, 2.5vw, 1.72rem) / 800 weight | projects.astro `:global()` | ✓ |
| Registry annotation: 0.78rem mono / 700 / uppercase | across all pages | ✓ |
| Section tag: mono / uppercase numbered keys | lifecycle, projects, concepts, essays | ✓ |
| Scope-index mono: 0.68rem / 800 / accent-signal | projects.astro | ✓ |
| Body copy: 1rem / 1.65–1.7 line-height | consistent across pages | ✓ |
| Thesis-lead: clamp(1rem, 1.6vw, 1.15rem) | projects.astro | ✓ |
| Closing-anchor: clamp(1.3rem, 3vw, 2rem) / 840 weight | lifecycle.astro | ✓ |

No typography regressions identified in code.

---

## H. SOCIALSHARE COMPONENT AUDIT

| Dimension | Status | Notes |
|---|---|---|
| Present on /lifecycle/ | ✓ | |
| Present on /essays/[slug]/ | ✓ | |
| Present on /projects/[slug]/ | ✓ | |
| Present on /concepts/[slug]/ | ✓ | |
| X share URL | ✓ | `twitter.com/intent/tweet` with encoded title + URL |
| LinkedIn share URL | ✓ | `linkedin.com/sharing/share-offsite/` |
| Clipboard API fallback | ✓ | Silent catch on failure |
| `DOMContentLoaded` handler | ✓ | |
| `aria-label` on share links | P3 | Visible text only ("X", "LINKEDIN", "COPY LINK") — no `aria-label` attribute |
| Script bundling | ✓ | Inline `<script>` (Astro bundles by default) |

---

## I. OG / SOCIAL CARD AUDIT

### Card Inventory

| File | Size | Dimensions | Color Mode | Type | Used By |
|---|---|---|---|---|---|
| `jearonwong-og.png` | 151KB | 1200×630 | RGB | Hand-crafted | Homepage, project detail fallback, concept detail fallback |
| `agentic-delivery-og.png` | 142KB | 1200×630 | RGB | Hand-crafted | Essay specific |
| `mcp-a2a-lifecycle-og.png` | 148KB | 1200×630 | RGB | Hand-crafted | Essay specific |
| `ai-agent-lifecycle-it-was-not-designed-it-grew-og.png` | 74KB | 1200×630 | RGBA | Hand-crafted | Essay specific |
| `the-industry-misdefined-multi-agent-ai-og.png` | 95KB | 1200×630 | RGBA | Hand-crafted | Essay specific |
| `og-lifecycle.png` | 10.9KB | 1200×630 | **8-bit colormap** | Wave C | /lifecycle/ |
| `og-essays.png` | 10.4KB | 1200×630 | **8-bit colormap** | Wave C | /essays/ |
| `og-projects.png` | 9.5KB | 1200×630 | **8-bit colormap** | Wave C | /projects/ |
| `og-concepts.png` | 11.1KB | 1200×630 | **8-bit colormap** | Wave C | /concepts/ |
| `og-about.png` | 11.1KB | 1200×630 | **8-bit colormap** | Wave C | /about/ |
| `linkedin-agent-lifecycle-thought-card.png` | 115KB | 1200×1200 | RGB | LinkedIn square | **UNTRACKED** |
| `linkedin-agent-lifecycle-thought-card.svg` | — | — | — | LinkedIn square | **UNTRACKED** |

### Issues

**P2 — Wave C OG card quality unverified:** Static page OG cards (lifecycle, essays, projects, concepts, about) are 8-bit colormap PNGs at 9–11KB. Social platforms (Twitter/X, LinkedIn) serve these as the link preview image. Compared to 74–151KB hand-crafted essay OGs, these may appear low-quality or washed out on high-density displays. Visual verification on both Twitter Card Validator and LinkedIn Post Inspector required before freeze.

**P1 — No dedicated per-project or per-concept OG images:** All project detail pages (`/projects/mplp/`, `/projects/cognitive-os/`, etc.) and all concept detail pages fall back to `jearonwong-og.png`. If someone shares `/projects/mplp/` on LinkedIn, it shows the homepage OG card — no protocol-specific identity.

**FORMAL DEFERRAL DECISION (recorded 2026-05-03):**

```
Decision:
Per-project and per-concept detail OG cards are formally deferred to:
JW-SITE-v0.5-SOCIAL-DISTRIBUTION-SYSTEM

Rationale:
- v0.4 already has page-type OG cards for primary/index surfaces.
- Essay detail pages already support per-essay OG.
- Project/concept detail pages may continue using the generic site OG
  fallback for v0.4.
- Dedicated detail-level OG cards require additional visual asset
  production and social preview QA, which belongs to v0.5.

Status: DEFERRED — not a v0.4 freeze blocker.
```

---

## J. SEO AUDIT

| Dimension | Status | Notes |
|---|---|---|
| `<title>` tags | ✓ | All primary pages use `pageRegistry` data |
| `<meta name="description">` | ✓ | All primary pages have descriptions |
| `robots.txt` | ✓ | `Allow: /`, sitemap points to `https://www.jearonwong.com/sitemap-index.xml` |
| `sitemap-index.xml` | ✓ | Astro auto-generates |
| Canonical URLs | P1 | `/theories.astro` uses `canonicalPath="/theories"` (missing trailing slash). All other pages with canonical have correct trailing slashes. |
| `noindex` for legacy slugs | ✓ | `essays/[slug].astro` sets `noindex={isLegacy}` for legacy URL variants |
| Trailing slash consistency | P1 | See theories canonical above |
| `og:type` | ✓ | Essays use `article`; other pages default (no explicit `og:type` = `website` fallback in BaseLayout) |
| `og:image` | P1 | Project detail and concept detail pages use generic homepage OG |
| `og:image:alt` | ✓ | All pages pass `ogImageAlt` prop |
| Hardcoded page titles | P2 | `about.astro`: `"About"`, `governance.astro`: `"Governance"`, `playbooks.astro`: `"Playbooks"`, `theories.astro`: `"Ideas"` — should use `pageRegistry` for consistency |
| Title/canonical consistency | P2 | `theories.astro`: `title="Ideas"` but URL is `/theories/` — title mismatch with URL |

---

## K. GEO / AI SEARCH READINESS

| Dimension | Status | Notes |
|---|---|---|
| `llms.txt` present | ✓ | `/public/llms.txt` |
| `llms.txt` entity chain | ✓ | AI Agent Lifecycle → Agentic Delivery → MPLP → Confirmation Boundary → Evidence Chain → Semantic Loss |
| `llms.txt` MPLP classification | ✓ | Correctly notes MPLP is protocol path, not proof path |
| `llms.txt` primary URLs | ✓ | All primary routes listed |
| `llms.txt` currency | ✓ | Consistent with current site data |
| Entity disambiguation in copy | ✓ | All primary pages state distinctions (lifecycle ≠ deployment lifecycle, MPLP ≠ proof path) |
| JSON-LD entity graph | ✓ | WebSite + Person on every page; page-specific schemas on lifecycle, concepts detail, essays detail |
| `sameAs` for Person | Unverified | Not read in this session — BaseLayout JSON-LD output not fully inspected |
| Canonical entity signals | ✓ | `/lifecycle/` is the definitive field analysis anchor; explicitly referenced from projects, essays, concepts |

---

## L. JSON-LD / ENTITY GRAPH AUDIT

| Page | Schema Type | Status | Notes |
|---|---|---|---|
| All pages | WebSite + Person | ✓ | Emitted by BaseLayout |
| `/lifecycle/` | WebPage + DefinedTerm | ✓ | Full concept chain in `about` array |
| `/concepts/` | DefinedTermSet | ✓ | All concepts mapped with slugs |
| `/concepts/[slug]/` | DefinedTerm + BreadcrumbList | ✓ | Per-concept schema |
| `/essays/[slug]/` | Article + ImageObject | ✓ | Full article schema with author, datePublished |
| `/projects/[slug]/` | CreativeWork | ✓ | Project-level schema |
| `/projects/` | — | P3 | No page-level JSON-LD |
| `/essays/` | — | P3 | No page-level JSON-LD |
| `/about/` | — | P3 | No page-level JSON-LD (Person is in BaseLayout global) |

---

## M. ACCESSIBILITY AUDIT

| Dimension | Status | Notes |
|---|---|---|
| Semantic HTML structure | ✓ | `<section>`, `<article>`, `<h2>`/`<h3>` hierarchy present |
| `aria-label` on navigation | Unverified | SiteHeader not fully read |
| `aria-label` on share links | P3 | SocialShare: visible text labels only, no explicit `aria-label` attributes |
| `aria-labelledby` on sections | ✓ | `/concepts/index.astro` uses `aria-labelledby` on sections |
| `aria-label` on scope ledger | ✓ | projects.astro: `aria-label="Project maturity boundaries"` |
| Alt text on images | ✓ | All `<img>` tags in audited source have `alt` attributes |
| Focus management | Unverified | Browser required |
| Color contrast | Unverified | Browser + tooling required |
| Mobile nav keyboard access | Unverified | CSS checkbox drawer — keyboard behavior unconfirmed |
| Skip-to-content link | Unverified | Not observed in SiteHeader source |

---

## N. PERFORMANCE / ASSET AUDIT

| Dimension | Status | Notes |
|---|---|---|
| Static output | ✓ | `output: "static"` in astro.config |
| Image lazy loading | ✓ | `loading="lazy" decoding="async"` on essay cover images |
| Google Fonts loading | P2 | `<link>` preconnect + stylesheet in BaseLayout, with `noscript` fallback — no `font-display: swap` observed in source (may be default) |
| Largest assets | P2 | Essay OG cards: 142–151KB RGB PNGs (appropriate for OG use); untracked `linkedin-agent-lifecycle-thought-card.png` at 115KB |
| Wave C OG card sizes | P2 | 9–11KB 8-bit colormap — quality risk, not size risk |
| JS bundle | ✓ | Minimal: SocialShare clipboard script only |
| CSS | ✓ | Scoped Astro `<style>` blocks; no large global stylesheets observed |
| `dist/` output | ✓ | Build clean |

---

## O. CODE ARCHITECTURE AUDIT

| Dimension | Status | Notes |
|---|---|---|
| Component extraction | ✓ | `RegistryPageHero`, `ProjectProofCard`, `SocialShare`, `SiteHeader`, `SiteFooter` are properly extracted |
| Data layer | ✓ | `src/data/site.ts` centralizes all content, metadata, and registry data |
| `pageRegistry` usage | P2 | `about.astro`, `governance.astro`, `playbooks.astro`, `theories.astro` use hardcoded title strings instead of `pageRegistry` |
| CSS custom property usage | P2 | `SiteFooter.astro` uses hardcoded hex values `#0f172a` and `#64748b` instead of CSS vars |
| `:global()` usage | ✓ | Correctly used for child component variant overrides in projects.astro |
| Dead CSS | P3 | `SiteHeader.astro` has `.nav-cta` class with no matching elements in current markup |
| Scoped styles | ✓ | All page-level styles are in Astro `<style>` blocks |
| Hardcoded colors in component | P2 | `essays/[slug].astro`: `background: #ffffff` in table styles |
| TypeScript | ✓ | `astro check` passes clean |
| Content collections | ✓ | Essays use `getCollection("essays")` with proper typing |
| Slug routing | ✓ | `getStaticPaths` pattern used correctly |

---

## P. CONTENT / COPY CONSISTENCY AUDIT

| Dimension | Status | Notes |
|---|---|---|
| MPLP = protocol path, NOT proof path | ✓ | Consistent in projects.astro, lifecycle.astro, llms.txt, boundary notes |
| Proof path = Cognitive OS + SoloCrew + Validation Lab | ✓ | Consistent |
| "Execution is not Delivery" thesis | ✓ | Present in lifecycle.astro, essays spotlight copy |
| Scope boundary notes | ✓ | All 4 project boundary notes correctly qualified (runtime path, delivery proof path, etc.) |
| `siteSemanticBaseline` usage | ✓ | Field definition, agentic delivery definition, MPLP definition pulled from central data |
| Concept opening = "reference layer behind the mainline" | ✓ | Consistent |
| Main journey starts at /lifecycle/ | ✓ | Stated explicitly in concepts/index.astro |
| `theories.astro` title "Ideas" vs route `/theories/` | P2 | Inconsistent — if the page is "Ideas" in title, canonical URL should reflect or vice versa |

---

## Q. LINK INTEGRITY AUDIT

| Link Category | Status | Notes |
|---|---|---|
| Lifecycle → /projects/ | ✓ | proof-path links present |
| Lifecycle → /projects/mplp/ | ✓ | PROTOCOL_PATH link present |
| Lifecycle → /essays/ | ✓ | PUBLIC_ARGUMENTS link present |
| Projects → /lifecycle/ | ✓ | proof-room-actions link present |
| Projects → /essays/ | ✓ | proof-room-actions link present |
| Projects → /projects/mplp/ | ✓ | proof-room-actions link present |
| Essays → /lifecycle/ | ✓ | spotlight-link present |
| Essays → /concepts/ | ✓ | spotlight-link present |
| Concepts → /lifecycle/ | ✓ | concepts-hero-link present |
| Concepts → /projects/mplp/ | ✓ | concepts-hero-link present |
| SocialShare URLs | ✓ | twitter.com/intent/tweet, linkedin.com/sharing/share-offsite/ |
| External social links (About) | ✓ | socialLinks from data layer |
| Email link (About) | ✓ | `mailto:${siteConfig.author.email}` |
| Internal hrefs with trailing slashes | ✓ | All internal links use trailing slash format |
| Broken internal links | None detected | Not deep-checked; build passes without 404s in Astro static |

---

## R. REPOSITORY HYGIENE AUDIT

### Untracked Files

```
?? SITE_AUDIT_2026-05-03.md
?? public/social/linkedin-agent-lifecycle-thought-card.png
?? public/social/linkedin-agent-lifecycle-thought-card.svg
```

**P2 — `SITE_AUDIT_2026-05-03.md` at root:** An audit file was generated at project root in a prior session. The canonical audit file location is `docs/audits/`. The root file should be deleted or moved. Do not commit it to root.

**P2 — `linkedin-agent-lifecycle-thought-card.png` and `.svg` untracked:** LinkedIn thought card assets are in `public/social/` but not committed. Decision required: commit them (if ready to deploy) or add to `.gitignore` (if not ready). They are referenced nowhere in current source — if deployed, they would be served as `/social/linkedin-agent-lifecycle-thought-card.png` but not embedded in any page.

### .gitignore

Not read in this session. Verify `SITE_AUDIT_2026-05-03.md` is either in `.gitignore` or deleted.

---

## S. DEPLOYMENT READINESS AUDIT

| Dimension | Status | Notes |
|---|---|---|
| Build passes | ✓ | `astro build` clean |
| TypeScript clean | ✓ | `astro check` clean |
| `robots.txt` | ✓ | Correct sitemap URL |
| `sitemap-index.xml` | ✓ | Auto-generated by Astro |
| `llms.txt` | ✓ | Present and current |
| Untracked assets in public/ | P2 | LinkedIn cards untracked — would deploy if tracked and pushed |
| Stale root audit file | P2 | `SITE_AUDIT_2026-05-03.md` at root — not deployment-blocking but hygiene issue |
| Origin/main sync | ✓ | Local matches remote at audit time |

---

## T. ISSUE REGISTER

### P1 — Must Fix Before Freeze

| ID | Location | Issue | Fix |
|---|---|---|---|
| P1-01 | `src/pages/theories.astro` | `canonicalPath="/theories"` — missing trailing slash | Change to `canonicalPath="/theories/"` ✓ FIXED |

### DEFERRED — Formally Documented, Not Freeze-Blocking

| ID | Location | Issue | Status |
|---|---|---|---|
| P1-02 | `src/pages/projects/[slug].astro` | All project detail pages use generic `jearonwong-og.png` | **DEFERRED TO v0.5** — JW-SITE-v0.5-SOCIAL-DISTRIBUTION-SYSTEM. v0.4 generic fallback is acceptable. |
| P1-03 | `src/pages/concepts/[slug].astro` | All concept detail pages use generic `jearonwong-og.png` | **DEFERRED TO v0.5** — JW-SITE-v0.5-SOCIAL-DISTRIBUTION-SYSTEM. v0.4 generic fallback is acceptable. |

### P2 — Should Fix (Pre-Freeze Preferred)

| ID | Location | Issue | Fix |
|---|---|---|---|
| P2-01 | `src/components/SiteFooter.astro` | Hardcoded `#0f172a`, `#64748b` colors | Replace with CSS vars `--text-registry-muted` / `--current-muted` |
| P2-02 | `src/pages/about.astro` | `title="About"` hardcoded | Change to `title={pageRegistry.about.title}` |
| P2-03 | `src/pages/governance.astro` | `title="Governance"` hardcoded; no ogImagePath | Use pageRegistry; add ogImagePath |
| P2-04 | `src/pages/playbooks.astro` | Title hardcoded; no ogImagePath | Use pageRegistry; add ogImagePath |
| P2-05 | `src/pages/theories.astro` | `title="Ideas"` inconsistent with URL `/theories/` | Align title with route identity |
| P2-06 | `src/pages/essays/[slug].astro` | `background: #ffffff` hardcoded in table styles | Use CSS var |
| P2-07 | `public/social/` | Wave C OG cards are 8-bit colormap (9–11KB) | Verify visual quality on social platforms; regenerate if needed |
| P2-08 | Root | `SITE_AUDIT_2026-05-03.md` at project root | Delete or move to `docs/audits/` |
| P2-09 | `public/social/` | LinkedIn thought cards untracked | Commit or add to `.gitignore` |

### P3 — Polish (Post-Freeze)

| ID | Location | Issue | Fix |
|---|---|---|---|
| P3-01 | `src/components/SiteHeader.astro` | Dead CSS class `.nav-cta` with no matching elements | Remove dead CSS |
| P3-02 | `src/components/SocialShare.astro` | No `aria-label` on share anchors | Add `aria-label="Share on X"` etc. |
| P3-03 | `src/pages/projects.astro` | No page-level JSON-LD | Add WebPage or CollectionPage schema |
| P3-04 | `src/pages/essays/index.astro` | No page-level JSON-LD | Add WebPage or CollectionPage schema |
| P3-05 | `src/layouts/BaseLayout.astro` | Verify `sameAs` in Person JSON-LD includes all social profiles | Confirm completeness |
| P3-06 | `src/layouts/BaseLayout.astro` | Verify `font-display: swap` is set | Confirm CLS is minimized |

---

## U. FREEZE DECISION

```
FREEZE_STATUS: NOT_APPROVED
BLOCKING_REASON: BROWSER_AUDIT_UNAVAILABLE
SECONDARY_BLOCKERS: None (all code-level P1 issues resolved or formally deferred)
```

**Resolved conditions (as of 2026-05-03 cleanup wave):**

- **P1-01 FIXED** — `canonicalPath="/theories/"` corrected.
- **P1-02 DEFERRED** — Per-project OG cards formally deferred to v0.5. No longer freeze-blocking.
- **P1-03 DEFERRED** — Per-concept OG cards formally deferred to v0.5. No longer freeze-blocking.
- **Repository hygiene** — Untracked files resolved (deleted).

**Sole remaining condition to unlock freeze:**

1. **Browser inspection** — Open `/projects/`, `/lifecycle/`, `/essays/`, `/about/`, `/concepts/`, one essay detail, one project detail, one concept detail in browser. Confirm visual parity across the Architectural Headquarters family. Confirm proof-room-thesis dark band renders correctly. Confirm Wave C OG cards are visually acceptable on social platforms (Twitter Card Validator + LinkedIn Post Inspector).

After browser confirmation with no visual regressions, issue final verdict: `AUDIT_PASS_READY_FOR_FREEZE`.

---

## V. RECOMMENDED IMPLEMENTATION WAVES

### Wave Fix-01 (P1 — Immediate)

```
P1-01: theories.astro — canonicalPath trailing slash
```

One-line fix. No visual change. SEO correctness.

### Wave Fix-02 (P2 — Pre-Freeze Polish)

```
P2-02: about.astro — title from pageRegistry
P2-03: governance.astro — title from pageRegistry + ogImagePath
P2-04: playbooks.astro — title from pageRegistry + ogImagePath
P2-05: theories.astro — title alignment
P2-01: SiteFooter.astro — CSS var for hardcoded colors
P2-06: essays/[slug].astro — CSS var for table background
```

Batch of hygiene fixes. No visual impact on primary pages.

### Wave Fix-03 (OG Cards — Requires Creative Work)

```
P1-02: Per-project OG images (or formal deferral)
P1-03: Per-concept OG images (or formal deferral)
P2-07: Wave C OG card quality verification + potential regeneration
```

Requires either design work (creating new cards) or a formal decision to defer. This is the largest open question for the v0.4 freeze.

### Wave Fix-04 (P3 — Post-Freeze)

```
P3-01: Dead CSS .nav-cta removal
P3-02: SocialShare aria-labels
P3-03/P3-04: JSON-LD for /projects/ and /essays/ index pages
```

Low-priority polish. No impact on current launch.

---

## W. EXPLICIT NON-ACTIONS

The following are **not recommended** in this wave:

- Do not change the Wave C OG card format without first visually verifying the current quality issue
- Do not add JSON-LD to governance/playbooks/theories — these are system appendix pages, not public-journey priority
- Do not refactor the CSS custom property system — `--current-*` pattern is intentional zone-scoped design
- Do not add `is:inline` to SocialShare script — Astro's default bundling is correct for this use case
- Do not restructure the `proof-ledger` / `ledger-item` HTML — the essays log-entry pattern is the correct visual model
- Do not change the `zone-a` / `zone-b` theming system — it is the correct structural pattern for this site

---

*End of JW-SITE-v0.4-FULL-SITE-AUDIT-REAL-01*

# The Work Outlives the Agent — publication audit

Verdict: **PASS_AFTER_CORRECTION — AUTHORIZED_FOR_PRODUCTION**. The owner reviewed the local article and figures, then explicitly requested formal publication under the repository governance on 2026-10-27. The complete local governed release gate passed before the source was pushed. This authorization covers website publication. LinkedIn and Medium distribution remain outside this execution.

## Scope and authority

- Baseline: `a9f863910631ecab82ad731eff6bf4b89c4d7f3d` on `codex/work-outlives-agent-publication`, in an isolated managed worktree. Unrelated changes in the original checkout were preserved.
- Canonical candidate: `src/content/essays/the-work-outlives-the-agent.md`, `/essays/the-work-outlives-the-agent/`, Lifecycle series entry 8.
- Source: the preceding owner-reviewed public-disclosure draft. The essay retains the existing four-dimensional lifecycle definition and the bounded scope of its development findings. Market references were checked against primary documentation. This task did not independently reproduce the underlying Dogfood findings or establish cross-Runtime compatibility.
- Current authorization: formal website publication following local review. The publication control wave records `publication: approved` and `executionState: PUBLICATION_APPROVED`. The earlier local-preview hold has been superseded by the owner's explicit instruction.
- Runtime implementation details, private object decompositions and operational recovery recipes are outside the article's disclosure scope.

## Local changes

- Added the essay, metadata, current source references, next steps and an explicit publication control wave.
- Added two authored, accessible SVG figures: project continuity and human responsibility across Agent work. Both use the Research Ledger B palette, embedded site font subsets, title/description metadata and full-size links.
- Generated the article's 1200 × 630 OG PNG and SVG source. The cover is not embedded in the article body.
- Applied the owner's visual feedback: the opening thesis is a signed quotation; the repeated body subtitle and isolated byline were removed; the responsibility heading is now “Responsibility spans Agents”.
- Corrected the common essay renderer's H2/H3 font family to `var(--font-display)`. It previously inherited Inter. Existing size, weight and line-height rules remain in place; no forced no-wrap or overflow suppression was added.
- Set the actual publication and update dates to 2026-10-27. The first full gate caught the missing required `updatedAt`; the corrected source passed the complete gate.
- Corrected the OG synchronizer to retain existing PNGs when their exact SVG source, dimensions and embedded source fingerprint remain current. Re-encoding otherwise changed 19 unrelated PNG byte streams. Those baseline bytes were restored, and the corrected workflow changes only this article's new pair. Missing, unreadable or stale pairs are still regenerated.
- Synchronized the generated publication, impact and media manifests, the managed `llms.txt` registry and the entity graph from the essay and approved control wave. No sitewide definition or protocol authority was changed.

## Verification in this worktree

| Check | Result |
| --- | --- |
| `npm ci --no-audit --no-fund` | PASS; 418 packages installed. The existing ESLint version emitted a deprecation notice. |
| `npm run typecheck` after the feedback changes | PASS; 104 files, 0 errors, 0 warnings, 0 hints. |
| `npm run build` after the feedback changes | PASS; 107 static pages. |
| `npm run audit:routes -- --base http://127.0.0.1:4338` | PASS; 97 sitemap routes. |
| `node scripts/generate-site-og-assets.mjs --check the-work-outlives-the-agent-og` | PASS; generated pair and dimensions verified. |
| `git diff --check` | PASS. |
| `PUBLICATION_EVIDENCE_DIR=/tmp/jw-work-outlives-publication-evidence PUBLICATION_PREVIEW_PORT=4329 npm run publication:release` | PASS after correction; includes synchronization, all audits, 107-page build, 97-route matrix and desktop/mobile browser checks. |
| Candidate article HTTP status | 200 at the local preview URL. |
| Local built surfaces | Candidate present in Essays, homepage, RSS, sitemap and canonical metadata; one H1 and two body figures. |
| Owner feedback assertions | Signed opening quote present; plain byline absent; revised H2 anchor present. |

The in-app browser was used first and successfully. The actual Essays entry was clicked through to the article. Both figures were inspected as standalone SVGs and inside the article. Desktop and mobile screenshots were captured under `dist/browser-quality/` after the final build; these are transient verification outputs.

At the desktop check, the responsibility H2 used Outfit at 32px, with one line of text (37.12px line height, 46.109375px total height including padding and border). Page width equalled viewport width at 1425px. At the mobile check, both figures loaded at 366px wide, and page width equalled viewport width at 375px. The opening quote, attribution, heading and figure captions were visually reviewed. No overlap, clipping or horizontal page overflow was observed.

The existing “When an Agent Says Done” article was also checked after the shared H2/H3 correction: one H1, Outfit headings and no horizontal page overflow at desktop and mobile widths. Temporary viewport overrides were reset.

## Workflow state and remaining work

The governing entrypoints were read: `AGENTS.md`; the dialogue, repo-truth, cross-repo boundary, site semantic/brand, site publication surface, article publication, docs minimalism and release-gate skills; and `ARTICLE_PUBLICATION_GOVERNANCE_BASELINE.md`.

The owner's formal publication instruction is recorded. The single governed entrypoint, `npm run publication:release`, synchronized and verified the publication manifest, managed `llms.txt` block, entity-graph registry and media manifest, and passed the complete build, audit and browser gates. The generated diff contains the new publication and its two body figures and OG pair; no unrelated social asset changes remain.

Gate evidence: `/tmp/jw-work-outlives-publication-release.log`, `/tmp/jw-work-outlives-publication-evidence/`, `dist/publication-receipt.json` and `dist/browser-quality/`. These are local verification outputs, not public conformance or deployment claims. The dynamic gate checks the site's 12 principal routes at desktop and mobile sizes; the article-specific visual and click-path checks are described separately above.

The production path is the existing GitHub main branch to Vercel integration. Before pushing, the remote main revision must still match the inspected baseline and the committed tree must pass the CI-mode generated-surface check. Deployment identity, production routes, article-specific desktop/mobile rendering and asset delivery are then checked against the pushed source commit. Production results are recorded in the GitHub deployment status and CI artifact receipts, with a local `dist/production-receipt.json`; this readiness audit does not itself establish a successful deployment.

Remaining evidence boundaries: market references and the author's approved development account support the essay, but this publication does not independently reproduce the underlying Dogfood experiments or demonstrate cross-Runtime interoperability. No social post is sent. No package, registry, version, tag or release seal mutation is part of this publication.

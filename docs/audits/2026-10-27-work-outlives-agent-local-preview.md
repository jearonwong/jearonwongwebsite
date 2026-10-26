# The Work Outlives the Agent — publication audit

Verdict: **PASS_AFTER_CORRECTION — WEBSITE_PUBLISHED**. The owner reviewed the local article and figures, then explicitly requested formal publication under the repository governance on 2026-10-27. The complete local governed release gate passed before the source was pushed. Production publication was then independently checked through the provider deployment identity and public domain. A follow-up repairs the automatic post-deployment verifier, with its final result recorded by CI. This authorization covers website publication. LinkedIn and Medium distribution remain outside this execution.

## Scope and authority

- Baseline: `a9f863910631ecab82ad731eff6bf4b89c4d7f3d` on `codex/work-outlives-agent-publication`, in an isolated managed worktree. Unrelated changes in the original checkout were preserved.
- Canonical candidate: `src/content/essays/the-work-outlives-the-agent.md`, `/essays/the-work-outlives-the-agent/`, Lifecycle series entry 8.
- Source: the preceding owner-reviewed public-disclosure draft. The essay retains the existing four-dimensional lifecycle definition and the bounded scope of its development findings. Market references were checked against primary documentation. This task did not independently reproduce the underlying Dogfood findings or establish cross-Runtime compatibility.
- Current authorization: formal website publication following local review. The publication control wave records `publication: approved`; after the public-domain checks, its `executionState` is `PUBLISHED`. The earlier local-preview hold has been superseded by the owner's explicit instruction.
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

## Production evidence and verifier follow-up

- Initial publication source commit: `64673d203b1791decd3eda9bd820087a439d2572`. Both local release modes passed, the worktree was clean, and main fast-forwarded from the inspected baseline. [The push-triggered CI run](https://github.com/jearonwong/jearonwongwebsite/actions/runs/40358491943) passed.
- Vercel's successful GitHub deployment record `7337341007` identifies the same SHA and the `Production` environment. Both the deployment and its success status were created by `vercel[bot]`. The provider URL is `https://jearonwongwebsite-e0cudz2qt-coregentis.vercel.app`; the public canonical route is `https://www.jearonwong.com/essays/the-work-outlives-the-agent/`.
- `npm run verify:production`, with the official domain and the SHA independently read from that provider record, passed for 24 routes. The deployed publication manifest matches the local source snapshot. The article is present in Essays, RSS, sitemap, `llms.txt` and the entity graph. The two SVG figures and OG PNG return HTTP 200 and have byte-identical SHA-256 digests to the source assets; the PNG is 1200 × 630.
- The in-app browser followed the actual online Essays entry into the canonical route. One H1, Outfit section headings, the signed quote and both loaded figures were checked. Desktop width/scroll width were 1425/1425; mobile width/scroll width were 375/375, with both figures at 366px. No relevant browser errors or warnings were recorded. Screenshots are under `/tmp/jw-work-outlives-publication-evidence/screenshots/`.
- [The first deployment-status CI run](https://github.com/jearonwong/jearonwongwebsite/actions/runs/40358621867) passed its build/audit job but failed automatic production verification. Its target redirected to the Vercel login page, and its API token/project variables were empty. This was a verifier-wiring failure, not a failed public-domain deployment. The protected provider URL remains protected.
- The workflow now uses the configured public URL, falling back to the canonical site URL from `astro.config.mjs` for Production events. A successful status created by `vercel[bot]` for a deployment also created by `vercel[bot]` supplies the exact provider-attested SHA. Other event paths still require independent deployment identity. No access control or secret setting is changed.
- The verifier keeps expected and deployed commit identities distinct, rejects redirection outside the verification origin, and compares the live publication manifest with the source snapshot. Isolated local fixture checks passed for matching identity, rejected mismatched identity, rejected missing identity, and rejected a stale publication manifest. They are labeled synthetic in `/tmp/jw-work-outlives-publication-evidence/production-verifier-synthetic-tests.json` and are not production evidence.
- The final follow-up commit and its automatic build/deployment verification are recorded in GitHub's commit, workflow and deployment records. Those receipts are the final source identity; this audit intentionally does not embed its own future commit hash.

Remaining evidence boundaries: market references and the author's approved development account support the essay, but this publication does not independently reproduce the underlying Dogfood experiments or demonstrate cross-Runtime interoperability. No social post is sent. No package, registry, version, tag or release seal mutation is part of this publication.

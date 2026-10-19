# Browser validation

Validated 20 October 2026 using Playwright with headless Microsoft Edge against the local Python HTTP server. Final run exited successfully.

| Width | Gallery cards (All) | Broken images | Horizontal content overflow | Filters / mobile navigation |
|---|---:|---:|---:|---|
| 320px | 9 | 0 | 0 | Pass |
| 375px | 9 | 0 | 0 | Pass |
| 430px | 9 | 0 | 0 | Pass |
| 768px | 9 | 0 | 0 | Pass |
| 1024px | 9 | 0 | 0 | Pass |
| 1440px | 9 | 0 | 0 | Filters pass; desktop navigation |

Additional checks passed:

- Every category count matches the underlying project data; All restores nine cards.
- Original six gallery titles remain; repository links are unique.
- Technical details expand with the native control.
- Mobile navigation opens, closes on selection and dismisses with Escape.
- CV link triggers a successful browser download.
- Local certificate/image links and section anchors resolve.
- Theme survives reload; reduced-motion mode stops role rotation.
- All public GitHub project and preserved hackathon repository URLs returned HTTP 200.
- Smart Solar and ShareBite demo homepages returned HTTP 200 and rendered their matching applications.
- No JavaScript page errors or console errors during final local tests.
- `node --check` passed for project catalog and main script.

Decorative background orbs extend beyond the viewport inside a clipped, aria-hidden container; they are intentionally excluded from visible-content overflow checks. Document width equals viewport width at every tested size.

Visual review: full desktop layout and 320px layout were inspected, including the hero, gallery, certificates and contact. Previews are available in [desktop-preview.webp](docs/desktop-preview.webp) and [mobile-preview.webp](docs/mobile-preview.webp). Machine-readable results: [browser-report.json](docs/browser-report.json).

Reproduce with the commands in README.md and `tests/portfolio.cjs`. Browser validation covers desktop Edge with viewport emulation; physical-device testing and other browser engines have not been performed. Public demo verification does not validate authenticated workflows. This portfolio has not been deployed to Netlify.

Final pre-commit regression rerun passed after the Pac-Man addition, image galleries, illustrated hero and footer redesign: all six widths, nine unique project cards, no broken images or visible overflow, and no console errors.

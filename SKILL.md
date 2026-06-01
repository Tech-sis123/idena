---
name: idena-design
description: Use this skill to generate well-branded interfaces and assets for Becoming Her 2.0: IDENA (hosted by Pearls of Engineering), either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create
static HTML files for the user to view. If working on production code, you can copy assets and read
the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design,
ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code,
depending on the need.

## Quick reference
- **Brand:** Becoming Her 2.0: IDENA · host org Pearls of Engineering · tagline *Discover. Evolve. Ascend.*
- **Tokens:** `colors_and_type.css` — magenta `#E33286` is dominant; burgundy `#6D1841` for depth;
  soft pink `#F9E7F7` washes; Sansita (display) + DM Sans (body), both Google Fonts.
- **Icons:** Google Material Symbols Rounded (filled). Tier medals were the only emoji in the source.
- **Assets:** `assets/` — headwrap silhouette, ankara diamond band, logo (⚠ low-res). Copy, don't redraw.
- **UI kit:** `ui_kits/landing/` — the IDENA single-page event site, componentised in React/JSX.
- **Slides:** `slides/` — 6 layouts; open `slides/index.html` to browse.
- **Voice:** warm, second-person, "becoming / identity / room / refactor". CTA energy: *"Be in the room."*
- **Register link** (every CTA): https://forms.gle/y7bRhzd877MmjcmC9 (opens in a new tab).

## Don'ts
- Don't introduce new hues — stay within the magenta/burgundy/pink/brown family (use `oklch` for tints).
- Don't reword the tagline lock-up. Don't put emoji in running copy. Don't hand-draw SVG icons.
- Use the ankara pattern only as a thin divider/footer band, never a full background.

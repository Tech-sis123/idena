# Becoming Her 2.0: IDENA — Design System

A brand & UI design system for **Becoming Her 2.0: IDENA**, an annual virtual gathering
hosted by **Pearls of Engineering** — young women in engineering — for every young woman
figuring herself out or rebuilding who she has always been.

> **Tagline:** *Discover. Evolve. Ascend.*
> **Event:** 26th June 2026 · 5:00 PM WAT · Google Meet · Free to attend
> **Register:** https://forms.gle/y7bRhzd877MmjcmC9

This system exists to keep the event landing page, social key art, and slide decks feeling
like one warm, intentional, unmistakably-magenta brand.

---

## Source material

Everything here was reverse-engineered from a single provided asset — there was **no codebase
or Figma file**. The reader does not need access to these; they are listed for provenance.

| Source | What it gave us |
|---|---|
| `uploads/Becoming Her_ INFO DECK.pptx` (6 slides) | The entire brand: palette, fonts (Sansita + DM Sans), copy, sponsor tiers, testimonials, and the key art |
| Landing-page brief (provided in chat) | Page structure, FAQ copy, agenda, registration & contact links |

Key art and fonts were extracted from the PPTX programmatically; assets live in `assets/`.

---

## What this is for

- **One product / surface:** a single-page **event landing site** whose only job is to drive
  registrations. Recreated as a high-fidelity UI kit in `ui_kits/landing/`.
- **Decks:** a 6-layout slide system in `slides/` matching the source info deck.
- **Foundations:** tokens (`colors_and_type.css`), specimen cards (`preview/`), and brand assets (`assets/`).

---

## CONTENT FUNDAMENTALS — how IDENA writes

The voice is **warm, direct, and quietly powerful** — emotional but never saccharine. It speaks
to one woman at a time.

- **Person:** Second person, inviting — *"every young woman figuring herself out"*, *"IDENA is for
  you"*, *"Be in the room."* Occasionally first-person-plural for the org (*"We bring together…"*).
- **Tone:** Affirming and grounded. Sentences are short and declarative, then open into a longer,
  reflective clause. e.g. *"Because identity is the first point of success. The way we see ourselves
  shapes every choice, every room, every becoming that follows."*
- **Signature words:** *becoming, identity, room, shift, rebuild, refactor, beneath the noise.*
  The engineering heritage shows up as gentle metaphor — *"refactor that picture"* — never jargon.
- **Casing:** Headlines and labels are frequently **ALL-CAPS** in the deck (`ABOUT IDENA`,
  `WHAT YOU GAIN`, `BE IN THE ROOM`). Body copy is sentence case. Eyebrows use wide letter-spacing.
- **The tagline** *"Discover. Evolve. Ascend."* is always three words, each capitalised, each
  full-stopped, set in **italic display type**. Treat it as a lock-up — don't reword it.
- **Numerals & money:** Naira with thin separators — `₦200,000`. Pillars are zero-padded indices
  (`01`–`04`). Time is `5:00 PM WAT`; dates are `26th June 2026`.
- **Emoji:** Used *sparingly and only* as tier medals in the deck — 🥇 🥈 🥉. The web build replaces
  these with Material Symbols icons + tier color for a cleaner finish. No emoji in body copy.
- **Vibe in one line:** a friend who happens to be an engineer telling you that you are already enough,
  then handing you the tools anyway.

### Copy examples to imitate
- Eyebrow → Headline: `WHAT YOU GAIN` → *"Tools to rebuild how you see yourself."*
- Reassurance: *"Yes, IDENA is completely free."*
- Community line: *"By young women, for young women."*
- CTA band: *"Be in the room."*
- Share prompt: *"Know a woman who needs this room? Send it to her."*

---

## VISUAL FOUNDATIONS

**Overall feel:** premium, warm, intentional — *not* loud or busy despite the saturated palette.
Lots of breathing room; a single dominant hue carried with confidence; flat vector illustration,
never photoreal gradients-for-the-sake-of-it.

### Color
- **Magenta `#E33286` is the brand.** It is the dominant color — wordmark, buttons, accents.
  A hotter `#E91E80` and a deeper `#C41E6F` (press/shadow) flank it.
- **Deep burgundy/maroon `#6D1841`** provides depth: dark panels, the testimonials section, footer.
- **Near-black `#3A3C3F` / true black `#000000`** for text and the silhouette.
- **Soft pinks** `#F9E7F7` (primary section wash), `#FDF3EE`, `#F6D9EE`, `#F0A8D8` (hero field) give air.
- **Warm browns** `#3D3328` / `#775F4E` for body copy set on cream/light surfaces.
- **Sponsor tiers** carry their own metallics: gold `#D4AF37`, silver `#9A9A9A`, bronze `#CD7F32`,
  each over a faint tinted surface.
- **Imagery is warm and saturated** — pinks and magentas, flat fills, no grain, no black-and-white.

### Type
- **Display:** **Sansita** (700/800/900). Heavy, slightly condensed serif-adjacent sans with
  personality. Used for the wordmark, all headings, and the **italic tagline / pull-quotes**.
- **Body & UI:** **DM Sans** (400/500/700). Clean, friendly, highly legible.
- Both are genuine Google Fonts — *the actual typefaces from the deck*, loaded from the Google
  Fonts CDN (`colors_and_type.css`). No substitution.
- Display headlines are tight (`line-height ~.9`, `letter-spacing -.01em`); eyebrows are wide
  (`.22em`, uppercase, magenta).

### Layout & spacing
- **Mobile-first.** Most visitors arrive from a phone link — single column collapses cleanly.
- 8-point spacing scale; generous section padding (`clamp(64px,9vw,110px)`).
- Centered content with a `1120px` max width on the web build; 1280×720 canvas for slides.
- Sections alternate between **white**, **soft-pink `#F9E7F7`**, and **deep burgundy** for rhythm —
  never more than these few backgrounds.

### Motifs (the signature, used sparingly)
- **Woman-in-headwrap silhouette** — black profile + ankara-print headwrap + rose-gold hoop earring.
  Anchors the hero. (`assets/headwrap-silhouette.png`)
- **Ankara diamond pattern** — white concentric diamonds and dot rows on magenta. Used as a thin
  **section-divider / footer band only**, never as a full background. (`assets/ankara-border.png`)
- **Small accents:** four-point sparkles (`auto_awesome`), a soft star, occasionally a flower —
  scattered, low-opacity, one or two per view.

### Surfaces, depth & motion
- **Corner radii:** soft and rounded — cards `18–22px`, buttons fully `pill`, inputs `8–14px`.
- **Cards:** solid tinted or colored fills with a soft, **burgundy-tinted** shadow
  (`0 10px 30px rgba(109,24,65,.14)`); a light hairline on pale cards. No heavy borders.
- **Pillar cards** are skewed parallelograms (`skewX(-6deg)`) — the one deliberately "engineered"
  geometric flourish, lifted from the deck.
- **Buttons** carry a **magenta glow** shadow (`rgba(227,50,134,.34)`).
- **Hover:** lift `-2px` + brighten to `#E91E80` (or fill-on-ghost). **Press:** shrink to `.97` +
  deepen to `#C41E6F`. **Easing:** `cubic-bezier(.22,.61,.36,1)` at `~.28s`; gentle fade-and-rise
  on scroll (`IntersectionObserver`). No bounces, no parallax.
- **Transparency/blur:** reserved for the sticky header and countdown chip (`backdrop-filter: blur`).

---

## ICONOGRAPHY

- **Primary icon system: Google Material Symbols (Rounded, filled).** The source deck literally
  references Material Symbol names (`stars`, `verified`, `workspace_premium`) for the sponsor tiers,
  so this is the brand's own system. Loaded from the Google Fonts CDN; set
  `font-variation-settings:'FILL' 1,'wght' 500`. Used for UI affordances, agenda steps, about-card
  glyphs, sparkles (`auto_awesome`), stars, and check marks.
- **Emoji:** only the tier medals 🥇🥈🥉 appear in the source deck. The web build swaps these for
  Material Symbols + tier color; keep emoji out of running copy.
- **Brand share glyphs:** WhatsApp and X are inline brand SVGs in the landing page's Share section
  (WhatsApp is the primary share for this audience). These are the two standard social marks; no
  other brand logos are used.
- **Logo:** *Pearls of Engineering* — a red **gear emblem** with the name set inside, plus a rounded
  app-badge variant. Both currently exist only as **low-resolution crops lifted from the deck**
  (`assets/logo-gear.png`, `assets/logo-badge.png`). ⚠️ **Needs a clean vector/PNG source.**
- We do **not** hand-draw bespoke SVG iconography; stick to Material Symbols for consistency.

---

## File index (manifest)

```
README.md                  ← you are here
colors_and_type.css        ← all design tokens (CSS vars) + semantic element styles + fonts
SKILL.md                   ← Agent-Skill entry point (works in Claude Code)

assets/
  headwrap-silhouette.png  ← signature hero silhouette (transparent cut-out)
  ankara-border.png        ← ankara diamond divider band (tileable on X)
  logo-gear.png            ← Pearls of Engineering gear mark  ⚠ low-res
  logo-badge.png           ← Pearls of Engineering app badge  ⚠ low-res
  deck-image1.png          ← source key art (cover)
  deck-image2.jpg          ← source key art (Becoming Her 1.0 promo)

preview/                   ← specimen cards shown in the Design System tab (21 cards)
  colors-*.html  type-*.html  spacing-*.html  comp-*.html  brand-*.html

ui_kits/
  landing/                 ← THE product: full single-page IDENA event site (React/JSX UI kit)
    README.md  index.html  shared.jsx  Hero.jsx  About.jsx  Agenda.jsx  Faq.jsx  Sponsors.jsx  App.jsx

slides/                    ← 6-layout deck matching the source info deck
  index.html (viewer)  slide.css  01-title … 06-closing.html
```

### Where to start
- Designing a **page or web component?** → `ui_kits/landing/` + `colors_and_type.css`.
- Making a **slide / deck?** → `slides/` (open `index.html` to browse).
- Need a **token or hex?** → `colors_and_type.css` or the `preview/` cards.
- Need an **asset?** → `assets/` (copy it out; mind the low-res logo caveat).

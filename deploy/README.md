# IDENA Landing Page — UI Kit

A high-fidelity, click-through recreation of the **Becoming Her 2.0: IDENA** single-page event site.
One job: drive registrations. Every section funnels to **Register Now**
(https://forms.gle/y7bRhzd877MmjcmC9, opens in a new tab).

Open `index.html` to view the full interactive page.

## Stack
Plain React 18 + Babel-in-browser, componentised JSX. Tokens come from `../../colors_and_type.css`;
icons from Google Material Symbols; brand art from `../../assets/`.

## Files & components
| File | Renders |
|---|---|
| `index.html` | Shell — loads React/Babel, fonts, tokens, all components; mounts `<App/>` |
| `shared.jsx` | `Icon`, `Eyebrow`, `RegisterButton`, `SectionHead`, `Reveal` (scroll-in), `REGISTER_URL` |
| `Hero.jsx` | `Hero` (silhouette, wordmark, info badge, CTA) + live `Countdown` to 26 Jun 2026 5PM WAT |
| `About.jsx` | `About` (3 blocks) + `Pillars` (4 skewed parallelogram cards) |
| `Agenda.jsx` | `Agenda` (vertical timeline) + `Testimonials` (From Becoming Her 1.0) |
| `Faq.jsx` | `Faq` accordion (4 questions, single-open) |
| `Sponsors.jsx` | `Sponsors` (logo strip + Gold/Silver/Bronze tiers), `FinalCta`, `Share`, `Footer` |
| `App.jsx` | Sticky register bar + assembles every section in order |

## Interactions
- **Register** buttons (hero, sticky bar, final CTA, footer) → open the Google Form in a new tab.
- **Countdown** ticks live every second.
- **FAQ** rows expand/collapse; one open at a time.
- **Sponsor** mailto → `esabublessing7@gmail.com`.
- **Share**: WhatsApp (primary) + X intent links, plus a copy-link button with confirmation.
- **Sticky bar** slides in after the hero scrolls past.
- **Reveal** fades/raises sections in on scroll.

## Page order
Hero → Countdown → About → Pillars (What you gain) → Agenda → Testimonials → FAQ →
Sponsors → Final CTA ("Be in the room") → Share → Footer.

## Notes / caveats
- The **sponsor logo strip** shows "Sponsors coming soon" placeholders — swap in real logos when confirmed.
- The **Pearls of Engineering logo** is a low-res crop from the deck; replace with a clean source.
- Social links in the footer are placeholders (`#`) — wire up real Instagram / community / site URLs.

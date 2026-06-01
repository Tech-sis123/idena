/* global React, Icon, SectionHead, Reveal */
const { useState: useStateAg } = React;

const AGENDA = [
  { title: "Welcome & opening", desc: "Settling in, framing the evening, meeting the room.", icon: "waving_hand" },
  { title: "Main session & fireside conversation", desc: "The heart of IDENA — honest talk on identity, self-worth and becoming.", icon: "forum" },
  { title: "Interactive moment", desc: "Giveaways, raffle draw and quizzes. The room comes alive.", icon: "celebration" },
  { title: "Q&A & community moment", desc: "Your questions, shared reflections, real connection.", icon: "groups" },
  { title: "Closing & next steps", desc: "What to carry forward, and how to stay in the circle.", icon: "flag" },
];

function Agenda() {
  const [hovered, setHovered] = useStateAg(-1);
  return (
    <section style={{ background: "var(--white)", padding: "clamp(64px,9vw,110px) 0", position: "relative" }}>
      {/* subtle background texture */}
      <div style={{ position: "absolute", inset: 0, opacity: .025, pointerEvents: "none",
        backgroundImage: "radial-gradient(var(--magenta) .6px, transparent .6px)",
        backgroundSize: "32px 32px" }} />

      <div className="wrap" style={{ maxWidth: 820, position: "relative" }}>
        <SectionHead eyebrow="Run of show" title="Real, intentional, built to move you"
          sub="A flow designed to leave you with something — not just a calendar invite you forget." />

        <div style={{ marginTop: 52, display: "flex", flexDirection: "column", gap: 16 }}>
          {AGENDA.map((a, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(-1)}
                style={{
                  display: "flex", alignItems: "flex-start", gap: 20, padding: "22px 26px",
                  borderRadius: 20, cursor: "default",
                  background: hovered === i
                    ? "linear-gradient(135deg, rgba(249,231,247,.6), rgba(246,217,238,.3))"
                    : "rgba(249,231,247,.25)",
                  border: hovered === i
                    ? "1px solid rgba(227,50,134,.16)"
                    : "1px solid rgba(227,50,134,.06)",
                  transform: hovered === i ? "translateY(-2px)" : "translateY(0)",
                  boxShadow: hovered === i ? "0 12px 32px rgba(109,24,65,.1)" : "none",
                  transition: "all .32s var(--ease)"
                }}>

                {/* step number + icon */}
                <div style={{ position: "relative", flex: "0 0 56px", height: 56,
                  borderRadius: 18, overflow: "hidden",
                  background: hovered === i
                    ? "linear-gradient(135deg, var(--magenta), var(--magenta-deep))"
                    : "linear-gradient(135deg, var(--magenta), var(--burgundy))",
                  color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: hovered === i ? "0 8px 24px rgba(227,50,134,.3)" : "var(--shadow-sm)",
                  transition: "all .32s var(--ease)" }}>
                  <Icon name={a.icon} size={26} />
                  {/* step index chip */}
                  <div style={{ position: "absolute", top: 4, right: 4, width: 18, height: 18,
                    borderRadius: 6, background: "rgba(255,255,255,.22)", fontSize: 10,
                    fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#fff" }}>{String(i + 1).padStart(2, "0")}</div>
                </div>

                {/* content */}
                <div style={{ flex: 1, paddingTop: 4 }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 19,
                    color: "var(--ink)", marginBottom: 5 }}>{a.title}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.55, color: "var(--fg2)", margin: 0 }}>{a.desc}</p>
                </div>

                {/* arrow */}
                <div style={{ flex: "0 0 auto", alignSelf: "center",
                  opacity: hovered === i ? 1 : 0, transform: hovered === i ? "translateX(0)" : "translateX(-6px)",
                  transition: "all .28s var(--ease)" }}>
                  <Icon name="arrow_forward" size={20} style={{ color: "var(--magenta)" }} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const TESTIMONIALS = [
  { q: "I learnt that I should not doubt my goals but rather let it keep pushing me.", a: "Tofarati" },
  { q: "I learnt that my circle of influence really matters in shaping who I become.", a: "Christabella" },
  { q: "I learnt that grit and consistency is very important to get things done.", a: "Adesewa" },
];

function Testimonials() {
  const [active, setActive] = useStateAg(0);
  return (
    <section style={{ background: "var(--burgundy)", padding: "clamp(64px,9vw,110px) 0", position: "relative", overflow: "hidden" }}>
      <Icon name="format_quote" size={260} style={{ position: "absolute", top: -50, right: -30,
        color: "rgba(255,255,255,.05)", pointerEvents: "none" }} />
      <div className="wrap" style={{ position: "relative" }}>
        <SectionHead light eyebrow="From Becoming Her 1.0" title="Proof it lands" />
        <div className="testi-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, marginTop: 50 }}>
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div onMouseEnter={() => setActive(i)} style={{
                background: active === i ? "var(--magenta)" : "rgba(255,255,255,.06)",
                border: "1px solid rgba(255,255,255,.12)", borderRadius: 22, padding: "28px 26px", height: "100%",
                transition: "background .35s var(--ease), transform .35s var(--ease)",
                transform: active === i ? "translateY(-4px)" : "none", cursor: "default" }}>
                <div style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 700,
                  fontSize: 44, color: active === i ? "rgba(255,255,255,.6)" : "var(--magenta)", lineHeight: .2, height: 26 }}>&ldquo;</div>
                <p style={{ fontSize: 17, lineHeight: 1.5, color: "#fff", fontWeight: 500 }}>{t.q}</p>
                <div style={{ marginTop: 18, fontWeight: 700, fontSize: 14,
                  color: active === i ? "#fff" : "var(--pink-300)" }}>— {t.a}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Agenda, Testimonials });

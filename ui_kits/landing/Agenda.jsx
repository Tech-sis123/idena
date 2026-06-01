/* global React, Icon, SectionHead, Reveal */
const { useState: useStateAg } = React;

const AGENDA = [
  { time: "5:00 PM", title: "Welcome & opening", desc: "Settling in, framing the evening, meeting the room.", icon: "waving_hand" },
  { time: "5:15 PM", title: "Main session & fireside conversation", desc: "The heart of IDENA — honest talk on identity, self-worth and becoming.", icon: "forum" },
  { time: "—", title: "Interactive moment", desc: "Giveaways, raffle draw and quizzes. The room comes alive.", icon: "celebration" },
  { time: "—", title: "Q&A & community moment", desc: "Your questions, shared reflections, real connection.", icon: "groups" },
  { time: "—", title: "Closing & next steps", desc: "What to carry forward, and how to stay in the circle.", icon: "flag" },
];

function Agenda() {
  return (
    <section style={{ background: "var(--white)", padding: "clamp(64px,9vw,110px) 0" }}>
      <div className="wrap" style={{ maxWidth: 820 }}>
        <SectionHead eyebrow="Run of show" title="One hour, worth every minute"
          sub="A light agenda anchored to the 5:00 PM start. Real, intentional, and built to leave you with something." />
        <div style={{ marginTop: 52, position: "relative" }}>
          <div style={{ position: "absolute", left: 27, top: 8, bottom: 8, width: 2,
            background: "linear-gradient(var(--magenta),var(--rose),var(--pink-200))" }} />
          {AGENDA.map((a, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div style={{ display: "flex", gap: 20, paddingBottom: i < AGENDA.length - 1 ? 26 : 0 }}>
                <div style={{ position: "relative", zIndex: 1, flex: "0 0 56px", height: 56,
                  borderRadius: "50%", background: "var(--magenta)", color: "#fff",
                  display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "var(--shadow-mag)" }}>
                  <Icon name={a.icon} size={26} />
                </div>
                <div style={{ flex: 1, paddingTop: 2 }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 12, flexWrap: "wrap" }}>
                    {a.time !== "—" && <span style={{ fontFamily: "var(--font-display)", fontWeight: 800,
                      fontSize: 18, color: "var(--magenta)" }}>{a.time}</span>}
                    <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 19, color: "var(--ink)" }}>{a.title}</h3>
                  </div>
                  <p style={{ fontSize: 15, lineHeight: 1.55, color: "var(--fg2)", marginTop: 5 }}>{a.desc}</p>
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

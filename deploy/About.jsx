/* global React, Icon, SectionHead, Reveal, Eyebrow */

const ABOUT = [
  { icon: "lightbulb", title: "What is IDENA",
    body: "The second edition of the Becoming Her Webinar — an annual virtual gathering hosted by young women in engineering. A conversation on identity, and the quiet but powerful shift that happens when a woman finally sees herself clearly." },
  { icon: "favorite", title: "Why IDENA",
    body: "Because identity is the first point of success. The way we see ourselves shapes every choice, every room, every becoming that follows. IDENA exists to help women refactor that picture — on their own terms." },
  { icon: "diversity_1", title: "Who is it for",
    body: "Every young woman. Whether you are figuring yourself out, or quietly rebuilding who you have always been — IDENA is for you. By young women, for young women." },
];

function About() {
  return (
    <section style={{ background: "var(--white)", padding: "clamp(64px,9vw,110px) 0" }}>
      <div className="wrap">
        <SectionHead eyebrow="About IDENA" title="A room for the woman beneath the noise" />
        <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22, marginTop: 52 }}>
          {ABOUT.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.08}>
              <div style={{ background: i === 2 ? "var(--burgundy)" : "var(--pink-150)",
                borderRadius: 22, padding: "30px 28px", height: "100%",
                boxShadow: "var(--shadow-sm)", border: i === 2 ? "none" : "1px solid rgba(227,50,134,.1)" }}>
                <div style={{ width: 52, height: 52, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center",
                  background: i === 2 ? "rgba(255,255,255,.14)" : "var(--magenta)", color: "#fff", marginBottom: 18 }}>
                  <Icon name={b.icon} size={26} />
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22,
                  color: i === 2 ? "#fff" : "var(--ink)", marginBottom: 10 }}>{b.title}</h3>
                <p style={{ fontSize: 15.5, lineHeight: 1.6, color: i === 2 ? "rgba(255,255,255,.85)" : "var(--fg2)" }}>{b.body}</p>
                {i === 2 && <div style={{ marginTop: 16, fontFamily: "var(--font-display)", fontStyle: "italic",
                  fontWeight: 700, color: "var(--pink-300)", fontSize: 17 }}>By young women, for young women.</div>}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const PILLARS = [
  { n: "01", t: "Reframe", d: "Honest conversations on identity, self-worth, and the woman beneath the noise.", c: "var(--magenta)" },
  { n: "02", t: "Rediscover", d: "A community of women navigating the same shift — quiet, powerful, ongoing.", c: "var(--burgundy)" },
  { n: "03", t: "Connect", d: "Tools to rebuild how you see yourself — beyond the voices that defined you first.", c: "var(--brown-1)" },
  { n: "04", t: "Carry Forward", d: "Practical takeaways from speakers who have walked the path you're walking.", c: "var(--magenta-deep)" },
];

function Pillars() {
  return (
    <section id="gain" style={{ background: "var(--pink-150)", padding: "clamp(64px,9vw,110px) 0", overflow: "hidden" }}>
      <div className="wrap">
        <SectionHead eyebrow="What you gain"
          title="Tools to rebuild how you see yourself"
          sub="Beyond the voices that defined you first. Four things you leave with." />
        <div className="pillar-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 18, marginTop: 54 }}>
          {PILLARS.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.07}>
              <div className="pillar" style={{ background: p.c, borderRadius: 16, padding: "26px 22px 28px",
                height: "100%", boxShadow: "var(--shadow-md)", transform: "skewX(-6deg)",
                transition: "transform .35s var(--ease)" }}
                onMouseEnter={e => e.currentTarget.style.transform = "skewX(-6deg) translateY(-6px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "skewX(-6deg)"}>
                <div style={{ transform: "skewX(6deg)" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 46,
                    color: "rgba(255,255,255,.45)", lineHeight: .9 }}>{p.n}</div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 21,
                    color: "#fff", margin: "20px 0 12px" }}>{p.t}</h3>
                  <p style={{ fontSize: 14.5, lineHeight: 1.5, color: "rgba(255,255,255,.84)" }}>{p.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { About, Pillars });

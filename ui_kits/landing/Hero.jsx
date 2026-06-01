/* global React, Icon, Eyebrow, RegisterButton */
const { useState: useStateH, useEffect: useEffectH } = React;

const EVENT_TS = new Date("2026-06-26T17:00:00+01:00").getTime(); // 5:00 PM WAT

function Hero() {
  return (
    <section style={{ position: "relative", overflow: "hidden", background: "#fff" }}>
      {/* soft wash only behind the right panel, keeps left airy */}
      <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, width: "46%",
        background: "linear-gradient(180deg,#FCEFF8,#F9E7F7)", pointerEvents: "none" }} className="hero-wash" />

      <div className="wrap hero-grid" style={{ position: "relative", display: "grid",
        gridTemplateColumns: "1.08fr .92fr", gap: 48, alignItems: "center",
        minHeight: "min(86vh,740px)", padding: "48px 24px 150px" }}>

        {/* LEFT — editorial type */}
        <div style={{ position: "relative", zIndex: 2 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 9, background: "var(--pink-150)",
            padding: "7px 16px 7px 9px", borderRadius: 999, marginBottom: 26 }}>
            <img src="../../assets/logo-gear.png" alt="Pearls of Engineering" style={{ height: 24, borderRadius: 5 }} />
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: ".03em", color: "var(--burgundy)" }}>
              Pearls of Engineering · 2nd Edition</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 6 }}>
            <span style={{ width: 38, height: 2, background: "var(--magenta)" }} />
            <Eyebrow>Becoming Her 2.0</Eyebrow>
          </div>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: "clamp(3.6rem,12vw,8rem)", lineHeight: .84, color: "var(--magenta)",
            letterSpacing: "-.015em" }}>IDENA</h1>
          <div style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 700,
            fontSize: "clamp(1.3rem,3.6vw,1.9rem)", color: "var(--rose)", marginTop: 18 }}>
            Discover. Evolve. Ascend.</div>

          <p style={{ marginTop: 22, fontSize: "clamp(1.05rem,2.1vw,1.2rem)", lineHeight: 1.6,
            color: "var(--ink)", maxWidth: 460 }}>
            An annual virtual gathering hosted by young women in engineering — for every young woman
            figuring herself out, or quietly rebuilding who she has always been.</p>

          <div style={{ display: "flex", gap: 14, alignItems: "center", marginTop: 32, flexWrap: "wrap" }}>
            <RegisterButton size="lg" />
            <a href="#gain" style={{ display: "inline-flex", alignItems: "center", gap: 7,
              fontWeight: 700, fontSize: 15, color: "var(--burgundy)", textDecoration: "none" }}>
              What you’ll gain <Icon name="south" size={18} />
            </a>
          </div>
        </div>

        {/* RIGHT — silhouette framed as art inside an arch */}
        <div className="hero-fig" style={{ position: "relative", display: "flex", justifyContent: "center" }}>
          <div style={{ position: "relative", width: "min(100%,440px)", aspectRatio: "440/560",
            borderRadius: "220px 220px 30px 30px",
            background: "linear-gradient(165deg, var(--magenta) 0%, var(--burgundy) 96%)",
            boxShadow: "0 30px 70px rgba(109,24,65,.32)", overflow: "hidden" }}>
            {/* inner top glow */}
            <div style={{ position: "absolute", top: "-30%", left: "-10%", width: "120%", height: "70%",
              background: "radial-gradient(closest-side, rgba(255,255,255,.22), transparent)" }} />
            {/* ankara base */}
            <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 40,
              background: "url('../../assets/ankara-border.png') center/auto 100% repeat-x" }} />
            <img src="../../assets/headwrap-silhouette.png" alt="Woman in headwrap"
              style={{ position: "absolute", bottom: 18, left: "50%", transform: "translateX(-46%)",
                height: "92%", objectFit: "contain", filter: "drop-shadow(0 10px 22px rgba(0,0,0,.28))" }} />
          </div>
          {/* floating accents */}
          <Icon name="auto_awesome" size={36} style={{ position: "absolute", top: "4%", right: "8%", color: "var(--magenta)" }} />
          <Icon name="star" size={26} style={{ position: "absolute", bottom: "16%", left: "4%", color: "var(--rose)" }} />
        </div>
      </div>

      {/* floating event card straddles hero / next section */}
      <EventCard />
    </section>
  );
}

const META = [
  { icon: "calendar_month", label: "Date", value: "26th June 2026" },
  { icon: "schedule", label: "Time", value: "5:00 PM WAT" },
  { icon: "videocam", label: "Venue", value: "Google Meet" },
  { icon: "redeem", label: "Entry", value: "Free to attend" },
];

function EventCard() {
  return (
    <div className="wrap event-card-wrap" style={{ position: "relative", zIndex: 4, marginTop: -110, paddingBottom: 0 }}>
      <div style={{ background: "#fff", borderRadius: 24, boxShadow: "var(--shadow-lg)",
        border: "1px solid rgba(227,50,134,.1)", overflow: "hidden" }}>
        {/* meta row */}
        <div className="meta-row" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
          {META.map((m, i) => (
            <div key={m.label} style={{ display: "flex", alignItems: "center", gap: 14, padding: "22px 26px",
              borderRight: i < 3 ? "1px solid var(--line)" : "none" }}>
              <div style={{ flex: "0 0 auto", width: 42, height: 42, borderRadius: 12, background: "var(--pink-150)",
                color: "var(--magenta)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon name={m.icon} size={22} />
              </div>
              <div>
                <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase",
                  color: "var(--rose)" }}>{m.label}</div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, color: "var(--ink)", marginTop: 2 }}>{m.value}</div>
              </div>
            </div>
          ))}
        </div>
        {/* countdown strip */}
        <Countdown />
      </div>
    </div>
  );
}

function Countdown() {
  const calc = () => {
    const d = Math.max(0, EVENT_TS - Date.now());
    return { days: Math.floor(d / 864e5), hours: Math.floor((d % 864e5) / 36e5),
      mins: Math.floor((d % 36e5) / 6e4), secs: Math.floor((d % 6e4) / 1e3) };
  };
  const [t, setT] = useStateH(calc());
  useEffectH(() => { const i = setInterval(() => setT(calc()), 1000); return () => clearInterval(i); }, []);
  const cells = [["Days", t.days], ["Hrs", t.hours], ["Min", t.mins], ["Sec", t.secs]];
  return (
    <div className="cd-strip" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 18,
      background: "linear-gradient(90deg, var(--magenta), var(--magenta-deep))", padding: "16px 22px", flexWrap: "wrap" }}>
      <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase",
        color: "rgba(255,255,255,.85)" }}>Doors open in</span>
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        {cells.map(([lab, val], i) => (
          <React.Fragment key={lab}>
            <div style={{ textAlign: "center", minWidth: 44 }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 28, color: "#fff",
                lineHeight: 1, fontVariantNumeric: "tabular-nums" }}>{String(val).padStart(2, "0")}</div>
              <div style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase",
                color: "rgba(255,255,255,.7)", marginTop: 4 }}>{lab}</div>
            </div>
            {i < 3 && <span style={{ color: "rgba(255,255,255,.45)", fontWeight: 700, fontSize: 20 }}>:</span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { Hero });

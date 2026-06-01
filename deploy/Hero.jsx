/* global React, Icon, RegisterButton, REGISTER_URL */
const { useState: useStateH, useEffect: useEffectH, useRef: useRefH } = React;

const EVENT_TS = new Date("2026-06-26T17:00:00+01:00").getTime(); // 5:00 PM WAT

/* ── tiny animated sparkle ───────────────────────── */
function Sparkle({ size = 24, top, left, right, bottom, delay = 0, color = "var(--magenta)" }) {
  return (
    <span className="material-symbols-rounded" style={{
      position: "absolute", top, left, right, bottom, fontSize: size, color, opacity: .7,
      animation: `sparkle-pulse 3s ease-in-out ${delay}s infinite`,
      fontVariationSettings: "'FILL' 1,'wght' 500,'opsz' 24", pointerEvents: "none", zIndex: 3
    }}>auto_awesome</span>
  );
}

/* ── the hero ────────────────────────────────────── */
function Hero() {
  const heroRef = useRefH(null);
  const [visible, setVisible] = useStateH(false);
  useEffectH(() => { requestAnimationFrame(() => setVisible(true)); }, []);

  return (
    <section ref={heroRef} style={{ position: "relative", overflow: "hidden", background: "#fff" }}>

      {/* keyframe injection — only once */}
      <style>{`
        @keyframes sparkle-pulse {
          0%, 100% { opacity: .5; transform: scale(.85) rotate(0deg); }
          50%      { opacity: 1;  transform: scale(1.15) rotate(12deg); }
        }
        @keyframes hero-fade-up {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes hero-scale-in {
          from { opacity: 0; transform: scale(.92); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-8px); }
        }
        @keyframes glow-ring {
          0%, 100% { box-shadow: 0 0 0 0 rgba(227,50,134,.28); }
          50%      { box-shadow: 0 0 0 18px rgba(227,50,134,0); }
        }
      `}</style>

      {/* soft diagonal wash */}
      <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, width: "55%",
        background: "linear-gradient(155deg, rgba(252,239,248,.4) 0%, #F9E7F7 60%, rgba(240,168,216,.18) 100%)",
        pointerEvents: "none", borderRadius: "0 0 0 30%" }} className="hero-wash" />

      {/* subtle dot grid pattern overlay */}
      <div style={{ position: "absolute", inset: 0, opacity: .04, pointerEvents: "none",
        backgroundImage: "radial-gradient(var(--magenta) .8px, transparent .8px)",
        backgroundSize: "28px 28px" }} />

      <div className="wrap hero-grid" style={{ position: "relative", display: "grid",
        gridTemplateColumns: "1.05fr .95fr", gap: 56, alignItems: "center",
        minHeight: "min(90vh,800px)", padding: "60px 24px 160px" }}>

        {/* ═══ LEFT — editorial type ═══ */}
        <div style={{
          position: "relative", zIndex: 2,
          opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(32px)",
          transition: "opacity .8s var(--ease), transform .8s var(--ease)"
        }}>

          {/* org badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10,
            background: "linear-gradient(135deg, var(--pink-150), rgba(246,217,238,.6))",
            padding: "8px 18px 8px 10px", borderRadius: 999, marginBottom: 28,
            border: "1px solid rgba(227,50,134,.12)",
            backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)" }}>
            <img src="assets/logo-gear.png" alt="Pearls of Engineering"
              style={{ height: 26, borderRadius: 6 }} />
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: ".04em",
              color: "var(--burgundy)" }}>
              Pearls of Engineering · 2nd Edition</span>
          </div>

          {/* presenter line */}
          <div style={{ marginBottom: 14, display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 14.5, fontWeight: 800, letterSpacing: ".18em",
              textTransform: "uppercase", color: "var(--magenta)",
              background: "linear-gradient(90deg, var(--magenta), var(--magenta-deep))",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Becoming Her 2.0 presents
            </span>
          </div>

          {/* IDENA wordmark */}
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: "clamp(4rem,13vw,8.5rem)", lineHeight: .82,
            background: "linear-gradient(160deg, var(--magenta) 20%, var(--magenta-deep) 80%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            letterSpacing: "-.02em", filter: "drop-shadow(0 4px 12px rgba(227,50,134,.18))" }}>IDENA</h1>

          {/* tagline */}
          <div style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 700,
            fontSize: "clamp(1.35rem,3.8vw,2rem)", color: "var(--rose)", marginTop: 18,
            opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity .7s var(--ease) .15s, transform .7s var(--ease) .15s" }}>
            Discover. Evolve. Ascend.</div>

          {/* body copy */}
          <p style={{ marginTop: 22, fontSize: "clamp(1.05rem,2.1vw,1.18rem)", lineHeight: 1.65,
            color: "var(--ink)", maxWidth: 460,
            opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity .7s var(--ease) .25s, transform .7s var(--ease) .25s" }}>
            An annual virtual gathering hosted by young women in engineering, for every young woman
            figuring herself out or quietly rebuilding who she has always been.</p>

          {/* ── meta chips ── */}
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 26,
            opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity .7s var(--ease) .35s, transform .7s var(--ease) .35s" }}>
            {[
              { icon: "calendar_month", text: "26 June 2026" },
              { icon: "schedule", text: "5:00 PM WAT" },
              { icon: "videocam", text: "Google Meet" },
            ].map(chip => (
              <span key={chip.text} style={{ display: "inline-flex", alignItems: "center", gap: 7,
                background: "var(--pink-150)", border: "1px solid rgba(227,50,134,.12)",
                borderRadius: 999, padding: "7px 16px 7px 10px",
                fontSize: 13.5, fontWeight: 600, color: "var(--ink)" }}>
                <Icon name={chip.icon} size={17} style={{ color: "var(--magenta)" }} />
                {chip.text}
              </span>
            ))}
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6,
              background: "linear-gradient(135deg, var(--magenta), var(--magenta-deep))",
              borderRadius: 999, padding: "7px 16px", fontSize: 13.5, fontWeight: 700,
              color: "#fff", letterSpacing: ".02em" }}>
              <Icon name="verified" size={17} style={{ color: "#fff" }} />
              Free to attend
            </span>
          </div>

          {/* ── CTA row ── */}
          <div style={{ display: "flex", gap: 22, alignItems: "center", marginTop: 34, flexWrap: "wrap",
            opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity .7s var(--ease) .45s, transform .7s var(--ease) .45s" }}>
            <div style={{ position: "relative" }}>
              <RegisterButton size="lg" />
              {/* glow ring */}
              <div style={{ position: "absolute", inset: 0, borderRadius: 999,
                animation: "glow-ring 2.5s ease-in-out infinite", pointerEvents: "none" }} />
            </div>
            <a href="#gain" style={{ display: "inline-flex", alignItems: "center", gap: 8,
              fontWeight: 700, fontSize: 15, color: "var(--burgundy)", textDecoration: "none",
              transition: "color .28s var(--ease)" }}
              onMouseEnter={e => e.currentTarget.style.color = "var(--magenta)"}
              onMouseLeave={e => e.currentTarget.style.color = "var(--burgundy)"}>
              What you'll gain <Icon name="south" size={18} />
            </a>
          </div>
        </div>

        {/* ═══ RIGHT — silhouette in arch ═══ */}
        <div className="hero-fig" style={{
          position: "relative", display: "flex", justifyContent: "center",
          opacity: visible ? 1 : 0, transform: visible ? "scale(1)" : "scale(.92)",
          transition: "opacity .9s var(--ease) .2s, transform .9s var(--ease) .2s"
        }}>
          <div style={{ position: "relative", width: "min(100%,440px)", aspectRatio: "440/570" }}>

            {/* outer glow behind the arch */}
            <div style={{ position: "absolute", inset: -20, borderRadius: "240px 240px 50px 50px",
              background: "radial-gradient(ellipse at 50% 40%, rgba(227,50,134,.14), transparent 70%)",
              filter: "blur(24px)", pointerEvents: "none" }} />

            {/* the arch itself */}
            <div style={{ position: "absolute", inset: 0, borderRadius: "220px 220px 30px 30px",
              background: "linear-gradient(160deg, #E84A9A 0%, var(--magenta) 35%, var(--burgundy) 100%)",
              boxShadow: "0 32px 80px rgba(109,24,65,.36), inset 0 1px 0 rgba(255,255,255,.18)",
              overflow: "hidden" }}>

              {/* inner top glow */}
              <div style={{ position: "absolute", top: "-25%", left: "-5%", width: "110%", height: "60%",
                background: "radial-gradient(closest-side, rgba(255,255,255,.25), transparent)" }} />

              {/* subtle shimmer line */}
              <div style={{ position: "absolute", top: "10%", left: "50%", width: "1px", height: "40%",
                background: "linear-gradient(180deg, transparent, rgba(255,255,255,.25), transparent)" }} />

              {/* ankara base */}
              <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 44,
                background: "url('assets/ankara-border.png') center/auto 100% repeat-x",
                opacity: .9 }} />
            </div>

            {/* figure — breaking out of the arch */}
            <img src="assets/headwrap-silhouette.png" alt="Woman in headwrap"
              style={{ position: "absolute", bottom: 16, left: "50%", transform: "translateX(-46%)",
                height: "105%", objectFit: "contain",
                filter: "drop-shadow(0 18px 36px rgba(0,0,0,.4))", zIndex: 2 }} />

            {/* floating accents */}
            <Sparkle size={32} top="1%" right="5%" delay={0} color="rgba(255,255,255,.85)" />
            <Sparkle size={22} top="12%" left="2%" delay={1.2} color="var(--pink-300)" />
            <Sparkle size={18} bottom="22%" right="2%" delay={0.6} color="var(--rose)" />

            {/* floating date badge */}
            <div style={{ position: "absolute", bottom: "18%", left: "-8%", zIndex: 4,
              background: "rgba(255,255,255,.92)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)",
              borderRadius: 16, padding: "10px 16px", boxShadow: "0 8px 28px rgba(109,24,65,.16)",
              border: "1px solid rgba(227,50,134,.1)",
              animation: "float 4s ease-in-out infinite" }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".1em",
                textTransform: "uppercase", color: "var(--rose)", marginBottom: 2 }}>Save the date</div>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <Icon name="calendar_month" size={18} style={{ color: "var(--magenta)" }} />
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15,
                  color: "var(--ink)" }}>26 June</span>
              </div>
            </div>

            {/* floating platform badge */}
            <div style={{ position: "absolute", top: "32%", right: "-10%", zIndex: 4,
              background: "rgba(255,255,255,.92)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)",
              borderRadius: 16, padding: "10px 16px", boxShadow: "0 8px 28px rgba(109,24,65,.16)",
              border: "1px solid rgba(227,50,134,.1)",
              animation: "float 4s ease-in-out 1.5s infinite" }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".1em",
                textTransform: "uppercase", color: "var(--rose)", marginBottom: 2 }}>Platform</div>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <Icon name="videocam" size={18} style={{ color: "var(--magenta)" }} />
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15,
                  color: "var(--ink)" }}>Google Meet</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* floating event card straddles hero / next section */}
      <EventCard visible={visible} />
    </section>
  );
}

/* ── event meta card ─────────────────────────────── */
const META = [
  { icon: "calendar_month", label: "Date",  value: "26th June 2026" },
  { icon: "schedule",       label: "Time",  value: "5:00 PM WAT" },
  { icon: "videocam",       label: "Venue", value: "Google Meet" },
  { icon: "redeem",         label: "Entry", value: "Free to attend" },
];

function EventCard({ visible }) {
  return (
    <div className="wrap event-card-wrap" style={{
      position: "relative", zIndex: 4, marginTop: -110, paddingBottom: 0,
      opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(32px)",
      transition: "opacity .8s var(--ease) .55s, transform .8s var(--ease) .55s"
    }}>
      <div style={{ background: "#fff", borderRadius: 24,
        boxShadow: "0 20px 60px rgba(109,24,65,.15), 0 1px 3px rgba(109,24,65,.08)",
        border: "1px solid rgba(227,50,134,.08)", overflow: "hidden" }}>
        {/* meta row */}
        <div className="meta-row" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
          {META.map((m, i) => (
            <div key={m.label} style={{ display: "flex", alignItems: "center", gap: 14, padding: "24px 28px",
              borderRight: i < 3 ? "1px solid rgba(227,50,134,.08)" : "none",
              transition: "background .3s ease" }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(249,231,247,.4)"}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
              <div style={{ flex: "0 0 auto", width: 44, height: 44, borderRadius: 14,
                background: "linear-gradient(135deg, var(--pink-150), rgba(246,217,238,.5))",
                color: "var(--magenta)", display: "flex", alignItems: "center", justifyContent: "center",
                border: "1px solid rgba(227,50,134,.08)" }}>
                <Icon name={m.icon} size={22} />
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".14em",
                  textTransform: "uppercase", color: "var(--rose)" }}>{m.label}</div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18,
                  color: "var(--ink)", marginTop: 3 }}>{m.value}</div>
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

/* ── live countdown ──────────────────────────────── */
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
    <div className="cd-strip" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 20,
      background: "linear-gradient(90deg, var(--magenta), var(--magenta-deep), var(--burgundy))",
      padding: "18px 24px", flexWrap: "wrap" }}>
      <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: ".16em", textTransform: "uppercase",
        color: "rgba(255,255,255,.8)" }}>Doors open in</span>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        {cells.map(([lab, val], i) => (
          <React.Fragment key={lab}>
            <div style={{ textAlign: "center", minWidth: 48 }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 30, color: "#fff",
                lineHeight: 1, fontVariantNumeric: "tabular-nums",
                textShadow: "0 2px 8px rgba(0,0,0,.15)" }}>{String(val).padStart(2, "0")}</div>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase",
                color: "rgba(255,255,255,.65)", marginTop: 5 }}>{lab}</div>
            </div>
            {i < 3 && <span style={{ color: "rgba(255,255,255,.35)", fontWeight: 700, fontSize: 22,
              animation: "sparkle-pulse 1.5s ease-in-out infinite" }}>:</span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { Hero });

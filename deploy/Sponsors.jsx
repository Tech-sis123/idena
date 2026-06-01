/* global React, Icon, SectionHead, Reveal, RegisterButton, Eyebrow, REGISTER_URL */
const { useState: useStateSp } = React;

const SPONSOR_EMAIL = "esabublessing7@gmail.com";

const TIERS = [
  { name: "Gold", amount: "₦200,000", icon: "workspace_premium", color: "var(--gold)", bg: "var(--gold-bg)",
    perks: ["Top-tier logo placement", "Verbal recognition + 2-min spotlight", "5 social mentions", "Logo on registration", "Post-event feature", "Optional attendee list"], feat: true },
  { name: "Silver", amount: "₦100,000", icon: "verified", color: "var(--silver)", bg: "var(--silver-bg)",
    perks: ["Logo placement", "Verbal recognition at opening", "3 social mentions", "Post-event recap inclusion"] },
  { name: "Bronze", amount: "₦50,000", icon: "stars", color: "var(--bronze)", bg: "var(--bronze-bg)",
    perks: ["Logo on slides & landing page", "1 social mention", "Event acknowledgments"] },
];

function Sponsors() {
  return (
    <section style={{ background: "var(--pink-150)", padding: "clamp(64px,9vw,110px) 0" }}>
      <div className="wrap">
        <SectionHead eyebrow="Partner with us" title="Become a sponsor"
          sub="Put your name behind a room of young women becoming who they’re meant to be. Full sponsorship deck available on request." />

        {/* logo strip */}
        <div style={{ margin: "40px auto 8px", textAlign: "center" }}>
          <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: ".16em", textTransform: "uppercase",
            color: "var(--rose)", marginBottom: 16 }}>Our sponsors</div>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            {[0, 1, 2, 3].map(i => (
              <div key={i} style={{ width: 130, height: 56, borderRadius: 12, background: "rgba(255,255,255,.6)",
                border: "1px dashed rgba(227,50,134,.3)", display: "flex", alignItems: "center", justifyContent: "center",
                color: "var(--rose)", fontSize: 12.5, fontWeight: 600 }}>Sponsors coming soon</div>
            ))}
          </div>
        </div>

        <div className="tier-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, marginTop: 44, alignItems: "start" }}>
          {TIERS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <div style={{ background: t.bg, borderRadius: 22, padding: "30px 26px",
                border: `1.5px solid ${t.color}`, position: "relative",
                boxShadow: t.feat ? "var(--shadow-lg)" : "var(--shadow-sm)",
                transform: t.feat ? "scale(1.03)" : "none" }}>
                {t.feat && <div style={{ position: "absolute", top: -12, right: 22, background: "var(--gold)",
                  color: "var(--brown-1)", fontWeight: 800, fontSize: 11, letterSpacing: ".1em",
                  padding: "5px 12px", borderRadius: 999 }}>MOST VISIBLE</div>}
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <Icon name={t.icon} size={36} style={{ color: t.color }} />
                  <div>
                    <div style={{ fontWeight: 800, fontSize: 13, letterSpacing: ".12em", color: t.color }}>{t.name.toUpperCase()}</div>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 28, color: "var(--ink)", lineHeight: 1 }}>{t.amount}</div>
                  </div>
                </div>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                  {t.perks.map((p, j) => (
                    <li key={j} style={{ display: "flex", gap: 9, fontSize: 14.5, lineHeight: 1.4, color: "var(--brown-1)" }}>
                      <Icon name="check_circle" size={18} style={{ color: t.color, flex: "0 0 auto", marginTop: 1 }} />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 40 }}>
          <a href={`mailto:${SPONSOR_EMAIL}?subject=IDENA%20Sponsorship`} className="reg-btn"
            style={{ display: "inline-flex", alignItems: "center", gap: ".5em", fontFamily: "var(--font-body)",
              fontWeight: 700, fontSize: "1rem", padding: "15px 30px", borderRadius: 999, textDecoration: "none",
              background: "transparent", color: "var(--magenta)", border: "2px solid var(--magenta)",
              transition: "all .28s var(--ease)" }}
            onMouseEnter={e => { e.currentTarget.style.background = "var(--magenta)"; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--magenta)"; }}>
            <Icon name="mail" size={20} /> Become a sponsor
          </a>
        </div>
      </div>
    </section>
  );
}

// ---------- FINAL CTA ----------
function FinalCta() {
  return (
    <section style={{ position: "relative", overflow: "hidden",
      background: "linear-gradient(135deg, var(--magenta) 0%, var(--magenta-deep) 60%, var(--burgundy) 100%)",
      padding: "clamp(72px,11vw,130px) 0", textAlign: "center" }}>
      <div className="ankara" style={{ position: "absolute", top: 0, left: 0, right: 0, opacity: .5 }} />
      <Icon name="auto_awesome" size={40} style={{ position: "absolute", top: "22%", left: "12%", color: "rgba(255,255,255,.5)" }} />
      <Icon name="star" size={30} style={{ position: "absolute", bottom: "20%", right: "14%", color: "rgba(255,255,255,.45)" }} />
      <div className="wrap" style={{ position: "relative" }}>
        <Eyebrow color="rgba(255,255,255,.85)" style={{ marginBottom: 16 }}>Becoming Her 2.0 · IDENA</Eyebrow>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, color: "#fff",
          fontSize: "clamp(2.6rem,9vw,5.5rem)", lineHeight: .95, letterSpacing: "-.01em" }}>Be in the room.</h2>
        <p style={{ color: "rgba(255,255,255,.9)", fontSize: "clamp(1.05rem,2.4vw,1.3rem)", marginTop: 18, maxWidth: 520, marginLeft: "auto", marginRight: "auto" }}>
          26th June 2026 · 5:00 PM WAT · Google Meet · Free. The shift starts the moment you say yes.</p>
        <div style={{ marginTop: 34, display: "flex", justifyContent: "center" }}>
          <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: ".5em", fontFamily: "var(--font-body)",
              fontWeight: 800, fontSize: "1.2rem", padding: "20px 46px", borderRadius: 999, textDecoration: "none",
              background: "#fff", color: "var(--magenta)", boxShadow: "0 20px 50px rgba(0,0,0,.25)",
              transition: "transform .28s var(--ease)" }}
            onMouseEnter={e => e.currentTarget.style.transform = "translateY(-3px) scale(1.02)"}
            onMouseLeave={e => e.currentTarget.style.transform = "none"}>
            Register Now <Icon name="arrow_forward" size={22} />
          </a>
        </div>
      </div>
    </section>
  );
}

// ---------- SHARE ----------
function Share() {
  const [copied, setCopied] = useStateSp(false);
  const url = REGISTER_URL;
  const msg = encodeURIComponent("Becoming Her 2.0: IDENA — a free virtual gathering for young women, 26th June 2026, 5PM WAT. Register: " + url);
  const copy = () => {
    navigator.clipboard?.writeText(url).then(() => { setCopied(true); setTimeout(() => setCopied(false), 1800); });
  };
  const btn = { display: "inline-flex", alignItems: "center", gap: 9, padding: "13px 22px", borderRadius: 999,
    fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 15, textDecoration: "none", cursor: "pointer",
    border: "none", transition: "transform .25s var(--ease), opacity .25s" };
  return (
    <section style={{ background: "var(--white)", padding: "clamp(54px,8vw,90px) 0" }}>
      <div className="wrap" style={{ maxWidth: 720, textAlign: "center" }}>
        <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1.5rem,4vw,2.1rem)", color: "var(--ink)" }}>
          Know a woman who needs this room?</h3>
        <p style={{ color: "var(--fg2)", fontSize: 17, marginTop: 10 }}>Send it to her.</p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginTop: 26 }}>
          <a href={`https://wa.me/?text=${msg}`} target="_blank" rel="noopener noreferrer"
            style={{ ...btn, background: "#25D366", color: "#fff", boxShadow: "0 10px 24px rgba(37,211,102,.3)" }}
            onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
            onMouseLeave={e => e.currentTarget.style.transform = "none"}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-1.235zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
            WhatsApp
          </a>
          <a href={`https://twitter.com/intent/tweet?text=${msg}`} target="_blank" rel="noopener noreferrer"
            style={{ ...btn, background: "var(--ink)", color: "#fff" }}
            onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
            onMouseLeave={e => e.currentTarget.style.transform = "none"}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            Post on X
          </a>
          <button onClick={copy}
            style={{ ...btn, background: "var(--pink-150)", color: "var(--magenta)" }}
            onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
            onMouseLeave={e => e.currentTarget.style.transform = "none"}>
            <Icon name={copied ? "check" : "link"} size={20} /> {copied ? "Link copied!" : "Copy link"}
          </button>
        </div>
      </div>
    </section>
  );
}

// ---------- FOOTER ----------
function Footer() {
  return (
    <footer style={{ background: "var(--burgundy)", color: "rgba(255,255,255,.8)", paddingTop: 0 }}>
      <div className="ankara" />
      <div className="wrap" style={{ padding: "56px 24px 40px" }}>
        <div className="foot-grid" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: 32, alignItems: "start" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <img src="assets/logo-gear.png" alt="Pearls of Engineering" style={{ height: 44, borderRadius: 8 }} />
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 18, color: "#fff" }}>Pearls of Engineering</div>
            </div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, color: "#fff", fontSize: 24 }}>Becoming Her 2.0: IDENA</div>
            <div style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 700, color: "var(--pink-300)", fontSize: 18, marginTop: 6 }}>Discover. Evolve. Ascend.</div>
          </div>
          <div>
            <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--pink-300)", marginBottom: 14 }}>Get in touch</div>
            <a href="mailto:esabublessing7@gmail.com" style={{ display: "block", fontSize: 14.5, marginBottom: 10, color: "rgba(255,255,255,.85)", textDecoration: "none" }}>Sponsorship inquiries<br/><b style={{ color: "#fff" }}>esabublessing7@gmail.com</b></a>
            <a href="mailto:engrpearls@gmail.com" style={{ display: "block", fontSize: 14.5, color: "rgba(255,255,255,.85)", textDecoration: "none" }}>General inquiries<br/><b style={{ color: "#fff" }}>engrpearls@gmail.com</b></a>
          </div>
          <div>
            <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--pink-300)", marginBottom: 14 }}>Follow</div>
            <div style={{ display: "flex", gap: 10 }}>
              {["photo_camera", "groups", "language"].map(ic => (
                <a key={ic} href="#" style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(255,255,255,.1)",
                  display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", textDecoration: "none" }}>
                  <Icon name={ic} size={20} /></a>
              ))}
            </div>
            <div style={{ marginTop: 20 }}><RegisterButton label="Register" /></div>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,.14)", marginTop: 36, paddingTop: 22,
          display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10, fontSize: 13, color: "rgba(255,255,255,.6)" }}>
          <span>© 2026 Pearls of Engineering. All rights reserved.</span>
          <span>Becoming Her 2.0: IDENA — Discover. Evolve. Ascend.</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Sponsors, FinalCta, Share, Footer });

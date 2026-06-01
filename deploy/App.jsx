/* global React, Hero, About, Pillars, Agenda, Testimonials, Faq, Sponsors, FinalCta, Share, Footer, Icon, REGISTER_URL */
const { useState: useStateApp, useEffect: useEffectApp } = React;

function StickyBar() {
  const [show, setShow] = useStateApp(false);
  useEffectApp(() => {
    const onScroll = () => setShow(window.scrollY > 680);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      transform: show ? "translateY(0)" : "translateY(-110%)",
      transition: "transform .4s var(--ease)",
      background: "rgba(255,255,255,.86)", backdropFilter: "blur(12px)",
      borderBottom: "1px solid rgba(227,50,134,.16)" }}>
      <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "10px 24px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img src="assets/logo-gear.png" alt="" style={{ height: 30, borderRadius: 6 }} />
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 16, color: "var(--magenta)" }}>IDENA</span>
          <span className="sticky-date" style={{ fontSize: 13, color: "var(--fg2)", fontWeight: 600 }}>· 26 June, 5PM WAT</span>
        </div>
        <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer"
          style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "var(--magenta)", color: "#fff",
            fontWeight: 700, fontSize: 14, padding: "9px 20px", borderRadius: 999, textDecoration: "none",
            boxShadow: "var(--shadow-mag)" }}>
          Register <Icon name="arrow_forward" size={18} />
        </a>
      </div>
    </div>
  );
}

function App() {
  return (
    <React.Fragment>
      <StickyBar />
      <Hero />
      <About />
      <Pillars />
      <Agenda />
      <Testimonials />
      <Faq />
      <Sponsors />
      <FinalCta />
      <Share />
      <Footer />
    </React.Fragment>
  );
}

window.App = App;

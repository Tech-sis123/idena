/* global React */
const { useState, useEffect, useRef } = React;

const REGISTER_URL = "https://forms.gle/y7bRhzd877MmjcmC9";

// ---- Material Symbol icon ----
function Icon({ name, size = 24, fill = 1, weight = 500, style = {} }) {
  return (
    <span
      className="material-symbols-rounded"
      style={{ fontSize: size, fontVariationSettings: `'FILL' ${fill},'wght' ${weight},'opsz' 24`, ...style }}
    >
      {name}
    </span>
  );
}

// ---- Eyebrow label ----
function Eyebrow({ children, color = "var(--magenta)", style = {} }) {
  return (
    <div style={{
      fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 13,
      letterSpacing: ".22em", textTransform: "uppercase", color, ...style
    }}>{children}</div>
  );
}

// ---- Primary register button ----
function RegisterButton({ label = "Register Now", block = false, size = "md", style = {} }) {
  const pad = size === "lg" ? "18px 40px" : "15px 30px";
  const fs = size === "lg" ? "1.15rem" : "1rem";
  return (
    <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer"
       className="reg-btn"
       style={{
         display: block ? "flex" : "inline-flex", width: block ? "100%" : "auto",
         justifyContent: "center", alignItems: "center", gap: ".5em",
         fontFamily: "var(--font-body)", fontWeight: 700, fontSize: fs, letterSpacing: ".01em",
         padding: pad, borderRadius: "999px", textDecoration: "none",
         background: "var(--magenta)", color: "#fff",
         boxShadow: "var(--shadow-mag)", cursor: "pointer",
         transition: "transform .28s var(--ease), background .28s var(--ease), box-shadow .28s var(--ease)",
         ...style
       }}
       onMouseEnter={e => { e.currentTarget.style.background = "var(--magenta-bright)"; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 18px 40px rgba(227,50,134,.42)"; }}
       onMouseLeave={e => { e.currentTarget.style.background = "var(--magenta)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "var(--shadow-mag)"; }}
       onMouseDown={e => { e.currentTarget.style.transform = "translateY(0) scale(.97)"; }}
       onMouseUp={e => { e.currentTarget.style.transform = "translateY(-2px)"; }}
    >
      {label} <Icon name="arrow_forward" size={20} />
    </a>
  );
}

// ---- Section heading block ----
function SectionHead({ eyebrow, title, sub, center = true, light = false }) {
  return (
    <div style={{ textAlign: center ? "center" : "left", maxWidth: center ? 720 : "none", margin: center ? "0 auto" : 0 }}>
      {eyebrow && <Eyebrow color={light ? "var(--pink-300)" : "var(--magenta)"} style={{ marginBottom: 14 }}>{eyebrow}</Eyebrow>}
      <h2 style={{
        fontFamily: "var(--font-display)", fontWeight: 800,
        fontSize: "clamp(1.9rem,5vw,3rem)", lineHeight: 1.04,
        color: light ? "#fff" : "var(--ink)", letterSpacing: "-.01em"
      }}>{title}</h2>
      {sub && <p style={{
        marginTop: 16, fontSize: "clamp(1rem,2.2vw,1.2rem)", lineHeight: 1.55,
        color: light ? "rgba(255,255,255,.86)" : "var(--fg2)",
        maxWidth: 640, marginLeft: center ? "auto" : 0, marginRight: center ? "auto" : 0
      }}>{sub}</p>}
    </div>
  );
}

// ---- Reveal-on-scroll wrapper ----
function Reveal({ children, delay = 0, style = {} }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setShow(true); io.disconnect(); } }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} style={{
      opacity: show ? 1 : 0,
      transform: show ? "translateY(0)" : "translateY(26px)",
      transition: `opacity .7s var(--ease) ${delay}s, transform .7s var(--ease) ${delay}s`,
      ...style
    }}>{children}</div>
  );
}

Object.assign(window, { REGISTER_URL, Icon, Eyebrow, RegisterButton, SectionHead, Reveal });

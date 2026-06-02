/* global React */
const { useState, useEffect, useRef } = React;

const REGISTER_URL = "https://forms.gle/y7bRhzd877MmjcmC9";

// SVG path data for all icons used — renders instantly, no font download needed
const ICON_PATHS = {
  add: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",
  arrow_forward: "M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z",
  auto_awesome: "M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z",
  calendar_month: "M19 4h-1V3c0-.55-.45-1-1-1s-1 .45-1 1v1H8V3c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zM7 12h5v5H7v-5z",
  celebration: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z",
  check: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z",
  check_circle: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
  diversity_1: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z",
  favorite: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
  flag: "M14.4 6l-.24-1.2c-.09-.46-.5-.8-.98-.8H6c-.55 0-1 .45-1 1v15c0 .55.45 1 1 1s1-.45 1-1v-6h5.6l.24 1.2c.09.47.5.8.98.8H19c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1h-4.6z",
  forum: "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z",
  format_quote: "M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z",
  groups: "M12 12.75c1.63 0 3.07.39 4.24.9 1.08.48 1.76 1.56 1.76 2.73V18H6v-1.61c0-1.18.68-2.26 1.76-2.73 1.17-.52 2.6-.91 4.24-.91zM4 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm1.13 1.1c-.37-.06-.74-.1-1.13-.1-.99 0-1.93.21-2.78.58A2.01 2.01 0 000 16.43V18h4.27v-1.93c0-.7.21-1.36.58-1.93-.12.03-.25.03-.37.03-.12-.01-.23-.01-.35-.01zM20 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-2.22-1.9c-.12 0-.23.01-.35.01-.12 0-.24 0-.37-.03.37.57.58 1.23.58 1.93V18H24v-1.57c0-.8-.48-1.53-1.22-1.85A7.95 7.95 0 0020 14c-.39 0-.76.04-1.13.1-.04.04-.09.04-.09.04zM12 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z",
  language: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z",
  lightbulb: "M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z",
  link: "M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z",
  mail: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z",
  photo_camera: "M12 10.8c-1.77 0-3.2 1.43-3.2 3.2s1.43 3.2 3.2 3.2 3.2-1.43 3.2-3.2-1.43-3.2-3.2-3.2zM20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z",
  redeem: "M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C11.96 2.54 11.05 2 10 2 8.34 2 7 3.34 7 5c0 .35.07.69.18 1H5c-1.11 0-2 .9-2 2v2h18V8c0-1.1-.9-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zm12 7v10c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V11h18z",
  remove: "M19 13H5v-2h14v2z",
  schedule: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z",
  south: "M19 15l-1.41-1.41L13 18.17V2H11v16.17l-4.59-4.59L5 15l7 7 7-7z",
  star: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z",
  stars: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.85-3.73-3.27 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.27L16.23 18z",
  verified: "M23 12l-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5 12 21.04l3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12zm-12.91 4.72l-3.8-3.8 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.34z",
  videocam: "M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z",
  waving_hand: "M8.5 11.5c0 .83-.67 1.5-1.5 1.5S5.5 12.33 5.5 11.5 6.17 10 7 10s1.5.67 1.5 1.5zM11 11.5c0 .83-.67 1.5-1.5 1.5S8 12.33 8 11.5 8.67 10 9.5 10s1.5.67 1.5 1.5zM13.5 11.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5S10.67 10 11.5 10s1.5.67 1.5 1.5zM16 11.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5S13.67 10 14.5 10s1.5.67 1.5 1.5z",
  workspace_premium: "M20 10V7.5L14.5 2H6C4.9 2 4 2.9 4 4v16c0 1.1.9 2 2 2h4.5c.55 0 1-.45 1-1v-5h2v1c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v1h-2v-5c0-.55.45-1 1-1h7c.55 0 1 .45 1 1v3c0 .55.45 1 1 1s1-.45 1-1v-3c0-1.1-.9-2-2-2zM13 3.5L18.5 9H14c-.55 0-1-.45-1-1V3.5z"
};

// ---- SVG Icon (renders instantly — no font download) ----
function Icon({ name, size = 24, style = {} }) {
  const path = ICON_PATHS[name];
  if (!path) return <span style={{ fontSize: size, ...style }}>?</span>;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width={size}
      height={size}
      style={{ verticalAlign: "middle", flexShrink: 0, ...style }}
    >
      <path d={path} />
    </svg>
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

/* global React, Icon, SectionHead */
const { useState: useStateFaq } = React;

const FAQS = [
  { q: "Is it free, and how do I join?",
    a: "Yes, IDENA is completely free. It holds on Google Meet on 26th June 2026 at 5:00 PM WAT. Register with the form and the join link will be shared with you prior to the event." },
  { q: "Can males attend?",
    a: "The primary audience for the event is women, but men are welcome to attend." },
  { q: "Do I need to be an engineer or in tech?",
    a: "No. We bring together speakers and conversations from all spheres of life, so there is something here for every young woman." },
  { q: "What do I gain from attending?",
    a: "Honest conversations on identity, self-worth, and the woman beneath the noise, plus a community navigating the same shift. There will also be giveaway sessions, a raffle draw, and quizzes during the webinar." },
];

function FaqItem({ q, a, open, onToggle }) {
  return (
    <div style={{ borderBottom: "1px solid var(--line)" }}>
      <button onClick={onToggle} style={{ width: "100%", background: "none", border: "none", cursor: "pointer",
        display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16,
        padding: "22px 4px", textAlign: "left" }}>
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.05rem,2.4vw,1.3rem)",
          color: open ? "var(--magenta)" : "var(--ink)", transition: "color .25s" }}>{q}</span>
        <span style={{ flex: "0 0 34px", height: 34, borderRadius: "50%",
          background: open ? "var(--magenta)" : "var(--pink-150)", color: open ? "#fff" : "var(--magenta)",
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "all .25s var(--ease)", transform: open ? "rotate(180deg)" : "none" }}>
          <Icon name={open ? "remove" : "add"} size={22} />
        </span>
      </button>
      <div style={{ maxHeight: open ? 240 : 0, overflow: "hidden", transition: "max-height .4s var(--ease)" }}>
        <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--fg2)", padding: "0 44px 24px 4px" }}>{a}</p>
      </div>
    </div>
  );
}

function Faq() {
  const [open, setOpen] = useStateFaq(0);
  return (
    <section style={{ background: "var(--white)", padding: "clamp(64px,9vw,110px) 0" }}>
      <div className="wrap" style={{ maxWidth: 780 }}>
        <SectionHead eyebrow="Questions" title="Everything you might be wondering" />
        <div style={{ marginTop: 40, borderTop: "1px solid var(--line)" }}>
          {FAQS.map((f, i) => (
            <FaqItem key={i} {...f} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Faq });

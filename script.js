:root {
  --bg: #f5f0e8;
  --bg2: #ede8de;
  --ink: #1a1612;
  --ink2: #4a4540;
  --accent: #c0392b;
  --accent2: #e8d5b0;
  --card: #ffffff;
  --mono: 'DM Mono', monospace;
  --serif: 'Playfair Display', Georgia, serif;
  --sans: 'Syne', sans-serif;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }

body {
  background: var(--bg);
  color: var(--ink);
  font-family: var(--sans);
  overflow-x: hidden;
  cursor: none;
}

/* Cursor */
.cursor {
  position: fixed;
  width: 10px; height: 10px;
  background: var(--accent);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  transition: transform 0.1s ease;
}
.cursor-ring {
  position: fixed;
  width: 36px; height: 36px;
  border: 1px solid var(--accent);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9998;
  transform: translate(-50%, -50%);
  transition: all 0.15s ease;
  opacity: 0.6;
}

/* Noise */
body::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 9000;
  opacity: 0.4;
}

/* NAV */
nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  display: flex;
  justify-content: flex-end;
  padding: 24px 60px;
}
.nav-links {
  display: flex;
  gap: 40px;
  list-style: none;
}
.nav-links a {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ink2);
  text-decoration: none;
  transition: color 0.2s;
  position: relative;
}
.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -2px; left: 0;
  width: 0; height: 1px;
  background: var(--accent);
  transition: width 0.3s ease;
}
.nav-links a:hover { color: var(--accent); }
.nav-links a:hover::after { width: 100%; }

/* HERO */
#hero {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 120px 60px 80px;
  gap: 60px;
  position: relative;
}
#hero::before {
  content: '';
  position: absolute;
  top: 30%; right: 0;
  width: 40%; height: 1px;
  background: linear-gradient(to left, transparent, var(--ink2));
  opacity: 0.15;
}
.hero-label {
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 32px;
  opacity: 0;
  animation: fadeUp 0.6s ease 0.2s forwards;
}
.hero-label::before {
  content: '';
  display: block;
  width: 36px; height: 1px;
  background: var(--accent);
}
h1 {
  font-family: var(--serif);
  font-size: clamp(64px, 8vw, 110px);
  line-height: 0.92;
  letter-spacing: -0.02em;
  color: var(--ink);
  opacity: 0;
  animation: fadeUp 0.8s ease 0.35s forwards;
}
h1 em { font-style: italic; color: var(--accent); }
.hero-bio {
  margin-top: 36px;
  padding-left: 20px;
  border-left: 2px solid var(--accent2);
  font-size: 15px;
  line-height: 1.75;
  color: var(--ink2);
  max-width: 420px;
  opacity: 0;
  animation: fadeUp 0.7s ease 0.55s forwards;
}
.hero-cta {
  display: flex;
  gap: 16px;
  margin-top: 48px;
  opacity: 0;
  animation: fadeUp 0.7s ease 0.7s forwards;
}
.btn-primary {
  background: var(--accent);
  color: #fff;
  border: none;
  padding: 14px 32px;
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  cursor: none;
  text-decoration: none;
  display: inline-block;
  transition: background 0.25s, transform 0.2s;
}
.btn-primary:hover { background: #9b2820; transform: translateY(-2px); }
.btn-ghost {
  background: transparent;
  color: var(--ink);
  border: 1px solid var(--ink2);
  padding: 14px 32px;
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  cursor: none;
  text-decoration: none;
  display: inline-block;
  transition: border-color 0.25s, color 0.25s, transform 0.2s;
}
.btn-ghost:hover { border-color: var(--accent); color: var(--accent); transform: translateY(-2px); }

/* Profile Card */
.hero-right {
  display: flex;
  justify-content: center;
  opacity: 0;
  animation: fadeIn 1s ease 0.9s forwards;
}
.profile-card {
  background: var(--card);
  border: 1px solid #ddd8ce;
  width: 320px;
  overflow: hidden;
  box-shadow: 20px 20px 0 var(--accent2), 22px 22px 0 #c8c0b0;
}
.card-banner {
  height: 140px;
  background: linear-gradient(135deg, #2c1810 0%, #5c3020 50%, #8b4020 100%);
  position: relative;
  overflow: hidden;
}
.card-banner::after {
  content: 'AS';
  position: absolute;
  bottom: -10px; right: 20px;
  font-family: var(--serif);
  font-size: 90px;
  font-weight: 700;
  color: rgba(255,255,255,0.07);
  line-height: 1;
  letter-spacing: -4px;
}
.card-body { padding: 24px 28px 28px; }
.card-status {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--mono);
  font-size: 11px;
  color: #4CAF50;
  margin-bottom: 14px;
}
.status-dot {
  width: 7px; height: 7px;
  background: #4CAF50;
  border-radius: 50%;
  animation: pulse 2s ease infinite;
}
.card-name {
  font-family: var(--serif);
  font-size: 26px;
  color: var(--ink);
  margin-bottom: 6px;
}
.card-role {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  color: var(--ink2);
}
.card-divider {
  margin: 20px 0;
  border: none;
  height: 1px;
  background: var(--accent2);
}
.card-tags { display: flex; flex-wrap: wrap; gap: 8px; }
.tag {
  background: var(--bg2);
  border: 1px solid #ddd8ce;
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: 0.1em;
  padding: 5px 12px;
  color: var(--ink2);
  text-transform: uppercase;
}

/* SECTIONS */
section { padding: 100px 60px; }
.section-header {
  display: flex;
  align-items: baseline;
  gap: 20px;
  margin-bottom: 64px;
}
.section-num {
  font-family: var(--mono);
  font-size: 11px;
  color: var(--accent);
  letter-spacing: 0.2em;
}
.section-title {
  font-family: var(--serif);
  font-size: clamp(36px, 5vw, 58px);
  line-height: 1;
  color: var(--ink);
}
.section-line {
  flex: 1;
  height: 1px;
  background: var(--accent2);
  margin-bottom: 8px;
}

/* ABOUT */
#about { background: var(--bg); }
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;
}
.about-text p {
  font-size: 16px;
  line-height: 1.85;
  color: var(--ink2);
  margin-bottom: 20px;
}
.about-text p strong { color: var(--ink); font-weight: 600; }
.about-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2px;
  background: var(--accent2);
}
.stat-box {
  background: var(--bg);
  padding: 32px 28px;
}
.stat-num {
  font-family: var(--serif);
  font-size: 52px;
  color: var(--accent);
  line-height: 1;
  margin-bottom: 8px;
}
.stat-label {
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ink2);
}

/* SKILLS */
#skills { background: var(--ink); }
#skills .section-title { color: var(--bg); }
#skills .section-num { color: var(--accent); }
#skills .section-line { background: #333; }
.skills-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2px;
  background: #333;
  max-width: 480px;
}
.skill-group {
  background: #1e1a16;
  padding: 36px 32px;
}
.skill-group-title {
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 24px;
}
.skill-list { list-style: none; }
.skill-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 0;
  border-bottom: 1px solid #2a2622;
  font-size: 14px;
  color: #c8c0b0;
  font-family: var(--sans);
}
.skill-item:last-child { border-bottom: none; }
.skill-item::before {
  content: '▸';
  color: var(--accent);
  font-size: 10px;
  flex-shrink: 0;
}

/* PROJECTS */
#projects { background: var(--bg2); }
.projects-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2px;
  background: #c8c0b0;
  max-width: 680px;
}
.project-card {
  background: var(--bg);
  padding: 44px 40px;
  position: relative;
  overflow: hidden;
  transition: background 0.3s;
}
.project-card:hover { background: var(--card); }
.project-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 3px; height: 0;
  background: var(--accent);
  transition: height 0.4s ease;
}
.project-card:hover::before { height: 100%; }
.project-num {
  font-family: var(--mono);
  font-size: 11px;
  color: var(--accent);
  letter-spacing: 0.2em;
  margin-bottom: 20px;
}
.project-title {
  font-family: var(--serif);
  font-size: 28px;
  color: var(--ink);
  margin-bottom: 14px;
  line-height: 1.15;
}
.project-desc {
  font-size: 14px;
  line-height: 1.75;
  color: var(--ink2);
  margin-bottom: 28px;
}
.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 28px;
}
.tech-badge {
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  background: var(--accent2);
  color: var(--ink2);
  padding: 4px 12px;
  border: 1px solid #c8c0b0;
}
.project-link {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: gap 0.2s;
  width: fit-content;
}
.project-link:hover { gap: 14px; }
.project-link::after { content: '→'; }

/* CONTACT */
#contact {
  background: var(--ink);
  text-align: center;
  padding: 120px 60px;
}
#contact .section-header { justify-content: center; }
#contact .section-title { color: var(--bg); }
#contact .section-num { color: var(--accent); }
#contact .section-line { display: none; }
.contact-big {
  font-family: var(--serif);
  font-size: clamp(48px, 7vw, 96px);
  color: var(--bg);
  line-height: 1;
  margin-bottom: 24px;
  opacity: 0.08;
  letter-spacing: -0.03em;
}
.contact-sub {
  font-family: var(--mono);
  font-size: 13px;
  letter-spacing: 0.15em;
  color: #7a7068;
  margin-bottom: 48px;
  text-transform: uppercase;
}
.contact-email {
  font-family: var(--serif);
  font-size: clamp(20px, 3vw, 36px);
  color: var(--accent);
  text-decoration: none;
  display: block;
  margin-bottom: 64px;
  font-style: italic;
  transition: opacity 0.2s;
}
.contact-email:hover { opacity: 0.75; }
.contact-links {
  display: flex;
  justify-content: center;
  gap: 32px;
}
.social-link {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #7a7068;
  text-decoration: none;
  transition: color 0.2s;
}
.social-link:hover { color: var(--bg); }

/* FOOTER */
footer {
  background: #110e0b;
  padding: 24px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
footer span {
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: 0.15em;
  color: #4a4540;
  text-transform: uppercase;
}

/* ANIMATIONS */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.3); }
}
.reveal {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* RESPONSIVE */
@media (max-width: 900px) {
  nav { padding: 20px 28px; }
  #hero { grid-template-columns: 1fr; padding: 100px 28px 60px; }
  .hero-right { display: none; }
  section { padding: 80px 28px; }
  .about-grid { grid-template-columns: 1fr; gap: 48px; }
  footer { flex-direction: column; gap: 8px; text-align: center; }
  .nav-links { gap: 20px; }
}

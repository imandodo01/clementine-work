import { useState } from "react";
import styles from "./App.module.css";
import skullArtwork from "../images/steampunk-skull.png";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "Works", href: "#works" },
  { label: "Workshop", href: "#workshop" },
];

function Mark({ name }: { name: "menu" | "close" | "collapse" }) {
  const paths = {
    menu: "M3 6h18M3 12h18M3 18h18",
    close: "M6 6l12 12M18 6 6 18",
    collapse: "M15 18l-6-6 6-6",
  };
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d={paths[name]} /></svg>;
}

export default function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const closeMobile = () => setMobileOpen(false);

  return (
    <div className={styles.appShell}>
      <a className={styles.skipLink} href="#main">Skip to content</a>
      <button className={styles.mobileMenu} type="button" aria-label={mobileOpen ? "Close navigation" : "Open navigation"} aria-expanded={mobileOpen} onClick={() => setMobileOpen((open) => !open)}>
        <Mark name={mobileOpen ? "close" : "menu"} />
      </button>
      {mobileOpen && <button className={styles.scrim} type="button" aria-label="Close navigation" onClick={closeMobile} />}
      <aside className={`${styles.sidebar} ${collapsed ? styles.sidebarCollapsed : ""} ${mobileOpen ? styles.sidebarOpen : ""}`}>
        <a className={styles.brand} href="#home" onClick={() => { setActive("#home"); closeMobile(); }}>
          <span className={styles.brandMark}>CW</span>
          <span className={styles.brandText}>CLEMENTINE<small>INDEPENDENT DIGITAL WORKSHOP</small></span>
        </a>
        <nav className={styles.navigation} aria-label="Main navigation">
          {navigation.map((item, index) => (
            <a key={item.href} href={item.href} className={active === item.href ? styles.navActive : ""} aria-current={active === item.href ? "location" : undefined} title={collapsed ? item.label : undefined} onClick={() => { setActive(item.href); closeMobile(); }}>
              <span className={styles.navIndex}>0{index + 1}</span><span>{item.label}</span>
            </a>
          ))}
        </nav>
        <div className={styles.sidebarFoot}><span>BUILD / CRAFT / EXPLORE</span><span>EST. INDEPENDENTLY</span></div>
        <button className={styles.collapseButton} type="button" onClick={() => setCollapsed((value) => !value)} aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"} aria-expanded={!collapsed}>
          <Mark name="collapse" /><span>{collapsed ? "Expand" : "Collapse"}</span>
        </button>
      </aside>

      <main id="main" className={styles.mainContent}>
        <section id="home" className={styles.hero}>
          <div className={styles.heroTopline}><span>INDEPENDENT DIGITAL WORKSHOP</span><span>WORK / 001</span></div>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>A PLACE TO BUILD AND EXPLORE</p>
            <h1>Useful things.<br /><em>Thoughtfully made.</em></h1>
            <p className={styles.heroIntro}>An independent digital workshop for building useful products, crafting digital solutions, and exploring software engineering.</p>
            <a className={styles.primaryAction} href="#works">Explore the work <span aria-hidden="true">↘</span></a>
          </div>
          <div className={styles.heroEmblem} aria-hidden="true">
            <div className={styles.emblemFrame}>
              <img src={skullArtwork} alt="" />
              <span className={styles.emblemMark}>CW / 001</span>
            </div>
            <span className={styles.drawingLabel}>DESIGN / ENGINEERING / ITERATION</span>
          </div>
          <div className={styles.heroFoot}><span>INDEPENDENT PRACTICE</span><span>INDUSTRIAL STEAMPUNK × FUTURISTIC BLUEPRINT</span></div>
        </section>

        <section id="works" className={styles.worksSection}>
          <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>01 / WORKS</p><h2>Selected work.</h2></div><span className={styles.sectionMeta}>PUBLIC COLLECTION</span></div>
          <div className={styles.workstage}>
            <div className={styles.workstageIndex}>COLLECTION / 00</div>
            <div className={styles.workstageBody}>
              <span className={styles.workstageRule} />
              <h3>The collection is taking shape.</h3>
              <p>Products and projects will appear here when they are ready for public presentation.</p>
            </div>
            <span className={styles.workstageMark} aria-hidden="true">CW—</span>
          </div>
        </section>

        <section id="workshop" className={styles.workshopSection}>
          <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>02 / THE WORKSHOP</p><h2>Build. Craft. Explore.</h2></div></div>
          <p className={styles.workshopIntro}>Clementine Work is an independent practice focused on useful digital outcomes and thoughtful engineering.</p>
          <div className={styles.activityList}>
            <article><span>01</span><div><h3>Independent products</h3><p>Small, focused digital products developed independently.</p></div></article>
            <article><span>02</span><div><h3>Digital solutions</h3><p>Practical software shaped around real problems and needs.</p></div></article>
            <article><span>03</span><div><h3>Engineering explorations</h3><p>Technical experiments and ideas explored through making.</p></div></article>
          </div>
        </section>

        <footer className={styles.footer}><a href="#home">CLEMENTINE WORK</a><span>AN INDEPENDENT DIGITAL WORKSHOP</span><a href="#home">BACK TO TOP ↑</a></footer>
      </main>
    </div>
  );
}

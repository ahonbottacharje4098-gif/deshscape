"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Compass, MapPin } from "lucide-react";

const stories = [
  {
    number: "01",
    category: "PEOPLE & CULTURE",
    title: "The rhythm of a river town",
    location: "Goalanda, Rajbari",
    description: "Along the Padma, the river shapes more than the landscape. It influences daily routines, local trade and the stories shared by people who live beside its changing waters.",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1400&q=85",
    note: "A closer look at life beside the Padma"
  },
  {
    number: "02",
    category: "HIDDEN BANGLADESH",
    title: "Beyond the tea gardens",
    location: "Sylhet",
    description: "The green hills and winding paths of the northeast invite a slower kind of journey. Look beyond the familiar viewpoints and notice the small details that make this landscape special.",
    image: "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=1400&q=85",
    note: "A field note from the green northeast"
  }
];

export default function JournalPage() {
  return (
    <main>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Deshscape home">
          <span className="brand-mark"><Compass size={22} strokeWidth={1.7} /></span>
          <span className="brand-name">deshscape<span>.</span><small>THE ART OF DISCOVERY</small></span>
        </Link>
        <nav className="main-nav">
          <Link className="nav-link" href="/">Discover</Link>
          <Link className="nav-link" href="/#destinations">Destinations</Link>
          <Link className="nav-link active" href="/journal">Journal</Link>
        </nav>
        <div className="header-actions">
          <Link className="plan-link" href="/#planner">Plan a trip <ArrowUpRight size={15} /></Link>
        </div>
      </header>

      <section className="intro section-wrap" style={{ paddingBottom: 55 }}>
        <div className="eyebrow"><span /> THE DESHSCAPE JOURNAL</div>
        <div className="intro-grid">
          <h2>Stories from<br /><em>the road.</em></h2>
          <div className="intro-text">
            <p>Travel is more than reaching a place. It is the people we meet, the landscapes we remember and the little discoveries along the way.</p>
            <Link className="text-link" href="/#destinations">Explore the destinations <ArrowUpRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="destinations-section" id="stories">
        <div className="section-wrap">
          <div className="section-heading">
            <div><div className="eyebrow"><span /> FIELD NOTES & INSPIRATION</div><h2>Read, wander<br /><em>and discover.</em></h2></div>
            <span className="eyebrow">02 STORIES</span>
          </div>
          <div className="journal-grid">
            {stories.map((story) => (
              <article key={story.number} style={{ background: "#faf9f5", color: "#202720", border: "1px solid #deded4" }}>
                <div style={{ height: 270, backgroundImage: `url(${story.image})`, backgroundPosition: "center", backgroundSize: "cover" }} />
                <div style={{ padding: "25px 27px 29px" }}>
                  <div className="eyebrow"><span /> {story.category}</div>
                  <h3 style={{ font: "30px/1.15 'Playfair Display',serif", color: "#183d32", margin: "17px 0 10px" }}>{story.title}</h3>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#899387", fontSize: 10, marginBottom: 15 }}><MapPin size={13} /> {story.location}</div>
                  <p style={{ color: "#70776e", fontSize: 12, lineHeight: 1.9, margin: "0 0 18px" }}>{story.description}</p>
                  <div style={{ color: "#9caa96", fontSize: 9, letterSpacing: 1.1, textTransform: "uppercase" }}>{story.note}</div>
                </div>
              </article>
            ))}
          </div>
          <p style={{ color: "#7d847b", fontSize: 10, lineHeight: 1.8, marginTop: 22 }}>These are introductory editorial stories. Destination-specific travel details should always be checked locally before a visit.</p>
        </div>
      </section>

      <section className="section-wrap" style={{ paddingTop: 70, paddingBottom: 80 }}>
        <div className="planner-card">
          <div className="planner-text">
            <div className="eyebrow light"><span /> KEEP EXPLORING</div>
            <h2>Every place has<br />a <em>story.</em></h2>
            <p>Find a destination and start planning your next discovery.</p>
            <Link className="button button-light" href="/#destinations">Explore Bangladesh <ArrowUpRight size={17} /></Link>
          </div>
          <div className="planner-art"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit-center"><Compass size={52} strokeWidth={1} /></div></div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-top">
          <Link className="brand footer-brand" href="/"><span className="brand-mark"><Compass size={22} /></span><span className="brand-name">deshscape<span>.</span><small>THE ART OF DISCOVERY</small></span></Link>
          <p>Explore beyond the ordinary.<br />Discover Bangladesh, one journey at a time.</p>
          <Link className="back-top" href="#">BACK TO TOP <ArrowUpRight size={15} /></Link>
        </div>
        <div className="footer-bottom"><span>© 2026 DESHSCAPE. MADE FOR THE CURIOUS.</span><span>INDEPENDENTLY INSPIRED BY BANGLADESH.</span></div>
      </footer>
      <div style={{ position: "fixed", left: 18, bottom: 18, zIndex: 10 }}>
        <Link href="/" aria-label="Back to home" style={{ display: "grid", placeItems: "center", width: 42, height: 42, borderRadius: "50%", background: "#183d32", color: "#fff" }}><ArrowLeft size={18} /></Link>
      </div>
    </main>
  );
}

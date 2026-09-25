import { ArrowRight, Leaf, MapPin, Play } from 'lucide-react';
import './css/HeroRealSection.css';

export default function HeroRealSection() {
  return (
    <section className="hero-real-section" id="home">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hero-video-bg"
        aria-hidden="true"
      >
        <source src="/main-hero-video.mp4" type="video/mp4" />
        <source src="/assets/main-hero-video.mp4" type="video/mp4" />
      </video>

      <div className="hero-video-overlay" aria-hidden="true" />
      <div className="hero-video-grain" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-two" aria-hidden="true" />

      <div className="hero-content-container">
        <div className="hero-transparent-text-wrapper">
          <div className="hero-kicker">
            <span className="hero-kicker-line" />
            <Leaf size={15} strokeWidth={2.5} />
            <span>Freshness, found locally</span>
          </div>

          <span className="hero-badge-tag">
            <span className="hero-badge-dot" />
            100% organic farm produce
          </span>

          <h1 className="hero-title-text">
            Better food starts
            <span className="hero-title-accent"> close to home.</span>
          </h1>

          <p className="hero-desc-text">
            Discover community growers, seasonal harvests, and trusted farm-to-table produce from the people who grow it.
          </p>

          <div className="hero-actions">
            <button
              className="btn-hero-cta"
              onClick={() => {
                const el = document.getElementById('trending');
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              <span>Explore the harvest</span>
              <ArrowRight size={20} />
            </button>
            <div className="hero-location">
              <span className="hero-location-icon"><MapPin size={16} /></span>
              <span><strong>Made for your neighborhood</strong><small>Find fresh within reach</small></span>
            </div>
          </div>
        </div>

        <div className="hero-video-note">
          <span className="hero-video-note-icon"><Play size={13} fill="currentColor" /></span>
          <span>Life from the soil</span>
        </div>
      </div>
    </section>
  );
}

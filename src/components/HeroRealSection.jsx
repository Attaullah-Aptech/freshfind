import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function HeroRealSection({ onExploreClick }) {
  return (
    <section className="hero-real-section" id="home">
      {/* Animated Zoom In / Zoom Out Video-like Ambient Background */}
      <div className="hero-bg-animated"></div>
      <div className="hero-overlay-backdrop"></div>

      <div className="hero-content-grid">
        {/* Left Side Content */}
        <div>
          <span className="hero-badge-tag">🌿 100% ORGANIC FARM PRODUCED</span>
          <h1 className="hero-title-text">
            Fresh Produce & Local <span>Markets Near You</span>
          </h1>
          <p className="hero-desc-text">
            Discover community growers, verified market hours, seasonal fruit and vegetable harvests, and farm-to-table organic produce in your neighborhood.
          </p>

          <div className="flex gap-4">
            <button
              className="btn-hero-cta"
              onClick={() => {
                const el = document.getElementById('trending');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span>Explore Harvest</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Right Side Larger Amoeba Video Container */}
        <div className="amoeba-video-wrapper">
          <div className="amoeba-video-frame-large" title="Fresh Organic Harvesting Video">
            <video
              src="/assets/From Klickpin.com- 3448137210838714-pin-id-3448137210838714.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </div>
    </section>
  );
}

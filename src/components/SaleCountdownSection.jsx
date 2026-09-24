import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export default function SaleCountdownSection() {
  const [timeLeft, setTimeLeft] = useState({ days: 12, hours: 8, mins: 45, secs: 30 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.secs > 0) return { ...prev, secs: prev.secs - 1 };
        return { ...prev, secs: 59, mins: (prev.mins - 1 + 60) % 60 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="sale-section-clean">
      <div className="sale-grid-container">
        {/* Left Side Contained Basket Image Box */}
        <div className="sale-basket-img-box">
          <img
            src="/assets/basket image.jpg"
            alt="Organic Fresh Basket"
          />
        </div>

        {/* Right Side Offer & Countdown */}
        <div>
          <span className="bg-lime-600 text-white font-extrabold text-xs px-4 py-1.5 rounded-full inline-block mb-3">
            NEW ORGANIC FOODS
          </span>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-4">
            Sale <span className="text-lime-600">68% Off</span><br />All Fruit Products
          </h2>

          <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-md">
            Get seasonal organic harvest baskets delivered directly from verified neighborhood farmers markets near you.
          </p>

          {/* Countdown Boxes */}
          <div className="timer-boxes-row">
            <div className="timer-box">
              <div className="timer-num">{String(timeLeft.days).padStart(2, '0')}</div>
              <div className="timer-lbl">days</div>
            </div>
            <div className="timer-box">
              <div className="timer-num">{String(timeLeft.hours).padStart(2, '0')}</div>
              <div className="timer-lbl">hours</div>
            </div>
            <div className="timer-box">
              <div className="timer-num">{String(timeLeft.mins).padStart(2, '0')}</div>
              <div className="timer-lbl">mins</div>
            </div>
            <div className="timer-box">
              <div className="timer-num">{String(timeLeft.secs).padStart(2, '0')}</div>
              <div className="timer-lbl">secs</div>
            </div>
          </div>

          <button
            className="btn-hero-cta mt-4"
            onClick={() => {
              const el = document.getElementById('popular-categories');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span>Explore More</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

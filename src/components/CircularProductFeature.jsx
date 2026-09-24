import React from 'react';

export default function CircularProductFeature() {
  return (
    <section className="model-feature-wrapper">
      {/* Centered Heading */}
      <div className="section-head-title">
        <span className="section-tagline">◦◦◦ FRESH FROM OUR FARM ◦◦◦</span>
        <h2 className="section-main-heading">Fresh Produce Feature</h2>
      </div>

      <div className="model-feature-grid">
        {/* Left Side Content (Aligned Right) */}
        <div className="space-y-10 text-right">
          <div className="feature-text-block text-right">
            <h4>INGREDIENTS</h4>
            <p>100% Certified Organic Harvest • Farm Fresh Grapes, Oranges, Lemons & Seasonal Greens.</p>
          </div>
          <div className="feature-text-block text-right">
            <h4>CAUTION</h4>
            <p>Store in cool & dry conditions. Keep refrigerated to preserve 100% natural vitamins and freshness.</p>
          </div>
        </div>

        {/* Center Circular Showcase (Matching Model Image 1 with Outer Green Ring & 4 Surrounding Mini Nodes) */}
        <div className="feature-hub-ring-container" title="100% Organic Fresh Produce Hub">
          {/* Top-Left Mini Circular Node */}
          <div className="mini-node node-top-left" title="Organic Veggies">
            <img src="/assets/mix vegies image.jpg" alt="Veggies" />
          </div>

          {/* Bottom-Left Mini Circular Node */}
          <div className="mini-node node-bottom-left" title="Fresh Tomatoes">
            <img src="/assets/tomato image.jpg" alt="Tomatoes" />
          </div>

          {/* Center Main Circular Frame containing Image 3 (Fruit Basket) */}
          <div className="feature-hub-inner-circle">
            <img
              src="/assets/fruit-basket-hero.png"
              alt="Fresh Organic Fruit Basket"
              className="hover:scale-108 transition-transform duration-500"
            />
          </div>

          {/* Top-Right Mini Circular Node */}
          <div className="mini-node node-top-right" title="Fresh Strawberries">
            <img src="/assets/straberry image.jpg" alt="Strawberries" />
          </div>

          {/* Bottom-Right Mini Circular Node */}
          <div className="mini-node node-bottom-right" title="Fresh Potatoes">
            <img src="/assets/fresh potato.jpg" alt="Potatoes" />
          </div>
        </div>

        {/* Right Side Content (Aligned Left) */}
        <div className="space-y-10 text-left">
          <div className="feature-text-block text-left">
            <h4>RECOMMENDED USES</h4>
            <p>Ideal for daily healthy eating, natural fruit juice detox, family breakfasts, and organic recipes.</p>
          </div>
          <div className="feature-text-block text-left">
            <h4>PROMOTES RELAXATION</h4>
            <p>Rich in Vitamin C, natural antioxidants, immune boosters, and plant-based nutrition.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

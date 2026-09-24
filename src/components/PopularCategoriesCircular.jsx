import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function PopularCategoriesCircular({ onSelectCategory }) {
  const allItems = [
    { title: 'Fruits & Vegetables', type: 'Organic Vegetables', image: '/assets/vegeis.jpg' },
    { title: 'Fresh Potatoes', type: 'Organic Vegetables', image: '/assets/fresh potato.jpg' },
    { title: 'Farm Tomatoes', type: 'Organic Vegetables', image: '/assets/tomato image.jpg' },
    { title: 'Harvesting', type: 'Fresh Fruits', image: '/assets/harvesting.jpg' },
    { title: 'Hand Plucked', type: 'Exotic Herbs', image: '/assets/plucking image.jpg' },
    { title: 'Fresh Berries', type: 'Seasonal Berries', image: '/assets/straberry image.jpg' },
    { title: 'Organic Baskets', type: 'Organic Vegetables', image: '/assets/basket image.jpg' }
  ];

  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex(prev => (prev + 1) % (allItems.length - 4));
  };

  const handlePrev = () => {
    setStartIndex(prev => (prev - 1 + (allItems.length - 4)) % (allItems.length - 4));
  };

  const visibleItems = allItems.slice(startIndex, startIndex + 5);

  return (
    <section className="good-harvest-leaves-section" id="popular-categories">
      <div className="good-harvest-overlay"></div>

      <div className="good-harvest-content">
        {/* Centered Heading */}
        <div className="section-head-title">
          <span className="section-tagline">◦◦◦ FRESH FROM OUR FARM ◦◦◦</span>
          <h2 className="section-main-heading">Good Large Harvest</h2>
        </div>

        {/* Carousel Container with Arrow Buttons on Both Sides */}
        <div className="carousel-wrapper-relative max-w-6xl mx-auto">
          <button
            className="carousel-nav-btn btn-arrow-left"
            onClick={handlePrev}
            title="Previous Categories"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="circular-cat-grid w-full">
            {visibleItems.map((cat, idx) => (
              <div
                key={idx}
                className="circular-cat-item"
                onClick={() => {
                  if (onSelectCategory) onSelectCategory(cat.type);
                }}
              >
                <div className="circular-img-box">
                  <img src={cat.image} alt={cat.title} />
                </div>
                <div className="circular-pill-badge">{cat.title}</div>
              </div>
            ))}
          </div>

          <button
            className="carousel-nav-btn btn-arrow-right"
            onClick={handleNext}
            title="Next Categories"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}

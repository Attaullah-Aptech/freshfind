import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export default function BestTrendingCards() {
  const allCards = [
    {
      id: 1,
      classType: 'promo-card-teal',
      title: 'Get Every Vegetable You Need',
      btnText: 'SHOP NOW',
      image: '/assets/mix vegies image.jpg'
    },
    {
      id: 2,
      classType: 'promo-card-orange',
      title: '100% Farm Organic Basket',
      btnText: 'SHOP NOW',
      image: '/assets/basket image.jpg'
    },
    {
      id: 3,
      classType: 'promo-card-lime',
      title: 'Get Every Vegetable You Need',
      btnText: 'SHOP NOW',
      image: '/assets/straberry image.jpg'
    },
    {
      id: 4,
      classType: 'promo-card-teal',
      title: 'Fresh Potato Harvest',
      btnText: 'SHOP NOW',
      image: '/assets/fresh potato.jpg'
    },
    {
      id: 5,
      classType: 'promo-card-orange',
      title: 'Hand-Picked Red Tomatoes',
      btnText: 'SHOP NOW',
      image: '/assets/tomato image.jpg'
    }
  ];

  const [startIndex, setStartIndex] = useState(0);

  // Auto carousel slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [allCards.length]);

  const handleNext = () => {
    setStartIndex(prev => (prev + 1) % (allCards.length - 2));
  };

  const handlePrev = () => {
    setStartIndex(prev => (prev - 1 + (allCards.length - 2)) % (allCards.length - 2));
  };

  const visibleCards = allCards.slice(startIndex, startIndex + 3);

  return (
    <section className="best-trending-section" id="trending">
      {/* Background Arch Shape Container (Matching Image 5) */}
      <div className="trending-arch-bg"></div>

      <div className="trending-container">
        {/* Centered Heading */}
        <div className="section-head-title">
          <span className="section-tagline">◦◦◦ FRESH FROM OUR FARM ◦◦◦</span>
          <h2 className="section-main-heading">Best Trending</h2>
        </div>

        {/* Carousel Container with Arrow Buttons on Both Sides */}
        <div className="carousel-wrapper-relative">
          <button
            className="carousel-nav-btn btn-arrow-left"
            onClick={handlePrev}
            title="Previous Trending Produce"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="trending-cards-grid-large">
            {visibleCards.map(card => (
              <div key={card.id} className={`promo-card-large ${card.classType}`}>
                <div className="promo-card-content">
                  <h3 className="promo-card-title-large">{card.title}</h3>
                  <button
                    className="btn-promo-shop-large"
                    onClick={() => {
                      const el = document.getElementById('popular-categories');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <span>{card.btnText}</span>
                    <ArrowRight size={14} />
                  </button>
                </div>

                <img
                  src={card.image}
                  alt={card.title}
                  className="promo-card-img-large"
                />
              </div>
            ))}
          </div>

          <button
            className="carousel-nav-btn btn-arrow-right"
            onClick={handleNext}
            title="Next Trending Produce"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}

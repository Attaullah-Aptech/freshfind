import React, { useState, useEffect } from 'react';
import WavyHeaderNav from "../components/WavyHeaderNav";
import HeroRealSection from "../components/HeroRealSection";
import BestTrendingCards from "../components/BestTrendingCards";
import CircularProductFeature from "../components/CircularProductFeature";
import PopularCategoriesCircular from "../components/PopularCategoriesCircular";
import SaleCountdownSection from "../components/SaleCountdownSection";
import AiChatbotWidget from "../components/AiChatbotWidget";
import MarketDetailModal from "../components/MarketDetailModal";
import BookmarksDrawer from "../components/BookmarksDrawer";

import marketsData from '../data/markets.json';
import produceData from '../data/produce.json';

export default function Home() {
  const [activeNav, setActiveNav] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('All Produce');
  const [selectedMarketModal, setSelectedMarketModal] = useState(null);
  const [isBookmarksOpen, setIsBookmarksOpen] = useState(false);

  // Bookmarks state with localStorage persistence
  const [bookmarkedMarketIds, setBookmarkedMarketIds] = useState(() => {
    try {
      const saved = localStorage.getItem('freshfind_market_bookmarks');
      return saved ? JSON.parse(saved) : ['m1', 'm2'];
    } catch {
      return ['m1', 'm2'];
    }
  });

  const [bookmarkedProduceIds, setBookmarkedProduceIds] = useState(() => {
    try {
      const saved = localStorage.getItem('freshfind_produce_bookmarks');
      return saved ? JSON.parse(saved) : ['p1'];
    } catch {
      return ['p1'];
    }
  });

  useEffect(() => {
    localStorage.setItem('freshfind_market_bookmarks', JSON.stringify(bookmarkedMarketIds));
  }, [bookmarkedMarketIds]);

  useEffect(() => {
    localStorage.setItem('freshfind_produce_bookmarks', JSON.stringify(bookmarkedProduceIds));
  }, [bookmarkedProduceIds]);

  const handleToggleMarketBookmark = (id) => {
    setBookmarkedMarketIds(prev =>
      prev.includes(id) ? prev.filter(mId => mId !== id) : [...prev, id]
    );
  };

  const handleToggleProduceBookmark = (id) => {
    setBookmarkedProduceIds(prev =>
      prev.includes(id) ? prev.filter(pId => pId !== id) : [...prev, id]
    );
  };

  const bookmarkedMarketsList = marketsData.filter(m => bookmarkedMarketIds.includes(m.id));
  const bookmarkedProduceList = produceData.filter(p => bookmarkedProduceIds.includes(p.id));

  return (
    <div className="home-page-shell min-h-screen flex flex-col bg-white">
      {/* Wavy Navigation Bar with Light Green Hover */}
      <WavyHeaderNav
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        bookmarkCount={bookmarkedMarketIds.length + bookmarkedProduceIds.length}
        onOpenBookmarks={() => setIsBookmarksOpen(true)}
      />

      {/* Hero Section with Ambient Zoom-In/Out Background & Larger Amoeba Video Container */}
      <HeroRealSection
        onExploreClick={() => {
          const el = document.getElementById('trending');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Best Trending Promo Cards with Arched Background & Both-Side Arrow Carousel */}
      <BestTrendingCards />

      {/* Good Large Harvest - Circular Categories Row */}
      <PopularCategoriesCircular
        onSelectCategory={(catType) => setSelectedCategory(catType)}
      />

      {/* Fresh Produce Feature - Circular Product Hub */}
      <CircularProductFeature />

      {/* Sale 68% Off Countdown Section */}
      <SaleCountdownSection />

      {/* Clean Modern Footer */}
    

      {/* Floating AI Chatbot Widget */}
      <AiChatbotWidget />

      {/* Market Detail Popup Modal */}
      <MarketDetailModal
        market={selectedMarketModal}
        onClose={() => setSelectedMarketModal(null)}
        isBookmarked={selectedMarketModal ? bookmarkedMarketIds.includes(selectedMarketModal.id) : false}
        onToggleBookmark={handleToggleMarketBookmark}
      />

      {/* Bookmarks Slide-Over Drawer */}
      <BookmarksDrawer
        isOpen={isBookmarksOpen}
        onClose={() => setIsBookmarksOpen(false)}
        bookmarkedMarkets={bookmarkedMarketsList}
        bookmarkedProduce={bookmarkedProduceList}
        onRemoveMarketBookmark={handleToggleMarketBookmark}
        onRemoveProduceBookmark={handleToggleProduceBookmark}
      />
    </div>
  );
}

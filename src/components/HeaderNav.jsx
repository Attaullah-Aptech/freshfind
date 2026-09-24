import React, { useState } from 'react';
import { Search, Phone, Heart, Grid, ChevronDown, Sparkles } from 'lucide-react';

export default function HeaderNav({
  activeNav,
  setActiveNav,
  bookmarkCount,
  onOpenBookmarks,
  onSelectCategory,
  onSearchSubmit
}) {
  const [deptOpen, setDeptOpen] = useState(false);
  const [searchVal, setSearchVal] = useState('');

  const categories = [
    { name: 'Fresh Vegetables', icon: '🥕' },
    { name: 'Organic Fruits', icon: '🍎' },
    { name: 'Fresh Cold-Pressed Juices', icon: '🧃' },
    { name: 'Farm Herbs & Spices', icon: '🌿' },
    { name: 'Dairy & Farm Eggs', icon: '🧀' },
    { name: 'Nuts & Dried Fruits', icon: '🌰' }
  ];

  const handleNavClick = (targetId) => {
    setActiveNav(targetId);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearchSubmit) onSearchSubmit(searchVal);
    handleNavClick('find-market');
  };

  return (
    <header className="organi-header">
      {/* Top Header Row (Logo, Search Center, Phone Right) */}
      <div className="header-top-row">
        <a href="#home" className="logo-wrapper" onClick={() => handleNavClick('home')}>
          <img src="/logo.png" alt="FreshFind Logo" />
        </a>

        {/* Center Pill Search Bar */}
        <form className="header-search-bar" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search markets, produce, location..."
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
          />
          <button type="submit" className="header-search-btn" title="Search">
            <Search size={18} />
          </button>
        </form>

        {/* Right Support Phone */}
        <div className="header-support-box">
          <div className="phone-icon-black">
            <Phone size={18} />
          </div>
          <div>
            <div className="phone-text-number">+1 (555) 234-5678</div>
            <div className="phone-text-label">24/7 Market Support</div>
          </div>
        </div>
      </div>

      {/* Secondary Nav Row */}
      <div className="header-nav-row">
        {/* Department Menu */}
        <div className="relative">
          <button className="dept-btn-green" onClick={() => setDeptOpen(!deptOpen)}>
            <Grid size={18} />
            <span>All Departments</span>
            <ChevronDown size={16} style={{ transform: deptOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
          </button>

          {deptOpen && (
            <ul className="dept-menu-list">
              {categories.map((cat, idx) => (
                <li
                  key={idx}
                  className="dept-item"
                  onClick={() => {
                    onSelectCategory(cat.name);
                    setDeptOpen(false);
                    handleNavClick('produce');
                  }}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.name}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Main Links */}
        <nav>
          <ul className="main-nav-links">
            <li>
              <a
                href="#home"
                className={`main-nav-link ${activeNav === 'home' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#find-market"
                className={`main-nav-link ${activeNav === 'find-market' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNavClick('find-market'); }}
              >
                Find a Market
              </a>
            </li>
            <li>
              <a
                href="#markets"
                className={`main-nav-link ${activeNav === 'markets' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNavClick('markets'); }}
              >
                Market Directory
              </a>
            </li>
            <li>
              <a
                href="#produce"
                className={`main-nav-link ${activeNav === 'produce' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNavClick('produce'); }}
              >
                Produce Guide
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={`main-nav-link ${activeNav === 'about' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`main-nav-link ${activeNav === 'contact' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Bookmarks Button */}
        <button className="bookmark-pill-btn" onClick={onOpenBookmarks}>
          <Heart size={16} fill={bookmarkCount > 0 ? '#ef4444' : 'none'} color={bookmarkCount > 0 ? '#ef4444' : 'currentColor'} />
          <span>Bookmarks</span>
          {bookmarkCount > 0 && <span className="bookmark-badge-num">{bookmarkCount}</span>}
        </button>
      </div>
    </header>
  );
}

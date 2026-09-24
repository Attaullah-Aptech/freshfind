import React, { useState, useEffect } from 'react';
import '././css/AboutUs.css';

// Team Photos
import ayeshaImg from '../assets/images/Guide/Ayesha.jfif';
import aasiaImg from '../assets/images/Guide/Aasia.jfif';
import atqaImg from '../assets/images/Guide/Atqa.jfif'; // Anqa's photo
import asmaImg from '../assets/images/Guide/Asma.jfif';
import kinzaImg from '../assets/images/Guide/Kinza.jfif';
import huzaifaImg from '../assets/images/Guide/Huzaifa.jfif';

// Hero & Food Showcase Images
import food1Img from '../assets/images/Guide/food-1.png';
import food2Img from '../assets/images/Guide/food-2.png';
import bannerImg from '../assets/images/Guide/BANNER.png';
import pepperImg from '../assets/images/Guide/pepper.jpeg';
import freshfindLogo from '../assets/images/Guide/freshfind_logo.png';

import farming1 from '../assets/images/Guide/Farming-1.jfif';
import farming2 from '../assets/images/Guide/Farming-2.jfif';
import farming3 from '../assets/images/Guide/Farming-3.jfif';
import farming4 from '../assets/images/Guide/Farming-4.jfif';
import farming6 from '../assets/images/Guide/Farming-6.jfif';
import farming7 from '../assets/images/Guide/Farming-7.jfif';
import farming8 from '../assets/images/Guide/Farming-8.jfif';

// 4 Farm Images for 2x2 Grid (Matching Screenshot 1)
import gardeningImg from '../assets/images/Guide/Gardening is my habit.jfif';
import growVegImg from '../assets/images/Guide/Grow Your Own Fruits and Vegetables at Home.jfif';
import rusticBasketImg from '../assets/images/Guide/Rustic Garden Basket Overflowing with Fresh Organic Greens & Vegetables_.jfif';
import waterCropImg from '../assets/images/Guide/Formas para cuidar con agua cultivos.jfif';
import WavyHeaderNav from '../components/WavyHeaderNav';

const AboutUs = () => {

    
  const [activeNav, setActiveNav] = useState('home');

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

  // Real-Time Clock State
  const [clockDisplay, setClockDisplay] = useState(new Date().toLocaleTimeString());

  // Dynamic Visitor Counter State
  const [visitorCount, setVisitorCount] = useState(3065);

  // Active Tab State for 3-Tab Section
  const [activeTab, setActiveTab] = useState('natural');



  // Clock Update Effect
  useEffect(() => {
    const timer = setInterval(() => {
      setClockDisplay(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Visitor Counter Increment Effect
  useEffect(() => {
    const visitorTimer = setInterval(() => {
      setVisitorCount((prev) => prev + Math.floor(Math.random() * 3) + 1);
    }, 4000);
    return () => clearInterval(visitorTimer);
  }, []);

  // Fast GSAP & AOS Animations Setup
  useEffect(() => {
    // 1. Fast AOS Initialization
    const linkAos = document.createElement('link');
    linkAos.rel = 'stylesheet';
    linkAos.href = 'https://unpkg.com/aos@next/dist/aos.css';
    document.head.appendChild(linkAos);

    const scriptAos = document.createElement('script');
    scriptAos.src = 'https://unpkg.com/aos@next/dist/aos.js';
    scriptAos.async = true;
    scriptAos.onload = () => {
      if (window.AOS) {
        window.AOS.init({ duration: 700, once: true });
      }
    };
    document.body.appendChild(scriptAos);

    // 2. Load AOS animations only
    return () => {
      if (document.head.contains(linkAos)) document.head.removeChild(linkAos);
      if (document.body.contains(scriptAos)) document.body.removeChild(scriptAos);
    };
  }, []);

  // Dynamic Tab Data Configuration
  const tabData = {
    natural: {
      img: farming1,
      title: (
        <>
          Organic Veggies &amp; Foods You Cook <span className="hero-green-highlight">Healthy</span>
        </>
      ),
      desc: 'Discover farm-fresh produce sourced directly from trusted growers. Cook nutrient-rich meals, reduce prep time, and nourish your body with wholesome ingredients.'
    },
    handmade: {
      img: farming2,
      title: (
        <>
          Artisanal Handmade Delicacies &amp; <span className="hero-green-highlight">Preserves</span>
        </>
      ),
      desc: 'Hand-crafted in small batches by passionate local culinary creators. Enjoy pure, unadulterated sauces, seasonings, and traditional kitchen staples.'
    },
    curated: {
      img: farming3,
      title: (
        <>
          Handpicked Premium Ingredient <span className="hero-green-highlight">Bundles</span>
        </>
      ),
      desc: 'Curated collections of hard-to-find gourmet ingredients, organic spices, and chef-selected cooking kits designed to elevate every meal.'
    }
  };


  return (
    <div style={{ width: '100%' }}>

      <WavyHeaderNav
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        bookmarkCount={bookmarkedMarketIds.length + bookmarkedProduceIds.length}
        onOpenBookmarks={() => setIsBookmarksOpen(true)}
      />

      {/* 2. HERO SECTION (SHORTENED BANNER WITH ABOUT US CONTENT) */}
      <section className="reference-hero-container" id="home">
        <div className="site-container">
          <div className="hero-grid-split">
            {/* Left Column Content */}
            <div className="hero-content-left gsap-hero-left">
              <span className="brush-stroke-badge">ABOUT FRESHFIND </span>

              <h1 className="hero-ref-title">
                Discover Our Story &amp; <br />
                Passion For <span className="hero-green-highlight">Healthy Cooking</span>
              </h1>

              <p className="hero-ref-desc">
                Welcome to FreshFind &amp; Cook-Smart! We empower thousands of home cooks and local growers by delivering fresh, 100% organic produce directly to your kitchen for wholesome, delicious meals every day.
              </p>

              <button 
                type="button" 
                className="btn-organic-subscribe"
                onClick={() => alert('Welcome to FreshFind About Us!')}
              >
                Explore Our Story &rarr;
              </button>
            </div>

            {/* Right Column Visual: BANNER.png fitted flush */}
            <div className="hero-banner-stage">
              <img 
                src={bannerImg} 
                alt="Organic Veggies & Foods BANNER Showcase" 
                className="hero-banner-img gsap-banner-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. BRAND LOGOS BAR */}
      <div className="brand-bar">
        <div className="site-container d-flex justify-content-between align-items-center flex-wrap gap-4">
          <div className="brand-item">🌿 Organi Farm</div>
          <div className="brand-item">🥕 FreshMarket</div>
          <div className="brand-item">🍎 PureHarvest</div>
          <div className="brand-item">🌾 EcoCook</div>
          <div className="brand-item">🌶️ SpiceGarden</div>
        </div>
      </div>

      {/* 4. TRUSTED ORGANIC FARM SECTION (With Pepper Image Showcase on Right Side) */}
      <section className="trusted-farm-section" id="trusted-farm" data-aos="fade-up">
        <div className="site-container">
          <div className="trusted-grid-wrapper">
            {/* Left Column: 2x2 Grid of 4 Cards */}
            <div className="trusted-cards-2x2">
              <div 
                className="trusted-card-item" 
                data-aos="flip-left" 
                data-aos-easing="ease-out-cubic" 
                data-aos-duration="700"
              >
                <div className="trusted-card-img-wrap">
                  <span className="date-pill-tag">
                    <i className="fa-solid fa-clock"></i> 20 February 2021
                  </span>
                  <img src={gardeningImg} alt="Strategy for Norway's Peion Fund" />
                </div>
                <div className="trusted-card-body">
                  <h3 className="trusted-card-title">Strategy for Norway's Peion Fund Global.</h3>
                </div>
              </div>

              <div 
                className="trusted-card-item" 
                data-aos="flip-left" 
                data-aos-easing="ease-out-cubic" 
                data-aos-duration="700"
              >
                <div className="trusted-card-img-wrap">
                  <span className="date-pill-tag">
                    <i className="fa-solid fa-clock"></i> 20 February 2021
                  </span>
                  <img src={growVegImg} alt="Strategy for Norway's Peion Fund" />
                </div>
                <div className="trusted-card-body">
                  <h3 className="trusted-card-title">Strategy for Norway's Peion Fund Global.</h3>
                </div>
              </div>

              <div 
                className="trusted-card-item" 
                data-aos="flip-left" 
                data-aos-easing="ease-out-cubic" 
                data-aos-duration="700"
              >
                <div className="trusted-card-img-wrap">
                  <span className="date-pill-tag">
                    <i className="fa-solid fa-clock"></i> 20 February 2021
                  </span>
                  <img src={rusticBasketImg} alt="Strategy for Norway's Peion Fund" />
                </div>
                <div className="trusted-card-body">
                  <h3 className="trusted-card-title">Strategy for Norway's Peion Fund Global.</h3>
                </div>
              </div>

              <div 
                className="trusted-card-item" 
                data-aos="flip-left" 
                data-aos-easing="ease-out-cubic" 
                data-aos-duration="700"
              >
                <div className="trusted-card-img-wrap">
                  <span className="date-pill-tag">
                    <i className="fa-solid fa-clock"></i> 20 February 2021
                  </span>
                  <img src={waterCropImg} alt="Strategy for Norway's Peion Fund" />
                </div>
                <div className="trusted-card-body">
                  <h3 className="trusted-card-title">Strategy for Norway's Peion Fund Global.</h3>
                </div>
              </div>
            </div>

            {/* Right Column: Content + Categories List + Pepper Image Showcase on Right Side */}
            <div data-aos="fade-up" data-aos-duration="700">
              <span className="farm-tag-subhead">°°° FRESH FROM OUR FARM</span>
              
              <h2 className="trusted-heading">
                Trusted Organic Food Store Conscious
              </h2>

              <p className="trusted-description">
                Morbi eget congue lectus. Donec eleifend ultricies urna et euismod. Sed consectetur tellus eget odio aliquet, vel vestibulum tellus sollicitudin. Morbi maximus metus eu eros tincidunt, vitae mollis ante imperdiet. Nulla imperdiet at mauris ut posuere.
              </p>

              <ul className="trusted-categories-list">
                <li className="trusted-category-item">
                  <i className="fa-solid fa-leaf tag-icon-green"></i> Fruits
                </li>
                <li className="trusted-category-item">
                  <i className="fa-solid fa-leaf tag-icon-green"></i> Vegetables
                </li>
                <li className="trusted-category-item">
                  <i className="fa-solid fa-leaf tag-icon-green"></i> Juices
                </li>
                <li className="trusted-category-item">
                  <i className="fa-solid fa-leaf tag-icon-green"></i> Dried
                </li>
                <li className="trusted-category-item">
                  <i className="fa-solid fa-leaf tag-icon-green"></i> Breads
                </li>
              </ul>

              {/* Pepper Image Showcase on Right Side of Trusted Farm Section */}
              <div className="pepper-farm-showcase">
                <img src={pepperImg} alt="Fresh Organic Pepper" className="pepper-farm-img" />
                <div className="pepper-farm-text">
                  <h4>🌶️ Farm Fresh Pepper</h4>
                  <p>100% Pesticide-Free, Locally Grown Organic Peppers</p>
                </div>
              </div>

              <button 
                type="button" 
                className="btn-organic-subscribe"
                onClick={() => alert('Subscribed to Organic Farm Produce!')}
              >
                Subscribe &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DYNAMIC 3-TAB SECTION */}
      <section className="amazing-section-tabs" id="tab-section" data-aos="fade-up" data-aos-duration="700">
        <div className="site-container">
          <div className="tabs-header-bar">
            <button 
              type="button"
              className={`tab-btn ${activeTab === 'natural' ? 'active' : ''}`} 
              onClick={() => setActiveTab('natural')}
            >
              <i className="fa-solid fa-leaf me-1"></i> 100% NATURAL
            </button>
            <button 
              type="button"
              className={`tab-btn ${activeTab === 'handmade' ? 'active' : ''}`} 
              onClick={() => setActiveTab('handmade')}
            >
              <i className="fa-solid fa-hand-holding-heart me-1"></i> HANDMADE
            </button>
            <button 
              type="button"
              className={`tab-btn ${activeTab === 'curated' ? 'active' : ''}`} 
              onClick={() => setActiveTab('curated')}
            >
              <i className="fa-solid fa-box-open me-1"></i> CURATED PRODUCTS
            </button>
          </div>

          <div className="tab-content-card">
            <div>
              <img src={tabData[activeTab].img} alt="Farm Produce" className="tab-hero-img" />
            </div>
            <div>
              <span className="text-success fw-bold">HEALTHY LIVING</span>
              <h2 className="fw-bold mt-2 mb-3">{tabData[activeTab].title}</h2>
              <p className="text-muted">{tabData[activeTab].desc}</p>
              <a href="#team-section" className="btn-organic-subscribe mt-3" style={{ padding: '12px 28px', fontSize: '0.95rem' }}>
                Explore More &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5.5. REFERENCE 3-CIRCLES WIDGET BANNER SECTION ABOVE TEAM MEMBERS */}
      <section className="ref-circles-banner-section">
        <div className="ref-circles-overlay"></div>
        <div className="site-container position-relative" style={{ zIndex: 2 }}>
          <div className="ref-circles-flex-wrapper">
            {/* Circle Card 1: Live Platform Timer */}
            <div className="ref-circle-item-wrap" data-aos="zoom-in" data-aos-duration="600">
              <div className="ref-circle-card">
                <div className="ref-circle-top-badge">
                  <i className="fa-solid fa-clock"></i>
                </div>
                <div className="ref-circle-main-val font-mono">{clockDisplay}</div>
                <span className="ref-circle-sub-tag">PKT</span>
              </div>
              <div className="ref-circle-caption-label">Live Platform Timer</div>
            </div>

            {/* Circle Card 2: Markets Open Status */}
            <div className="ref-circle-item-wrap" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="150">
              <div className="ref-circle-card">
                <div className="ref-circle-top-badge">
                  <i className="fa-solid fa-store"></i>
                </div>
                <div className="d-flex align-items-center justify-content-center gap-2 mb-1">
                  <span className="ref-pulse-green-dot"></span>
                  <div className="ref-circle-main-val font-outfit" style={{ fontSize: '1.25rem' }}>Open Now</div>
                </div>
              </div>
              <div className="ref-circle-caption-label">Markets Open Status</div>
            </div>

            {/* Circle Card 3: Live Visitors */}
            <div className="ref-circle-item-wrap" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="300">
              <div className="ref-circle-card">
                <div className="ref-circle-top-badge">
                  <i className="fa-solid fa-users"></i>
                </div>
                <div className="ref-circle-main-val font-outfit">{visitorCount.toLocaleString()}+</div>
              </div>
              <div className="ref-circle-caption-label">Live Visitors</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TEAM MEMBERS SECTION */}
      <section id="team-section" className="team-section">
        <div className="site-container">
          <div className="text-center max-width-600 mx-auto mb-5" data-aos="fade-up" data-aos-duration="700">
            <span className="text-success fw-bold">THE PEOPLE BEHIND FRESHFIND</span>
            <h2 className="display-6 fw-bold mt-1">Meet Our Passionate Team</h2>
          </div>

          <div className="team-cards-grid-3col">
            {/* Member 1: Ayesha */}
            <div 
              className="team-card-interactive" 
              data-aos="flip-left" 
              data-aos-easing="ease-out-cubic" 
              data-aos-duration="700"
            >
              <span className="member-status-badge">● Executive Lead</span>
              <div className="member-photo-frame">
                <img src={ayeshaImg} alt="Ayesha" />
              </div>
              <h3 className="member-name">Ayesha</h3>
              <div className="member-designation">Founder &amp; Chief Executive Officer</div>
              <p className="member-bio-text">Passionate about revolutionizing home cooking and making healthy food accessible to everyone.</p>

              <div className="skill-pills-row">
                <span className="skill-pill">Leadership</span>
                <span className="skill-pill">Strategy</span>
                <span className="skill-pill">Vision</span>
              </div>

              <div className="social-tray-row">
                <a href="https://www.linkedin.com/in/ayesha-khan-467b10413" target="_blank" rel="noopener noreferrer" className="social-btn-small" title="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="https://github.com/AyeshaArif739" target="_blank" rel="noopener noreferrer" className="social-btn-small" title="GitHub"><i className="fa-brands fa-github"></i></a>
                <a href="https://www.fiverr.com/" target="_blank" rel="noopener noreferrer" className="social-btn-small" title="Fiverr"><span className="fiverr-icon-bold">fi</span></a>
              </div>
            </div>

            {/* Member 2: Aasia */}
            <div 
              className="team-card-interactive" 
              data-aos="flip-left" 
              data-aos-easing="ease-out-cubic" 
              data-aos-duration="700"
            >
              <span className="member-status-badge">● Master Chef</span>
              <div className="member-photo-frame">
                <img src={aasiaImg} alt="Aasia" />
              </div>
              <h3 className="member-name">Aasia</h3>
              <div className="member-designation">Head Chef &amp; Culinary Director</div>
              <p className="member-bio-text">Curates world-class organic recipes with a focus on nutrition, taste, and waste reduction.</p>

              <div className="skill-pills-row">
                <span className="skill-pill">Recipes</span>
                <span className="skill-pill">Nutrition</span>
                <span className="skill-pill">Zero Waste</span>
              </div>

              <div className="social-tray-row">
                <a href="https://www.linkedin.com/in/ayesha-khan-467b10413" target="_blank" rel="noopener noreferrer" className="social-btn-small" title="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="https://github.com/AyeshaArif739" target="_blank" rel="noopener noreferrer" className="social-btn-small" title="GitHub"><i className="fa-brands fa-github"></i></a>
                <a href="https://www.fiverr.com/" target="_blank" rel="noopener noreferrer" className="social-btn-small" title="Fiverr"><span className="fiverr-icon-bold">fi</span></a>
              </div>
            </div>

            {/* Member 3: Anqa */}
            <div 
              className="team-card-interactive" 
              data-aos="flip-left" 
              data-aos-easing="ease-out-cubic" 
              data-aos-duration="700"
            >
              <span className="member-status-badge">● Design Director</span>
              <div className="member-photo-frame">
                <img src={atqaImg} alt="Anqa" />
              </div>
              <h3 className="member-name">Anqa</h3>
              <div className="member-designation">Lead UI/UX Designer &amp; Product Specialist</div>
              <p className="member-bio-text">Crafts intuitive, visually delightful user experiences for recipe discovery and planning.</p>

              <div className="skill-pills-row">
                <span className="skill-pill">UI/UX</span>
                <span className="skill-pill">Figma</span>
                <span className="skill-pill">Product</span>
              </div>

              <div className="social-tray-row">
                <a href="https://www.linkedin.com/in/ayesha-khan-467b10413" target="_blank" rel="noopener noreferrer" className="social-btn-small" title="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="https://github.com/AyeshaArif739" target="_blank" rel="noopener noreferrer" className="social-btn-small" title="GitHub"><i className="fa-brands fa-github"></i></a>
                <a href="https://www.fiverr.com/" target="_blank" rel="noopener noreferrer" className="social-btn-small" title="Fiverr"><span className="fiverr-icon-bold">fi</span></a>
              </div>
            </div>

            {/* Member 4: Asma */}
            <div 
              className="team-card-interactive" 
              data-aos="flip-left" 
              data-aos-easing="ease-out-cubic" 
              data-aos-duration="700"
            >
              <span className="member-status-badge">● Tech Architect</span>
              <div className="member-photo-frame">
                <img src={asmaImg} alt="Asma" />
              </div>
              <h3 className="member-name">Asma</h3>
              <div className="member-designation">Senior Frontend Engineer</div>
              <p className="member-bio-text">Architects fast, responsive web interfaces with seamless animations and interactivity.</p>

              <div className="skill-pills-row">
                <span className="skill-pill">React.js</span>
                <span className="skill-pill">GSAP</span>
                <span className="skill-pill">CSS3</span>
              </div>

              <div className="social-tray-row">
                <a href="https://www.linkedin.com/in/ayesha-khan-467b10413" target="_blank" rel="noopener noreferrer" className="social-btn-small" title="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="https://github.com/AyeshaArif739" target="_blank" rel="noopener noreferrer" className="social-btn-small" title="GitHub"><i className="fa-brands fa-github"></i></a>
                <a href="https://www.fiverr.com/" target="_blank" rel="noopener noreferrer" className="social-btn-small" title="Fiverr"><span className="fiverr-icon-bold">fi</span></a>
              </div>
            </div>

            {/* Member 5: Kinza */}
            <div 
              className="team-card-interactive" 
              data-aos="flip-left" 
              data-aos-easing="ease-out-cubic" 
              data-aos-duration="700"
            >
              <span className="member-status-badge">● AI Lead</span>
              <div className="member-photo-frame">
                <img src={kinzaImg} alt="Kinza" />
              </div>
              <h3 className="member-name">Kinza</h3>
              <div className="member-designation">AI &amp; Machine Learning Engineer</div>
              <p className="member-bio-text">Builds intelligent ingredient matching algorithms and personalized recipe generators.</p>

              <div className="skill-pills-row">
                <span className="skill-pill">Python</span>
                <span className="skill-pill">AI Matching</span>
                <span className="skill-pill">ML</span>
              </div>

              <div className="social-tray-row">
                <a href="https://www.linkedin.com/in/ayesha-khan-467b10413" target="_blank" rel="noopener noreferrer" className="social-btn-small" title="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="https://github.com/AyeshaArif739" target="_blank" rel="noopener noreferrer" className="social-btn-small" title="GitHub"><i className="fa-brands fa-github"></i></a>
                <a href="https://www.fiverr.com/" target="_blank" rel="noopener noreferrer" className="social-btn-small" title="Fiverr"><span className="fiverr-icon-bold">fi</span></a>
              </div>
            </div>

            {/* Member 6: Huzaifa */}
            <div 
              className="team-card-interactive" 
              data-aos="flip-left" 
              data-aos-easing="ease-out-cubic" 
              data-aos-duration="700"
            >
              <span className="member-status-badge">● Growth Lead</span>
              <div className="member-photo-frame">
                <img src={huzaifaImg} alt="Huzaifa" />
              </div>
              <h3 className="member-name">Huzaifa</h3>
              <div className="member-designation">Community &amp; Operations Lead</div>
              <p className="member-bio-text">Drives community engagement and ensures high-quality partnerships with local sellers.</p>

              <div className="skill-pills-row">
                <span className="skill-pill">Growth</span>
                <span className="skill-pill">Sellers</span>
                <span className="skill-pill">Ops</span>
              </div>

              <div className="social-tray-row">
                <a href="https://www.linkedin.com/in/ayesha-khan-467b10413" target="_blank" rel="noopener noreferrer" className="social-btn-small" title="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="https://github.com/AyeshaArif739" target="_blank" rel="noopener noreferrer" className="social-btn-small" title="GitHub"><i className="fa-brands fa-github"></i></a>
                <a href="https://www.fiverr.com/" target="_blank" rel="noopener noreferrer" className="social-btn-small" title="Fiverr"><span className="fiverr-icon-bold">fi</span></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. VALUE SECTION, TESTIMONIALS & STATS COUNTERS */}
      <section className="amazing-section-value">
        <div className="site-container" data-aos="fade-up" data-aos-duration="700">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <img src={farming4} alt="Organic Farming" className="value-img-main" />
            </div>
            <div className="col-lg-6">
              <span className="text-success fw-bold">WELCOME TO FRESHFIND</span>
              <h2 className="display-6 fw-bold mt-2 mb-3">Committed to Giving You <span className="text-success">True Value</span>.</h2>
              <p className="text-muted mb-4">We are a strong community of 100,000+ home cooks and 600+ local sellers who aspire to be good, do good, and spread culinary goodness.</p>

              <div className="mb-3 p-3 bg-white rounded shadow-sm border-start border-4 border-success">
                <h5 className="fw-bold mb-1">01. Treating you with respect and courtesy</h5>
                <small className="text-success fw-bold">HIGH QUALITY GUARANTEE</small>
              </div>
              <div className="mb-3 p-3 bg-white rounded shadow-sm border-start border-4 border-success">
                <h5 className="fw-bold mb-1">02. Explaining the coverages and options</h5>
                <small className="text-success fw-bold">100% NATURAL &amp; TRANSPARENT</small>
              </div>
              <div className="p-3 bg-white rounded shadow-sm border-start border-4 border-success">
                <h5 className="fw-bold mb-1">03. Helping you solve kitchen problems</h5>
                <small className="text-success fw-bold">CURATED RECIPES &amp; AI ASSIST</small>
              </div>
            </div>
          </div>

          {/* Testimonial Card */}
          <div className="testimonial-card-center" data-aos="zoom-in">
            <div className="testimonial-avatar-ring">
              <img src={ayeshaImg} alt="Avatar 1" />
              <img src={aasiaImg} alt="Avatar 2" className="active-ring" />
              <img src={atqaImg} alt="Avatar 3" />
            </div>
            <p className="fst-italic fs-5 text-dark mb-3">
              "This is due to their excellent service, competitive pricing and customer support. It's thoroughly refreshing to get such a personal touch."
            </p>
            <div className="fw-bold" style={{ color: '#4CAF50' }}>
              Shirley Smith &mdash; <span className="text-muted fw-normal">Director</span>
            </div>
          </div>

          {/* Stats Counters Grid */}
          <div className="stat-grid-4col">
            <div 
              className="stat-card-box" 
              data-aos="flip-left" 
              data-aos-easing="ease-out-cubic" 
              data-aos-duration="700"
            >
              <div className="stat-num-text">2,347</div>
              <div className="stat-label-text">BUSINESS INSURED</div>
            </div>
            <div 
              className="stat-card-box" 
              data-aos="flip-left" 
              data-aos-easing="ease-out-cubic" 
              data-aos-duration="700"
            >
              <div className="stat-num-text">1,473</div>
              <div className="stat-label-text">PEOPLE SAVED</div>
            </div>
            <div 
              className="stat-card-box" 
              data-aos="flip-left" 
              data-aos-easing="ease-out-cubic" 
              data-aos-duration="700"
            >
              <div className="stat-num-text">7,450</div>
              <div className="stat-label-text">ACTIVE CLIENTS</div>
            </div>
            <div 
              className="stat-card-box" 
              data-aos="flip-left" 
              data-aos-easing="ease-out-cubic" 
              data-aos-duration="700"
            >
              <div className="stat-num-text">3,240</div>
              <div className="stat-label-text">HAPPY CLIENTS</div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. UNBELIEVABLE SUPER FAST RECIPE SEARCH SECTION */}
      <section className="amazing-section-fast" data-aos="fade-up" data-aos-duration="700">
        <div className="site-container">
          <div className="fast-grid-container">
            <div className="fast-gallery-flex">
              <div className="gallery-col-stack">
                <img src={farming6} alt="Organic Produce Farming 6" className="gallery-crop-img img-top-crop" />
                <img src={farming8} alt="Organic Harvest Farming 8" className="gallery-crop-img img-bottom-crop" />
              </div>
              <div className="gallery-col-stack">
                <img src={farming7} alt="Organic Farming Field" className="gallery-crop-img img-tall-crop" />
              </div>
            </div>

            <div>
              <span className="text-success fw-bold tracking-wide">WELCOME TO FRESHFIND</span>
              <h2 className="display-5 fw-bold mt-1 mb-3">Unbelievable Super Fast Recipe Search</h2>
              <p className="text-muted fs-6 mb-4">
                We are a strong community of 100,000+ customers and 600+ sellers who aspire to be good, do good, and spread goodness.
              </p>

              <ul className="list-unstyled d-flex flex-column gap-3 mb-4 fs-6">
                <li className="d-flex align-items-center gap-3">
                  <i className="fa-solid fa-circle-check check-list-icon"></i>
                  <span className="fw-bold">Superfast and ultra-reliable.</span>
                </li>
                <li className="d-flex align-items-center gap-3">
                  <i className="fa-solid fa-circle-check check-list-icon"></i>
                  <span className="fw-bold">Browse and download around the clock.</span>
                </li>
                <li className="d-flex align-items-center gap-3">
                  <i className="fa-solid fa-circle-check check-list-icon"></i>
                  <span className="fw-bold">Our fastest ever recipe generator.</span>
                </li>
              </ul>

              <a href="#tab-section" className="btn-organic-subscribe">
                Subscribe &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default AboutUs;

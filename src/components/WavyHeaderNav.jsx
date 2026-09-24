import React from "react";
import { NavLink } from "react-router-dom";

export default function WavyHeaderNav({
  activeNav,
  setActiveNav,
  bookmarkCount,
  onOpenBookmarks,
}) {
  const handleNavClick = (id) => {
    setActiveNav(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "find-market", label: "Find a Market" },
    { id: "markets", label: "Market Directory" },
    { id: "produce", label: "Produce Guide" },
    { id: "about", label: "About Us" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="greennest-navbar-container">
      <nav className="greennest-navbar">
        {/* LOGO */}
        <a
          href="#home"
          className="logo"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("home");
          }}
        >
          <img
            src="/logo.png"
            alt="FreshFind Logo"
            className="logo-brand-img"
          />
          <span className="logo-text">
            Fresh<span>Find</span>
          </span>
        </a>

        {/* NAV LINKS */}
        <div className="nav-links">
          {navItems.map((item) => {
            const isActive = activeNav === item.id;
            return (
              <NavLink
                key={item.id}
                to={item.id === "home" ? "/" : `/${item.id}`}
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </NavLink>
            );
          })}
        </div>

        {/* CTA BUTTON */}
        <button onClick={onOpenBookmarks} className="nav-button cursor-pointer">
          <span>Get Started</span>
          <span className="arrow">→</span>
        </button>
      </nav>
    </div>
  );
}

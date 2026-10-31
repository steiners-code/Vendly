'use client';

import React, { useState } from 'react';

export function LandingHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header>
      <div className="wrap bar">
        <a className="logo" href="/">
          Vendly
        </a>
        <nav className="links" aria-label="Main">
          <a href="#why">Why Vendly</a>
          <a href="#how">How it works</a>
          <a href="#demo">Live demo</a>
          <a href="#free">Free plan</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="signin" href="/signin">
          Sign in
        </a>
        <a className="btn sm" href="/signup">
          Start free
        </a>
        <button
          className="menu"
          id="menu"
          aria-label="Menu"
          aria-expanded={isOpen}
          aria-controls="drop"
          onClick={toggleMenu}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>
      <div className={`drop ${isOpen ? 'open' : ''}`} id="drop" onClick={closeMenu}>
        <a href="#why">Why Vendly</a>
        <a href="#how">How it works</a>
        <a href="#demo">Live demo</a>
        <a href="#free">Free plan</a>
        <a href="#faq">FAQ</a>
        <a href="/signin">Sign in</a>
      </div>
    </header>
  );
}

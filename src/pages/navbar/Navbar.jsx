import React, { useState } from "react";
import { Link } from "react-router";
import Logo from "../../components/Logo";
import { CiSearch } from "react-icons/ci";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = ["Home", "Tours", "Hotels", "Blog", "About", "Contact"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: "0 24px",
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "rgba(10, 10, 20, 0.35)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {/* Logo */}
      <div style={{ flexShrink: 0 }}>
        <Logo />
      </div>

      {/* Desktop Nav Links */}
      <ul
        style={{
          display: "flex",
          gap: "4px",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
        className="desktop-nav"
      >
        {navLinks.map((label, i) => (
          <li key={label}>
            <Link
              to={`/${label.toLowerCase()}`}
              style={{
                color: i === 0 ? "#FAB326" : "rgba(255,255,255,0.9)",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: i === 0 ? 600 : 400,
                fontSize: "14.5px",
                textDecoration: "none",
                padding: "6px 12px",
                borderRadius: "6px",
                transition: "color 0.2s, background 0.2s",
                display: "inline-block",
                letterSpacing: "0.01em",
              }}
              onMouseEnter={(e) => {
                if (i !== 0) {
                  e.target.style.color = "#FAB326";
                  e.target.style.background = "rgba(250,179,38,0.08)";
                }
              }}
              onMouseLeave={(e) => {
                if (i !== 0) {
                  e.target.style.color = "rgba(255,255,255,0.9)";
                  e.target.style.background = "transparent";
                }
              }}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Right Side: Search + SignIn */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          flexShrink: 0,
        }}
        className="desktop-actions"
      >
        <button
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            background: "none",
            border: "none",
            color: "rgba(255,255,255,0.85)",
            fontFamily: "'Poppins', sans-serif",
            fontSize: "14px",
            cursor: "pointer",
            padding: "4px 8px",
            borderRadius: "6px",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#FAB326")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}
        >
          <CiSearch size={18} />
          <span>Search</span>
        </button>

        <Link
          to="/signin"
          style={{
            background: "linear-gradient(135deg, #FAB326 0%, #f59e0b 100%)",
            color: "#1a0f00",
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600,
            fontSize: "14px",
            padding: "8px 22px",
            borderRadius: "999px",
            textDecoration: "none",
            boxShadow: "0 2px 12px rgba(250,179,38,0.35)",
            transition: "transform 0.15s, box-shadow 0.15s",
            display: "inline-block",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-1px)";
            e.currentTarget.style.boxShadow = "0 4px 20px rgba(250,179,38,0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 2px 12px rgba(250,179,38,0.35)";
          }}
        >
          Sign In
        </Link>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="mobile-menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: "none",
          background: "none",
          border: "none",
          color: "white",
          cursor: "pointer",
          padding: "4px",
        }}
        aria-label="Toggle menu"
      >
        {menuOpen ? <HiX size={26} /> : <HiMenu size={26} />}
      </button>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div
          className="mobile-dropdown"
          style={{
            position: "absolute",
            top: "64px",
            left: 0,
            right: 0,
            background: "rgba(10, 10, 20, 0.97)",
            backdropFilter: "blur(16px)",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            padding: "16px 24px 20px",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          {navLinks.map((label, i) => (
            <Link
              key={label}
              to={`/${label.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{
                color: i === 0 ? "#FAB326" : "rgba(255,255,255,0.85)",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: i === 0 ? 600 : 400,
                fontSize: "15px",
                textDecoration: "none",
                padding: "10px 8px",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                display: "block",
              }}
            >
              {label}
            </Link>
          ))}
          <div style={{ marginTop: "12px", display: "flex", alignItems: "center", gap: "16px" }}>
            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                background: "none",
                border: "none",
                color: "rgba(255,255,255,0.8)",
                fontFamily: "'Poppins', sans-serif",
                fontSize: "14px",
                cursor: "pointer",
                padding: 0,
              }}
            >
              <CiSearch size={18} />
              Search
            </button>
            <Link
              to="/signin"
              style={{
                background: "linear-gradient(135deg, #FAB326 0%, #f59e0b 100%)",
                color: "#1a0f00",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: "14px",
                padding: "8px 22px",
                borderRadius: "999px",
                textDecoration: "none",
              }}
            >
              Sign In
            </Link>
          </div>
        </div>
      )}

      {/* Responsive styles via style tag */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

        @media (max-width: 768px) {
          .desktop-nav,
          .desktop-actions {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top px-4"
      style={{
        background: scrolled ? "#0f172a" : "transparent",
        transition: "0.3s",
      }}
    >
      <a className="navbar-brand text-white fw-bold" href="#">
        ATZ Solutions
      </a>

      {/* <div className="ms-auto">
        <a href="#services" className="nav-link d-inline text-white">
          Services
        </a>
        <a href="#contact" className="nav-link d-inline text-white">
          Contact
        </a>
      </div> */}
    </nav>
  );
}
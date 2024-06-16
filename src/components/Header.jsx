import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../Assets/logo.png';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownsOpen, setDropdownsOpen] = useState({
    exam: false,
    freetest: false,
    others: false,
  });

  const toggleDropdown = (dropdown) => {
    setDropdownsOpen((prevState) => ({
      ...prevState,
      [dropdown]: !prevState[dropdown],
    }));
  };

  return (
    <div className="container" data-aos="fade-up">
      <header>
        <nav className="navbar">
          <div className="navbar-brand">
            <Link to="/">
              <img src={logoImg} alt="Logo" />
            </Link>
          </div>
          <div className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div />
            <div />
            <div />
          </div>
          <ul className={`navbar-nav ${isMenuOpen ? 'open' : ''}`}>
            <li className="nav-item">
              <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/class" onClick={() => setIsMenuOpen(false)}>Class</Link>
            </li>
            <li className="nav-item dropdown">
              <a href="#" className="dropbtn" onClick={() => toggleDropdown('exam')}>Exams</a>
              <ul className={`dropdown-content ${dropdownsOpen.exam ? 'open' : ''}`}>
                <li>
                  <Link to="https://classplusapp.com/diy/preview?templateId=666c0486c742560013402612&pageId=666c0486c7425600134026ae" onClick={() => setIsMenuOpen(false)}>UPSC</Link>
                </li>
                <li>
                  <Link to="https://classplusapp.com/diy/preview?templateId=666c0486c742560013402612&pageId=666c0486c7425600134026ae" onClick={() => setIsMenuOpen(false)}>NEET</Link>
                </li>
                <li>
                  <Link to="https://classplusapp.com/diy/preview?templateId=666c0486c742560013402612&pageId=666c0486c7425600134026ae" onClick={() => setIsMenuOpen(false)}>JEE</Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a href="#" className="dropbtn" onClick={() => toggleDropdown('freetest')}>Free-Test</a>
              <ul className={`dropdown-content ${dropdownsOpen.freetest ? 'open' : ''}`}>
                <li>
                  <Link to="https://classplusapp.com/diy/preview?templateId=666c0486c742560013402612&pageId=666c0486c7425600134026ae" onClick={() => setIsMenuOpen(false)}>Mock-Test</Link>
                </li>
                <li>
                  <Link to="https://classplusapp.com/diy/preview?templateId=666c0486c742560013402612&pageId=666c0486c7425600134026ae" onClick={() => setIsMenuOpen(false)}>Resource</Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </li>
            <li className="nav-item dropdown">
              <a href="#" className="dropbtn" onClick={() => toggleDropdown('others')}>Others</a>
              <ul className={`dropdown-content ${dropdownsOpen.others ? 'open' : ''}`}>
                <li>
                  <Link to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link>
                </li>
                <li>
                  <Link to="/privacypolicy" onClick={() => setIsMenuOpen(false)}>Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms" onClick={() => setIsMenuOpen(false)}>Terms & Conditions</Link>
                </li>
              </ul>
            </li>
          </ul>
          <button
            className="btn btn-primary"
            onClick={() => (window.location.href = 'https://web.classplusapp.com/login?orgCode=ajsnls')}
          >
            <p className="btn-text">Login</p>
            <span className="square" />
          </button>
        </nav>
      </header>
    </div>
  );
}

export default Header;

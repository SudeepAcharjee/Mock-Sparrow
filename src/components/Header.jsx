import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../Assets/logo.png';
import './Header.css'; // Import CSS file for styling

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container" data-aos="fade-up">
      <header>
        <nav className="navbar">
          <div className="navbar-brand">
            <Link to="/">
              <img src={logoImg} alt="Logo" />
            </Link>
            <button className="hamburger" onClick={toggleMenu}>
              &#9776;
            </button>
          </div>
          <ul className={`navbar-nav ${isMenuOpen ? 'open' : ''}`}>
            <li className="nav-item">
              <Link to="https://sudeep-acharjee.me">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="https://sudeep-acharjee.me">Class</Link>
            </li>
            <li className="nav-item dropdown">
              <a href="#" className="dropbtn" onClick={() => toggleDropdown('exam')}>Exams</a>
              <ul className={`dropdown-content ${dropdownsOpen.exam ? 'open' : ''}`}>
                <li>
                  <Link to="https://classplusapp.com/diy/preview?templateId=666c0486c742560013402612&pageId=666c0486c7425600134026ae">
                    UPSC
                  </Link>
                </li>
                <li>
                  <Link to="https://classplusapp.com/diy/preview?templateId=666c0486c742560013402612&pageId=666c0486c7425600134026ae">
                    NEET
                  </Link>
                </li>
                <li>
                  <Link to="https://classplusapp.com/diy/preview?templateId=666c0486c742560013402612&pageId=666c0486c7425600134026ae">
                    JEE
                  </Link>
                </li>
                <li>
                  <Link to="https://classplusapp.com/diy/preview?templateId=666c0486c742560013402612&pageId=666c0486c7425600134026ae">
                    JEE
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a href="#" className="dropbtn" onClick={() => toggleDropdown('freetest')}>Free-Test</a>
              <ul className={`dropdown-content ${dropdownsOpen.freetest ? 'open' : ''}`}>
                <li>
                  <Link to="https://classplusapp.com/diy/preview?templateId=666c0486c742560013402612&pageId=666c0486c7425600134026ae">
                    Mock-Test
                  </Link>
                </li>
                <li>
                  <Link to="https://classplusapp.com/diy/preview?templateId=666c0486c742560013402612&pageId=666c0486c7425600134026ae">
                    Resource
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="nav-item dropdown">
              <a href="#" className="dropbtn" onClick={() => toggleDropdown('others')}>Others</a>
              <ul className={`dropdown-content ${dropdownsOpen.others ? 'open' : ''}`}>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/privacypolicy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/privacypolicy">Terms & Conditions</Link>
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

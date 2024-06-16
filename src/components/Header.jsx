import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
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
              <img src="./logo.png" alt=" Logo" />
            </Link>
          </div>
          <ul className="navbar-nav flex gap-4">
          <li className="nav-item">
              <Link to="https://sudeep-acharjee.me">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="https://sudeep-acharjee.me">Class</Link>
            </li>

            <li className="nav-item dropdown">
            <a href="#" class="dropbtn">Exams</a>

                <ul className="dropdown-content">
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
            <a href="#" class="dropbtn">Free-Test</a>

                <ul className="dropdown-content">
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
            <a href="#" class="dropbtn">Others</a>

                <ul className="dropdown-content">
                  <li>
                    <Link to="/services">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/privacypolicy">
                     PrivacyPolicy
                    </Link>
                  </li>
                  <li>
                    <Link to="/privacypolicy">
                     Terms & Conditions
                    </Link>
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
          <button className="nav-toggle-btn">
            <span className="one" />
            <span className="two" />
            <span className="three" />
          </button>
        </nav>
      </header>
    </div>
  );
}

export default Header;

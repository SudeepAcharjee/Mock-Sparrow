import React from 'react'
import Logo from '../Assets/img/logo.png'
import '../Assets/css/style.css'
import '../Assets/css/variable.css'
import '../Assets/css/media_queries.css'
import '../Assets/css/animation.css'
import ctaBgImg from '../Assets/img/cta-bg-img.png';
function Footer() {
  return (
    
      <><section className="contact" data-aos="fade-up">
      <div className="contact-card" id="contact">
        <img
          src={ctaBgImg}
          alt="shape"
          className="contact-card-bg" />
        <h2>Start Your Best Online Classes With Us</h2>
        <button className="btn btn-primary">
          <p className="btn-text">Contact Us</p>
          <span className="square" />
        </button>
      </div>
      </section>
      <div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      </div>
     <footer>
        <div className="footer-grid" data-aos="fade-up">
          <div className="grid-item">
            <div className="footer-logo">
              <img src={Logo} alt="Mock-Sparrow" />
              <h1>Mock-Sparrow</h1>
            </div>
            <p className="footer-text">
              Lorem ipsum dolor sit, amet consectetur adipiscing elit, nam
              rhoncus. In parturient scelerisque curabitur vivamus metus, justo
              inceptos proin fermentum ornare, eros condimentum tortor mus.
            </p>
            <div className="social-link">
              <a href="#">
                <ion-icon name="logo-facebook" />
              </a>
              <a href="#">
                <ion-icon name="logo-instagram" />
              </a>
              <a href="#">
                <ion-icon name="logo-twitter" />
              </a>
              <a href="#">
                <ion-icon name="logo-youtube" />
              </a>
            </div>
          </div>
          <ul className="grid-item">
            <h4 className="item-heading">Our Links</h4>
            <li className="list-item">
              <a href="#home">Home</a>
            </li>
            <li className="list-item">
              <a href="#about">About Us</a>
            </li>
            <li className="list-item">
              <a href="#course">Courses</a>
            </li>
            <li className="list-item">
              <a href="#blog">Free</a>
            </li>
            <li className="list-item">
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <ul className="grid-item">
            <h4 className="item-heading">Other Links</h4>
            <li className="list-item">
              <a href="#">Instructor</a>
            </li>
            <li className="list-item">
              <a href="#">FAQs</a>
            </li>
            <li className="list-item">
              <a href="#">Event</a>
            </li>
            <li className="list-item">
              <a href="#">Privacy Policy</a>
            </li>
            <li className="list-item">
              <a href="#">Term &amp; Condition</a>
            </li>
          </ul>
          <div className="grid-item">

            <div className="wrapper">
              <input type="text" name="subscribe" placeholder="Feedback" />
              <button className="send-btn">
                <ion-icon name="paper-plane" />
              </button>
            </div>
          </div>
        </div>
        <p className="copyright">
          Copyright © 2022-23 Mock-Sparrow. All rights reserved.
        </p>
      </footer></>
  )
}

export default Footer
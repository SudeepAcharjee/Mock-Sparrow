import React from 'react'
import Header from './Header'
function Home() {
  return (
    <>
<Header/>
  <main className="new" data-aos="fade-up">
    {/*----------------- HOME SECTION -----------------*/}
    <section className="home" id="home" data-aos="fade-up">
      <div className="deco-shape shape-1" data-aos="fade-up">
        <img
          src="./img/shape-1.png"
          alt="art shape"
          width={78}
          className="icon scroll-anim"
        />
      </div>
      <div className="deco-shape shape-2">
        <img
          src="./img/shape-2.png"
          alt="art shape"
          width={55}
          className="icon scroll-anim"
        />
      </div>
      <div className="deco-shape shape-3">
        <img
          src="./img/shape-3.png"
          alt="art shape"
          width={120}
          className="icon scroll-anim"
        />
      </div>
      <div className="deco-shape shape-4">
        <img
          src="./img/shape-4.png"
          alt="art shape"
          width={30}
          className="icon scroll-anim"
        />
      </div>
      <div className="home-left scroll-anim">
        <p className="section-subtitle">Welcome To MockSparrow</p>
        <h1 className="main-heading">
          Clear your dream exam on first attempt
          <span className="underline-img">
            {" "}
            <img src="./img/banner-line.png" alt="Line" />
          </span>
        </h1>
        <p className="section-text">
          Lorem ipsum dolor sit amet consectetur adipiscing elit tristique
          facilisis, interdum euismod posuere odio placerat mauris at.
        </p>
        <div className="home-btn-group">
          <button className="btn btn-primary">
            <p className="btn-text">Explore Courses</p>
            <span className="square" />
          </button>
          <button className="btn btn-secondary">
            <p className="btn-text">Contact Us</p>
            <span className="square" />
          </button>
        </div>
      </div>
      <div className="home-right">
        <div className="img-box">
         
          <video id="transparentVideo"
        src={`./anime/Boy Giving Online Test(1).mp4`}
        className="core-features-video"
        autoPlay
        muted
        loop

      ></video>
          <img
            src="./img/banner-aliment-icon-1.png"
            alt=""
            className="icon-1 smooth-zigzag-anim-1"
            width={240}
          />
          <img
            src="./img/banner-aliment-icon-2.png"
            alt=""
            className="icon-2 smooth-zigzag-anim-2"
            width={240}
          />
          <img
            src="./img/banner-aliment-icon-1.png"
            alt=""
            className="icon-3 smooth-zigzag-anim-3"
            width={195}
          />
          <img
            src="./img/banner-aliment-icon-4.png"
            alt=""
            className="icon-4 drop-anim"
          />
        </div>
      </div>
    </section>
    <section className="category" data-aos="fade-up">
      <p className="section-subtitle">Course Category</p>
      <h2 className="section-title">Explore Popular Courses</h2>
      <ul className="course-item-group">
        <li className="course-category-item">
          <div className="wrapper">
            <img
              src="./img/course-category-icon-1.png"
              alt="category icon"
              className="category-icon default"
            />
            <img
              src="./img/course-category-icon-1-w.png"
              alt="category icon white"
              className="category-icon hover"
            />
          </div>
          <div className="course-category-content">
            <h3 className="category-title">
              <a href="#">UPSC</a>
            </h3>
            <p className="category-subtitle">testingnkn </p>
          </div>
        </li>
        <li className="course-category-item">
          <div className="wrapper">
            <img
              src="./img/course-category-icon-2.png"
              alt="category icon"
              className="category-icon default"
            />
            <img
              src="./img/course-category-icon-2-w.png"
              alt="category icon white"
              className="category-icon hover"
            />
          </div>
          <div className="course-category-content">
            <h3 className="category-title">
              <a href="#">JEE</a>
            </h3>
            <p className="category-subtitle">Testing </p>
          </div>
        </li>
        <li className="course-category-item">
          <div className="wrapper">
            <img
              src="./img/course-category-icon-3.png"
              alt="category icon"
              className="category-icon default"
            />
            <img
              src="./img/course-category-icon-3-w.png"
              alt="category icon white"
              className="category-icon hover"
            />
          </div>
          <div className="course-category-content">
            <h3 className="category-title">
              <a href="#">NEET</a>
            </h3>
            <p className="category-subtitle">vffevrfw</p>
          </div>
        </li>
        <li className="course-category-item">
          <div className="wrapper">
            <img
              src="./img/course-category-icon-4.png"
              alt="category icon"
              className="category-icon default"
            />
            <img
              src="./img/course-category-icon-4-w.png"
              alt="category icon white"
              className="category-icon hover"
            />
          </div>
          <div className="course-category-content">
            <h3 className="category-title">
              <a href="#">APSC</a>
            </h3>
            <p className="category-subtitle">Learn New Skills</p>
          </div>
        </li>
        <li className="course-category-item">
          <div className="wrapper">
            <img
              src="./img/course-category-icon-5.png"
              alt="category icon"
              className="category-icon default"
            />
            <img
              src="./img/course-category-icon-5-w.png"
              alt="category icon white"
              className="category-icon hover"
            />
          </div>
          <div className="course-category-content">
            <h3 className="category-title">
              <a href="#">SSC</a>
            </h3>
            <p className="category-subtitle">Imeceves</p>
          </div>
        </li>
        <li className="course-category-item">
          <div className="wrapper">
            <img
              src="./img/course-category-icon-6.png"
              alt="category icon"
              className="category-icon default"
            />
            <img
              src="./img/course-category-icon-6-w.png"
              alt="category icon white"
              className="category-icon hover"
            />
          </div>
          <div className="course-category-content">
            <h3 className="category-title">
              <a href="#">Others</a>
            </h3>
            <p className="category-subtitle">testing</p>
          </div>
        </li>
      </ul>
    </section>
    {/*----------------- ABOUT SECTION -----------------*/}
    <section className="about" id="about" data-aos="fade-up">
      <div className="about-left">
        <div className="img-box">
          
        <video
        src={`./anime/Online Exam(3).mp4`}
        className="core-features-video"
        autoPlay
        muted
        loop
        
      >
            Your browser does not support the video tag.
          </video>
          {/* <img
            src="./img/banner-aliment-icon-1.png"
            alt=""
            className="icon-1 smooth-zigzag-anim-1"
            width={250}
          />
          <img
            src="./img/banner-aliment-icon-3.png"
            alt=""
            className="icon-2 smooth-zigzag-anim-3"
            width={195}
          /> */}
        </div>
      </div>
      <div className="about-right">
        <p className="section-subtitle">About Us</p>
        <h2 className="section-title">We Have Best Online Education</h2>
        <p className="section-text">
          Lorem ipsum dolor sit amet consectetur adipiscing elit, faucibus
          montes magnis integer sed dis donec, odio ante ac habitasse
          scelerisque ultricies. Turpis tincidunt malesuada a ultrices convallis
          primis luctus aliquam sociis, arcu maecenas penatibus praesent duis
          habitasse hendrerit lectus.
        </p>
        <ul className="about-ul">
          <li>
            <ion-icon name="checkmark-circle-outline" />
            <p>Lorem ipsum dolor sit amet consectetur adipiscing.</p>
          </li>
          <li>
            <ion-icon name="checkmark-circle-outline" />
            <p>Lorem ipsum dolor sit amet consectetur adipiscing.</p>
          </li>
          <li>
            <ion-icon name="checkmark-circle-outline" />
            <p>Lorem ipsum dolor sit amet consectetur adipiscing.</p>
          </li>
        </ul>
        <button className="btn btn-primary">
          <p className="btn-text">Explore More</p>
          <span className="square" />
        </button>
      </div>
    </section>
    {/*----------------- FEATURES SECTION -----------------*/}
    <section className="features" data-aos="fade-up">
      <div className="features-left">
        <p className="section-subtitle">Core Features</p>
        <h2 className="section-title">See What Our Mission Are</h2>
        <ul>
          <li className="features-item">
            <div className="item-icon-box blue">
              <img src="./img/feature-icon-1.png" alt="feature icon" />
            </div>
            <div className="wrapper">
              <h3 className="item-title">Student Life</h3>
              <p className="item-text">
                Lorem ipsum dolor sit amet consectetur adipiscing elit,
                fermentum ornare vulputate himenaeos rutrum montes nibh
              </p>
            </div>
          </li>
          <li className="features-item">
            <div className="item-icon-box pink">
              <img src="./img/feature-icon-2.png" alt="feature icon" />
            </div>
            <div className="wrapper">
              <h3 className="item-title">Best Online Class</h3>
              <p className="item-text">
                Lorem ipsum dolor sit amet consectetur adipiscing elit,
                fermentum ornare vulputate himenaeos rutrum montes nibh
              </p>
            </div>
          </li>
          <li className="features-item">
            <div className="item-icon-box purple">
              <img src="./img/feature-icon-3.png" alt="feature icon" />
            </div>
            <div className="wrapper">
              <h3 className="item-title">24/7 Program</h3>
              <p className="item-text">
                Lorem ipsum dolor sit amet consectetur adipiscing elit,
                fermentum ornare vulputate himenaeos rutrum montes nibh
              </p>
            </div>
          </li>
        </ul>
      </div>
      
      <video
        src={`./anime/Online Test.mp4`}
        className="core-features-video"
        autoPlay
        muted
        loop
      >
        Your browser does not support the video tag.
      </video>
    </section>
    {/*----------------- FAQ SECTION -----------------*/}
    {/* FAQ 2 - Bootstrap Brain Component */}
    <div className="wrapper" data-aos="fade-up">
      <p>The Begninning of a New Asset class</p>
      <h1>Frequently Asked Questions</h1>
      <div className="faq">
        <button className="accordion">
          TEST?
          <i className="fa-solid fa-chevron-down" />
        </button>
        <div className="pannel">
          <p>
            Krushi is a Public Charitable Trust designed to carry out farming on
            extensive scale Natural &amp; Sustainable methods.
          </p>
        </div>
      </div>
      <div className="faq">
        <button className="accordion">
          TEST?
          <i className="fa-solid fa-chevron-down" />
        </button>
        <div className="pannel">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
            saepe molestiae distinctio asperiores cupiditate consequuntur dolor
            ullam, iure eligendi harum eaque hic corporis debitis porro
            consectetur voluptate rem officiis architecto.
          </p>
        </div>
      </div>
      <div className="faq">
        <button className="accordion">
          TEST?
          <i className="fa-solid fa-chevron-down" />
        </button>
        <div className="pannel">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
            saepe molestiae distinctio asperiores cupiditate consequuntur dolor
            ullam, iure eligendi harum eaque hic corporis debitis porro
            consectetur voluptate rem officiis architecto.
          </p>
        </div>
      </div>
      <div className="faq">
        <button className="accordion">
          TEST?
          <i className="fa-solid fa-chevron-down" />
        </button>
        <div className="pannel">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
            saepe molestiae distinctio asperiores cupiditate consequuntur dolor
            ullam, iure eligendi harum eaque hic corporis debitis porro
            consectetur voluptate rem officiis architecto.
          </p>
        </div>
      </div>
      <div className="faq">
        <button className="accordion">
          TEST?
          <i className="fa-solid fa-chevron-down" />
        </button>
        <div className="pannel">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
            saepe molestiae distinctio asperiores cupiditate consequuntur dolor
            ullam, iure eligendi harum eaque hic corporis debitis porro
            consectetur voluptate rem officiis architecto.
          </p>
        </div>
      </div>
      <div className="faq">
        <button className="accordion">
          TEST?
          <i className="fa-solid fa-chevron-down" />
        </button>
        <div className="pannel">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
            saepe molestiae distinctio asperiores cupiditate consequuntur dolor
            ullam, iure eligendi harum eaque hic corporis debitis porro
            consectetur voluptate rem officiis architecto.
          </p>
        </div>
      </div>
    </div>
    {/*----------------- TESTIMONIALS -----------------*/}
    <section className="testimonials" data-aos="fade-up">
      <div className="testimonials-left">
        <p className="section-subtitle">Testimonial</p>
        <h2 className="section-title">What MockSparrow CEO Says:</h2>
        <p className="section-text">
          Lorem ipsum dolor sit amet consectetur adipiscing elit fringilla
          feugiat platea rhoncus ut aliquam luctus, tempor massa hac ante leo
          vestibulum nibh cursus suscipit mauris cum class.
        </p>
      </div>
      <div className="testimonials-right">
        <div className="testimonials-card">
          <img src="./img/quote.png" alt="quote icon" className="quote-img" />
          <p className="testimonials-text">
            "Lorem ipsum dolor sit amet consectetur adipiscing elit fringilla
            feugiat platea rhoncus ut aliquam luctus, tempor massa hac ante leo
            vestibulum nibh cursus suscipit mauris cum class".
          </p>
          <div className="testimonials-client">
            <div className="client-img-box">
              <img src="./img/client.jpg" alt="client" />
            </div>
            <div className="client-detail">
              <h4 className="client-name">Muthiah</h4>
              <p className="client-title">CEO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="contact" data-aos="fade-up">
      <div className="contact-card" id="contact">
        <img
          src="./img/cta-bg-img.png"
          alt="shape"
          className="contact-card-bg"
        />
        <h2>Start Your Best Online Classes WIth Us</h2>
        <button className="btn btn-primary">
          <p className="btn-text">Contact Us</p>
          <span className="square" />
        </button>
      </div>
    </section>
    {/*----------------- FOOTER -----------------*/}
    <footer>
      <div className="footer-grid" data-aos="fade-up">
        <div className="grid-item">
          <div className="footer-logo">
            <img src="./logo.png" alt="Mock-Sparrow" />
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
          <h4 className="item-heading">Mail-us</h4>
          <div className="wrapper">
            <input type="text" name="subscribe" placeholder="Email Address" />
            <button className="send-btn">
              <ion-icon name="paper-plane" />
            </button>
          </div>
        </div>
      </div>
      <p className="copyright">
        Copyright © 2022-23 Mock-Sparrow. All rights reserved.
      </p>
    </footer>
  </main>
</>

  )
}

export default Home
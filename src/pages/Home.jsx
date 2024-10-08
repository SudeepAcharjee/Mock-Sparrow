import React from 'react'
import '../Assets/css/style.css'
import '../Assets/css/style.css'
import '../Assets/css/variable.css'
import '../Assets/css/media_queries.css'
import '../Assets/css/animation.css'
import FAQSection from '../components/FAQSection'
import Review from '../components/reviews/Review'
import Course from '../components/course/Course'
// Import images
import shape1 from '../Assets/img/shape-1.png';
import shape2 from '../Assets/img/shape-2.png';
import shape3 from '../Assets/img/shape-3.png';
import shape4 from '../Assets/img/shape-4.png';
import bannerLine from '../Assets/img/banner-line.png';
import bannerAlimentIcon1 from '../Assets/img/banner-aliment-icon-1.png';
import bannerAlimentIcon2 from '../Assets/img/banner-aliment-icon-2.png';
import bannerAlimentIcon3 from '../Assets/img/banner-aliment-icon-3.png';
import bannerAlimentIcon4 from '../Assets/img/banner-aliment-icon-4.png';
import featureIcon1 from '../Assets/img/feature-icon-1.png';
import featureIcon2 from '../Assets/img/feature-icon-2.png';
import featureIcon3 from '../Assets/img/feature-icon-3.png';
import quoteImg from '../Assets/img/quote.png';
import clientImg from '../Assets/img/client.jpg';
import ctaBgImg from '../Assets/img/cta-bg-img.png';



import courseCategoryIcon1 from '../Assets/img/course-category-icon-1.png';
import courseCategoryIcon1w from '../Assets/img/course-category-icon-1-w.png';
import courseCategoryIcon2 from '../Assets/img/course-category-icon-2.png';
import courseCategoryIcon2w from '../Assets/img/course-category-icon-2-w.png';
import courseCategoryIcon3 from '../Assets/img/course-category-icon-3.png';
import courseCategoryIcon3w from '../Assets/img/course-category-icon-3-w.png';
import courseCategoryIcon4 from '../Assets/img/course-category-icon-4.png';
import courseCategoryIcon4w from '../Assets/img/course-category-icon-4-w.png';
import courseCategoryIcon5 from '../Assets/img/course-category-icon-5.png';
import courseCategoryIcon5w from '../Assets/img/course-category-icon-5-w.png';
import courseCategoryIcon6 from '../Assets/img/course-category-icon-6.png';
import courseCategoryIcon6w from '../Assets/img/course-category-icon-6-w.png';


// Import videos
import boyOnlineTestVideo from '../Assets/anime/Boy Giving Online Test(1).mp4';
import onlineExamVideo from '../Assets/anime/Online Exam(3).mp4';
import onlineTestVideo from '../Assets/anime/Online Test.mp4';



function Home() {
  return (
    <>


  <main className="new" data-aos="fade-up">
    {/*----------------- HOME SECTION -----------------*/}
    <section className="home" id="home" data-aos="fade-up">
      <div className="deco-shape shape-1" data-aos="fade-up">
        <img
          src={shape1}
          alt="art shape"
          width={78}
          className="icon scroll-anim"
        />
      </div>
      <div className="deco-shape shape-2">
        <img
          src={shape2}
          alt="art shape"
          width={55}
          className="icon scroll-anim"
        />
      </div>
      <div className="deco-shape shape-3">
        <img
          src={shape3}
          alt="art shape"
          width={120}
          className="icon scroll-anim"
        />
      </div>
      <div className="deco-shape shape-4">
        <img
          src={shape4}
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
            <img src={bannerLine} alt="Line" />
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
        src={boyOnlineTestVideo}
        className="core-features-video"
        autoPlay
        muted
        loop

      ></video>
          {/* <img
            src={bannerAlimentIcon1}
            alt=""
            className="icon-1 smooth-zigzag-anim-1"
            width={240}
          />
          <img
            src={bannerAlimentIcon2}
            alt=""
            className="icon-2 smooth-zigzag-anim-2"
            width={240}
          />
          <img
            src={bannerAlimentIcon3}
            alt=""
            className="icon-3 smooth-zigzag-anim-3"
            width={195}
          /> */}
          <img
            src={bannerAlimentIcon4}
            alt=""
            className="icon-4 drop-anim"
          />
        </div>
      </div>
    </section>

    {/* -----------------------Course Category---------------------- */}
    <section className="category" data-aos="fade-up">
      <p className="section-subtitle">Course Category</p>
      <h2 className="section-title">Explore Popular Courses</h2>
      <Course/>
      {/* <ul className="course-item-group">
        <Course/>
         <li className="course-category-item">
          <Course/>
        </li>  */}
        {/* <li className="course-category-item">
          <div className="wrapper">
            <img
              src={courseCategoryIcon2}
              alt="category icon"
              className="category-icon default"
            />
            <img
             src={courseCategoryIcon2w}
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
              src={courseCategoryIcon2}
              alt="category icon"
              className="category-icon default"
            />
            <img
              src={courseCategoryIcon2w}
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
              src={courseCategoryIcon2}
              alt="category icon"
              className="category-icon default"
            />
            <img
              src={courseCategoryIcon2w}
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
      </ul>*/}
    </section>


    {/*----------------- ABOUT SECTION -----------------*/}
    <section className="about" id="about" data-aos="fade-up">
      <div className="about-left">
        <div className="img-box">
          
        <video
        src={onlineExamVideo}
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
              <img src={featureIcon1} alt="feature icon" />
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
              <img src={featureIcon2} alt="feature icon" />
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
              <img src={featureIcon3} alt="feature icon" />
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
        src={onlineTestVideo}
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
      
      {/* code here */}
      <FAQSection />
      </div>
   



    {/*----------------- TESTIMONIALS -----------------*/}

      {/* <div className="testimonials-left">
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
          <img src={quoteImg} alt="quote icon" className="quote-img" />
          <p className="testimonials-text">
            "Lorem ipsum dolor sit amet consectetur adipiscing elit fringilla
            feugiat platea rhoncus ut aliquam luctus, tempor massa hac ante leo
            vestibulum nibh cursus suscipit mauris cum class".
          </p>
          <div className="testimonials-client">
            <div className="client-img-box">
              <img src={clientImg} alt="client" />
            </div>
            <div className="client-detail">
              <h4 className="client-name">Muthiah</h4>
              <p className="client-title">CEO</p>
            </div>
          </div>
        </div>
      </div> */}
            <Review />








  </main>
</>

  )
}

export default Home
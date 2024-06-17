import React from 'react'
import '../pages/about.module.css'
// import heroBanner from '../Assets/img/hero-banner.png';
import onlineTestVideo from '../Assets/anime/Online Test.mp4';

function About() {
  return (
    <main>
  <article>
    {/* 
  - #HERO
*/}
 <section className="hero" id="home">
      {/* <div className="container1"> */}
        <div className="hero-content">
          <p className="hero-subtitle">We Are Product Designer From UK</p>
          <h2 className="h2 hero-title">
            We Design Interfaces That Users Love
          </h2>
          <p className="hero-text">
            Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
            Pellentesque vitae ante at elit fringilla ac at purus.
          </p>
          <button className="btn">Learn More</button>
        </div>
        <figure className="hero-banner">
        <video id="transparentVideo"
        src={onlineTestVideo}
        className="core-features-video"
        autoPlay
        muted
        loop></video>
        </figure>
      {/* </div> */}
    </section>

    {/* 
  - #ABOUT
*/}
 <section className="section about" id="about">
      <div className="container">
        <figure className="about-banner">
          <video
            src={onlineTestVideo}
            loading="lazy"
            alt="about banner"
            className="w-100 banner-animation"
            autoPlay
            muted
            loop
          ></video>
        </figure>
        <div className="about-content">
        <h2 className="h2 section-title underline">Why Our Agency</h2>
        <br/> <br/><br/>
        <p className="about-text">
            In dictum aliquam turpis lacinia iaculis. Fusce vel malesuada magna.
            Nulla vel maximus risus. Donec volutpat metus lacinia risus
            accumsan, ac bibendum libero efficitur. Pellentesque nec nisi sit
            amet magna tempus hendrerit ut a odio.
          </p>
          <p className="about-text">
            Praesent rhoncus commodo tortor, id pulvinar nisl blandit at. Nulla
            facilisi. Quisque turpis ante, vehicula condimentum arcu.
          </p>
          <ul className="stats-list">
            <li className="stats-card">
              <p className="h3 stats-title">9875</p>
              <p className="stats-text">Satisfied Clients</p>
            </li>
            <li className="stats-card">
              <p className="h3 stats-title">7894</p>
              <p className="stats-text">Project Lunched</p>
            </li>
            <li className="stats-card">
              <p className="h3 stats-title">65</p>
              <p className="stats-text">Years Completed</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
    {/* 
  - #SERVICE
*/}
    <section className="section service" id="services">
      <div className="container">
        <h2 className="h2 section-title underline">Our Speciallization</h2>
        <ul className="service-list">
          <li>
            <div className="service-card">
              <div className="card-icon">
                <ion-icon name="telescope-outline" />
              </div>
              <h3 className="h3 title">Strategy &amp; Research</h3>
              <p className="text">
                Mauris ut felis malesuada eros varius tristique a at orci. Nulla
                vulputate, leo sit amet rhoncus suscipit, enim ex venenatis
                ipsum, et porttitor.
              </p>
              <button className="card-btn" aria-label="Show More">
                <ion-icon name="chevron-forward-outline" />
              </button>
            </div>
          </li>
          <li>
            <div className="service-card">
              <div className="card-icon">
                <ion-icon name="desktop-outline" />
              </div>
              <h3 className="h3 title">Web Development</h3>
              <p className="text">
                Mauris ut felis malesuada eros varius tristique a at orci. Nulla
                vulputate, leo sit amet rhoncus suscipit, enim ex venenatis
                ipsum, et porttitor.
              </p>
              <button className="card-btn" aria-label="Show More">
                <ion-icon name="chevron-forward-outline" />
              </button>
            </div>
          </li>
          <li>
            <div className="service-card">
              <div className="card-icon">
                <ion-icon name="globe-outline" />
              </div>
              <h3 className="h3 title">Web Solution</h3>
              <p className="text">
                Mauris ut felis malesuada eros varius tristique a at orci. Nulla
                vulputate, leo sit amet rhoncus suscipit, enim ex venenatis
                ipsum, et porttitor.
              </p>
              <button className="card-btn" aria-label="Show More">
                <ion-icon name="chevron-forward-outline" />
              </button>
            </div>
          </li>
        </ul>
      </div>
    </section>
    {/* 
  - #FEATURES
*/}
    <section className="section features" id="features">
     
        <h2 className="h2 section-title underline">Our Features</h2>
        <ul className="features-list">
          <li>
            <div className="features-card">
              <div className="icon">
                <ion-icon name="bulb-outline" />
              </div>
              <div className="content">
                <h3 className="h3 title">Idea &amp; Analysis</h3>
                <p className="text">
                  Praesent tincidunt congue est ut hendrerit. Pellentesque et
                  eros sit amet ipsum venenatis.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="features-card">
              <div className="icon">
                <ion-icon name="color-palette-outline" />
              </div>
              <div className="content">
                <h3 className="h3 title">Designing</h3>
                <p className="text">
                  Praesent tincidunt congue est ut hendrerit. Pellentesque et
                  eros sit amet ipsum venenatis.
                </p>
              </div>
            </div>
          </li>
        </ul>
        <figure className="features-banner">
          <img
            src="./assets/images/feautres-banner.png"
            width={369}
            height={318}
            loading="lazy"
            alt="Features Banner"
            className="w-100 banner-animation"
          />
        </figure>
        <ul className="features-list">
          <li>
            <div className="features-card">
              <div className="icon">
                <ion-icon name="code-slash-outline" />
              </div>
              <div className="content">
                <h3 className="h3 title">Development</h3>
                <p className="text">
                  Praesent tincidunt congue est ut hendrerit. Pellentesque et
                  eros sit amet ipsum venenatis.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="features-card">
              <div className="icon">
                <ion-icon name="rocket-outline" />
              </div>
              <div className="content">
                <h3 className="h3 title">Testing &amp; Lunching</h3>
                <p className="text">
                  Praesent tincidunt congue est ut hendrerit. Pellentesque et
                  eros sit amet ipsum venenatis.
                </p>
              </div>
            </div>
          </li>
        </ul>

    </section>
    {/* 
  - #BLOG
*/}
  </article>
</main>

  )
}

export default About
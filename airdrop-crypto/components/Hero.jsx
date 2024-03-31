import React from "react";

const Hero = () => {
  return (
    <section
      class="banner-area banner-bg"
      data-background="assets/img/banner/banner_bg.png"
    >
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="banner-content text-center">
              <h2 class="title">
                Discover the Next Big Opportunity: <br />
                <span>Our ICO is Live</span>
              </h2>
              <p>
                A new smart block chain based marketplace for trading digital
                <br />
                goods & assets according.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="banner-scroll-down">
        <a href="#contribution" class="section-link">
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>
      <div class="banner-shape-wrap">
        <img
          src="assets/img/banner/banner_shape01.png"
          alt=""
          class="leftToRight"
        />
        <img
          src="assets/img/banner/banner_shape02.png"
          alt=""
          class="alltuchtopdown"
        />
      </div>
    </section>
  );
};

export default Hero;

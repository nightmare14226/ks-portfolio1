import React from "react";

/* Images */
import HeroImage from "../../assets/aboutHero.png";

const AboutHero = () => {
  return (
    <section className="about_hero">
      <div className="container_sm">
        <div className="about_hero--wrapper">
          <div className="about_hero--content">
            <div className="wrapper">
              <p className="intro">
                I am <span className="ht_text">Kazuki Suzuki</span>, 30
                years old creative front-end web developer with 7+ years
                experience. I am here to help
              </p>
              <h1 className="">
                Turn your <span className="ht_text">idea into life.</span>{" "}
              </h1>
              <p className="description">
                Since 2017, I have enjoyed learning digital design, web
                development, and content creation to deliver implicit and
                reachable information.
              </p>
            </div>
          </div>

          <div className="about_hero--image">
            <img src={HeroImage} alt="kazuki suzuki" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;

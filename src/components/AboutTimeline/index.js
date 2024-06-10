import React from "react";

const AboutTimeline = () => {
  return (
    <section className="about-timeline">
      <h1 className="title_text center_text">My Journey</h1>
      <div className="container">
        <div>
          <div className="about-timeline--content">
            <div className="item">
              <div className="point">
                <span></span>
              </div>

              <div className="description">
                <h1 className="ht_text">2017-2020</h1>
                <p>
                Frontend Developer in Sumitomo Mitsui
                </p>
                <ul>
                  <li>
                  Experience in Manufacturing (2 years), Insurance (over 1 year), and Healthcare (2 years).
                  </li>
                  <li>
                  Built up a public travel booking website using React, Material-UI, Bootstrap, jQuery and server-side rendering (SSR)
                  </li>
                </ul>
              </div>
            </div>

            <div className="item">
              <div className="point">
                <span></span>
              </div>

              <div className="description">
                <h1 className="ht_text">2020-2022</h1>
                <p>
                Frontend Developer in Gengo
                </p>
                <ul>
                  <li>
                  Revamped the sentiment analysis interface using Chakra UI
                  </li>
                  <li>
                  Expanded the copywriting and quality assessment platform by developing and integrating 13 new functionalities
                  </li>
                  <li>
                  Integrated TypeScript into the existing front end codebase
                  </li>
                </ul>
              </div>
            </div>

            <div className="item">
              <div className="point">
                <span></span>
              </div>

              <div className="description">
                <h1 className="ht_text">2022-2023</h1>
                <p>
                  Frontend Developer in TMC(Remote)
                </p>
                <ul>
                  <li>
                  Designed and implemented the company website, utilizing Nuxt.js and Tailwind CSS
                  </li>
                  <li>Enhanced website SEO through advanced optimization techniques</li>
                  <li>Collaborated with backend and AI developers to integrate a chatbot</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTimeline;

import React from "react";
import {
  Github,
  Linkedin,
  Codepen,
  Gmail,
} from "@icons-pack/react-simple-icons";
import ReactMarkdown from "react-markdown";

const ReachMe = () => {
  return (
    <>
      <div className="reach_me">
        <h1>Reach me via</h1>

        <div className="icon_banner">
          <a href="https://github.com/dreamjet31" target="_blank" rel="noreferrer">
            <Github xlinkTitle="true" />
          </a>
          <a href="mailto:kazukisuzuki37@gmail.com">
            <Gmail xlinkTitle="true" />
          </a>
        </div>

      </div>
    </>
  );
};

export default ReachMe;

import React from "react";

import logo from "../images/logotype.svg";

function Footer({ navigationFooter }) {
  return (
    <footer className="colophon">
      <div className="container full-height">
        <div className="logo">
          <img src={logo} alt="brand-logo" />
        </div>
        <ul className="navigation container flex-row flex-space width-auto">
          {navigationFooter.map((item, i) => {
            return <li key={`${item}__${i}`}>{item}</li>;
          })}
        </ul>
        <div className="privacy">
          <p>LLC "Organization" 2022. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

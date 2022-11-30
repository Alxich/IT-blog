import React from "react";
import { NavLink } from "react-router-dom";

function Footer({ localStoreStage }) {
  const navigationFooter = localStoreStage.navigation.footer;
  const images = localStoreStage.images;
  const logo = images.logo;
  const corporationRights = localStoreStage.texts.corporationRights;

  return (
    <footer className="colophon">
      <div className="container full-height">
        <div className="logo">
          <img src={logo} alt="brand-logo" referrerPolicy="no-referrer" />
        </div>
        <ul className="navigation container flex-row flex-space width-auto">
          {navigationFooter.map((item, i) => {
            return (
              <li key={`${item}__${i}`}>
                <NavLink
                  activeclassname="active"
                  to={item.toLowerCase().replace(" ", "")}
                >
                  {item}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <div className="privacy">
          <p>{corporationRights}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

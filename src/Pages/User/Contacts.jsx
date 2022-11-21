import React from "react";

import iconPhone from "../../images/icons/phone.svg";
import send from "../../images/icons/send-ico.svg";
import iconMap from "../../images/icons/map.svg";
import facebook from "../../images/socials/facebook.svg";
import instagram from "../../images/socials/instagram.svg";
import twitter from "../../images/socials/twitter.svg";

function Contacts() {
  return (
    <div id="contacts">
      <div className="container flex-row flex-space">
        <div className="contacts-info">
          <div className="title">
            <h3>Contact information</h3>
          </div>
          <ul className="info">
            <li>
              <span>+44 (797) 5777666</span>
              <img src={iconPhone} alt="phone-icon" />
            </li>
            <li>
              <span>Mrs Smith 71 Cherry Court SOUTHAMPTON</span>
              <img src={iconMap} alt="map-icon" />
            </li>
          </ul>
          <ul className="socials">
            <li>
              <img src={facebook} alt="facebook-social" />
            </li>
            <li>
              <img src={instagram} alt="instagram-social" />
            </li>
            <li>
              <img src={twitter} alt="twitter-social" />
            </li>
          </ul>
        </div>
        <div className="contacts-form">
          <div className="title">
            <h3>Write to us</h3>
          </div>
          <form>
            <input type="Name" name="name" placeholder="Your name" />
            <input type="text" name="name" placeholder="Phone or E-mail" />
            <textarea placeholder="Message..." />
            <button className="button send">
              <span>Subscribe</span>
              <img src={send} alt="arrow-send" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contacts;

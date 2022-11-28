import React from "react";

function Contacts({ images }) {
  const iconPhone = images.icons.phone;
  const send = images.icons.send;
  const iconMap = images.icons.map;
  const facebook = images.socials.facebook;
  const instagram = images.socials.instagram;
  const twitter = images.socials.twitter;

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
              <img
                src={iconPhone}
                alt="phone-icon"
                referrerPolicy="no-referrer"
              />
            </li>
            <li>
              <span>Mrs Smith 71 Cherry Court SOUTHAMPTON</span>
              <img src={iconMap} alt="map-icon" referrerPolicy="no-referrer" />
            </li>
          </ul>
          <ul className="socials">
            <li>
              <img
                src={facebook}
                alt="facebook-social"
                referrerPolicy="no-referrer"
              />
            </li>
            <li>
              <img
                src={instagram}
                alt="instagram-social"
                referrerPolicy="no-referrer"
              />
            </li>
            <li>
              <img
                src={twitter}
                alt="twitter-social"
                referrerPolicy="no-referrer"
              />
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
              <img src={send} alt="arrow-send" referrerPolicy="no-referrer" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contacts;

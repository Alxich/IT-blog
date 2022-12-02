import React from "react";

function Contacts({ images, localStoreStage, changeUrl }) {
  const iconPhone = images.icons.phone;
  const send = images.icons.send;
  const iconMap = images.icons.map;
  const facebook = images.socials.facebook;
  const instagram = images.socials.instagram;
  const twitter = images.socials.twitter;

  const { title, phone, address, socials, form } =
    localStoreStage.texts.contacts;

  changeUrl("Contact us");

  return (
    <div id="contacts">
      <div className="container flex-row flex-space">
        <div className="contacts-info">
          <div className="title">
            <h3>{title}</h3>
          </div>
          <ul className="info">
            <li>
              <span>{phone}</span>
              <img
                src={iconPhone}
                alt="phone-icon"
                referrerPolicy="no-referrer"
              />
            </li>
            <li>
              <span>{address}</span>
              <img src={iconMap} alt="map-icon" referrerPolicy="no-referrer" />
            </li>
          </ul>
          <ul className="socials">
            <li>
              <a href={socials.facebook}>
                <img
                  src={facebook}
                  alt="facebook-social"
                  referrerPolicy="no-referrer"
                />
              </a>
            </li>
            <li>
              <a href={socials.instagram}>
                <img
                  src={instagram}
                  alt="instagram-social"
                  referrerPolicy="no-referrer"
                />
              </a>
            </li>
            <li>
              <a href={socials.twitter}>
                <img
                  src={twitter}
                  alt="twitter-social"
                  referrerPolicy="no-referrer"
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="contacts-form">
          <div className="title">
            <h3>{form.title}</h3>
          </div>
          <form>
            <input type="Name" name="name" placeholder={form.inputs.name} />
            <input
              type="text"
              name="name"
              placeholder={form.inputs.phoneEmail}
            />
            <textarea placeholder={form.inputs.message} />
            <button className="button send">
              <span>{form.inputs.button}</span>
              <img src={send} alt="arrow-send" referrerPolicy="no-referrer" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contacts;

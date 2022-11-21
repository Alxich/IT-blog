import React from "react";
import classNames from "classnames";

import UserInterface from "./interfaces/User";

import logo from "./images/logotype.svg";
import phone from "./images/icons/phone.svg";
import userLogo from "./images/userlogo.png";
import AdminInterface from "./interfaces/Admin";

function App() {
  const [menuOpen, setMenuOpen] = React.useState();

  const handleChangeMenuStatus = (menuOpen) => {
    menuOpen ? setMenuOpen(false) : setMenuOpen(true);
  };

  const navigation = ["Home", "About us", "Contacts", "Search"];
  const navigationFooter = ["About us", "Gallery", "News", "Contacts"];

  const returnAllNavigation = () => {
    const navigationFooterCopy = [...navigationFooter];
    const navigationCopy = [...navigation];

    // eslint-disable-next-line array-callback-return
    navigationFooterCopy.map((item, i) => {
      const index = navigationCopy.indexOf(item);
      if (index !== -1) {
        navigationCopy.splice(index, 1);
      }

      // eslint-disable-next-line array-callback-return
      navigationCopy.map((item, i) => {
        const index = navigationFooterCopy.indexOf(item);
        if (index !== -1) {
          return navigationFooterCopy.splice(index, 1);
        }
      });
    });

    const finishArray = navigationCopy.concat(navigationFooterCopy);

    return finishArray;
  };

  const allNavigation = returnAllNavigation();

  return (
    <div className="App">
      <header
        className={classNames("masthead", {
          active: menuOpen,
        })}
      >
        <div className="container flex-row flex-space">
          <div className="logo">
            <img src={logo} alt="brand-logo" />
          </div>
          <div className="actions-nav container flex-row flex-space width-auto to-right">
            <ul className="navigation container flex-row flex-space width-auto">
              {navigation.map((item, i) => {
                return <li key={`${item}__${i}`}>{item}</li>;
              })}
            </ul>
            <div className="button phone-btn">
              <img src={phone} alt="phone-btn-ico" />
              <span>
                +44 {"("}987{")"} 887-87
              </span>
            </div>
            <div className="user-logo">
              <img src={userLogo} alt="userIconLogo" />
              <span className="case"></span>
            </div>
            <div id="menu_button">
              <input
                type="checkbox"
                id="menu_checkbox"
                onClick={() => handleChangeMenuStatus(menuOpen)}
              />
              <label htmlFor="menu_checkbox" id="menu_label">
                <div id="menu_text_bar"></div>
              </label>
            </div>
          </div>
        </div>
        <div className="container flex-center full-width mobile">
          <ul className="navigation container flex-center width-auto">
            {allNavigation.map((item, i) => {
              return <li key={`${item}__${i}`}>{item}</li>;
            })}
          </ul>
        </div>
      </header>
      <main className="wrapper">
        <UserInterface />
        {/* <AdminInterface /> */}
      </main>
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
    </div>
  );
}

export default App;

import React from "react";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

import logo from "../images/logotype.svg";
import phone from "../images/icons/phone.svg";
import userLogo from "../images/userlogo.png";

function Header({ menuOpen, setMenuOpen, navigationFooter, navigation }) {
  const handleChangeMenuStatus = (menuOpen) => {
    menuOpen ? setMenuOpen(false) : setMenuOpen(true);
  };

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
    <header
      className={classNames("masthead", {
        active: menuOpen,
      })}
    >
      <div className="container flex-row flex-space">
        <NavLink activeclassname="active" to="/" className="logo">
          <img src={logo} alt="brand-logo" />
        </NavLink>
        <div className="actions-nav container flex-row flex-space width-auto to-right">
          <ul className="navigation container flex-row flex-space width-auto">
            {navigation.map((item, i) => {
              return (
                <li key={`${item}__${i}`}>
                  <NavLink
                    activeclassname="active"
                    to={
                      item === "Home"
                        ? "/"
                        : item.toLowerCase().replace(" ", "")
                    }
                  >
                    {item}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <div className="button phone-btn">
            <img src={phone} alt="phone-btn-ico" />
            <span>
              +44 {"("}987{")"} 887-87
            </span>
          </div>
          <NavLink activeclassname="active" to="/admin" className="user-logo">
            <img src={userLogo} alt="userIconLogo" />
            <span className="case"></span>
          </NavLink>
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
      </div>
    </header>
  );
}

export default Header;

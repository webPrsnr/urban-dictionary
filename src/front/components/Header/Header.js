import React from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { useState } from "react";
import alphabet from "./alphabet";
import Theme from "../Theme/Theme";

const Header = () => {
  const [dropDownFlag, setDropDownFlag] = useState(false);

  const showDropDown = () => {
    setDropDownFlag(true);
  };

  const hideDropDown = () => {
    setDropDownFlag(false);
  };

  const setActive = ({ isActive }) =>
    isActive ? styles.active_link : styles.header__link;

  const dropDown = (
    <div className={styles.header__dropdown} onMouseEnter={showDropDown}>
      <ul className={styles.header__alphabet}>
        {alphabet.map((letter, index) => (
          <Link key={index} to={`/browse/${letter}`}>
            <li className={styles.alphabet__link}>{letter}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
  return (
    <>
      <header className={styles.header_outer_block}>
        <div className={styles.header_inner_block}>
          <div className={styles.header__logo}>
            <span className={styles.header__logo_title}>urb\an</span>
            <span className={styles.header__logo_subtitle}>dictionary</span>
          </div>
          <nav className={styles.header__nav}>
            <ul className={styles.header__list}>
              <li className={`${styles.header__list_el}`}>
                <NavLink className={setActive} to="/">
                  Home
                </NavLink>
              </li>
              <li
                className={styles.header__list_el}
                onMouseEnter={showDropDown}
                onMouseLeave={hideDropDown}
              >
                Browse <span className={styles.browser_link}></span>
                {dropDownFlag ? dropDown : null}
              </li>
              <li className={styles.header__list_el}>
                <NavLink className={setActive} to="/words">
                  Words
                </NavLink>
              </li>
              <li className={styles.header__list_el}>
                <Theme />
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;

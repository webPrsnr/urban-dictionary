import React from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./Header.module.scss";
import Theme from "../Theme/Theme";
import LettersDropDown from "../LettersDropDown/LettersDropDown";

const Header = () => {
  const setActive = ({ isActive }) =>
    isActive ? styles.active_link : styles.header__link;

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
              <li className={styles.header__list_el}>
                <LettersDropDown />
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

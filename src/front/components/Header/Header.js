import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <>
      <header className={styles.header_outer_block}>
        <div className={styles.header_inner_block}>
          <div className={styles.header__logo}>
            <span className={styles.header__logo_title}>urb\an</span>
            <span className={styles.header__logo_subtitle}>dictionary</span>
          </div>
          <div className={styles.header__nav}>
            <ul className={styles.header__list}>
              <li className={styles.header__list_el}>
                <Link className={styles.header__link} to="/">
                  Home
                </Link>
              </li>
              <li className={styles.header__list_el}>
                <Link className={styles.header__link} to="/browse">
                  Browse
                </Link>
              </li>
              <li className={styles.header__list_el}>
                <Link className={styles.header__link} to="/words">
                  Words
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

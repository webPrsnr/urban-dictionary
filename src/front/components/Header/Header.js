import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { useState } from "react";

const Header = () => {
  const [dropDownFlag, setDropDownFlag] = useState(false);

  const showDropDown = () => {
    setDropDownFlag(true);
  };

  const hideDropDown = () => {
    setDropDownFlag(false);
  };

  const dropDown = (
    <div className={styles.header__dropdown} onMouseEnter={showDropDown}>
      <ul className={styles.header__alphabet}>
        <li>А</li>
        <li>Б</li>
        <li>В</li>
        <li>Г</li>
        <li>Д</li>
        <li>Е</li>
        <li>Ё</li>
        <li>Ж</li>
        <li>З</li>
        <li>И</li>
        <li>Й</li>
        <li>К</li>
        <li>Л</li>
        <li>М</li>
        <li>Н</li>
        <li>О</li>
        <li>П</li>
        <li>Р</li>
        <li>С</li>
        <li>Т</li>
        <li>У</li>
        <li>Ф</li>
        <li>Х</li>
        <li>Ц</li>
        <li>Ч</li>
        <li>Ш</li>
        <li>Щ</li>
        <li>Э</li>
        <li>Ю</li>
        <li>Я</li>
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
              <li className={styles.header__list_el}>
                <Link className={styles.header__link} to="/">
                  Home
                </Link>
              </li>
              <li
                className={styles.header__list_el}
                onMouseEnter={showDropDown}
                onMouseLeave={hideDropDown}
              >
                <Link className={styles.header__link} to="/browse">
                  Browse
                </Link>
                {dropDownFlag ? dropDown : null}
              </li>
              <li className={styles.header__list_el}>
                <Link className={styles.header__link} to="/words">
                  Words
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;

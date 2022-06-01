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

  const alphabets = [
    "А",
    "Б",
    "В",
    "Г",
    "Д",
    "Е",
    "Ё",
    "Ж",
    "З",
    "И",
    "Й",
    "К",
    "Л",
    "М",
    "Н",
    "О",
    "П",
    "Р",
    "С",
    "Т",
    "У",
    "Ф",
    "Х",
    "Ц",
    "Ч",
    "Ш",
    "Щ",
    "Э",
    "Ю",
    "Я",
  ];

  const dropDown = (
    <div className={styles.header__dropdown} onMouseEnter={showDropDown}>
      <ul className={styles.header__alphabet}>
        {alphabets.map((alphabet, index) => (
          <li key={index}>{alphabet}</li>
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

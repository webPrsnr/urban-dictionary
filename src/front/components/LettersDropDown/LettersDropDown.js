import { useState } from "react";
import { Link } from "react-router-dom";
import alphabet from "../Header/alphabet";
import styles from "./LettersDropDown.module.scss";

const LettersDropDown = () => {
  const [dropDownFlag, setDropDownFlag] = useState(false);

  const switchDropDown = () => {
    setDropDownFlag(!dropDownFlag);
  };

  const dropDown = (
    <div className={styles.header__dropdown} onMouseLeave={switchDropDown}>
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
      <label onMouseEnter={switchDropDown}>Browse</label>
      <span className={styles.browser_link}></span>
      {dropDownFlag ? dropDown : null}
    </>
  );
};

export default LettersDropDown;

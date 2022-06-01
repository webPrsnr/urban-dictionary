import React from "react";
import styles from "./Home.modules.scss";

const WELCOME_WORDS = " - словарь по поиску рускоязычных сленговых слов.";
const DESCR = `Увидел в своем любимом паблике моднявое слово? Твои друзья общаются с тобой непонятными "тяночками" и "кунчиками"? Этот словарь явно для тебя.`;
const EXCPLICIT =
  "Словарь призван лишь фиксировать существующее словоупотребление, но не пропагандировать расовую, этническую или иную нетерпимость. ";
const Home = () => {
  return (
    <div className={styles.home_outer}>
      <div className={styles.home_inner}>
        <div className={styles.welcome}>
          <div className={styles.welcome__text}>
            <h1 className={styles.welcome__welcome_words}>
              <span className={styles.welcome__logo}>Urban Dictionary</span>
              {WELCOME_WORDS}
            </h1>
            <p className={styles.welcome__descr}>{DESCR}</p>
            <p className={styles.welcome__excplict}>{EXCPLICIT}</p>
          </div>
          <div className={styles.welcome__img}>
            <img src="https://placekitten.com/450/450" />
          </div>
        </div>
        <div className={styles.find}>
          <h2 className={styles.find__title}>Давай найдем...</h2>
          <form className={styles.form}>
            <input
              className={styles.search_form}
              type="text"
              placeholder="Введи слово..."
            />
            <button className={styles.search_button} type="submit">
              Найти слово
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;

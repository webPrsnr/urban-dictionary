import clsx from "clsx";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../store/themeSlice";
import styles from "./Theme.module.scss";

const Theme = ({}) => {
  const themeFlag = useSelector((state) => state.theme.flag);
  const dispatch = useDispatch();

  useEffect(() => {
    document.documentElement.dataset.theme = themeFlag ? "dark" : "light";
  }, [themeFlag]);
  const handleChange = () => {
    dispatch(toggleTheme());
  };

  return (
    <input
      type="checkbox"
      className={clsx(styles.checkbox, themeFlag ? styles.dark : styles.light)}
      onClick={handleChange}
    />
  );
};

export default Theme;

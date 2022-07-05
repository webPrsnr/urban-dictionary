import { API } from "../../api/api";
import { useForm } from "react-hook-form";
import styles from "./AddWord.module.scss";
import { useNavigate } from "react-router";
const AddWord = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onSubmit",
  });

  const updateById = async (records) => {
    const data = await API.post(`words`, records);
    if (data.status === "OK") {
      reset();
      navigate(-1);
    }
  };

  const onSubmit = (data) => {
    updateById(data);
  };
  return (
    <div>
      <div className={styles.edit}>
        <div className={styles.edit__head}>Add new word</div>
        <div className={styles.edit__info}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="wordName">Слово</label>
            <input
              className={styles.edit__input}
              id="wordName"
              type="text"
              {...register("wordName", {
                required: "Поле обязательно к заполнению",
                minLength: {
                  value: 2,
                  message: "Минимум 2 символа",
                },
              })}
            />
            <div className={styles.edit__err}>
              {errors?.wordName && <p>{errors.wordName.message}</p>}
            </div>
            <label htmlFor="wordMean">Значение</label>
            <textarea
              className={styles.edit__textarea}
              id="wordMean"
              type="text"
              {...register("wordMean", {
                required: "Поле обязательно к заполнению",
                minLength: {
                  value: 300,
                  message: "Минимум 300 символов",
                },
              })}
            />
            <div className={styles.edit__err}>
              {errors?.wordMean && <p>{errors.wordMean.message}</p>}
            </div>
            <label htmlFor="wordDescr">Описание</label>
            <textarea
              className={styles.edit__textarea}
              id="wordDescr"
              type="text"
              {...register("wordDescr", {
                required: "Поле обязательно к заполнению",
                minLength: {
                  value: 300,
                  message: "Минимум 300 символов",
                },
              })}
            />
            <div className={styles.edit__err}>
              {errors?.wordDescr && <p>{errors.wordDescr.message}</p>}
            </div>
            <input className={styles.edit__submit} type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddWord;

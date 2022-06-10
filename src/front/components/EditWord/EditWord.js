import styles from "./EditWord.module.scss";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const EditWord = ({ item }) => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      wordName: item.word_name,
      wordMean: item.mean,
      wordDescr: item.description,
    },
  });

  const updateById = (data) => {
    fetch(`http://localhost:8080/api/v1/words/${item.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        word_name: data.wordName,
        mean: data.wordMean,
        description: data.wordDescr,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "OK") {
          reset();
          navigate(-1);
        }
      })
      .catch((err) => console.log(err));
  };

  const onSubmit = (data) => {
    updateById(data);
  };
  return (
    <div className={styles.edit}>
      <div className={styles.edit__head}>edit {item.word_name}</div>
      <div className={styles.edit__info}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="wordName">Слово</label>
          <input
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
  );
};

export default EditWord;

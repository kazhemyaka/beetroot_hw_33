import styles from "./FormikForm.module.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  return (
    <div>
      <div className={styles.form__text}>
        <h1 className={styles.form__heading}>Зв'язатися з нами</h1>
        <p className={styles.form__subheading}>
          Залиш нам повідомлення, а ми відповімо якнайшвидше
        </p>
      </div>
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          phone: "",
          message: "",
          checkbox: false,
        }}
        validationSchema={Yup.object({
          fullName: Yup.string()
            .min(4, "Юзернейм повинен містити мінімум 4 символи")
            .required("Обов'язкове поле"),
          email: Yup.string()
            .email("Невірна адреса електронної пошти")
            .required("Обов'язкове поле"),
          phone: Yup.string()
            .matches(/^\+380\d{9}$/, "Перевір формат номеру телефона")
            .required("Обов'язкове поле"),
          message: Yup.string()
            .min(10, "Повідомлення має бути не менше 10 символів")
            .required("Обов'язкове поле"),
        })}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          alert("Дані успішно відправлені!");
          resetForm();
        }}
      >
        <Form className={styles.form}>
          <div className={styles.form__fullname}>
            <Field
              id="fullName"
              name="fullName"
              type="text"
              className={styles.form__input}
              placeholder="Ім'я та прізвище"
            />
            <ErrorMessage
              name="fullName"
              component="div"
              className={styles.form__error}
            />
          </div>

          <div className={styles.form__email}>
            <Field
              id="email"
              name="email"
              type="email"
              className={styles.form__input}
              placeholder="Email"
            />
            <ErrorMessage
              name="email"
              component="div"
              className={styles.form__error}
            />
          </div>

          <div className={styles.form__phone}>
            <Field
              id="phone"
              name="phone"
              type="tel"
              className={styles.form__input}
              placeholder="Телефон (у форматі +380)"
            />
            <ErrorMessage
              name="phone"
              component="div"
              className={styles.form__error}
            />
          </div>

          <div className={styles.form__message}>
            <Field
              id="message"
              name="message"
              as="textarea"
              className={styles.form__input}
              placeholder="Повідомлення"
            />
            <ErrorMessage
              name="message"
              component="div"
              className={styles.form__error}
            />
          </div>

          <label htmlFor="checkbox" className={styles.form__checkbox}>
            <Field
              id="checkbox"
              name="checkbox"
              type="checkbox"
              className={styles.form__checkboxfield}
            />
            Надсилати мені оновлення про академію
          </label>

          <button type="submit" className={styles.form__submit}>
            Надіслати
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormikForm;

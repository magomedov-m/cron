import React from "react";
import styles from '../styles/Registration.module.css';

export default function Registration() {
  return (
    <form class={styles.registratioin__item_form}>
      <label>
        <input
          class={styles.registratioin__item_form_input}
          type="text"
          placeholder="Ваше имя"
        />
      </label>
      <label>
        <input
          class={styles.registratioin__item_form_input}
          type="tel"
          placeholder="Номер телефона"
        />
      </label>
      <label>
        <input
          class={styles.registratioin__item_form_input_email}
          type="email"
          placeholder="Электронная почта"
        />
      </label>
      <button class={styles.registratioin__item_form_button}>Отправить</button>
    </form>
  );
}

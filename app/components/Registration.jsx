import React from "react";

export default function Registration() {
  return (
    <form class="registratioin__item-form">
      <label>
        <input
          class="registratioin__item-form-input"
          type="text"
          placeholder="Ваше имя"
        />
      </label>
      <label>
        <input
          class="registratioin__item-form-input"
          type="tel"
          placeholder="Номер телефона"
        />
      </label>
      <label>
        <input
          class="registratioin__item-form-input-email"
          type="email"
          placeholder="Электронная почта"
        />
      </label>
      <button class="registratioin__item-form-button">Отправить</button>
    </form>
  );
}

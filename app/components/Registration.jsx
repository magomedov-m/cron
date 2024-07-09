import React from "react";

export default function Registration() {
  return (
    <div class="registratioin__item-form">
      <input
        class="registratioin__item-form-input"
        type="text"
        placeholder="Ваше имя"
      />
      <input
        class="registratioin__item-form-input"
        type="tel"
        placeholder="Номер телефона"
      />
      <input
        class="registratioin__item-form-input-email"
        type="email"
        placeholder="Электронная почта"
      />
      <button class="registratioin__item-form-button">Отправить</button>
    </div>
  );
}

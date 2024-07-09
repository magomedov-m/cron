import React from "react";
import Registration from "./Registration";
import Image from 'next/image'
import CalendarImage from '../images/sloty.png'

export default function Opportunities() {
  return (
    <div class="opportunities-block">
      <div class="opportunities-block__item1">
        <div class="opportunities-block__item1-header">
          <h2 class="opportunities-block__item1-header-title">
            Упростите ведение бизнеса
            <br />
            для себя и своих сотрудников
          </h2>
          <p class="opportunities-block__item1-header-text">
            Отправьте заявку, мы свяжемся с вами<br /> в ближайшее время и обсудим
            детали вашего вопроса.
          </p>
        </div>
        <Registration />
      </div>
      <div class="opportunities-block__item2">
        <Image
          class="opportunities-block__item2-image"
          src={CalendarImage}
          alt="Изображение"
        />
      </div>
    </div>
  );
}

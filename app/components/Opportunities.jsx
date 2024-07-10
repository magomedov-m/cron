import React from "react";
import Registration from "./Registration";
import Image from "next/image";
import CalendarImage from "../images/sloty.png";
import Elipse from "./Circle";

export default function Opportunities() {
  return (
    <section class="opportunities-block">
      <article class="opportunities-block__item1">
        <header class="opportunities-block__item1-header">
          <h2 class="opportunities-block__item1-header-title">
            Упростите ведение бизнеса
            <br />
            для себя и своих сотрудников
          </h2>
          <p class="opportunities-block__item1-header-text">
            Отправьте заявку, мы свяжемся с вами
            <br /> в ближайшее время и обсудим детали вашего вопроса.
          </p>
        </header>
        <Registration />
      </article>
      <aside class="opportunities-block__item2">
        <figure class="opportunities-block__item2-image">
          <Image src={CalendarImage} alt="Изображение" />
        </figure>
        {/* <Elipse /> */}
      </aside>
    </section>
  );
}

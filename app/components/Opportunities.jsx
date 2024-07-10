import React from "react";
import Registration from "./Registration";
import Image from "next/image";
import CalendarImage from "../images/sloty.png";
import Elipse from "./Circle";
import styles from '../styles/Opportunities.module.css';

export default function Opportunities() {
  return (
    <section class={styles.opportunities_block}>
      <article class={styles.opportunities_block__item1}>
        <header class={styles.opportunities_block__item1_header}>
          <h2 class={styles.opportunities_block__item1_header_title}>
            Упростите ведение бизнеса
            <br />
            для себя и своих сотрудников
          </h2>
          <p class={styles.opportunities_block__item1_header_text}>
            Отправьте заявку, мы свяжемся с вами
            <br /> в ближайшее время и обсудим детали вашего вопроса.
          </p>
        </header>
        <Registration />
      </article>
      <aside class={styles.opportunities_block__item2}>
        <figure class={styles.opportunities_block__item2_image}>
          <Image src={CalendarImage} alt="Изображение" />
        </figure>
        {/* <Elipse /> */}
      </aside>
    </section>
  );
}

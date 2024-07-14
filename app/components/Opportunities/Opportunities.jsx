import React from "react";
import Registration from "../Registration/Registration";
import Image from "next/image";
import CalendarImage from "../../images/image 3.svg";
import styles from "./Opportunities.module.css";
import Circle1 from "../Circle/Circle1";
import Circle2 from "../Circle/Circle2";

export default function Opportunities() {
  return (
    <>
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
        </aside>
        <Circle1 />
        <Circle2 />
      </section>
    </>
  );
}

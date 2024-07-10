import React from "react";
import Image from "next/image";
import Logo from "../images/Canvas.png";
import Prices from "../images/image 1.png";
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <figure className={styles.logo}>
          <Image src={Logo} />
        </figure>

        <section className={styles.media_block}>
          <div className={styles.textButtonBox}>
            <div className={styles.media_block__text}>
              <h1 className={styles.presents_text}>
                Идеальное решение
                <br /> для автоматизации
                <br /> Вашего бизнеса
              </h1>
              <p>
                Мы автоматизируем рутинные процессы с помощью Битрикс24, <br />
                чтобы сэкономить время и силы сотрудников для более важных
                задач.
              </p>
            </div>
            <button className={styles.button_order}>Заказать услугу</button>
          </div>
          <figure className={styles.price_img}>
            <Image src={Prices} />
          </figure>
        </section>
      </header>
    </>
  );
}

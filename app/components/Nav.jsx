import React from "react";
import Image from "next/image";
import CronImg from "../images/cron.png";
import IconMessage from "../images/icon.png";
import styles from '../styles/Nav.module.css';

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <figure className={styles.nav__img}>
        <Image src={CronImg} />
      </figure>
      <div className={styles.nav__items}>
        <div className={styles.nav__item}>О CRON</div>
        <div className={styles.nav__item}>Кейсы</div>
        <div className={styles.nav__item}>Услуги</div>
        <div className={styles.nav__item}>Вакансии</div>
        <div className={styles.nav__item}>Контакты</div>
      </div>
      <button className={styles.nav__btn}>Битрикс24</button>
      <figure className={styles.nav__icon_message}>
        <Image src={IconMessage} />
      </figure>
    </nav>
  );
}

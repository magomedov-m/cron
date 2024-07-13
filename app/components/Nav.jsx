import React from "react";
import Image from "next/image";
import CronImg from "../images/cron.gif";
import IconMessage from "../images/icon.svg";
import styles from '../styles/Nav.module.css';

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <figure className={styles.nav__img}>
        <Image src={CronImg} alt="крон" className={styles.cron_image} />
      </figure>
      <div className={styles.nav__items}>
        <div className={styles.nav__item}>О CRON</div>
        <div className={styles.nav__item}>Кейсы</div>
        <div className={styles.nav__item}>Услуги</div>
        <div className={styles.nav__item}>Вакансии</div>
        <div className={styles.nav__item}>Контакты</div>
      </div>
      <button className={styles.nav__btn}>Битрикс24</button>
      <figure>
        <Image src={IconMessage} className={styles.nav__icon_message} alt="крон" />
      </figure>
    </nav>
  );
}

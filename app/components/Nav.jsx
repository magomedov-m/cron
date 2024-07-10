import React from "react";
import Image from "next/image";
import CronImg from "../images/cron.png";
import IconMessage from "../images/icon.png";

export default function Nav() {
  return (
    <nav className="nav">
      <figure className="nav__img">
        <Image src={CronImg} />
      </figure>
      <div className="nav__items">
        <div className="nav__item">О CRON</div>
        <div className="nav__item">Кейсы</div>
        <div className="nav__item">Услуги</div>
        <div className="nav__item">Вакансии</div>
        <div className="nav__item">Контакты</div>
      </div>
      <button className="nav__btn">Битрикс24</button>
      <figure className="nav__icon-message">
        <Image src={IconMessage} />
      </figure>
    </nav>
  );
}

import React from "react";
import Image from "next/image";
import FeaturesImage from "../images/image 2.png";

export default function FeaturesSection() {
  return (
    <section className="system-overview-section">
      <header className="system-hero-block">
        <h1 className="system-hero-block__title">Возможности Битрикс24</h1>
        <p className="system-hero-block__description">
          Битрикс24 — это онлайн-сервис, в котором собраны все нужные
          инструменты для работы компании и управления бизнесом. <br />{" "}
          Перенесите в единое пространство и автоматизируйте все рабочие
          коммуникации, продажи, проекты и бизнес-процессы.
        </p>
      </header>

      <section className="features-section">
        <dl className="features-section__description">
          <dt className="features-section__item">Совместная работа</dt>
          <hr />
          <dt className="features-section__item">CRM</dt>
          <hr />
          <div className="features-section__task-desc">
            <dt className="features-section__item">Задачи и проекты</dt>
            <dd>
              <p className="features-section__text">
                Организуйте эффективную работу над задачами и проектами в
                удобном таск-трекере. Выбирайте привычную методику планирования
                для вашей команды или работайте по Скрам. Делегируйте,
                управляйте сроками, назначайте ответственных, создавайте шаблоны
                задач.
              </p>
            </dd>
          </div>
          <hr />
          <dt className="features-section__item">Сайты и магазины</dt>
          <hr />
          <dt className="features-section__item">Автоматизация</dt>
          <hr />
        </dl>
        <figure className="features-section__image">
          <Image src={FeaturesImage} />
        </figure>
      </section>
    </section>
  );
}

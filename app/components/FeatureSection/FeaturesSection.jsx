import React from "react";
import Image from "next/image";
import FeaturesImage from "../../images/image 2.svg";
import styles from './FeaturesSection.module.css';
import SecondSvetch from "../Svetches/SecondSvetch";

export default function FeaturesSection() {
  return (
    <section className={styles.system_overview_section}>
      <header className={styles.system_hero_block}>
        <h1 className={styles.system_hero_block__title}>Возможности Битрикс24</h1>
        <p className={styles.system_hero_block__description}>
          Битрикс24 — это онлайн-сервис, в котором собраны все нужные
          инструменты для работы компании и управления бизнесом. <br />{" "}
          Перенесите в единое пространство и автоматизируйте все рабочие
          коммуникации, продажи, проекты и бизнес-процессы.
        </p>
      </header>

      <section className={styles.features_section}>
        <dl className={styles.features_section__description}>
          <dt className={styles.features_section__item}>Совместная работа</dt>
          <hr />
          <dt className={styles.features_section__item}>CRM</dt>
          <hr />
          <div className={styles.features_section__task_desc}>
            <dt className={styles.features_section__item}>Задачи и проекты</dt>
            <dd>
              <p className={styles.features_section__text}>
                Организуйте эффективную работу над задачами и проектами в
                удобном таск-трекере. Выбирайте привычную методику планирования
                для вашей команды или работайте по Скрам. Делегируйте,
                управляйте сроками, назначайте ответственных, создавайте шаблоны
                задач.
              </p>
            </dd>
          </div>
          <hr />
          <dt className={styles.features_section__item}>Сайты и магазины</dt>
          <hr />
          <dt className={styles.features_section__item}>Автоматизация</dt>
          <hr />
        </dl>
        <figure className={styles.features_section__image}>
          <Image src={FeaturesImage} />
        </figure>
      </section>
      <SecondSvetch />
    </section>
  );
}

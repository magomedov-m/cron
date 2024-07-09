import React from "react";
import Image from "next/image";
import FeaturesImage from "../images/image 2.png";

export default function FeaturesSection() {
  return (
    <div className="system-overview-section">
      <div className="system-hero-block">
        <div className="system-hero-block__title">Возможности Битрикс24</div>
        <div className="system-hero-block__description">
          Битрикс24 — это онлайн-сервис, в котором собраны все нужные
          инструменты для работы компании и управления бизнесом. <br />{" "}
          Перенесите в единое пространство и автоматизируйте все рабочие
          коммуникации, продажи, проекты и бизнес-процессы.
        </div>
      </div>

      <div className="features-section">
        <div className="features-section__description">
          <p className="features-section__item" >Совместная работа</p>
          <hr />
          <p className="features-section__item">CRM</p>
          <hr />
          <div className="features-section__task-desc">
            <p className="features-section__item">Задачи и проекты</p>
            <p className="features-section__text">
              Организуйте эффективную работу над задачами и проектами в удобном
              таск-трекере. Выбирайте привычную методику планирования для вашей
              команды или работайте по Скрам. Делегируйте, управляйте сроками,
              назначайте ответственных, создавайте шаблоны задач.
            </p>
          </div>
          <hr />
          <p className="features-section__item">Сайты и магазины</p>
          <hr />
          <p className="features-section__item">Автоматизация</p>
          <hr />
        </div>
        <Image className="features-section__image" src={FeaturesImage} />
      </div>
    </div>
  );
}

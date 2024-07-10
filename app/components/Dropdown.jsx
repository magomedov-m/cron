"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import DropBtn from "../images/Vector.png";

export default function Dropdown(props) {
  const container = useRef();
  const [dropdownState, setDropdownState] = useState({ open: false });
  const handleDropdownClick = () => {
    setDropdownState({ open: !dropdownState.open });
  };
  const handleClickOutside = (e) => {
    if (container.current && !container.current.contains(e.target)) {
      setDropdownState({ open: false });
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <section className="dropdown-block" ref={container}>
      <header className="dropdown-block__elem">
        <h2 className="dropdown-block__block-title">
          {props.title}
        </h2>
        <button
          className="dropdown-block__button"
          onClick={handleDropdownClick}
        >
          <Image className="dropdown-block-btn" src={DropBtn} />
        </button>
      </header>
      {dropdownState.open && (
        <div className="dropdown-block__menu">
          <p className="dropdown-block__title">Контроль и рекомендации:</p>
          <p className="dropdown-block__text">
            Битрикс24 позволяет полноценно контролировать все каналы общения с
            клиентами и предоставляет рекомендации к действиям, что способствует
            <br /> эффективной работе.
          </p>
          <p className="dropdown-block__title">Автоматизация процессов:</p>
          <p className="dropdown-block__text">
            Система автоматизирует множество бизнес-процессов, включая
            реализацию продукции. Это значительно повышает эффективность работы.
          </p>
          <p className="dropdown-block__title">Удобный интерфейс:</p>
          <p className="dropdown-block__text">
            Битрикс24 предоставляет удобный и комфортный интерфейс, который даже
            тем, кто не имеет опыт работы с 1С, будет понятен. Все настройки и
            <br />
            документы расположены логично.
          </p>
          <p className="dropdown-block__title">Индивидуальная настройка:</p>
          <p className="dropdown-block__text">
            Возможность настроить систему под свои потребности позволяет
            максимально адаптировать ее к специфике вашего бизнеса.
          </p>
          <p className="dropdown-block__text">
            Это лишь некоторые из многих преимуществ, которые предоставляет
            Битрикс24, засчет своей простоты и функциональности он является
            лидером рынка.
          </p>
        </div>
      )}
    </section>
  );
}

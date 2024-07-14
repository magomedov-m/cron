"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import DropBtn from "../../images/arrow.svg";
import styles from "./Dropdown.module.css";

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
    if (typeof window !== "undefined") {
      document.addEventListener("mousedown", handleClickOutside);

      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, []);
  return (
    <section
      className={styles.dropdown_block}
      ref={container}
      onClick={handleDropdownClick}
    >
      <header className={styles.dropdown_block__elem}>
        <h2 className={styles.dropdown_block__block_title}>{props.title}</h2>
        <button className={styles.dropdown_block__button}>
          {/* <Image className={styles.dropdown_block_btn} src={DropBtn} /> */}
          <svg
            width="20"
            height="13"
            viewBox="0 0 20 13"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.2046 0.0997705L0.795392 0.0997689L9.99999 12.3002L19.2046 0.0997705Z"
            />
          </svg>
        </button>
      </header>
      {dropdownState.open && (
        <div className={styles.dropdown_block__menu}>
          <p className={styles.dropdown_block__title}>
            Контроль и рекомендации:
          </p>
          <p className={styles.dropdown_block__text}>
            Битрикс24 позволяет полноценно контролировать все каналы общения с
            клиентами и предоставляет рекомендации к действиям, что способствует
            <br /> эффективной работе.
          </p>
          <p className={styles.dropdown_block__title}>
            Автоматизация процессов:
          </p>
          <p className={styles.dropdown_block__text}>
            Система автоматизирует множество бизнес-процессов, включая
            реализацию продукции. Это значительно повышает эффективность работы.
          </p>
          <p className={styles.dropdown_block__title}>Удобный интерфейс:</p>
          <p className={styles.dropdown_block__text}>
            Битрикс24 предоставляет удобный и комфортный интерфейс, который даже
            тем, кто не имеет опыт работы с 1С, будет понятен. Все настройки и
            <br />
            документы расположены логично.
          </p>
          <p className={styles.dropdown_block__title}>
            Индивидуальная настройка:
          </p>
          <p className={styles.dropdown_block__text}>
            Возможность настроить систему под свои потребности позволяет
            максимально адаптировать ее к специфике вашего бизнеса.
          </p>
          <p className={styles.dropdown_block__text}>
            Это лишь некоторые из многих преимуществ, которые предоставляет
            Битрикс24, засчет своей простоты и функциональности он является
            лидером рынка.
          </p>
        </div>
      )}
    </section>
  );
}

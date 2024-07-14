import React from "react";
import Dropdown from "../Dropdown/Dropdown";
import styles from "../FAQBlock/FAQBlock.module.css";

export default function FAQBlock() {
  return (
    <div className={styles.faqblock}>
      <div className={styles.faqblock__title}>Часто задаваемые вопросы</div>
      <Dropdown title="Как происходит процесс внедрения?" />
      <Dropdown title="Сколько времени займет процесс внедрения?" />
      <Dropdown title="Чем Битрик24 лучше своих конкурентов?" />
      <Dropdown title="Чем Битрикс24 отличается от специализированных CRM?" />
    </div>
  );
}

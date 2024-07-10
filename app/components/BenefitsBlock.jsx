import React from 'react'
import styles from '../styles/BenefitsBlock.module.css'

export default function BenefitsBlock() {
  return (
    <section className={styles.benefits_block}>
        <div className={styles.reason_text}>
            <p>Причины пользоваться Битрикс24</p>
        </div>
        <div className={styles.benefits_items}>
            <div className={`${styles.benefits_items__item} ${styles.left}`}><p>Ни один лид<br />не будет потерян</p></div>
            <div className={styles.benefits_items__item}><p>Вся история работы<br />с клиентом сохраняется</p></div>
            <div className={styles.benefits_items__item}><p>Эффективность продаж<br /> как на ладони</p></div>
            <div className={styles.benefits_items__item}><p>Автоматизация всех<br /> процессов компании</p></div>
            <div className={`${styles.benefits_items__item} ${styles.right}`}><p>Постановка поручений<br /> и планирование работы</p></div>
        </div>
    </section>
  )
}

import React from "react";
import styles from './TargetAudience.module.css';


export default function TargetAudience() {
  return (
    <section className={styles.target_audience}>
      <header className={styles.target_audience__block_title}>Кому подойдет Битрикс24</header>
      <div className={styles.target_audience__items}>
        <div className={styles.target_audience__item}>
          <div className={styles.target_audience__cap}>
            <p className={styles.target_audience__title}>Малый бизнес</p>
            <p className={styles.target_audience__description}>
              от 1 до 15 сотрудников
            </p>
            <hr />
            <section className={styles.info_block}>
              <p className={styles.info_block__title}>Сайты</p>
              <ul className={styles.info_block__list}>
                <li className={styles.info_block__item}>
                  Создавать много посадочных страниц
                  <br />
                  для рекламы
                </li>
              </ul>
            </section>
            <section className={styles.info_block}>
              <p className={styles.info_block__title}>CRM</p>
              <ul className={styles.info_block__list}>
                <li className={styles.info_block__item}>
                  Увеличить продажи и повторные продажи
                </li>
                <li className={styles.info_block__item}>
                  Автоматизировать продажи (снизить число
                  <br />
                  рутинных действий, которые выполняет человек)
                </li>
                <li className={styles.info_block__item}>
                  Собрать больше котактов потенциальных
                  <br />
                  клиентов
                </li>
              </ul>
            </section>
          </div>
        </div>

        <div className={styles.target_audience__item}>
          <div className={styles.target_audience__cap}>
            <p className={styles.target_audience__title}>Средний бизнес</p>
            <p className={styles.target_audience__description}>от 15 до 100 сотрудников</p>
            <hr />
            <section className={styles.info_block}>
              <p className={styles.info_block__title}>Задачи и проекты</p>
              <ul className={styles.info_block__list}>
                <li className={styles.info_block__item}>Контроль сроков</li>
                <li className={styles.info_block__item}>Проектная работа</li>
                <li className={styles.info_block__item}>Почасовая работа</li>
                <li className={styles.info_block__item}>
                  Работа с внешними подрядчиками
                </li>
                <li className={styles.info_block__item}>Автоматизация работы</li>
              </ul>
            </section>
            <section className={styles.info_block}>
              <p className={styles.info_block__title}>CRM</p>
              <ul className={styles.info_block__list}>
                <li className={styles.info_block__item}>
                  Увеличение конверсии и продажи
                </li>
                <li className={styles.info_block__item}>
                  Постоянная работа с клиентской базой
                </li>
                <li className={styles.info_block__item}>Автоматизация продаж</li>
                <li className={styles.info_block__item}>Оценка качества работы</li>
                <li className={styles.info_block__item}>Автоматизация работы</li>
              </ul>
            </section>
          </div>
        </div>

        <div className={styles.target_audience__item}>
          <div className={styles.target_audience__cap}>
            <p className={styles.target_audience__title}>Крупный бизнес</p>
            <p className={styles.target_audience__description}>100 и более сотрудников</p>
            <hr />
            <section className={styles.info_block}>
              <p className={styles.info_block__title}>Коммуникациии</p>
              <ul className={styles.info_block__list}>
                <li className={styles.info_block__item}>Единая среда для общения внутри компании<br /> (убрать разрыв в коммуникации)</li>
                <li className={styles.info_block__item}>Хранение всех рабочих документов внутри</li>
                <li className={styles.info_block__item}>Совместная работа с документами</li>
                <li className={styles.info_block__item}>Быстрый поиск нужной информации-</li>
                <li className={styles.info_block__item}>Контроль исполнения поручений</li>
                <li className={styles.info_block__item}>Удобное планирование</li>
                <li className={styles.info_block__item}>Разный уровень доступов к информации</li>
                <li className={styles.info_block__item}>Учет рабочего времени</li>
                <li className={styles.info_block__item}>Отчеты руководителю</li>
                <li className={styles.info_block__item}>Автоматизация бизнес-процессов в компании</li>
                <li className={styles.info_block__item}>Мобильность Безопасность Интеграция с 1С</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

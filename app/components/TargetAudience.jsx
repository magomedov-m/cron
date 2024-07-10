import React from "react";

export default function TargetAudience() {
  return (
    <section className="target-audience">
      <header className="target-audience__block-title">Кому подойдет Битрикс24</header>
      <div className="target-audience__items">
        <div className="target-audience__item">
          <div className="target-audience__cap">
            <p className="target-audience__title">Малый бизнес</p>
            <p className="target-audience__description">
              от 1 до 15 сотрудников
            </p>
            <hr />
            <section className="info-block">
              <p className="info-block__title">Сайты</p>
              <ul className="info-block__list">
                <li className="info-block__item">
                  Создавать много посадочных страниц
                  <br />
                  для рекламы
                </li>
              </ul>
            </section>
            <section className="info-block">
              <p className="info-block__title">CRM</p>
              <ul className="info-block__list">
                <li className="info-block__item">
                  Увеличить продажи и повторные продажи
                </li>
                <li className="info-block__item">
                  Автоматизировать продажи (снизить число
                  <br />
                  рутинных действий, которые выполняет человек)
                </li>
                <li className="info-block__item">
                  Собрать больше котактов потенциальных
                  <br />
                  клиентов
                </li>
              </ul>
            </section>
          </div>
        </div>

        <div className="target-audience__item">
          <div className="target-audience__cap">
            <p className="target-audience__title">Средний бизнес</p>
            <p className="target-audience__description">от 15 до 100 сотрудников</p>
            <hr />
            <section className="info-block">
              <p className="info-block__title">Задачи и проекты</p>
              <ul className="info-block__list">
                <li className="info-block__item">Контроль сроков</li>
                <li className="info-block__item">Проектная работа</li>
                <li className="info-block__item">Почасовая работа</li>
                <li className="info-block__item">
                  Работа с внешними подрядчиками
                </li>
                <li className="info-block__item">Автоматизация работы</li>
              </ul>
            </section>
            <section className="info-block">
              <p className="info-block__title">CRM</p>
              <ul className="info-block__list">
                <li className="info-block__item">
                  Увеличение конверсии и продажи
                </li>
                <li className="info-block__item">
                  Постоянная работа с клиентской базой
                </li>
                <li className="info-block__item">Автоматизация продаж</li>
                <li className="info-block__item">Оценка качества работы</li>
                <li className="info-block__item">Автоматизация работы</li>
              </ul>
            </section>
          </div>
        </div>

        <div className="target-audience__item">
          <div className="target-audience__cap">
            <p className="target-audience__title">Крупный бизнес</p>
            <p className="target-audience__description">100 и более сотрудников</p>
            <hr />
            <section className="info-block">
              <p className="info-block__title">Коммуникациии</p>
              <ul className="info-block__list">
                <li className="info-block__item">Единая среда для общения внутри компании<br /> (убрать разрыв в коммуникации)</li>
                <li className="info-block__item">Хранение всех рабочих документов внутри</li>
                <li className="info-block__item">Совместная работа с документами</li>
                <li className="info-block__item">Быстрый поиск нужной информации-</li>
                <li className="info-block__item">Контроль исполнения поручений</li>
                <li className="info-block__item">Удобное планирование</li>
                <li className="info-block__item">Разный уровень доступов к информации</li>
                <li className="info-block__item">Учет рабочего времени</li>
                <li className="info-block__item">Отчеты руководителю</li>
                <li className="info-block__item">Автоматизация бизнес-процессов в компании</li>
                <li className="info-block__item">Мобильность Безопасность Интеграция с 1С</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

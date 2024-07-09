import React from "react";

export default function TargetAudience() {
  return (
    <div className="target-audience">
        <div className="target-audience__title">Кому подойдет Битрикс24</div>
      <div className="target-audience__items">

        <div className="target-audience__item">
          <div className="target-audience__cap">
            <p>Малый бизнес</p>
            <p>от 1 до 15 сотрудников</p>
            <hr />
          </div> 
        </div>

        <div className="target-audience__item">
          <div className="target-audience__cap">
            <p>Средний бизнес</p>
            <p>от 15 до 100 сотруднико</p>
            <hr />
          </div>
        </div>

        <div className="target-audience__item">
          <div className="target-audience__cap">
            <p>Крупный бизнес</p>
            <p>100 и более сотрудников</p>
            <hr />
          </div>
        </div>

      </div>
    </div>
  );
}

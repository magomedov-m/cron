import React from "react";
import Image from "next/image";
import Logo from "../images/Canvas.png";
import Prices from '../images/image 1.png'

export default function Header() {
  return (
    <>
      <header className="header">
        <Image className="logo" src={Logo} />

        <div className="media-block">
          <div className="textButtonBox">
            <div className="media-block__text">
              <h1 className="presents-text">
                Идеальное решение
                <br /> для автоматизации
                <br /> Вашего бизнеса
              </h1>
              <p>
                Мы автоматизируем рутинные процессы с помощью Битрикс24, <br />
                чтобы сэкономить время и силы сотрудников для более важных
                задач.
              </p>
            </div>
            <button className="button-order">Заказать услугу</button>
          </div>
          <Image className="price-img" src={Prices} />
        </div>
      </header>
    </>
  );
}

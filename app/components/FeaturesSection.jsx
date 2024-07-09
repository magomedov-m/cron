import React from "react";
import Image from 'next/image';
import FeaturesImage from '../images/image 2.png'

export default function FeaturesSection() {
  return (
    <div className="system-overview-section">
      <div className="feature-item">
        <div>Возможности Битрикс24</div>
        <div>
          Битрикс24 — это онлайн-сервис, в котором собраны все нужные
          инструменты для работы компании и управления бизнесом. Перенесите в
          единое пространство и автоматизируйте все рабочие коммуникации,
          продажи, проекты и бизнес-процессы.
        </div>
      </div>

        <div className="features-section">
            <div className="features-section__description"></div>
            {/* <Image src={FeaturesImage} /> */}
        </div>
    </div>
  );
}

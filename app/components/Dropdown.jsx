import React from "react";
import Image from 'next/image';
import DropBtn from '../images/Vector.png'

export default function Dropdown() {
  return (
    <div className="dropdown-block">
      <div className="dropdown-block__elem">
        <p className="dropdown-block__text">
          Как происходит процесс внедрения?
        </p>
        <button className="dropdown-block__button"><Image className="dropdown-btn" src={DropBtn} /></button>
      </div>
    </div>
  );
}

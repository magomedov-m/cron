import React from 'react'

export default function BenefitsBlock() {
  return (
    <div className='benefits-block'>
        <div className='reason-text'>
            <p>Причины пользоваться Битрикс24</p>
        </div>
        <div className='benefits-items'>
            <div className='benefits-items__item left'><p>Ни один лид<br />не будет потерян</p></div>
            <div className='benefits-items__item'><p>Вся история работы<br />с клиентом сохраняется</p></div>
            <div className='benefits-items__item'><p>Эффективность продаж<br /> как на ладони</p></div>
            <div className='benefits-items__item'><p>Автоматизация всех<br /> процессов компании</p></div>
            <div className='benefits-items__item right'><p>Постановка поручений<br /> и планирование работы</p></div>
        </div>
    </div>
  )
}

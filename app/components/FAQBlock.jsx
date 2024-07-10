import React from 'react'
import Dropdown from './Dropdown'

export default function FAQBlock() {
  return (
    <div className='faqblock'>
        <div className='faqblock__title'>Часто задаваемые вопросы</div>
        <Dropdown title='Как происходит процесс внедрения?' />
        <Dropdown title='Сколько времени займет процесс внедрения?' />
        <Dropdown title='Чем Битрик24 лучше своих конкурентов?' />
        <Dropdown title='Чем Битрикс24 отличается от специализированных CRM?' />
    </div>
  )
}

import React from 'react'
import styles from './Svetch.module.css'
import styles2 from './SecondSvetch.module.css'

export default function SecondSvetch() {
  return (
    <circle className={`${styles.svetch} ${styles2.secondSvetch}`}></circle>
  )
}

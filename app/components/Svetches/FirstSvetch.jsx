import React from 'react'
import styles from './Svetch.module.css'
import styles2 from './FirstSvetch.module.css'

export default function FirstSvetch() {
  return (
    <circle className={`${styles2.first_svetch} ${styles.svetch}`}></circle>
  )
}

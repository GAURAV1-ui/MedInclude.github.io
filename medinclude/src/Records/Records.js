import React from 'react'
import TextContainer from '../components/TextContainer/TextContainer'
import styles from './Records.module.css'

const Records = () => {
  return (
    <>
        <div className={styles.record}>
            <h1>Record</h1>
        </div>
        <TextContainer/>
        <TextContainer/>
    </>
  
  )
}

export default Records
import React from 'react'
import TextContainer from '../components/TextContainer/TextContainer';
import styles from './Portal.module.css';
import Button from '../components/UI/Button';
// import MainImage from '../Images/Project_69-08.jpg'

const Portal = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero_image}>
        <div class={styles.hero_text}>
          <h1>Simple. Understandable. Accessible</h1>
          <br/>
          <div className={styles.button}>
          <Button>Get Started</Button>
          <Button>Log In</Button>
          </div>
      </div>
      
    </div>
    <div className={styles.records}>
    <div className={styles.portal}>
        <h1>Record</h1>
    </div>
    <div className={styles.textContainer}>
        <TextContainer />
    </div>
    </div>    
    </div>
  )
}

export default Portal;
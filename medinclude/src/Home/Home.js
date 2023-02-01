import React from 'react'
import TextContainer from '../components/TextContainer/TextContainer';
import styles from './Home.module.css';

const Home = () => {
  return (
    <>
    <div className={styles.home}>
            <h2>Record</h2>
        </div>
    <div>
    <TextContainer/>

    </div>
        
    </>
  )
}

export default Home
import React from 'react'
import {useNavigate} from 'react-router-dom';
import logo from '../../Images/back.png'
import styles from './Back.module.css';
const Back= () => {
    const history = useNavigate();
  return (
    <div className={styles.backNavigate}>
        <img src={logo} alt = "" onClick = {() => history.goBack}/>
        <div className={styles.back}>
        
        <button onClick = {() => history.goBack}> Back </button>
        </div>
    </div>
  )
}

export default Back

import React from 'react'
import Modal from '../UI/Modal'
import CheckBox from './CheckBox'
import Button from '../UI/Button'
import styles from './Login.module.css'
const Login = (props) => {

    
  return (
    <Modal className = {styles.modal} onClose = {props.onCloseLogin}>
        <div>
        <div className={styles.loginHeading}>
            <h1>MedInclude</h1>
            <h4>Simple. Understandable. Accessible</h4>
        </div>
        <form>
            <div className={styles.LoginInput}>
                <input
                id="useremail" 
                type = "email"
                value = "iamg@gmail.com">
                </input>
                <input 
                id = "userpassword" 
                type = "password"
                value = "*********">

                </input>
            </div>
                <CheckBox/>
            <div className={styles.button}>
            <Button>Log In</Button>
            </div>
        </form>
        <div>
            <p>Don't have an account? <a href="/" style={{color: "green", textDecoration: "none"}}>Sign Up</a></p>
        </div>
        </div>
    </Modal>
  )
}

export default Login
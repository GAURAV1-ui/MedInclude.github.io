import React,{useRef} from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../UI/Button';
import Card from '../UI/Card';
import Input from '../UI/Input/Input';
import Back from './Back';
import styles from './SignUp.module.css';

const SignUp = (props) => {

    const firstNameInputRef = useRef();
    const lastNameInputRef = useRef();

    const navigate = useNavigate();

    const handleClickSignup =() => {
      const firstName = firstNameInputRef.current.value;
      const lastName = lastNameInputRef.current.value;
      console.log(firstName);
      navigate("/emailverification");
    } 
  return (
    <div>
        <Back/>
    <Card>
        <div>
            <div className= {styles.polygon}></div>
            <hr className= {styles.line}/>
        </div>
        <div className={styles.heading}>
            <h2>What name should we call you?</h2>
        </div>
        <form >
        <Input 
        
        id = "fisrtName" 
        label= "First Name" 
        type="text" 
        placeholder= "John"
        ref = {firstNameInputRef}
        // isValid={emailIsValid} 
        // onChange={emailChangeHandler}
        // onBlur={validateEmailHandler}/>
        />
        <Input 
        
        id = "lastName" 
        label= "LastName" 
        type="text" 
        ref = {lastNameInputRef}
        // isValid={emailIsValid} 

        placeholder ="Doe"
        // onChange={emailChangeHandler}
        // onBlur={validateEmailHandler}/>
        />
        <div className={styles.button}>
        <Button onClick = {handleClickSignup}>Continue</Button>
        </div>
        </form>
        
    </Card>
    </div>
  );
};

export default SignUp
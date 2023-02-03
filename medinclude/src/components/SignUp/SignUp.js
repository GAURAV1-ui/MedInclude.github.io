import React,{useRef} from 'react'
import Card from '../UI/Card';
import Input from '../UI/Input/Input';
const SignUp = (props) => {

    const emailInputRef = useRef();
    const passwordRef = useRef();
  
  return (
    <Card>
        <form >
        <Input 
        ref = {emailInputRef}
        id = "email" 
        label= "E-mail" 
        type="email" 
        // isValid={emailIsValid} 
        value =""
        // onChange={emailChangeHandler}
        // onBlur={validateEmailHandler}/>
        />
        <Input 
        ref = {passwordRef}
        id = "password" 
        label= "Password" 
        type="password" 
        // isValid={emailIsValid} 
        value =""
        // onChange={emailChangeHandler}
        // onBlur={validateEmailHandler}/>
        />
        </form>
    </Card>
  );
};

export default SignUp
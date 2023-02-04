import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Menu/Navbar';
import Portal from './Portal/Portal';
import Records from "./Records/Records";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import EmailVerification from "./components/SignUp/EmailVerification";
import Otp from "./components/SignUp/Otp";
import Password from "./components/SignUp/Password";




function App() {
  const [LoginIsShown, setLoginIsShown] = useState(false);

const showLoginHandler = () => {
  setLoginIsShown(true);
};

const hideLoginHandler = () => {
  setLoginIsShown(false);
};
  return (
    <main>
      <Router>
        {LoginIsShown && <Login onCloseLogin = {hideLoginHandler}/>}
         <Navbar onShowLogin ={showLoginHandler}/>
         
        <Routes>
          <Route exact path="/" element={<Portal/>}/>
          <Route exact path="/records" element={<Records/>}/>
          <Route exact path= "/login" element ={<Login/>}/>
          <Route exact path ="/signup" element = {<SignUp/>}/>
          <Route exact path ="/emailVerification" element = {<EmailVerification/>}/>
          <Route exact path ="/otp" element = {<Otp/>}/>
          <Route exact path ="/password" element = {<Password/>}/>
        </Routes>
      </Router>
    </main>
  );
}

export default App;

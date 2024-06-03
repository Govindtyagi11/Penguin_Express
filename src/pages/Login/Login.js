import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TitleChanger from "../../TitleChanger/TitleChanger";

const Login = () => {
  const navigation = useNavigate()
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [inputType, setInputType] = useState("password");
  const [mobile, setMobile] = useState('')
  const [password, setPassword] = useState('')

 
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
    setInputType(passwordVisible ? "password" : "text");
  };

  const handlerSinIn = (e) => {
    e.preventDefault();
    alert("Login Successfully.");
    localStorage.setItem("token_tr", JSON.stringify("abc"))
    navigation("/app/dashboard")
  }

  return (
    <div className="course_login course_login_page">
      <TitleChanger title="Login" />
      <div className="form">
        <div className="form_content">
          
          <div className="logo">
            <img src="assets/images/opa_logo.png" alt="" />
          </div>
          <div className="student_head">
            Sign in to start your session
          </div>
          <form onSubmit={handlerSinIn}>
            <div className="password">
              <input onChange={(e) => setMobile(e.target.value)} type="text" placeholder="Mobile" />
            </div>
            <div className="password add-new-class-rt">
              <input type={inputType} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
              <i className="material-icons" onClick={togglePasswordVisibility}>
                {passwordVisible ? "visibility" : "visibility_off"}
              </i>
            </div>
            <div className="checkbox">
              <input type="checkbox" />
              <p>Remember Me</p>
            </div>
            <div>
              <button type="submit">Sign In</button>
            </div>
          </form>
        </div>
      </div>
     
    </div>
  );
};

export default Login;
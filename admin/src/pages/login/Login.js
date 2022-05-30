import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {login} from "../../actions/user";

const Login = ({handleChange}) => {

    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
        <input  style={{ padding: 10, marginBottom: 20 }} value = {email}  setValue={setEmail} type="text"  placeholder='Enter email' required/>
        <input style={{ padding: 10, marginBottom: 20 }} value = {password}  setValue={setPassword}  placeholder='Enter password' type='password'  required/>

        <button style={{ padding: 10, width:100 }} type='submit' color='primary'   onClick={() => dispatch(login(email, password))}>Sign in</button>


    </div>
  );
};

export default Login;

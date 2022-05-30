import { useState } from "react";
import { useDispatch } from "react-redux";

const Login = () => {


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
      <input
        style={{ padding: 10, marginBottom: 20 }}
        type="text"
        placeholder="username"
     />
      <input
        style={{ padding: 10, marginBottom: 20 }}
        type="password"
        placeholder="password"
      />
      <button style={{ padding: 10, width:100 }}>
        Login
      </button>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import Axios from "axios";
import { useDispatch } from "react-redux";

const LoginPage = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.curruntTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.curruntTarget.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault(); // 페이지 refresh 방지

    let body = {
      email: Email,
      password: Password,
    };

    Axios.post("/api/user/login", body).then(response);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={onSubmitHandler}
      >
        <label>Email</label>
        <input type="email" value={Email} onChange={onEmailHandler} />
        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordHandler} />
        <br />
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;

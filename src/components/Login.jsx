import React from "react";
import App from "./App";
import InputField from "./Input";

function Login() {
  return (
    <div>
      <form className="form">
        <InputField type="text" placeholder="Username" />
        <InputField type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;

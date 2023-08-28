import React from "react";
import "../styles.css";
import Login from "./Login";
import InputField from "./Input";

const isLoggedIn = true;

//Now use Ternary Operator
function App() {
  return (
    <div className="container">{isLoggedIn ? <h1>Hello</h1> : <Login />}</div>
  );
}

export default App;

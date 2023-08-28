import React from "react";
import "../styles.css";
import Form from "../components/Form";
import Login from "./Login";
var userIsRegistered = true;

// Challenge:
// 1. Show "Login" as the button text if userIsRegistered is true.
//    Show "Register" as the button text if userIsRegistered is false.
// 2. Only show the "Confirm Password" input if userIsRegistered is false.
//    Don't show it if userIsRegistered is true.

function CheckRegisteredUser({ userIsRegistered }) {
  return <div>{userIsRegistered ? <Login /> : <Form />}</div>;
}

function App() {
  return (
    <div className="container">
      <CheckRegisteredUser userIsRegistered={userIsRegistered} />
    </div>
  );
}

export default App;

import React from "react";
import "../styles.css";

var userIsRegistered = false;

// Challenge:
// 1. Show "Login" as the button text if userIsRegistered is true.
//    Show "Register" as the button text if userIsRegistered is false.
// 2. Only show the "Confirm Password" input if userIsRegistered is false.
//    Don't show it if userIsRegistered is true.

function CheckRegisteredUser({ userIsRegistered }) {
  return (
    <div>
      {userIsRegistered ? (
        <form className="form">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      ) : (
        <form className="form">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <button type="submit">Register</button>
        </form>
      )}
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <CheckRegisteredUser userIsRegistered={userIsRegistered} />
    </div>
  );
}

export default App;

import React from "react";
import "../styles.css";

const isLoggedIn = false;

function App() {
  if (isLoggedIn) {
    return (
      <div className="container">
        <h1>Hello</h1>
      </div>
    );
  } else {
    return (
      <div className="container">
        <form className="form">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default App;

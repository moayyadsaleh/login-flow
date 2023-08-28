import React from "react";
import "../styles.css";
import Login from "./Login";
import InputField from "./Input";

const isLoggedIn = false;

const currentTime = new Date(2023, 8, 28, 23).getHours();
console.log(currentTime);
//{isLoggedIn ? <h1>Hello</h1> : <Login />}
//Now use Ternary Operator. Note: if it evaluates to true, then do/render soimething. if it evaluates to false, then do/render somethng.
function App() {
  return (
    <div className="container">
      {currentTime > 12 && <h1>Why are you still Working?</h1>}
    </div>
  );
}

//if I don't want to render something if it evaluates to false:

export default App;

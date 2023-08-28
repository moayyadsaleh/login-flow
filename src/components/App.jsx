import React from "react";
import "../styles.css";
import Login from "./Login";
import InputField from "./Input";

const isLoggedIn = false;

//Create function to render conditionally
function RenderConditionally() {
  if (isLoggedIn) {
    return <h1>Hello</h1>;
  } else {
    return <Login />;
  }
}

function App() {
  return (
    <div className="container">
      {" "}
      <RenderConditionally />
    </div>
  );
}

export default App;

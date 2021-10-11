import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About  from "./components/About";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const toggle = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#121212";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <Router>
      <Navbar
        title="TextUtilis"
        about="about utilis"
        mode={mode}
        toggle={toggle}
      />

      <Switch>
        <Route exact path="/about">
          <About mode={mode}/>
        </Route>
        <Route exact path="/">
          <div className="container my-3">
            <TextForm heading="Enter text You want Analyze" mode={mode} />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

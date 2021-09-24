import './App.css';
import React from "react";
import { Route} from "react-router-dom";
import LandingPage from "./Components/LandingPage.jsx"
import Home from "./Components/Home.jsx"
import NavBar from "./Components/NavBar.jsx"



function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage}/>
      <Route exact path="/home" component={Home}/>
      <Route path="/home" component={NavBar}/>
      
    </div>
  );
}

export default App;

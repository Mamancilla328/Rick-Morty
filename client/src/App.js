import './App.css';
import React from "react";
import { Route} from "react-router-dom";
import LandingPage from "./Components/LandingPage.jsx"
import Home from "./Components/Home.jsx"
import NavBar from "./Components/NavBar.jsx"
import Character from './Components/Character.jsx';
import Form from './Components/Form.jsx';



function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage}/>
      <Route path="/home" component={NavBar}/>
      <Route exact path="/home" component={Home}/>
      <Route  path="/character/:id" component={Character}/>
      <Route  path="/home/create" component={Form}/>
      
    </div>
  );
}

export default App;

import React, { useState } from "react";
import './App.css';
import Intro from "./MobileComponents/Intro";
import Project from "./MobileComponents/Project";
import Skill from "./MobileComponents/Skill";
import Contact from "./MobileComponents/Contact"
import Menu from "./MobileComponents/Menu";
function App() {
  const [menu ,setMenu] = useState(true);
  return (
    <div className="app">
      <Intro menu={menu} setMenu={setMenu} />
      <Skill />
      <Project />
      <Contact /> 
      <Menu menu={menu} setMenu={setMenu} />  
      
      
    </div>
  );
}

export default App;

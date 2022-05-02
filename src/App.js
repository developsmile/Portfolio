import './App.css';
import Intro from './Comp/Intro';
import Skill from './Comp/Skill';
import Project from './Comp/Project';
import Contact from './Comp/Contact';
import { Nav } from './Comp/Nav';
import Menu from './Comp/Menu';
import { useState } from 'react';

function App() {
  const [menu ,setMenu] = useState(true)
  return (
    <>
    <Menu menu={menu} setMenu={setMenu} />
      <Nav menu={menu} setMenu={setMenu} />
    <div className="app">
      <Intro menu={menu} setMenu={setMenu} />
      <Skill />
      <Project />
      <Contact />
    </div>
    </>

    
  );
}

export default App;

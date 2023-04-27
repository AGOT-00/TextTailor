import React, { useEffect, useState } from "react";
import Navbar from "./Shared/Navbar";
import Intro from "./Main/Intro";
import About from "./Main/About";
import Contact from "./Main/Contact";
import {Routes, Route} from 'react-router-dom';

function App() {
  const [showMenu, setShowMenu] = useState(true);

  return (
    <>
      <div className="bg-[#F2EFF6] h-full overflow-y-auto h-screen">
        <Routes>
          <Route path 
        </Routes>
        <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
        
        <Intro />
        <About />

        <Contact />

      </div>
    </>
  );
}

export default App;

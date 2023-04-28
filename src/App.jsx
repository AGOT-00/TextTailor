import React, { useEffect, useState } from "react";
import Navbar from "./Shared/Navbar";
import Intro from "./Main/Intro";
import About from "./Main/About";
import Contact from "./Main/Contact";
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import Login from '../src/Main/Login'
function App() {
  const [showMenu, setShowMenu] = useState(true);

  return (
    <>
      {/* <div className="bg-[#F2EFF6] h-full overflow-y-auto h-screen">
       
        <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
        
        <Intro />
        <About />

        <Contact />
        <Login/>
      </div> */}
      <div className="bg-[#F2EFF6] h-full overflow-y-auto h-screen">
      <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<><Intro/> <About/> <Contact/></>} />
        <Route path="login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
      </div>
    </>
  );
}

export default App;

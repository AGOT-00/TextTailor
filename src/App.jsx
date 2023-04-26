import React, { useEffect, useState } from "react";
import Navbar from "./Shared/Navbar";
import Intro from "./Main/Intro";
import About from "./Main/About";
import Contact from "./Main/Contact";

function App() {
  const [showMenu, setShowMenu] = useState(true);

  return (
    <>
      <div className="bg-[#F2EFF6] h-full overflow-y-auto h-screen">
        <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
        
        <Intro />
        <About />

        <Contact />

      </div>
    </>
  );
}

export default App;

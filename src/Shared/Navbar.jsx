import React from "react";
import {Link} from 'react-router-dom';


function Navbar(props) {
  const showMenu = props.showMenu;
  const setShowMenu = props.setShowMenu;

  const NavbarStyle =
    "w-full p-6 bg-white shadow md:flex md:items-center md:justify-between z-[-1] md:z-auto absolute";
  const NavbarChild = "mx-4 my-6 md:my-0 hover:text-gray-500";
  const NavbarItem = "";
  const handleRefreshClick = () => {
    window.location.reload();
  };

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  const MainItemHandlerStyle = "md:flex hidden md:items-center md:static  w-full md:w-auto left-0 py-4 md:py-0 md:pl-0 pl-4 md:opacity-100 md:transition-opacity absolute";

  return (
    <nav className={NavbarStyle} style={{backgroundColor: '#ECF0E9',}}>
      <div
        className="flex justify-between items-center text-2xl font-serif"
        
      >
        <span onClick={handleRefreshClick} className="hover:text-">TextTailor</span>
        <span className="text-3xl cursor-pointer md:hidden block" onClick={toggleMenu}>

            <ion-icon
              id="navbaricon"
              name={showMenu ? "menu":"close"}
              
            ></ion-icon>
          
        </span>
      </div>
      <div>
        <ul
          className={showMenu ? MainItemHandlerStyle : ""}
        >
          <li className={NavbarChild}>
            <a href="#Home" className={NavbarItem}>
              Home
            </a>
          </li>
          <li className={NavbarChild}>
            <a href="#About" className={NavbarItem}>
              About Us
            </a>
          </li>
          <li className={NavbarChild}>
            <a href="#Contact" className={NavbarItem}>
              Contact Us
            </a>
          </li>
          {/*s <button className="bg-red-400 px-6 py-2 mx-4 hover:bg-green-700 rounded">
          </button> */}
          <li>
          <Link  to="/login" className="bg-red-400 px-6 py-2 mx-4 hover:bg-green-700 rounded">Login</Link> 
          </li>
        </ul>

      </div>

      <script></script>
    </nav>
  );
}

export default Navbar;

import OverlayMenu from "./OverlayMenu";

import Logo from "../assets/Logo.png";
import { useState } from "react";



export default function Navbar(){
  const[menuOpen,setMenuOpen]=useState(false);
  const [visible,setVisible ]=useState(true);
  
  
  return(
    <>

    <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-50 transition-transform duration-300 ${visible ? "translate-y-0":"-translate-y-full"}`}>


    <div>
<img src={Logo} alt="logo" className="w-8 h-8"/>

    </div>



    </nav>
    <OverlayMenu/>
    
    </>
  )
}
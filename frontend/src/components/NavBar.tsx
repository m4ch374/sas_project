import React from "react";
import Logo from "../assets/icons/Logo";

type TNavBar = {
  children?: JSX.Element
}

const NavBar: React.FC<TNavBar> = ({ children }) => {
  return (
    <nav className="
      fixed 
      top-0 
      left-0 
      h-[90px] 
      bg-[#242424]/30 
      w-screen
      flex
      items-center
      px-7
      justify-between
      z-50
      backdrop-blur-md
    ">
      <div className="flex items-center gap-4">
        <Logo />
        <h1 className="text-4xl text-[#6d8df8]"> SAS Sensei </h1>
      </div>

      {children}
    </nav>
  )
}

export default NavBar

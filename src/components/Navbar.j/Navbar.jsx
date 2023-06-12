import React from "react";

function Navbar() {
  return (
    <div className="flex justify-between items-center py-[3vh] pl-[5.67vw] pr-[1.45vw] ">
      <h1 className="text-[#08299B] font-bold text-[1.5rem] ">CareFinder</h1>
      <div className="flex items-center gap-[10vw] font-medium text-[1rem]">
        <ul className="flex items-center gap-[4vw] text-[#1E1E1E]   ">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/find-hospital">Find Hospital</a>
          </li>
        </ul>
        <div className="flex items-center gap-[1vw]  text-white  ">
          <button className="bg-[#08299B] w-[7.34vw] h-[5.46vh] rounded-xl hover:bg-opacity-75 ">
            Login
          </button>
          <button className="bg-[#08299B] w-[7.34vw] h-[5.46vh] rounded-xl hover:bg-opacity-75 ">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

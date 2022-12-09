import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


import React from 'react'


export default function Header() {
const location = useLocation();
const navigate = useNavigate();
function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }

  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-40">
 <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
 <div    className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/")}>HOME</div>
 <div>
    <ul className="flex space-x-6">
    <li
                  className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                    pathMatchRoute("/sign-in") && "text-black border-b-red-500"
                  }`}
                  onClick={() => navigate("/sign-in")}
    
    >Sign-in</li>
    <li 
                  className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                    pathMatchRoute("/login") && "text-black border-b-red-500"
                  }`}
                  onClick={() => navigate("/login")}
    
    
    >Login</li>
    
    
    </ul>
    </div>


 </header>
      
    </div>
  )
}




import { useState,useEffect } from "react"

// Custom cursor component that follows the mouse movement and displays a blurred circle just like the one in the Home section background. It uses the useState hook to track the cursor position and the useEffect hook to add and remove the mousemove event listener. The cursor is styled with Tailwind CSS classes to create a gradient, blurred circle that follows the mouse pointer.

export default function CustomCursor(){
  
  const[position,setPosition]=useState({x:0 ,y:0});
  useEffect(()=>{

      const moveHandler=(e)=>{
        setPosition({x : e.clientX,y : e.clientY});
      };



      window.addEventListener("mousemove",moveHandler);
      return()=>window.removeEventListener("mousemove",moveHandler);


  })

  
  return (


    <div className="pointer-events-none fixed top-0 left-0 z-[9999]"
    
    style={{transform :`translate(${position.x-40}px,${position.y-40}px)`,}}
    
    >

      <div
      className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 blur-xl opacity-80"
      
      
      />
      </div>
  );
}
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";

function Home() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorClicked, setCursorClicked] = useState(false);

  const handleMouseEnter = () => {
    const cursor = document.querySelector('.mouse-cursor');
    cursor.classList.add('active');
  };

  const handleMouseLeave = () => {
    const cursor = document.querySelector('.mouse-cursor');
    cursor.classList.remove('active');
  };

  useEffect(() => {
    const homeElement = document.querySelector('.home-section');
    homeElement.addEventListener('mouseenter', handleMouseEnter);
    homeElement.addEventListener('mouseleave', handleMouseLeave);

    // Update the cursor position every time it moves
    const updateCursorPos = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseDown = () => {
      setCursorClicked(true);
    };

    const handleMouseUp = () => {
      setCursorClicked(false);
    };

    window.addEventListener('mousemove', updateCursorPos);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      homeElement.removeEventListener('mouseenter', handleMouseEnter);
      homeElement.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mousemove', updateCursorPos);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <motion.div 
      className="home-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 1 }}
      onMouseEnter={() => document.body.classList.add("cursor-hidden")}
      onMouseLeave={() => document.body.classList.remove("cursor-hidden")}
    >
      <h1>Lerry Zhao</h1>
      <p>Welcome to my portfolio. Explore my projects and learn more about me.</p>

      <div
        className={`mouse-cursor ${cursorClicked ? 'clicked' : ''}`}
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`
        }}
      />
    </motion.div>
  );
}

export default Home;

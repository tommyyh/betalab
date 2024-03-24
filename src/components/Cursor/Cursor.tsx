'use client';

import React, { useState, useEffect } from 'react';
import style from './cursor.module.scss';
import { useMediaQuery } from 'react-responsive';

const clickableElements = ['button', 'a', 'select'];

function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 }); // Coordinates
  const [isPointer, setIsPointer] = useState(false);
  const isDesktop = useMediaQuery({
    query: '(min-width: 1024px)',
  });

  // Event listener
  useEffect(() => {
    if (isDesktop) {
      // Event handler for mouse movement
      const onMouseMove = (e: any) => {
        setPosition({ x: e.clientX, y: e.clientY }); // Update coordinates

        const isClickable = e.target.closest(clickableElements);

        // Check if element is clickable
        setIsPointer(isClickable ? true : false);
      };

      window.addEventListener('mousemove', onMouseMove);

      // Clean up
      return () => {
        window.removeEventListener('mousemove', onMouseMove);
      };
    }
  }, []);

  // Cursor size based on hovered element
  const cursorSize = isPointer ? 0.432 * 4 : 0.432;

  return (
    <div
      className={`${style.flare} ${isPointer ? style.pointer : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${cursorSize}vw`,
        height: `${cursorSize}vw`,
      }}
    ></div>
  );
}

export default Cursor;

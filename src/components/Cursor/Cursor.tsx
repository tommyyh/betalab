'use client';
import React, { useState, useEffect } from 'react';
import style from './cursor.module.scss';

// This functional component represents a custom cursor with a flare effect.
function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 }); // Coordinates
  const [isPointer, setIsPointer] = useState(false); // Check if el is clickable

  // Event handler for mouse movement
  const onMouseMove = (e: any) => {
    setPosition({ x: e.clientX, y: e.clientY }); // Update coordinates

    const target = e.target; // Element the cursor is hovering

    // Check if element is clickable
    setIsPointer(
      window.getComputedStyle(target).getPropertyValue('cursor') === 'pointer'
    );
  };

  // Event listener
  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);

    // Clean up
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  // Cursor size based on hovered element
  const cursorSize = isPointer ? 0 : 0.432;

  // Create a visual effect when over a clickable el
  const cursorStyle = isPointer ? { left: '-100px', top: '-100px' } : {};

  return (
    <div
      className={`${style.flare} ${isPointer ? style.pointer : ''}`}
      style={{
        ...cursorStyle,
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${cursorSize}vw`,
        height: `${cursorSize}vw`,
      }}
    ></div>
  );
}

export default Cursor;

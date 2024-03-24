'use client';

import React, { useState, useEffect } from 'react';
import style from './cursor.module.scss';
import { useMediaQuery } from 'react-responsive';

const clickableElements = ['button', 'a', 'select'];

function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 }); // Coordinates
  const [isPointer, setIsPointer] = useState('');
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
        const specialCursor = e.target
          .closest('[data-cursor]')
          ?.getAttribute('data-cursor');

        let cursorType = '';

        // Cursor depending on if is clickable
        if (specialCursor) {
          switch (specialCursor) {
            case 'special':
              cursorType = 'special';
              break;
            default:
              cursorType = '';
              break;
          }
        } else if (isClickable) {
          cursorType = 'pointer';
        } else {
          cursorType = '';
        }

        // Check if element is clickable
        setIsPointer(cursorType);
      };

      window.addEventListener('mousemove', onMouseMove);

      // Clean up
      return () => {
        window.removeEventListener('mousemove', onMouseMove);
      };
    }
  }, [isDesktop]);

  // Cursor size based on hovered element
  let cursorSize = 0.432;

  switch (isPointer) {
    case 'special':
      cursorSize = 0.432 * 8;
      break;
    case 'pointer':
      cursorSize = 0.432 * 4;
      break;
    default:
      cursorSize = 0.432;
      break;
  }

  return (
    <div
      className={`${style.flare} ${style[isPointer]}`}
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

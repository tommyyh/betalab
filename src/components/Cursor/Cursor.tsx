'use client';

import React, { useState, useEffect } from 'react';
import style from './cursor.module.scss';
import { useMediaQuery } from 'react-responsive';

interface CSSVariable {
  [key: string]: string | number;
}

const clickableElements = ['button', 'a', 'select'];

function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 }); // Coordinates
  const [pointer, setPointer] = useState('');
  const isDesktop = useMediaQuery({
    query: '(min-width: 1025px)',
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
            case 'work':
              cursorType = 'work'; // Special cursor when hover on work
              break;
            case 'pointer':
              cursorType = 'pointer';
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
        setPointer(cursorType);
      };

      window.addEventListener('mousemove', onMouseMove);

      // Clean up
      return () => {
        window.removeEventListener('mousemove', onMouseMove);
      };
    }
  }, [isDesktop]);

  // Cursor size based on hovered element
  const baseSize = 0.44;
  let cursorSize = baseSize;

  switch (pointer) {
    case 'work':
      cursorSize = baseSize * 15;
      break;
    case 'pointer':
      cursorSize = baseSize * 4;
      break;
    default:
      cursorSize = baseSize;
      break;
  }

  return (
    <div
      className={`${style.flare} ${style[pointer]}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${cursorSize}vw`,
        height: `${cursorSize}vw`,
      }}
    >
      {/* Work text */}
      <span
        className={`
          ${pointer === 'work' ? style.viewActive : ''} 
          ${style.view}
        `}
      >
        View work
      </span>
    </div>
  );
}

export default Cursor;

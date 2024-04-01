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
  const [workPercentage, setWorkPercentage] = useState(0);
  const isDesktop = useMediaQuery({
    query: '(min-width: 1025px)',
  });

  // Function for work hovering animation
  const workHover = (element: HTMLDivElement | null, e: MouseEvent) => {
    if (element) {
      const div = element.getBoundingClientRect();
      const relativeCursorPosition = e.clientY - div.top; // Cursor relative to image
      const positionPercentage =
        (relativeCursorPosition / element.clientHeight) * 100;

      setWorkPercentage(positionPercentage);
    }
  };

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
            case 'work':
              cursorType = 'work'; // Special cursor when hover on work
              workHover(e.target.closest('[data-cursor]'), e); // Special animation

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
  let cursorSize = 0.432;

  switch (pointer) {
    case 'special':
      cursorSize = 0.432 * 8;
      break;
    case 'work':
      cursorSize = 0.432 * 15;
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
      className={`${style.flare} ${style[pointer]}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${cursorSize}vw`,
        height: `${cursorSize}vw`,
      }}
    >
      <span
        className={`
          ${pointer === 'work' ? style.viewActive : ''} 
          ${style.view}
        `}
      >
        View work
      </span>

      {/* Work indicator of cursor position */}
      <svg
        width="250"
        height="250"
        viewBox="0 0 250 250"
        className={`${style.workIndicator} ${
          pointer === 'work' ? style.workIndicatorActive : ''
        }`}
        style={{ ['--progress' as string]: workPercentage }}
      >
        <circle className={style.workInner}></circle>
      </svg>
    </div>
  );
}

export default Cursor;

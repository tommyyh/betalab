'use client';

import React, { useRef, useState } from 'react';
import style from './review.module.scss';
import Image from 'next/image';

type PropsType = {
  img: any;
};

const Images = ({ img }: PropsType) => {
  const divRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  const onMouseMove = (e: React.MouseEvent) => {
    // @ts-ignore
    const bounds = divRef?.current?.getBoundingClientRect();

    // Check if mouse is out of bounds
    if (
      e.clientY >= bounds.top &&
      e.clientY <= bounds.bottom &&
      e.clientX >= bounds.left &&
      e.clientX <= bounds.right
    ) {
      const initialX = e.clientX - bounds.left;
      const initialY = e.clientY - bounds.top;
      // @ts-ignore
      const x = initialX - divRef?.current?.clientWidth / 2;
      // @ts-ignore
      const y = initialY - divRef?.current?.clientHeight * 0.515;

      setActive(true);
      setMousePosition({ x, y });
    } else {
      setActive(false);
    }
  };

  return (
    <div
      className={style.images}
      data-cursor="pointer"
      onMouseMove={onMouseMove}
    >
      <div className={style.background}>
        <h6>Hover me</h6>
      </div>

      <div className={style.imgCont} ref={divRef}>
        <div
          className={style.img}
          style={
            active
              ? {
                  left: `${mousePosition.x}px`,
                  top: `${mousePosition.y}px`,
                  opacity: '100%',
                }
              : {
                  left: `${mousePosition.x}px`,
                  top: `${mousePosition.y}px`,
                  opacity: '0%',
                }
          }
        >
          <Image src={img} alt="Work showcase" fill />
        </div>
      </div>
    </div>
  );
};

export default Images;

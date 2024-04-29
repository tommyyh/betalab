'use client';

import React, { useRef, useState } from 'react';
import style from './carousel.module.scss';
import Partner from '../Partner/Partner';
import PartnerSvg from '@/public/home/partners/israsfaren.svg';
import Image1 from '@/public/home/landing/thumbnail.png';
import Image2 from '@/public/home/work/2.png';
import Image from '@/components/LazyImage/LazyImage';

type PropsType = {};

const roundNum = (num: any) => {
  // @ts-ignore
  return +(Math.round(num + 'e+3') + 'e-3');
};

const images = {
  '1': {
    src: Image1,
    alt: 'Partner website thumbnail',
  },
  '2': {
    src: Image2,
    alt: 'Partner website thumbnail',
  },
  '3': {
    src: Image1,
    alt: 'Partner website thumbnail',
  },
  '4': {
    src: Image2,
    alt: 'Partner website thumbnail',
  },
  '5': {
    src: Image1,
    alt: 'Partner website thumbnail',
  },
  '6': {
    src: Image2,
    alt: 'Partner website thumbnail',
  },
  '7': {
    src: Image1,
    alt: 'Partner website thumbnail',
  },
  '8': {
    src: Image2,
    alt: 'Partner website thumbnail',
  },
  '9': {
    src: Image1,
    alt: 'Partner website thumbnail',
  },
  '10': {
    src: Image2,
    alt: 'Partner website thumbnail',
  },
};

const Carousel = ({}: PropsType) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(0);
  const divRef = useRef(null);
  const partnerRef = useRef(null);

  const onMouseMove = (e: React.MouseEvent) => {
    const bounds = e.currentTarget.getBoundingClientRect();

    if (e.clientY >= bounds.top && e.clientY <= bounds.bottom) {
      const initialX = e.clientX - bounds.left;
      const initialY = e.clientY - bounds.top;
      // @ts-ignore
      const x = initialX - partnerRef?.current?.clientWidth / 2.3;
      // @ts-ignore
      const y = initialY - partnerRef?.current?.clientHeight * 1.83;
      const partnerWidth =
        // @ts-ignore
        divRef?.current?.clientWidth / divRef?.current?.children?.length;
      const conditionalNum = roundNum(x / partnerWidth);
      const activeIndex = Math.floor(conditionalNum) + 1;

      setActive(activeIndex);
      setMousePosition({ x, y });
    } else {
      setActive(0);
    }
  };

  return (
    <div className={style.carousel} onMouseMove={(e) => onMouseMove(e)}>
      <div
        className={style.img}
        style={
          active != 0
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
        {Object.entries(images).map(([key, value]) => (
          <Image
            key={key}
            src={value.src}
            alt={value.alt}
            data-type="svg"
            data-cursor="pointer"
            rawImg={true}
            // @ts-ignore
            style={active == key ? { opacity: 1 } : { opacity: 0 }}
          />
        ))}
      </div>

      <div className={style.logos} ref={divRef}>
        <div ref={partnerRef}>
          <Partner Icon={PartnerSvg} />
        </div>
        <Partner Icon={PartnerSvg} />
        <Partner Icon={PartnerSvg} />
        <Partner Icon={PartnerSvg} />
        <Partner Icon={PartnerSvg} />
        <Partner Icon={PartnerSvg} />
        <Partner Icon={PartnerSvg} />
        <Partner Icon={PartnerSvg} />
        <Partner Icon={PartnerSvg} />
        <Partner Icon={PartnerSvg} />
      </div>

      {/* Duplicate */}
      <div className={style.logos}>
        <Partner Icon={PartnerSvg} />
        <Partner Icon={PartnerSvg} />
        <Partner Icon={PartnerSvg} />
        <Partner Icon={PartnerSvg} />
        <Partner Icon={PartnerSvg} />
        <Partner Icon={PartnerSvg} />
        <Partner Icon={PartnerSvg} />
        <Partner Icon={PartnerSvg} />
        <Partner Icon={PartnerSvg} />
        <Partner Icon={PartnerSvg} />
      </div>
    </div>
  );
};

export default Carousel;

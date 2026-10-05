'use client';

import React, { useRef, useState } from 'react';
import style from './carousel.module.scss';
import Partner from '../Partner/Partner';
import Logo1 from '@/public/home/partners/1.svg';
import Logo2 from '@/public/home/partners/2.svg';
import Logo3 from '@/public/home/partners/3.png';
import Logo4 from '@/public/home/partners/4.png';
import Logo5 from '@/public/home/partners/5.png';
import Logo6 from '@/public/home/partners/6.png';
import Logo7 from '@/public/home/partners/7.png';
import Logo8 from '@/public/home/partners/8.png';
import Logo9 from '@/public/home/partners/9.svg';
import Logo10 from '@/public/home/partners/10.png';
import Logo11 from '@/public/home/partners/11.svg';
import Image1 from '@/public/home/landing/thumbnail.png';
import Image2 from '@/public/home/work/2.png';
import Image from '@/components/LazyImage/LazyImage';

type PropsType = {};

const roundNum = (num: any) => {
  // @ts-ignore
  return +(Math.round(num + 'e+3') + 'e-3');
};

// Order = display order. Hover previews and links are placeholders for now
const partners = [
  { name: 'Fler', logo: Logo1, preview: Image1, href: '' },
  { name: 'Israsfaren', logo: Logo2, preview: Image2, href: '' },
  { name: 'Solar Norway', logo: Logo3, preview: Image1, href: '' },
  { name: 'Ontee', logo: Logo4, preview: Image2, href: '' },
  { name: "Rimmington's", logo: Logo5, preview: Image1, href: '' },
  { name: 'Adonio', logo: Logo6, preview: Image2, href: '' },
  { name: 'Oslo Yacht Charter', logo: Logo7, preview: Image1, href: '' },
  { name: 'Advertising Big', logo: Logo8, preview: Image2, href: '' },
  { name: 'Somatic Terapi', logo: Logo9, preview: Image1, href: '' },
  { name: 'Jubefa', logo: Logo10, preview: Image2, href: '' },
  { name: 'Komfort AS', logo: Logo11, preview: Image1, href: '' },
];

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
        {partners.map((partner, i) => (
          <a
            key={partner.name}
            target="_blank"
            style={
              active == i + 1
                ? { opacity: 1, pointerEvents: 'initial' }
                : { opacity: 0, pointerEvents: 'none' }
            }
          >
            <Image
              src={partner.preview}
              alt={`${partner.name} website thumbnail`}
              data-type="svg"
              data-cursor="pointer"
              rawImg={true}
            />
          </a>
        ))}
      </div>

      <div className={style.logos} ref={divRef}>
        {partners.map((partner, i) =>
          i === 0 ? (
            <div key={partner.name} ref={partnerRef}>
              <Partner logo={partner.logo} name={partner.name} />
            </div>
          ) : (
            <Partner key={partner.name} logo={partner.logo} name={partner.name} />
          )
        )}
      </div>

      {/* Duplicate */}
      <div className={style.logos} aria-hidden="true">
        {partners.map((partner) => (
          <Partner key={partner.name} logo={partner.logo} name={partner.name} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;

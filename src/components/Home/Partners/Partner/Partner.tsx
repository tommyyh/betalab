'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import style from './partner.module.scss';

type PropsType = {
  logo: React.ComponentType<React.SVGProps<SVGSVGElement>> | StaticImageData;
  name: string;
};

const Partner = ({ logo, name }: PropsType) => {
  // PNG imports are objects with a src, SVG imports are components
  if ('src' in logo) {
    return (
      <div className={style.partner} data-index={1}>
        <Image
          src={logo}
          alt={name}
          width={logo.width / 2}
          height={logo.height / 2}
        />
      </div>
    );
  }

  const Icon = logo;

  return (
    <div className={style.partner} data-index={1}>
      <Icon role="img" aria-label={name} />
    </div>
  );
};

export default Partner;

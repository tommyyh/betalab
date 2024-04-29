'use client';

import React from 'react';
import style from './partner.module.scss';

const Partner = ({ Icon }: any) => {
  return (
    <div className={style.partner} data-index={1}>
      <Icon />
    </div>
  );
};

export default Partner;

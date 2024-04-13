import React from 'react';
import style from './service.module.scss';
import SmallArrowRight from '@/public/icons/small-arrow-right.svg';

type PropsType = {
  service: string;
};

const Service = ({ service }: PropsType) => {
  return (
    <li className={style.service} data-cursor="pointer">
      <SmallArrowRight /> <span>{service}</span>
    </li>
  );
};

export default Service;

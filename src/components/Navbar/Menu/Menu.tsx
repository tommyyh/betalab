'use client';

import React, { useContext } from 'react';
import { MenuContext } from '@/components/Navbar/MenuContext/MenuContext';
import style from './menu.module.scss';
import { useTranslations } from 'next-intl';
import Links from '../Links/Links';

type PropsType = {
  navFallback: {
    home: string;
    work: string;
    services: string;
    contact: string;
  };
};

const Menu = ({ navFallback }: PropsType) => {
  const { isOpen }: any = useContext(MenuContext);
  const l = useTranslations('nav');

  return (
    <div className={isOpen ? `${style.cont} ${style.contOpen}` : style.cont}>
      <div className={style.menu}>
        <div className={style.links}>
          <Links l={l} invalidPrefix={false} fallbackLang={navFallback} />
        </div>
      </div>
    </div>
  );
};

export default Menu;

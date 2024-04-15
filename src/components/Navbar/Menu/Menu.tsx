'use client';

import React, { useContext } from 'react';
import { MenuContext } from '@/components/Navbar/MenuContext/MenuContext';
import style from './menu.module.scss';

const Menu = () => {
  const { isOpen }: any = useContext(MenuContext);

  return (
    <div className={isOpen ? `${style.cont} ${style.contOpen}` : style.cont}>
      <div className={style.menu}>
        {/* <ul>
          <li>Home</li>
          <li>Our Work</li>
          <li>Services</li>
          <li>Contact</li>
        </ul> */}
      </div>
    </div>
  );
};

export default Menu;

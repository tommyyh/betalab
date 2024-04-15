'use client';

import React, { useContext } from 'react';
import style from './menuIcon.module.scss';
import { MenuContext } from '@/components/Navbar/MenuContext/MenuContext';

const MenuIcon = () => {
  const { isOpen, toggleMenu }: any = useContext(MenuContext);

  return (
    <div className={style.menuCont}>
      <button
        className={isOpen ? `${style.menu} ${style.menuOpen}` : style.menu}
        onClick={toggleMenu}
      >
        <span>Menu</span>
        <span>
          Close <div className={style.closeIcon}></div>
        </span>
      </button>
    </div>
  );
};

export default MenuIcon;

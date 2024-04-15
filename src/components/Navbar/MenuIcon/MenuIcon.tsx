'use client';

import React, { useContext, useEffect } from 'react';
import style from './menuIcon.module.scss';
import { MenuContext } from '@/components/Navbar/MenuContext/MenuContext';
import { usePathname } from 'next/navigation';

type PropsType = {
  menu: string;
  close: string;
};

const MenuIcon = ({ menu, close }: PropsType) => {
  const { isOpen, toggleMenu, closeMenu }: any = useContext(MenuContext);
  const pathname = usePathname();

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  return (
    <div className={style.menuCont}>
      <button
        className={isOpen ? `${style.menu} ${style.menuOpen}` : style.menu}
        onClick={toggleMenu}
      >
        <span>{menu}</span>
        <span>
          {close} <div className={style.closeIcon}></div>
        </span>
      </button>
    </div>
  );
};

export default MenuIcon;

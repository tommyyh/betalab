import { Link } from '@/navigation';
import React from 'react';
import style from './navbar.module.scss';

import Logo from '@/public/nav/logo.svg';
import Main from './Main/Main';

const Navbar = () => {
  return (
    <>
      <nav className={style.nav}>
        {/* Main */}
        <Main />

        {/* Middle */}
        <div className={style.middleCont}>
          <Link href={'/'} className={style.middle} aria-label="Home">
            <Logo />
          </Link>
        </div>

        {/* Menu */}
        <div className={style.menuCont}>
          <button className={style.menu}>
            <h4>Menu</h4>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

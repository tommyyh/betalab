import { Link } from '@/navigation';
import React from 'react';
import style from './navbar.module.scss';

import Logo from '@/public/nav/logo.svg';
import Envelope from '@/public/nav/envelope.svg';
import Theme from './Theme/Theme';
import Main from './Main/Main';

const Navbar = () => {
  return (
    <>
      <nav className={style.nav}>
        {/* Main */}
        <Main />

        {/* Middle */}
        <Link href={'/'} className={style.middle}>
          <Logo />
        </Link>

        {/* Menu */}
        <div className={style.menuCont}>
          <button className={style.menu}>
            <h4>Menu</h4>
          </button>
        </div>

        {/* <Link href={'/'}>Home</Link>
      <Link href={'/contact'}>Contact</Link> */}
      </nav>
    </>
  );
};

export default Navbar;

import { Link } from '@/navigation';
import React from 'react';
import style from './navbar.module.scss';

import Logo from '@/public/nav/logo.svg';
import Envelope from '@/public/nav/envelope.svg';
import Theme from './Theme/Theme';

const Navbar = () => {
  return (
    <>
      <nav className={style.nav}>
        {/* Left */}
        <div className={style.left}>
          <div className={style.contact}>
            <Envelope />
          </div>

          <Theme />
        </div>

        {/* Middle */}
        <div className={style.middle}>
          <Logo />
        </div>

        {/* Right */}
        <div className={style.right}>
          <div className={style.menu}>
            <h4>Menu</h4>
          </div>
        </div>

        {/* <Link href={'/'}>Home</Link>
      <Link href={'/contact'}>Contact</Link> */}
      </nav>
    </>
  );
};

export default Navbar;

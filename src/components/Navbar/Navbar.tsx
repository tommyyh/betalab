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
        <Link href={'/'} className={style.middle}>
          <Logo />
        </Link>

        {/* Right */}
        <div className={style.right}>
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

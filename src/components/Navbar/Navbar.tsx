import { Link } from '@/navigation';
import React from 'react';
import style from './navbar.module.scss';

import Image from 'next/image';
import IPhoneBar from '@/public/nav/iPhoneBar.svg';
import Logo from '@/public/nav/logo.svg';
import Envelope from '@/public/nav/envelope.svg';
import Moon from '@/public/nav/moon.svg';

const Navbar = () => {
  return (
    <>
      {/* Status bar for dev */}
      <IPhoneBar style={{ position: 'fixed', top: '0' }} />

      <nav className={style.nav}>
        {/* Left */}
        <div className={style.left}>
          <div className={style.contact}>
            <Envelope />
          </div>

          <div className={style.themeToggle}>
            <Moon />
          </div>
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

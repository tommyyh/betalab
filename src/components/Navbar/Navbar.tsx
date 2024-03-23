import { Link } from '@/navigation';
import React from 'react';
import style from './navbar.module.scss';

import Logo from '@/public/nav/logo.svg';
import Main from './Main/Main';
import { getTranslations } from 'next-intl/server';

const Navbar = async () => {
  const l = await getTranslations('nav');

  return (
    <>
      <nav className={style.nav}>
        {/* Main */}
        <Main l={l} />

        {/* Middle */}
        <div className={style.middleCont}>
          <Link
            href={'/'}
            className={style.middle}
            aria-label={l('general.home')}
          >
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

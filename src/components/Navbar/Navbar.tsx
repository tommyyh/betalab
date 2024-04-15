import { Link } from '@/navigation';
import React from 'react';
import style from './navbar.module.scss';

import Logo from '@/public/nav/logo.svg';
import Main from './Main/Main';
import { getTranslations } from 'next-intl/server';
import Links from './Links/Links';
import MenuIcon from './MenuIcon/MenuIcon';

const Navbar = async () => {
  const l = await getTranslations('nav');

  return (
    <>
      <nav className={style.nav}>
        {/* Main */}
        <Main l={l} />

        {/* Middle */}
        <div className={style.middleCont}>
          <Link href={'/'} className={style.middle} aria-label={'Home'}>
            <Logo />
          </Link>
        </div>

        {/* Link */}
        <Links l={l} desktop={true} />

        {/* Menu for mobile */}
        <MenuIcon menu={l('general.menu')} close={l('general.close')} />
      </nav>
    </>
  );
};

export default Navbar;

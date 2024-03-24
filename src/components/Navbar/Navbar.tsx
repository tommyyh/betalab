import { Link } from '@/navigation';
import React from 'react';
import style from './navbar.module.scss';

import Logo from '@/public/nav/logo.svg';
import Main from './Main/Main';
import { getTranslations } from 'next-intl/server';

const Navbar = async () => {
  let l;

  // Necessary logic for cases where prefix is invalid
  try {
    l = await getTranslations('nav');
  } catch {
    l = {};
  }

  // Navbar is sibling to { children } in layout
  // So we check if the prefix is invalid, we have to prevent error to load 404
  const invalidPrefix = Object.keys(l).length === 0 && l.constructor === Object;
  const fallbackLang = {
    contact: 'Contact us',
    email: 'info@betalab.cloud',
    theme: 'Toggle theme',
  };

  return (
    <>
      <nav className={style.nav}>
        {/* Main */}
        <Main l={l} invalidPrefix={invalidPrefix} fallbackLang={fallbackLang} />

        {/* Middle */}
        <div className={style.middleCont}>
          <Link
            href={'/'}
            className={style.middle}
            aria-label={'Home'}
            locale={invalidPrefix ? 'en' : ('' as 'en')}
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

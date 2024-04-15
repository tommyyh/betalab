import { Link } from '@/navigation';
import React from 'react';
import style from './navbar.module.scss';

import Logo from '@/public/nav/logo.svg';
import Main from './Main/Main';
import { getTranslations } from 'next-intl/server';
import Links from './Links/Links';
import MenuIcon from './MenuIcon/MenuIcon';

const Navbar = async ({ navFallback }: any) => {
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

  return (
    <>
      <nav className={style.nav}>
        {/* Main */}
        <Main l={l} invalidPrefix={invalidPrefix} fallbackLang={navFallback} />

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

        {/* Link */}
        <Links
          l={l}
          invalidPrefix={invalidPrefix}
          fallbackLang={navFallback}
          desktop={true}
        />

        {/* Menu for mobile */}
        <MenuIcon />
      </nav>
    </>
  );
};

export default Navbar;

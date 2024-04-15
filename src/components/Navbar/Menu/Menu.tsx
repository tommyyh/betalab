'use client';

import React, { useContext } from 'react';
import { MenuContext } from '@/components/Navbar/MenuContext/MenuContext';
import style from './menu.module.scss';
import { useTranslations } from 'next-intl';
import Links from '../Links/Links';
import { Link } from '@/navigation';
import SmallArrowRight from '@/public/icons/small-arrow-right.svg';

const Menu = () => {
  const { isOpen }: any = useContext(MenuContext);
  const l = useTranslations('nav');

  return (
    <div className={isOpen ? `${style.cont} ${style.contOpen}` : style.cont}>
      <div className={style.wrapper}>
        <div className={style.menu}>
          <div className={style.links}>
            <Links l={l} />
          </div>
        </div>

        <div className={style.contact}>
          <h5>
            <Link href={l('links.contact.link')}>
              {l('links.contact.title')}
              <SmallArrowRight />
            </Link>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Menu;

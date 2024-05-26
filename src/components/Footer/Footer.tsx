import React from 'react';
import style from './footer.module.scss';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/navigation';
import FooterArrow from '@/public/icons/footer-arrow.svg';
import Links from './Links/Links';
import Copyright from './Copyright';

const Footer = async () => {
  const l = await getTranslations('home.footer');

  return (
    <footer className={style.footer}>
      <div className={style.contact}>
        <h3>{l('contact.title')}</h3>

        <Link href={'/contact'}>
          {l('contact.cta')} <FooterArrow />
        </Link>
      </div>

      <Links l={l} />

      <Copyright>{l('copyright')}</Copyright>
    </footer>
  );
};

export default Footer;

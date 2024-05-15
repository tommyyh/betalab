import React from 'react';
import style from './footer.module.scss';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/navigation';
import FooterArrow from '@/public/icons/footer-arrow.svg';

const Footer = async () => {
  const l = await getTranslations('home.footer');
  const l2 = await getTranslations('nav');

  return (
    <footer className={style.footer}>
      <div className={style.contact}>
        <h3>{l('contact.title')}</h3>

        <Link href={'/contact'}>
          Start today <FooterArrow />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

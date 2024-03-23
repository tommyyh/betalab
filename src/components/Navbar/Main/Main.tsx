import React from 'react';
import style from './main.module.scss';
import Theme from '../Theme/Theme';

import Envelope from '@/public/nav/envelope.svg';
import { Link } from '@/navigation';
import Language from '../Language/Language';

const Main = () => {
  return (
    <div className={style.main}>
      <Link href={'/contact'} className={style.contact}>
        <span>Contact Us</span>
        <Envelope />
      </Link>

      <Theme />

      <h5>info@betalab.cloud</h5>

      <Language />
    </div>
  );
};

export default Main;

import React from 'react';
import style from './main.module.scss';
import Theme from '../Theme/Theme';

import Envelope from '@/public/nav/envelope.svg';

const Main = () => {
  return (
    <div className={style.main}>
        <div className={style.contact}>
        <Envelope />
        </div>

        <Theme />
    </div>
  );
};

export default Main;

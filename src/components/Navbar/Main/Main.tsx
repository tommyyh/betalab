import React from 'react';
import style from './main.module.scss';
import Theme from '../Theme/Theme';

import Envelope from '@/public/nav/envelope.svg';
import { Link } from '@/navigation';
import Language from '../Language/Language';

type PropsType = {
  l: any;
};

const Main = ({ l }: PropsType) => {
  return (
    <div className={style.main}>
      <Link href={'/contact'} className={style.contact}>
        <span>{l('links.contact')}</span>
        <Envelope />
      </Link>

      <Theme l={l('general.theme')} />

      <h5>{l('general.email')}</h5>

      <Language l={l} />
    </div>
  );
};

export default Main;

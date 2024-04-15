import React from 'react';
import style from './main.module.scss';
import Theme from '@/components/Theme/Theme';

import Envelope from '@/public/nav/envelope.svg';
import Send from '@/public/nav/send.svg';
import { Link } from '@/navigation';
import Language from '../Language/Language';

type PropsType = {
  l: any;
};

const Main = ({ l }: PropsType) => {
  return (
    <div className={style.main}>
      <Link
        href={l('links.contact.link')}
        className={style.contact}
        aria-label={l('general.contact')}
      >
        <span>{l('links.contact.title')}</span>

        <div className={style.contactIcon}>
          <div>
            <Envelope />
          </div>
          <div>
            <Send className={style.contactSend} />
          </div>
        </div>
      </Link>

      <Theme l={l('general.theme')} />

      <h5>
        <a href={`mailto:${l('general.email')}`}>{l('general.email')}</a>
      </h5>

      <Language />
    </div>
  );
};

export default Main;

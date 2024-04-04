import React from 'react';
import style from './main.module.scss';
import Theme from '@/components/Theme/Theme';

import Envelope from '@/public/nav/envelope.svg';
import Send from '@/public/nav/send.svg';
import { Link } from '@/navigation';
import Language from '../Language/Language';

type PropsType = {
  l: any;
  invalidPrefix: boolean;
  fallbackLang: any;
};

const Main = ({ l, invalidPrefix, fallbackLang }: PropsType) => {
  // Before rendering, check if prefix is valid -> if not -> load default english values
  return (
    <div className={style.main}>
      <Link
        locale={invalidPrefix ? 'en' : ('' as 'en')}
        href={'/contact'}
        className={style.contact}
        aria-label={invalidPrefix ? fallbackLang.contact : l('general.contact')}
      >
        <span>{invalidPrefix ? fallbackLang.contact : l('links.contact')}</span>

        <div className={style.contactIcon}>
          <div>
            <Envelope />
          </div>
          <div>
            <Send className={style.contactSend} />
          </div>
        </div>
      </Link>

      <Theme l={invalidPrefix ? fallbackLang.theme : l('general.theme')} />

      <h5>
        <a
          href={`mailto:${
            invalidPrefix ? fallbackLang.email : l('general.email')
          }`}
        >
          {invalidPrefix ? fallbackLang.email : l('general.email')}
        </a>
      </h5>

      <Language />
    </div>
  );
};

export default Main;

import React from 'react';
import style from './main.module.scss';
import Theme from '@/components/Theme/Theme';
import Language from '../Language/Language';
import Contact from './Contact/Contact';

type PropsType = {
  l: any;
};

const Main = ({ l }: PropsType) => {
  return (
    <div className={style.main}>
      <Contact
        link={l('links.contact.link')}
        label={l('general.contact')}
        title={l('links.contact.title')}
      />

      <Theme l={l('general.theme')} />

      <h5>
        <a href={`mailto:${l('general.email')}`}>{l('general.email')}</a>
      </h5>

      <Language />
    </div>
  );
};

export default Main;

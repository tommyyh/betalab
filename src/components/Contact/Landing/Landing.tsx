import React from 'react';
import style from './landing.module.scss';
import Info from './Info';
import Socials from '@/components/Socials/Socials';
import Span from './Span/Span';

type PropsType = {
  lang: any;
};

const Landing = ({ lang }: PropsType) => {
  return (
    <section className={style.landing}>
      <h1>
        <Span text={lang('landing.title.1')} index={1} />
        <Span text={lang('landing.title.2')} index={2} />
      </h1>

      <Info lang={lang} />
      <Socials />
    </section>
  );
};

export default Landing;

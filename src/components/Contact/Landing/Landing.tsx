import React from 'react';
import style from './landing.module.scss';
import Info from './Info';
import Socials from '@/components/Socials/Socials';

type PropsType = {
  lang: any;
};

const Landing = ({ lang }: PropsType) => {
  return (
    <section className={style.landing}>
      <h1>
        {lang.rich('landing.title', {
          span: (chunks: any) => <span>{chunks}</span>,
        })}
      </h1>

      <Info lang={lang} />
      <Socials />
    </section>
  );
};

export default Landing;

import React from 'react';
import style from './landing.module.scss';
import BtnLink from '@/components/BtnLink/BtnLink';
import Thumbnail from './Thumbnail/Thumbnail';

type PropsType = {
  l: any;
};

const Landing = ({ l }: PropsType) => {
  return (
    <main className={style.landing}>
      <div className={style.content}>
        <div className={style.main}>
          <h1>
            <span>{l('landing.title.1')} </span>
            <span>{l('landing.title.2')} </span>
            {l('landing.title.3')}
          </h1>

          <BtnLink
            href={'/contact'}
            title={l('landing.cta')}
            customClass={style.link}
          />
        </div>

        <p>{l('landing.text')}</p>
      </div>

      <div className={style.thumbnail}>
        <Thumbnail />
      </div>
    </main>
  );
};

export default Landing;

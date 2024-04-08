import React from 'react';
import style from './landing.module.scss';
import BtnLink from '@/components/BtnLink/BtnLink';
import Thumbnail from './Thumbnail/Thumbnail';
import Text from '@/components/Text/Text';
import Title from './Title/Title';

type PropsType = {
  l: any;
};

const Landing = ({ l }: PropsType) => {
  return (
    <main className={style.landing}>
      <div className={style.content}>
        <div className={style.main}>
          <Title
            l1={l('landing.title.1')}
            l2={l('landing.title.2')}
            l3={l('landing.title.3')}
          />

          <BtnLink
            href={'/contact'}
            title={l('landing.cta')}
            customClass={style.link}
          />
        </div>

        <Text animateRightAway={true}>{l('landing.text')}</Text>
      </div>

      <div className={style.thumbnail}>
        <Thumbnail />
      </div>
    </main>
  );
};

export default Landing;

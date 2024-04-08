import React from 'react';
import style from './landing.module.scss';
import Thumbnail from './Thumbnail/Thumbnail';
import Text from '@/components/Text/Text';
import Title from './Title/Title';
import Button from './Button/Button';

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

          <Button
            href={'/contact'}
            title={l('landing.cta')}
            customClass={style.link}
            wrapperClass={style.btnWrapper}
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

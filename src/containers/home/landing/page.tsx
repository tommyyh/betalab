import React from 'react';
import style from './landing.module.scss';
import BtnLink from '@/components/BtnLink/BtnLink';
import Thumbnail from './thumbnail/page';

const Landing = () => {
  return (
    <main className={style.landing}>
      <div className={style.content}>
        <div className={style.main}>
          <h1>
            <span>Streamline your</span> <span>business sales</span> with our
            web solutions
          </h1>

          <BtnLink
            href={'/contact'}
            title={'Our solution'}
            customClass={style.link}
          />
        </div>

        <p>
          For many years, we’ve helped numerous businesses increase their profit
          & gain more clients with our tailored digital solutions, that will
          100% guarantee your desired results.
        </p>
      </div>

      <div className={style.thumbnail}>
        <Thumbnail />
      </div>
    </main>
  );
};

export default Landing;

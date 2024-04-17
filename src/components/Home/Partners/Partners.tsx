import React from 'react';
import style from './partners.module.scss';
import Carousel from './Carousel/Carousel';

type PropsType = {
  l: any;
};

const Partners = ({ l }: PropsType) => {
  const lang = 'partners';

  return (
    <section className={style.partners}>
      <h2>{l(`${lang}.title`)}</h2>

      <Carousel />
    </section>
  );
};

export default Partners;

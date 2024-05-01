import React from 'react';
import style from './reviews.module.scss';
import Intersection from './Intersection/Intersection';
import Review from './Review/Review';
import Carousel from './Carousel/Carousel';

type PropsType = {
  l: any;
};

const Reviews = ({ l }: PropsType) => {
  const lang = 'reviews';

  return (
    <>
      <Intersection />

      <section className={style.reviews}>
        <h2>{l(`${lang}.title`)}</h2>

        <Carousel />
      </section>
    </>
  );
};

export default Reviews;

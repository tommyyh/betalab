import React from 'react';
import style from './reviews.module.scss';
import Intersection from './Intersection/Intersection';
import Review from './Review/Review';
import Carousel from './Carousel/Carousel';
import Title from '../Title/Text';

type PropsType = {
  l: any;
};

type ReviewsType = {
  text: string;
  author: string;
  rating: number;
};

const Reviews = ({ l }: PropsType) => {
  const lang = 'reviews';
  const keys = Array.from(new Array(parseInt(l(`${lang}.length`))), (x, i) =>
    (i + 1).toString()
  );
  const reviews: ReviewsType[] = [];

  keys.forEach((key) =>
    reviews.push({
      text: l(`${lang}.list.${key}.text`),
      author: l(`${lang}.list.${key}.author`),
      rating: l(`${lang}.list.${key}.rating`),
    })
  );

  return (
    <>
      <Intersection />

      <section className={style.reviews}>
        <h2>
          <Title>{l(`${lang}.title`)}</Title>
        </h2>

        <Carousel reviews={reviews} />
      </section>
    </>
  );
};

export default Reviews;

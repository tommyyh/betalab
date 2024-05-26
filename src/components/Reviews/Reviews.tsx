import React from 'react';
import style from './reviews.module.scss';
import Intersection from './Intersection/Intersection';
import Carousel from './Carousel/Carousel';
import Title from '../Title/Text';
// Review images
import Review1Img from '@/public/reviews/1/1.png';
import Review2Img from '@/public/reviews/2/2.png';
import Review3Img from '@/public/reviews/3/3.png';

type PropsType = {
  l: any;
  scrollTrigger?: boolean;
};

type ReviewsType = {
  text: string;
  author: string;
  rating: number;
  img: any;
};

const Reviews = ({ l, scrollTrigger }: PropsType) => {
  const lang = 'reviews';
  const reviews: ReviewsType[] = [
    {
      text: l(`${lang}.list.1.text`),
      author: l(`${lang}.list.1.author`),
      rating: l(`${lang}.list.1.rating`),
      img: Review1Img,
    },
    {
      text: l(`${lang}.list.2.text`),
      author: l(`${lang}.list.2.author`),
      rating: l(`${lang}.list.2.rating`),
      img: Review2Img,
    },
    {
      text: l(`${lang}.list.3.text`),
      author: l(`${lang}.list.3.author`),
      rating: l(`${lang}.list.3.rating`),
      img: Review3Img,
    },
  ];

  return (
    <>
      <Intersection scrollTrigger={scrollTrigger} />

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

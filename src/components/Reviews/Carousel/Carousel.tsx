'use client';

import React, { useState } from 'react';
import style from './carousel.module.scss';
import Review from '../Review/Review';
// Review 1 image
import Review1Img from '@/public/reviews/1/1.png';
// Review 2 image
import Review2Img from '@/public/reviews/2/2.png';
// Review 3 image
import Review3Img from '@/public/reviews/3/3.png';

const Carousel = () => {
  const [activeReview, setActiveReview] = useState(1);
  const reviewCount = 3;
  const customClass = `list${activeReview}`;

  return (
    <div className={`${style.carousel} ${style[customClass]}`}>
      <Review
        img={Review2Img}
        setActiveReview={setActiveReview}
        activeReview={activeReview}
        reviewCount={reviewCount}
        customClass={style.review1}
        text="We know getting sales isn’t easy without a good website in this new digital era. But that’s why we’re here - to help you get more clients, stand out from the crowd."
        rating={4.8}
        author={'James web - Telescope'}
      />
      <Review
        img={Review1Img}
        setActiveReview={setActiveReview}
        activeReview={activeReview}
        reviewCount={reviewCount}
        customClass={style.review2}
        text="Both our client getting sales isn’t easy without a good website in this new digital era. But that’s why we’re here - to help you get more clients, stand out from the."
        rating={4.2}
        author={'David Brook - Apple'}
      />
      <Review
        img={Review3Img}
        setActiveReview={setActiveReview}
        activeReview={activeReview}
        reviewCount={reviewCount}
        customClass={style.review3}
        text="Bruh triple car sales isn’t easy without a good website in this new digital era. But that’s why we’re here - to help you get more clients, stand out."
        rating={5}
        author={'Elon Musk - SpaceX'}
      />
    </div>
  );
};

export default Carousel;

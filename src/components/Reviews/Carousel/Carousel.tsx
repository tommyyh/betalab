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
  const customClass = `review${activeReview}`;

  return (
    <div className={`${style.carousel} ${style[customClass]}`}>
      <Review
        img={Review1Img}
        setActiveReview={setActiveReview}
        activeReview={activeReview}
        reviewCount={reviewCount}
      />
      <Review
        img={Review2Img}
        setActiveReview={setActiveReview}
        activeReview={activeReview}
        reviewCount={reviewCount}
      />
      <Review
        img={Review3Img}
        setActiveReview={setActiveReview}
        activeReview={activeReview}
        reviewCount={reviewCount}
      />
    </div>
  );
};

export default Carousel;

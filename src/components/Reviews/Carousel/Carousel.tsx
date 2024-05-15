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

type ReviewsType = {
  reviews: Array<{
    text: string;
    author: string;
    rating: number;
  }>;
};

const Carousel = ({ reviews }: ReviewsType) => {
  const [activeReview, setActiveReview] = useState(1);
  const reviewCount = reviews.length;
  const customClass = `list${activeReview}`;

  return (
    <div className={`${style.carousel} ${style[customClass]}`}>
      {reviews.map((review, index) => (
        <Review
          key={index}
          img={Review2Img}
          setActiveReview={setActiveReview}
          activeReview={activeReview}
          reviewCount={reviewCount}
          customClass={`${style[`review${index + 1}`]}`}
          text={review.text}
          rating={review.rating}
          author={review.author}
        />
      ))}
    </div>
  );
};

export default Carousel;

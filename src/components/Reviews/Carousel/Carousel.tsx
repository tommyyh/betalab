'use client';

import React, { useState } from 'react';
import style from './carousel.module.scss';
import Review from '../Review/Review';

type ReviewsType = {
  reviews: Array<{
    text: string;
    author: string;
    rating: number;
    img: any;
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
          img={review.img}
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

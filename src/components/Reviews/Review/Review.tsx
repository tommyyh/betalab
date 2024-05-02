'use client';

import React from 'react';
import style from './review.module.scss';
import General from '../General/General';
import Images from './Images';

type PropsType = {
  img: any;
  setActiveReview: any;
  reviewCount: any;
  activeReview: any;
  customClass: any;
  text: string;
  rating: number;
  author: string;
};

const Review = ({
  img,
  setActiveReview,
  activeReview,
  reviewCount,
  customClass,
  text,
  rating,
  author,
}: PropsType) => {
  return (
    <div className={`${style.review} ${customClass}`}>
      <div className={style.content}>
        <div className={style.text}>
          <p>{text}</p>
        </div>

        <General
          setActiveReview={setActiveReview}
          activeReview={activeReview}
          reviewCount={reviewCount}
          rating={rating}
          author={author}
        />
      </div>

      <Images img={img} />
    </div>
  );
};

export default Review;

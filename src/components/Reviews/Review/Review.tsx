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
};

const Review = ({
  img,
  setActiveReview,
  activeReview,
  reviewCount,
}: PropsType) => {
  return (
    <div className={style.review}>
      <div className={style.content}>
        <div className={style.text}>
          <p>
            We know getting sales isn’t easy without a good website in this new
            digital era. But that’s why we’re here - to help you get more
            clients, stand out from the crowd.
          </p>
        </div>

        <General
          setActiveReview={setActiveReview}
          activeReview={activeReview}
          reviewCount={reviewCount}
        />
      </div>

      <Images img={img} />
    </div>
  );
};

export default Review;

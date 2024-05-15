import React from 'react';
import style from './general.module.scss';
import Previous from '@/public/icons/review-prev.svg';
import Next from '@/public/icons/review-next.svg';
import Rating from './Rating';
import Title from '@/components/Title/Text';

const General = ({
  setActiveReview,
  activeReview,
  reviewCount,
  author,
  rating,
}: any) => {
  const next = () => {
    if (activeReview >= reviewCount) return;

    setActiveReview((prevState: number) => prevState + 1);
  };

  const prev = () => {
    if (activeReview <= 1) return;

    setActiveReview((prevState: number) => prevState - 1);
  };

  return (
    <div className={style.general}>
      <div className={style.author}>
        <Rating rating={rating} />

        <h4>
          <Title>{author}</Title>
        </h4>
      </div>

      {/* Switch between reviews */}
      <div className={style.controls}>
        <button
          className={style.prev}
          onClick={prev}
          disabled={activeReview === 1 ? true : false}
        >
          <Previous />
        </button>

        <button
          className={style.next}
          onClick={next}
          disabled={activeReview >= reviewCount ? true : false}
        >
          <Next />
        </button>
      </div>
    </div>
  );
};

export default General;

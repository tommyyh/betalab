import React from 'react';
import style from './general.module.scss';
import Previous from '@/public/icons/review-prev.svg';
import Next from '@/public/icons/review-next.svg';
import Rating from './Rating';

const General = ({ setActiveReview, activeReview, reviewCount }: any) => {
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
        <Rating rating={4.4} />

        <h4>James web - Telescope</h4>
      </div>

      {/* Switch between reviews */}
      <div className={style.controls}>
        <button className={style.prev} onClick={prev}>
          <Previous />
        </button>

        <button className={style.next} onClick={next}>
          <Next />
        </button>
      </div>
    </div>
  );
};

export default General;

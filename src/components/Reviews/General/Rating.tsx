import React from 'react';
import style from './general.module.scss';

// Rating
type RatingProps = {
  rating: number;
};

const Rating = ({ rating }: RatingProps) => {
  const bars = [0, 1, 2, 3, 4]; // Number of bars (5) with corresponding indexes to progress
  const barProgress: number[] = []; // Bar progress percentages
  let ratingNum = rating; // Clone original rating
  const roundedRating = Math.ceil(ratingNum); // Round up rating for calculations

  // Distribute percentages to each bars
  for (let x = 1; x <= roundedRating; x++) {
    // X is smaller than rounded up number
    if (x === roundedRating) {
      // If x === to rounded num => calc diff and get fraction
      barProgress.push(Math.round((1 - (x - ratingNum)) * 100));
    } else {
      barProgress.push(Math.round(1 * 100)); // Add 100%
    }
  }

  return (
    <div className={style.rating}>
      {bars.map((num) => (
        <div
          key={num}
          className={style.bar}
          style={{
            background: `linear-gradient(to right, white ${barProgress[num]}%, black 0%)`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default Rating;

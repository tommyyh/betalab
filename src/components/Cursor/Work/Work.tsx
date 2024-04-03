import React from 'react';
import style from './work.module.scss';

const Work = ({ pointer, workPercentage }: any) => {
  return (
    <>
      <span
        className={`
          ${pointer === 'work' ? style.workActive : ''} 
          ${style.work}
        `}
      >
        View work
      </span>

      {/* Work indicator of cursor position */}
      <svg
        width="250"
        height="250"
        viewBox="0 0 250 250"
        className={`${style.workIndicator} ${
          pointer === 'work' ? style.workIndicatorActive : ''
        }`}
        style={{ ['--progress' as string]: workPercentage }}
      >
        <circle className={style.workInner}></circle>
      </svg>
    </>
  );
};

export default Work;

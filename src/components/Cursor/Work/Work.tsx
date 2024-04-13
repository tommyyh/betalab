import React from 'react';
import style from './work.module.scss';

const Work = ({ pointer }: any) => {
  return (
    <span
      className={`
          ${pointer === 'work' ? style.workActive : ''} 
          ${style.work}
        `}
    >
      View work
    </span>
  );
};

export default Work;

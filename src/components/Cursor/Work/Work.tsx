import React from 'react';
import style from './work.module.scss';

const Work = ({ pointer }: any) => {
  const pathname = window.location.pathname.split('/')[1];
  let title = pathname === 'en' ? 'View work' : 'Zobrazit práci';

  return (
    <span
      className={`
          ${pointer === 'work' ? style.workActive : ''} 
          ${style.work}
        `}
    >
      {!title ? 'View work' : title}
    </span>
  );
};

export default Work;

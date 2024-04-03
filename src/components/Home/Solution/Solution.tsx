import React from 'react';
import style from './solution.module.scss';

type PropsType = {
  l: any;
};

const Solution = ({ l }: PropsType) => {
  return (
    <section className={style.solution}>
      <h2>{l('solution.title')}</h2>
      <p>{l('solution.text')}</p>
    </section>
  );
};

export default Solution;

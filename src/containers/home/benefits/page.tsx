import React from 'react';
import style from './benefits.module.scss';

type PropsType = {
  l: any;
};

const Benefits = ({ l }: PropsType) => {
  return (
    <section className={style.benefits}>
      <h2>Benefits</h2>
    </section>
  );
};

export default Benefits;

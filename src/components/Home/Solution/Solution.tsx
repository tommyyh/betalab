import React from 'react';
import style from './solution.module.scss';
import Text from '@/components/Text/Text';

type PropsType = {
  l: any;
};

const Solution = ({ l }: PropsType) => {
  return (
    <section className={style.solution}>
      <h2>{l('solution.title')}</h2>
      <Text>{l('solution.text')}</Text>
    </section>
  );
};

export default Solution;

import React from 'react';
import style from './benefits.module.scss';
import Benefit from './Benefit/Benefit';
import Title from '@/components/Title/Text';

type PropsType = {
  lang: any;
};

const Benefits = ({ lang }: PropsType) => {
  const l = (key: string) => lang(`benefits.${key}`); // Translation
  const benefitsList = ['1', '2', '3', '4'] as const;

  return (
    <section className={style.benefits}>
      <h2>
        <Title>{l('title')}</Title>
      </h2>

      {benefitsList.map((key: any) => (
        <Benefit key={key} benefitKey={key} lang={lang} />
      ))}
    </section>
  );
};

export default Benefits;

import React from 'react';
import style from './landing.module.scss';
import Title from '@/components/Title/Text';
import Navigation from '../Navigation/Navigation';

type PropsType = {
  lang: any;
};

const Landing = ({ lang }: PropsType) => {
  const l = (word: string) => lang(`landing.${word}`);
  const linkKeys = Array(parseInt(l('length')))
    .fill(1)
    .map((e, i) => e + i * 1);
  const navigation = [] as any;

  linkKeys.forEach((key, index) => {
    navigation.push({
      title: l(`navigation.${index + 1}.title`),
      id: l(`navigation.${index + 1}.id`),
    });
  });

  return (
    <section className={style.landing}>
      <h1>
        <Title animateRightAway={true} stagger={0.065}>
          {l('title')}
        </Title>
      </h1>

      <Navigation links={navigation} />
    </section>
  );
};

export default Landing;

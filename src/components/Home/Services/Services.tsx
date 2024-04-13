import React from 'react';
import style from './services.module.scss';
import Service from './Service/Service';

type PropsType = {
  l: any;
};

const Services = ({ l }: PropsType) => {
  const keys = ['1', '2', '3'] as const;
  return (
    <section className={style.services}>
      {keys.map((key) => (
        <Group key={key} index={key} l={l} />
      ))}
    </section>
  );
};

// Group
type GroupType = {
  index: string;
  l: any;
};

const Group = ({ index, l }: GroupType) => {
  const lang = `services.${index}`;
  const keys = Array.from(new Array(parseInt(l(`${lang}.length`))), (x, i) =>
    (i + 1).toString()
  );

  return (
    <div className={style.group}>
      <div className={style.content}>
        <h3>{l(`${lang}.title`)}</h3>

        <ul>
          {keys.map((key) => (
            <Service service={l(`${lang}.list.${key}`)} key={key} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Services;

import React from 'react';
import style from './benefit.module.scss';
import Title from '@/components/Title/Text';

type PropsType = {
  benefitKey: string;
  lang: any;
};

const Benefit = ({ benefitKey, lang }: PropsType) => {
  const l = (key: string) => lang(`benefits.list.${benefitKey}.${key}`); // Translation
  const translationPath = `benefits.list.${benefitKey}`;

  return (
    <div className={style.benefit}>
      <div className={style.left}>
        <h3>
          <Title>{l('feature')}</Title>
        </h3>
        <h4>
          {lang.rich(`${translationPath}.title`, {
            span: (chunks: any) => <span>{chunks}</span>,
          })}
        </h4>
      </div>

      <p>
        {lang.rich(`${translationPath}.text`, {
          span: (chunks: any) => <span>{chunks}</span>,
        })}
      </p>
    </div>
  );
};

export default Benefit;

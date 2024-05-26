import React from 'react';
import Item from './Item/Item';

type PropsType = {
  lang: any;
};

const Info = ({ lang }: PropsType) => {
  const l = (word: string) => lang(`landing.${word}`);

  return (
    <ul>
      <Item href={`mailto:${l('mail')}`} text={l('mail')} index={1} />
      <Item
        href={`tel:${l('tel').replaceAll(' ', '')}`}
        text={l('tel')}
        index={2}
      />
      <Item href={`mailto:${l('mail')}`} text={l('note')} index={3} />
    </ul>
  );
};

export default Info;

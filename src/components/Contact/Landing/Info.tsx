import React from 'react';
import ContactArrow from '@/public/icons/contact-arrow.svg';

type PropsType = {
  lang: any;
};

const Info = ({ lang }: PropsType) => {
  const l = (word: string) => lang(`landing.${word}`);

  return (
    <ul>
      <li>
        <a href={`mailto:${l('mail')}`}>
          <ContactArrow />
          {l('mail')}
        </a>
      </li>
      <li>
        <a href={`tel:${l('tel').replaceAll(' ', '')}`}>
          <ContactArrow />
          {l('tel')}
        </a>
      </li>
      <li>
        <a href={`mailto:${l('mail')}`}>
          <ContactArrow />
          {l('note')}
        </a>
      </li>
    </ul>
  );
};

export default Info;

import React from 'react';
import style from './language.module.scss';

type PropsType = {
  l: any;
};

const Language = ({ l }: PropsType) => {
  return (
    <select name="language" id={style.language} aria-label={l('general.lang')}>
      <option value="en">English</option>
      <option value="cz">Čeština</option>
    </select>
  );
};

export default Language;

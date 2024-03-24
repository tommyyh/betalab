import React from 'react';
import style from './language.module.scss';
import LangLink from './LangLink/LangLink';

const Language = async () => {
  return (
    <button className={style.language} aria-label={'Select a language'}>
      <LangLink />
    </button>
  );
};

export default Language;

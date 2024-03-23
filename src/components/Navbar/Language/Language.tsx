import React from 'react';
import style from './language.module.scss';

const Language = () => {
  return (
    <select name="language" id={style.language}>
      <option value="en">English</option>
      <option value="cz">Czech</option>
    </select>
  );
};

export default Language;

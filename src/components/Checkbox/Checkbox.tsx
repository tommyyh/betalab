import React from 'react';
import style from './checkbox.module.scss';

type PropsType = {
  checked: boolean;
  onChange: any;
  labelId?: string;
};

const Checkbox = ({ checked, onChange, labelId }: PropsType) => {
  return (
    <div className={style.checkbox}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        id={labelId}
      />
    </div>
  );
};

export default Checkbox;

'use client';

import React from 'react';
import style from './select.module.scss';

type PropsType = {
  label: string;
  name: string;
  customId?: string;
  data: any;
  setData: any;
  options: any;
  state: string;
};

const Select = ({
  label,
  name,
  customId,
  data,
  setData,
  options,
  state,
}: PropsType) => {
  return (
    <div
      className={`${style.select} ${
        state === 'success' ? style.inputSuccess : ''
      }`}
      data-cursor="pointer"
    >
      <label htmlFor={customId}>{label}</label>
      <select
        name={name}
        id={customId}
        value={data[name].value}
        onChange={(e) =>
          setData({ ...data, [name]: { value: e.target.value, error: '' } })
        }
      >
        {options.map((service: string, key: number) => (
          <option key={key} value={service}>
            {service}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;

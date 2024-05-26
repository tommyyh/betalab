'use client';

import React from 'react';
import style from './select.module.scss';
import { motion } from 'framer-motion';

type PropsType = {
  label: string;
  name: string;
  customId?: string;
  data: any;
  setData: any;
  options: any;
  state: string;
  index: number;
};

const Select = ({
  label,
  name,
  customId,
  data,
  setData,
  options,
  state,
  index,
}: PropsType) => {
  return (
    <motion.div
      className={`${style.select} ${
        state === 'success' ? style.inputSuccess : ''
      }`}
      data-cursor="pointer"
      initial={{ opacity: '0%' }}
      animate={{ opacity: '100%' }}
      transition={{ duration: 0.725, delay: 0.072 * (index * 0.69) }}
      custom={index}
      key={index}
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
    </motion.div>
  );
};

export default Select;

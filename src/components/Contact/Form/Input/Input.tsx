'use client';

import React, { useState, useEffect } from 'react';
import style from './input.module.scss';
import Tick from '@/public/icons/tick.svg';
import { motion } from 'framer-motion';

type PropsType = {
  label: string;
  placeholder: string;
  name: string;
  errorMsg?: string;
  type: string;
  customId?: string;
  data: any;
  validationFunction?: any;
  setData: any;
  state: string;
  index: number;
  textarea?: boolean;
};

const Input = ({
  label,
  placeholder,
  name,
  errorMsg,
  type,
  customId,
  data,
  setData,
  validationFunction,
  state,
  index,
  textarea = false,
}: PropsType) => {
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
  const [success, setSuccess] = useState(false);
  const [prevValue, setPrevValue] = useState(data[name].value);

  useEffect(() => {
    // Cleanup timer on unmount
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [timer]);

  const validateInput = (value: string) => {
    let error = '';

    if (validationFunction && !validationFunction(value)) {
      error = errorMsg
        ? errorMsg
        : "Something isn't adding up, please try again";
      setSuccess(false);
    } else {
      error = '';
      setSuccess(true);
    }

    // Update the data state with the validation result
    setData((prevData: any) => ({
      ...prevData,
      [name]: { value, error },
    }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value } = e.target;

    if (timer) clearTimeout(timer);

    setSuccess(false);
    setData((prevData: any) => ({
      ...prevData,
      [name]: { value, error: '' },
    }));

    const newTimer = setTimeout(() => {
      validateInput(value);
      setPrevValue(value);
    }, 830);

    setTimer(newTimer);
  };

  const handleBlur = () => {
    if (data[name].value !== prevValue) {
      validateInput(data[name].value);
    }
  };

  // Class name
  let className;

  if (state === 'success') {
    className = `${style.input} ${style.inputSuccess}`;
  } else if (data[name].error) {
    className = `${style.input} ${style.error}`;
  } else {
    className = style.input;
  }

  return (
    <motion.div
      className={className}
      data-cursor="pointer"
      initial={{ opacity: '0%' }}
      animate={{ opacity: '100%' }}
      transition={{ duration: 0.725, delay: 0.072 * (index * 0.69) }}
      custom={index}
      key={index}
    >
      <label htmlFor={customId}>{label}</label>
      <div
        className={`${success ? style.success : ''} ${
          textarea ? style.textareaCont : ''
        } ${style.cont}`}
      >
        {!textarea ? (
          <input
            type={type}
            placeholder={placeholder}
            name={name}
            id={customId}
            value={data[name].value}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        ) : (
          <textarea
            placeholder={placeholder}
            name={name}
            id={customId}
            value={data[name].value}
            onChange={handleChange}
            onBlur={handleBlur}
          ></textarea>
        )}

        <Tick />
      </div>

      {data[name].error && <p>{data[name].error}</p>}
    </motion.div>
  );
};

export default Input;

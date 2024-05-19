'use client';

import React, { useState, useEffect } from 'react';
import style from './input.module.scss';
import Tick from '@/public/icons/tick.svg';

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    <div className={className} data-cursor="pointer">
      <label htmlFor={customId}>{label}</label>
      <div className={`${success ? style.success : ''} ${style.cont}`}>
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          id={customId}
          value={data[name].value}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Tick />
      </div>

      {data[name].error && <p>{data[name].error}</p>}
    </div>
  );
};

export default Input;

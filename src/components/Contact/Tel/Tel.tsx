'use client';

import React, { useState, useEffect } from 'react';
import style from './tel.module.scss';
import { validatePrefix, validateTel } from '@/helper/dataValidation';
import Tick from '@/public/icons/tick.svg';

type PropsType = {
  label: string;
  placeholder: string;
  name: string;
  error1: string;
  error2: string;
  type: string;
  prefixType: string;
  prefixName: string;
  prefixPlaceholder: string;
  customId?: string;
  data: any;
  setData: any;
  state: string;
};

const Tel = ({
  label,
  placeholder,
  name,
  error1,
  error2,
  type,
  customId,
  data,
  setData,
  prefixType,
  prefixName,
  prefixPlaceholder,
  state,
}: PropsType) => {
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
  const [success, setSuccess] = useState(false);
  const [prevPrefixValue, setPrevPrefixValue] = useState(
    data[prefixName].value
  );
  const [prevTelValue, setPrevTelValue] = useState(data[name].value);

  useEffect(() => {
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [timer]);

  const validateInput = (prefixValue: string, telValue: string) => {
    let prefixError = '';
    let telError = '';

    if (!validatePrefix(prefixValue)) {
      prefixError = error2;
    }

    if (!validateTel(telValue)) {
      telError = error1;
    }

    const hasError = prefixError || telError;

    // Update data
    setSuccess(!hasError);
    setData((prevData: any) => ({
      ...prevData,
      [prefixName]: { value: prefixValue, error: prefixError },
      [name]: { value: telValue, error: telError },
    }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    const { value } = e.target;

    if (timer) clearTimeout(timer);

    setSuccess(false);
    setData((prevData: any) => ({
      ...prevData,
      [field]: { value, error: '' },
    }));

    const newTimer = setTimeout(() => {
      const newPrefixValue =
        field === prefixName ? value : data[prefixName].value;
      const newTelValue = field === name ? value : data[name].value;

      validateInput(newPrefixValue, newTelValue);
      setPrevPrefixValue(newPrefixValue);
      setPrevTelValue(newTelValue);
    }, 830);

    setTimer(newTimer);
  };

  const handleBlur = () => {
    const currentPrefixValue = data[prefixName].value;
    const currentTelValue = data[name].value;
    if (
      currentPrefixValue !== prevPrefixValue ||
      currentTelValue !== prevTelValue
    ) {
      validateInput(currentPrefixValue, currentTelValue);
    }
  };

  let showError;
  if (data[prefixName].error) {
    showError = data[prefixName].error;
  } else if (data[name].error) {
    showError = data[name].error;
  } else {
    showError = '';
  }

  return (
    <div
      className={`${style.input} ${
        state === 'success' ? style.inputSuccess : ''
      }`}
      data-cursor="pointer"
    >
      <label htmlFor={customId}>{label}</label>

      <div className={`${success ? style.success : ''} ${style.fields}`}>
        {/* Prefix */}
        <input
          type={prefixType}
          placeholder={prefixPlaceholder}
          name={prefixName}
          id={customId}
          value={data[prefixName].value}
          onChange={(e) => handleChange(e, prefixName)}
          onBlur={handleBlur}
          className={data[prefixName].error ? style.inputError : ''}
        />

        {/* Number */}
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          id={customId}
          value={data[name].value}
          onChange={(e) => handleChange(e, name)}
          onBlur={handleBlur}
          className={data[name].error ? style.inputError : ''}
        />

        <Tick />
      </div>

      {/* Error */}
      {showError && <p>{showError}</p>}
    </div>
  );
};

export default Tel;

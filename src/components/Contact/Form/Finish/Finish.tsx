'use client';

import React from 'react';
import style from './finish.module.scss';
import Checkbox from '@/components/Checkbox/Checkbox';
import ContactSuccess from '@/public/icons/contactSuccess.svg';
import { motion } from 'framer-motion';

type PropsType = {
  l: any;
  data: any;
  setData: any;
  state?: string;
};

const Finish = ({ l, data, setData, state }: PropsType) => {
  let buttonClass;
  let buttonTitle = ''; // Active button title defined -> Only loading and success left

  if (state === 'success') {
    buttonClass = style.buttonSuccess;
    buttonTitle = l.success;
  } else if (state === 'pending') {
    buttonClass = style.pending;
    buttonTitle = l.loading;
  } else {
    buttonClass = '';
  }

  return (
    <div
      className={`${style.bottom} ${
        state === 'success' ? style.inputSuccess : ''
      }`}
    >
      <motion.div
        className={
          state === 'pending'
            ? `${style.newsletter} ${style.newsletterPending}`
            : style.newsletter
        }
        data-cursor="pointer"
        initial={{ opacity: '0%' }}
        animate={{ opacity: '100%' }}
        transition={{ duration: 0.6, delay: 0.072 * (7 * 0.65) }}
        custom={7}
        key={7}
      >
        <Checkbox
          checked={data.newsletter.value}
          onChange={() =>
            setData({ ...data, newsletter: { value: !data.newsletter.value } })
          }
          labelId="formCheckbox"
        />
        <label htmlFor="formCheckbox">{l.newsletter}</label>
      </motion.div>

      <motion.button
        type="submit"
        id={buttonClass}
        disabled={state === 'active' ? false : true}
        initial={{ opacity: '0%' }}
        animate={{ opacity: '100%' }}
        transition={{ duration: 0.725, delay: 0.072 * (8 * 0.69) }}
        custom={8}
        key={8}
      >
        {state === 'active' || state === 'error' ? (
          <>
            <div>{l.submit}</div>
            <div>{l.submit}</div>
          </>
        ) : (
          <>
            {buttonTitle}
            {state === 'success' ? (
              <span className={style.iconSuccess}>
                <ContactSuccess />
              </span>
            ) : (
              <span className={style.loader}>
                <span className={style.dot}></span>
                <span className={style.dot}></span>
                <span className={style.dot}></span>
              </span>
            )}
          </>
        )}
      </motion.button>
    </div>
  );
};

export default Finish;

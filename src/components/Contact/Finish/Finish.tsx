'use client';

import React from 'react';
import style from './finish.module.scss';
import Checkbox from '@/components/Checkbox/Checkbox';
import ContactSuccess from '@/public/icons/contactSuccess.svg';

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
      <div
        className={
          state === 'pending'
            ? `${style.newsletter} ${style.newsletterPending}`
            : style.newsletter
        }
        data-cursor="pointer"
      >
        <Checkbox
          checked={data.newsletter.value}
          onChange={() =>
            setData({ ...data, newsletter: { value: !data.newsletter.value } })
          }
          labelId="formCheckbox"
        />
        <label htmlFor="formCheckbox">{l.newsletter}</label>
      </div>

      <button
        type="submit"
        id={buttonClass}
        disabled={state === 'active' ? false : true}
      >
        {state === 'active' ? (
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
      </button>
    </div>
  );
};

export default Finish;

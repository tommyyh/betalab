'use client';

import React, { useEffect, useState } from 'react';
import style from './form.module.scss';
import Input from './Input/Input';
import Finish from './Finish/Finish';
import Select from '@/components/Select/Select';
import { sendMessage } from '@/actions/sendMessage';
import {
  validateEmail,
  validateName,
  validateMsg,
} from '@/helper/dataValidation';
import Tel from './Tel/Tel';

type PropsType = {
  l: any;
};

type InvalidField = {
  type: string;
  msg: string;
};

type ResponseType = {
  invalidFields?: InvalidField[];
  status?: string;
};

const Form = ({ l }: PropsType) => {
  const [state, setState] = useState('active');
  const [data, setData] = useState({
    name: {
      value: '',
      error: '',
    },
    email: {
      value: '',
      error: '',
    },
    prefix: {
      value: '',
      error: '',
    },
    tel: {
      value: '',
      error: '',
    },
    service: {
      value: 'Web development',
      error: '',
    },
    budget: {
      value: '',
      error: '',
    },
    msg: {
      value: '',
      error: '',
    },
    newsletter: {
      value: false,
    },
  });

  // Handle submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState('pending'); // Initiate pending state

    // Append form data
    const formData = new FormData();

    Object.entries(data).forEach(([name, object]) => {
      formData.append(name, object.value.toString());
    });

    // Call form action
    const res = await sendMessage(data, formData);

    const { invalidFields, status } = res as ResponseType;

    // Show error
    if (invalidFields && invalidFields[0]) {
      invalidFields.forEach(({ type, msg }) => {
        setData((prevData) => ({
          ...prevData,
          [type]: {
            // @ts-ignore
            ...prevData[type],
            error: msg,
          },
        }));
      });
    }

    // Handle response
    if (status === 'success') {
      setState('success');
    } else if (status === 'error') {
      setState('error');
    } else {
      setState('active');
    }
  };

  return (
    <form
      className={
        state === 'success' ? `${style.form} ${style.success}` : style.form
      }
      onSubmit={handleSubmit}
    >
      <div
        className={state === 'pending' ? style.formPending : style.formActive}
      >
        {/* Name and email */}
        <div className={style.double}>
          <Input
            type="text"
            name="name"
            placeholder={l.name.placeholder}
            label={l.name.label}
            errorMsg={l.name.error}
            customId={'name'}
            data={data}
            setData={setData}
            validationFunction={validateName}
            state={state}
            index={1}
          />

          <Input
            type="email"
            name="email"
            placeholder={l.email.placeholder}
            label={l.email.label}
            errorMsg={l.email.error}
            customId={'email'}
            data={data}
            setData={setData}
            validationFunction={validateEmail}
            state={state}
            index={2}
          />
        </div>

        {/* Service and budget */}
        <div className={style.triple}>
          <Tel
            type="tel"
            name="tel"
            placeholder={l.tel.placeholder}
            label={l.tel.label}
            error1={l.tel.error}
            error2={l.prefix.error}
            prefixType="prefix"
            prefixName="prefix"
            prefixPlaceholder={l.prefix.placeholder}
            customId={'tel'}
            data={data}
            setData={setData}
            state={state}
            index={3}
          />
          <Input
            type="text"
            name="budget"
            placeholder={l.budget.placeholder}
            label={l.budget.label}
            customId={'budget'}
            data={data}
            setData={setData}
            validationFunction={(budget: any) => true} // No validation
            state={state}
            index={4}
          />

          <Select
            name="service"
            label={l.service.label}
            customId={'service'}
            data={data}
            setData={setData}
            options={l.service.services}
            state={state}
            index={5}
          />
        </div>

        <Input
          type="text"
          name="msg"
          placeholder={l.msg.placeholder}
          label={l.msg.label}
          errorMsg={l.msg.error}
          customId={'msg'}
          data={data}
          setData={setData}
          validationFunction={validateMsg}
          state={state}
          textarea={true}
          index={6}
        />
      </div>
      {state === 'error' && (
        <p className={style.serverError}>{l.serverError}</p>
      )}

      <Finish l={l} data={data} setData={setData} state={state} />
    </form>
  );
};

export default Form;

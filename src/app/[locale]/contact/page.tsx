import Form from '@/components/Contact/Form/Form';
import Landing from '@/components/Contact/Landing/Landing';
import { getTranslations } from 'next-intl/server';
import React from 'react';
import style from './contact.module.scss';
import Reviews from '@/components/Reviews/Reviews';

const Contact = async () => {
  const l = await getTranslations('contact');
  const l2 = await getTranslations('home');
  const formLang = (word: string) => l(`form.${word}`);
  const serviceKeys = Array.from(
    new Array(parseInt(formLang('service.length'))),
    (x, i) => (i + 1).toString()
  );
  const form = {
    name: {
      placeholder: formLang('name.placeholder'),
      label: formLang('name.label'),
      error: formLang('name.error'),
    },
    email: {
      placeholder: formLang('email.placeholder'),
      label: formLang('email.label'),
      error: formLang('email.error'),
    },
    prefix: {
      placeholder: formLang('prefix.placeholder'),
      error: formLang('prefix.error'),
    },
    tel: {
      placeholder: formLang('tel.placeholder'),
      label: formLang('tel.label'),
      error: formLang('tel.error'),
    },
    service: {
      label: formLang('service.label'),
      services: [] as any,
    },
    budget: {
      placeholder: formLang('budget.placeholder'),
      label: formLang('budget.label'),
    },
    msg: {
      placeholder: formLang('msg.placeholder'),
      label: formLang('msg.label'),
      error: formLang('msg.error'),
    },
    newsletter: formLang('newsletter'),
    submit: formLang('submit'),
    loading: formLang('loading'),
    success: formLang('success'),
  };

  // Loop and append services to service object
  serviceKeys.forEach((key) => {
    const value = formLang(`service.list.${key}`);

    if (value) form.service.services.push(formLang(`service.list.${key}`));
  });

  return (
    <>
      <div className={style.main}>
        <Landing lang={l} />
        <Form l={form} />
      </div>

      <Reviews l={l2} scrollTrigger={false} />
    </>
  );
};

export default Contact;

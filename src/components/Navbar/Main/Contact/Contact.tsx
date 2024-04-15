'use client';

import React, { useContext } from 'react';
import style from './contact.module.scss';
import Envelope from '@/public/nav/envelope.svg';
import Send from '@/public/nav/send.svg';
import { Link } from '@/navigation';
import LangMobile from '../LangMobile/LangMobile';
import { MenuContext } from '@/components/Navbar/MenuContext/MenuContext';

type PropsType = {
  link: string;
  label: string;
  title: string;
};

const Contact = ({ link, label, title }: PropsType) => {
  const { isOpen }: any = useContext(MenuContext);

  return (
    <div
      className={
        isOpen
          ? `${style.contactCont} ${style.contactContOpen}`
          : style.contactCont
      }
    >
      {/* Contact button for both mobile and desktop */}
      <Link href={link} className={style.contact} aria-label={label}>
        <span>{title}</span>

        <div className={style.contactIcon}>
          <div>
            <Envelope />
          </div>
          <div>
            <Send className={style.contactSend} />
          </div>
        </div>
      </Link>

      {/* Language selector for mobile */}
      <LangMobile />
    </div>
  );
};

export default Contact;

'use client';

import React from 'react';
import { Link } from '@/navigation';
import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';

const LangLink = () => {
  const pathname = usePathname();
  const currentLocale = pathname.split('/').filter((value, index) => index > 1);
  const locale = useLocale();

  return (
    <>
      <Link locale={locale as 'en' | 'cz'} href={`/${currentLocale}`}>
        {locale === 'en' ? 'English' : 'Čeština'}
      </Link>
      <Link locale={locale === 'en' ? 'cz' : 'en'} href={`/${currentLocale}`}>
        {locale === 'en' ? 'Čeština' : 'English'}
      </Link>
    </>
  );
};

export default LangLink;

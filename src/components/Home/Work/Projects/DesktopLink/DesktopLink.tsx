'use client';

import Link from '@/components/Link/Link';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

type PropsType = {
  customId: any;
  children: React.ReactNode;
};

// Extract it to use client -> determine viewport
// Because of id accessibility issues
const DesktopLink = ({ customId, children }: PropsType) => {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1025px)',
  });

  return isDesktop ? (
    <Link href="/work">{children}</Link>
  ) : (
    <Link href="/work">{children}</Link>
  );
};

export default DesktopLink;

import { getTranslations } from 'next-intl/server';
import React from 'react';
import Landing from '@/components/Work/Landing/Landing';
import Projects from '@/components/Work/Projects/Projects';

const Work = async () => {
  const l = await getTranslations('work');

  return (
    <>
      <Landing lang={l} />
      <Projects lang={l} />
    </>
  );
};

export default Work;

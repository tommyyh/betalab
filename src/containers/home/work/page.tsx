import React from 'react';
import style from './work.module.scss';
import Projects from './components/Projects/Projects';

type PropsType = {
  l: any;
};

const Work = ({ l }: PropsType) => {
  return (
    <section className={style.work}>
      <h2>Some of our previous work</h2>

      <Projects />
    </section>
  );
};

export default Work;

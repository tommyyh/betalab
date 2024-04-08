import React from 'react';
import style from './work.module.scss';
import Projects from './Projects/Projects';
import Project1 from '@/public/home/work/1.png';
import Project2 from '@/public/home/work/2.png';
import Project3 from '@/public/home/work/3.png';
import Project4 from '@/public/home/work/1.png';
import Project5 from '@/public/home/work/2.png';
import Project6 from '@/public/home/work/3.png';
import Title from '@/components/Title/Text';

type PropsType = {
  l: any;
};

const Work = ({ l }: PropsType) => {
  const projects1 = 'work.projects1';
  const projects2 = 'work.projects2';

  // Projects
  const projectsList = [
    {
      id: 1,
      text: l(`${projects1}.text`),
      projects: [
        { src: Project1, alt: l(`${projects1}.projects.1.alt`) },
        { src: Project2, alt: l(`${projects1}.projects.2.alt`) },
        { src: Project3, alt: l(`${projects1}.projects.3.alt`) },
      ],
    },
    {
      id: 2,
      text: l(`${projects2}.text`),
      cta: l(`work.cta`),
      projects: [
        { src: Project4, alt: l(`${projects2}.projects.1.alt`) },
        { src: Project5, alt: l(`${projects2}.projects.2.alt`) },
        { src: Project6, alt: l(`${projects2}.projects.3.alt`) },
      ],
    },
  ];

  return (
    <section className={style.work}>
      <h2>
        <Title>{l('work.title')}</Title>
      </h2>

      {projectsList.map((projects) => (
        <Projects
          key={projects.id}
          projects={projects}
          inverted={projects.id === 2 ? true : false}
        />
      ))}
    </section>
  );
};

export default Work;

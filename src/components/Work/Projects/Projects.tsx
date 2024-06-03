import React from 'react';
import style from './projects.module.scss';
import Project from './Project';
import ProjectImg1 from '@/public/work/1.png';
import ProjectImg2 from '@/public/work/2.png';
import ProjectImg3 from '@/public/work/1.png';

type PropsType = {
  lang: any;
};

const images: any = {
  1: ProjectImg1,
  2: ProjectImg2,
  3: ProjectImg3,
};

const Projects = ({ lang }: PropsType) => {
  const l = (word: string) => lang(`projects.${word}`);
  const projectKeys = Array(parseInt(l('length')))
    .fill(1)
    .map((e, i) => e + i * 1);
  const projects = [] as any;

  projectKeys.forEach((key, index) => {
    projects.push({
      title: l(`list.${index + 1}.title`),
      text: l(`list.${index + 1}.text`),
      link: l(`list.${index + 1}.link`),
      id: l(`list.${index + 1}.id`),
      image: images[index + 1],
    });
  });

  return (
    <main className={style.projects}>
      {projects.map((project: any, index: number) => (
        <Project
          title={project.title}
          text={project.text}
          link={project.link}
          id={project.id}
          image={project.image}
          index={index}
        />
      ))}
    </main>
  );
};

export default Projects;

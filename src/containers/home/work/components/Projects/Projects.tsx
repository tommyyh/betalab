import React from 'react';
import style from './projects.module.scss';
import Image from '@/components/Image/Image';
import Project1 from '@/public/home/work/1.png';

const Projects = () => {
  return (
    <div className={style.projects}>
      <Project src={Project1} alt="Project" fill={true} />
    </div>
  );
};

const Project = ({ ...props }) => {
  return (
    <div className={style.project}>
      <Image {...props} />
    </div>
  );
};

export default Projects;

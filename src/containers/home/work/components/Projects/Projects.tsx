import React from 'react';
import style from './projects.module.scss';
import Image from 'next/image';
import Project1 from '@/public/home/work/1.png';

const Projects = () => {
  return (
    <div className={style.projects}>
      <Project src={Project1} alt="Project" sizes='100vw' style={{ width: '100%', height: 'auto' }} />
    </div>
  );
};

const Project = ({ ...props }) => {
  return (
    <div className={style.project}>
      <Image {...props} />

      <ul className={style.tags}>
        <Tag text={'Web design'} />
        <Tag text={'Web design'} />
        <Tag text={'Web design'} />
        <Tag text={'Web design'} />
      </ul>
    </div>
  );
};

// Tag
type TagProps = {
  text: string
}

const Tag = ({ text }: TagProps) => {
  return <li>{text}</li>
}

export default Projects;

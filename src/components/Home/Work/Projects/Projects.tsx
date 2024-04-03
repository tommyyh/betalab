import React from 'react';
import style from './projects.module.scss';
import Project from '../Project/Project';
import Link from '@/components/Link/Link';

type ProjectsType = {
  projects: {
    id: number;
    text: string;
    cta?: string;
    projects: Array<{
      src: any;
      alt: string;
    }>;
  };
  inverted?: boolean;
};

const Projects = ({ projects, inverted }: ProjectsType) => {
  const projectsList = projects.projects;

  return (
    <div className={`${style.projects} ${inverted ? style.inverted : ''}`}>
      {/* Upper row */}
      <div className={style.first}>
        <p className={style.textDesktop}>{projects.text}</p>

        <Project
          src={projectsList[0].src}
          alt={projectsList[0].alt}
          style={{ width: '100%', height: 'auto' }}
        />
      </div>

      {/* Lower row */}
      <div className={style.second}>
        <div className={style.secondProject}>
          <Project
            src={projectsList[1].src}
            alt={projectsList[1].alt}
            style={{ width: '100%', height: 'auto' }}
          />

          {/* View all work - desktop */}
          {projects.cta && <Link href="/work">{projects.cta}</Link>}
        </div>

        <Project
          src={projectsList[2].src}
          alt={projectsList[2].alt}
          style={{ width: '100%', height: 'auto' }}
        />
      </div>

      <p className={style.textMobile}>{projects.text}</p>

      {/* View all work - mobile */}
      {inverted && projects.cta && (
        <div className={style.moreMobile}>
          <Link href="/work">{projects.cta}</Link>
        </div>
      )}
    </div>
  );
};

export default Projects;

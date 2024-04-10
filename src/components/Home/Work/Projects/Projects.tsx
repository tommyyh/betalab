import React from 'react';
import style from './projects.module.scss';
import Project from '../Project/Project';
import Link from '@/components/Link/Link';
import Text from '@/components/Text/Text';

type ProjectsType = {
  projects: {
    id: number;
    text: string;
    cta?: string;
    projects: Array<{
      src: any;
      alt: string;
      aspectRatio?: number;
      aspectRatioCont?: number;
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
        <Text customClass={style.textDesktop}>{projects.text}</Text>

        <Project
          src={projectsList[0].src}
          alt={projectsList[0].alt}
          aspectRatio={projectsList[0].aspectRatio}
          style={{ width: '100%', height: 'auto' }}
        />
      </div>

      {/* Lower row */}
      <div className={style.second}>
        <div className={style.secondProject}>
          <Project
            src={projectsList[1].src}
            alt={projectsList[1].alt}
            aspectRatio={projectsList[0].aspectRatio}
            style={{ width: '100%', height: 'auto' }}
          />

          {/* View all work - desktop */}
          {projects.cta && <Link href="/work">{projects.cta}</Link>}
        </div>

        <Project
          src={projectsList[2].src}
          alt={projectsList[2].alt}
          aspectRatio={projectsList[0].aspectRatio}
          style={{ width: '100%', height: 'auto' }}
        />
      </div>

      <Text customClass={style.textMobile}>{projects.text}</Text>

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

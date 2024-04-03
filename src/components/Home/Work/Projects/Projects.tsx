import React from 'react';
import style from './projects.module.scss';
import Project from '../Project/Project';
import Link from '@/components/Link/Link';

type ProjectsType = {
  images: any[];
  inverted?: boolean;
};

const Projects = ({ images, inverted }: ProjectsType) => {
  return (
    <div className={`${style.projects} ${inverted ? style.inverted : ''}`}>
      {/* Upper row */}
      <div className={style.first}>
        <p className={style.textDesktop}>
          Companies who put trust in our hands, saw huge benefits right after
          deployment. With their new web solutions they found an increase in
          both sales and exposure in the digital world.
        </p>

        <Project
          src={images[0].src}
          alt={images[0].alt}
          style={{ width: '100%', height: 'auto' }}
        />
      </div>

      {/* Lower row */}
      <div className={style.second}>
        <div className={style.secondProject}>
          <Project
            src={images[1].src}
            alt={images[1].alt}
            style={{ width: '100%', height: 'auto' }}
          />

          {/* View all work - desktop */}
          <Link href="/work">View all work</Link>
        </div>

        <Project
          src={images[2].src}
          alt={images[2].alt}
          style={{ width: '100%', height: 'auto' }}
        />
      </div>

      <p className={style.textMobile}>
        Companies who put trust in our hands, saw huge benefits right after
        deployment. With their new web solutions they found an increase in both
        sales and exposure in the digital world.
      </p>

      {/* View all work - mobile */}
      {inverted && (
        <div className={style.moreMobile}>
          <Link href="/work">View all work</Link>
        </div>
      )}
    </div>
  );
};

export default Projects;

import React from 'react';
import style from './projects.module.scss';
import LazyImage from '@/components/LazyImage/LazyImage';
import Link from '@/components/Link/Link';

type PropsType = {
  title: string;
  text: string;
  link: string;
  id: string;
  image: any;
  index: number;
};

const Project = ({ title, text, link, image, index, id }: PropsType) => {
  const isEven = index % 2 === 1;

  return (
    // If its even -> change layout
    <>
      <div
        className={
          isEven
            ? `${style.project} ${style.projectEven} ${style.desktop}`
            : `${style.project} ${style.desktop}`
        }
        id={id}
      >
        {isEven ? (
          <>
            <div className={style.content}>
              <h3>{title}</h3>
              <div className={style.link}>
                <Link href={link} blank={true}>
                  Visit website
                </Link>
              </div>
              <p>{text}</p>
            </div>

            <LazyImage
              src={image}
              customClass={style.imageCont}
              data-cursor="work"
            />
          </>
        ) : (
          <>
            <LazyImage
              src={image}
              customClass={style.imageCont}
              data-cursor="work"
            />

            <div className={style.content}>
              <h3>{title}</h3>
              <div className={style.link}>
                <Link href={link} blank={true}>
                  Visit website
                </Link>
              </div>
              <p>{text}</p>
            </div>
          </>
        )}
      </div>

      {/* Mobile */}
      <div className={`${style.project} ${style.mobile}`} id={id}>
        <div className={style.content}>
          <h3>{title}</h3>
          <div className={style.link}>
            <Link href={link} blank={true}>
              Visit website
            </Link>
          </div>
          <p>{text}</p>
        </div>

        <LazyImage
          src={image}
          customClass={style.imageCont}
          data-cursor="work"
        />
      </div>
    </>
  );
};

export default Project;

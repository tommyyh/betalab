import React from "react";
import style from "./projects.module.scss";
import Image from "next/image";

type ProjectsType = {
  images: any[];
};

const Projects = ({ images }: ProjectsType) => {
  return (
    <div className={style.projects}>
      <div className={style.list}>
        {images.map((image, index) => (
          <Project
            key={index}
            src={image.src}
            alt={image.alt}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        ))}
      </div>

      <p>
        Companies who put trust in our hands, saw huge benefits right after
        deployment. With their new web solutions they found an increase in both
        sales and exposure in the digital world.
      </p>
    </div>
  );
};

const Project = ({ ...props }) => {
  return (
    <div className={style.project}>
      <Image {...props} src={props.src} alt={props.alt} />

      <ul className={style.tags}>
        <Tag text={"Web design"} />
        <Tag text={"Web design"} />
        <Tag text={"Web design"} />
        <Tag text={"Web design"} />
      </ul>
    </div>
  );
};

// Tag
type TagProps = {
  text: string;
};

const Tag = ({ text }: TagProps) => {
  return <li>{text}</li>;
};

export default Projects;

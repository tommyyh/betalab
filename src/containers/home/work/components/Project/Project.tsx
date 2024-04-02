import React from "react";
import style from "./project.module.scss";
import LazyImage from "@/components/LazyImage/LazyImage";

const Project = ({ ...props }) => {
  return (
    <div className={style.project} data-cursor="work">
      <LazyImage {...props} src={props.src} alt={props.alt} quality={100} />

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

export default Project;

import React from "react";
import style from "./work.module.scss";
import Projects from "./components/Projects/Projects";
import Project1 from "@/public/home/work/1.png";
import Project2 from "@/public/home/work/2.png";
import Project3 from "@/public/home/work/3.png";
import Project4 from "@/public/home/work/1.png";
import Project5 from "@/public/home/work/2.png";
import Project6 from "@/public/home/work/3.png";

type PropsType = {
  l: any;
};

// Images
const projectImages = [
  [
    { src: Project1, alt: "Project number 1" },
    { src: Project2, alt: "Project number 2" },
    { src: Project3, alt: "Project number 3" },
  ],
  [
    { src: Project4, alt: "Project number 4" },
    { src: Project5, alt: "Project number 5" },
    { src: Project6, alt: "Project number 6" },
  ],
];

const Work = ({ l }: PropsType) => {
  return (
    <section className={style.work}>
      <h2>Some of our previous work</h2>

      <Projects images={projectImages[0]} />
      {/* <Projects images={projectImages[1]} /> */}
    </section>
  );
};

export default Work;

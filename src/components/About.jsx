import React from "react";
import user_image from "../assets/user-image.png";
import circular_text from "../assets/circular-text.png";
import eng_icon from "../assets/eng-icon.png";
import skill_icon from "../assets/skill-icon.png";
import skill_icon_dark from "../assets/skill-icon-dark.png";
import edu_icon from "../assets/edu-icon.png";
import edu_icon_dark from "../assets/edu-icon-dark.png";
import project_icon from "../assets/project-icon.png";
import project_icon_dark from "../assets/project-icon-dark.png";

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduccion</h4>
      <h2 className="text-center text-5xl font-Ovo">Acerca de</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="max-w-max mx-auto relative">
          <img
            src={user_image}
            alt=""
            className="w-64 sm:w-80 rounded-3xl max-w-none"
          />

          <div className="bg-white w-1/2 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(149,0,162,0.15)] flex items-center justify-center">
            <img
              src={circular_text}
              alt=""
              className="w-full animate-spin_slow p-1"
            />
            <img
              src={eng_icon}
              alt=""
              className="w-1/3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-Ovo">
            Soy un Ingeniero de Materiales con más de media década de
            experiencia profesional en el sector. A lo largo de mi carrera, he
            tenido el privilegio de participar en importantes obras y proyectos
            del Estado, aportando mis conocimientos para garantizar la calidad y
            eficiencia en cada construcción.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
  <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50">
    <img src={edu_icon} alt="" className="w-7 mt-3 dark:hidden" />
    <img src={edu_icon_dark} alt="" className="w-7 mt-3 hidden dark:block" />

    <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
      Educación
    </h3>
    <p className="text-gray-600 text-sm dark:text-white/80">
      Licenciatura en Ingeniería de Materiales en la Universidad Nacional de Trujillo
    </p>
  </li>
  
  <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50">
    <img src={project_icon} alt="" className="w-7 mt-3 dark:hidden" />
    <img src={project_icon_dark} alt="" className="w-7 mt-3 hidden dark:block" />

    <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
      Proyectos
    </h3>
    <p className="text-gray-600 text-sm dark:text-white/80">
      Participación en más de 5 proyectos de infraestructura y desarrollo de materiales
    </p>
  </li>
  
  <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50">
    <img src={skill_icon} alt="" className="w-7 mt-3 dark:hidden" />
    <img src={skill_icon_dark} alt="" className="w-7 mt-3 hidden dark:block" />

    <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
      Habilidades
    </h3>
    <p className="text-gray-600 text-sm dark:text-white/80">
      Análisis de materiales, pruebas de resistencia, optimización de procesos
    </p>
  </li>
</ul>

        </div>
      </div>
    </div>
  );
};

export default About;

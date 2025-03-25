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

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-10">
        <div className="max-w-max mx-auto relative">
          <img
            src={user_image}
            alt=""
            className="w-64 sm:w-80 rounded-3xl max-w-none"
          />
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-Ovo">
            Ingeniero de Materiales con más de 15 años de experiencia
            profesional en control de calidad en obras de construcción.
            Especialista en garantizar estándares de calidad en proyectos de
            gran envergadura, brindando asesoría técnica, capacitación y
            soluciones para optimizar procesos constructivos.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#22cb95] hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white">
              <img src={edu_icon} alt="" className="w-7 mt-3 dark:hidden" />
              <img
                src={edu_icon_dark}
                alt=""
                className="w-7 mt-3 hidden dark:block"
              />

              <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                Educación
              </h3>
              <p className="text-gray-600 text-sm dark:text-white/80">
                Ingeniería de Materiales en la Universidad Nacional de Trujillo
              </p>
            </li>

            <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#22cb95] hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white">
              <img src={project_icon} alt="" className="w-7 mt-3 dark:hidden" />
              <img
                src={project_icon_dark}
                alt=""
                className="w-7 mt-3 hidden dark:block"
              />

              <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                Proyectos
              </h3>
              <p className="text-gray-600 text-sm dark:text-white/80">
                Participación en proyectos de edificacion, pavimentacion, saniamiento y otros.
              </p>
            </li>

            <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#22cb95] hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white">
              <img src={skill_icon} alt="" className="w-7 mt-3 dark:hidden" />
              <img
                src={skill_icon_dark}
                alt=""
                className="w-7 mt-3 hidden dark:block"
              />

              <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                Habilidades
              </h3>
              <p className="text-gray-600 text-sm dark:text-white/80">
                Análisis de materiales, pruebas de resistencia, optimización de
                procesos
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;

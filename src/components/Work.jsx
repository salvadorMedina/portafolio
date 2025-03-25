import React, { useState } from 'react';
import right_arrow_blod from '../assets/right-arrow-bold.png';
import right_arrow_blod_dark from '../assets/right-arrow-bold-dark.png';

const Work = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [showMore, setShowMore] = useState(false);

  const handleToggleProjects = () => {
    if (showMore) {
      setVisibleProjects(3);
    } else {
      setVisibleProjects(projects.length);
    }
    setShowMore(!showMore);
  };

  const projects = [
    {
      id: 1,
      title: 'MEJORAMIENTO DEL SISTEMA DE RIEGO EN TAYAPAC - ANCASH',
      description: 'ESPECIALISTA EN MATERIALES',
      image: './assets/proyect-1.png',
    },
    {
      id: 2,
      title: 'PISTAS Y VEREDAS EN URB. LAS BEGONIAS - JAEN',
      description: 'ESPECIALISTA DE CALIDAD',
      image: './assets/proyect-2.png',
    },
    {
      id: 3,
      title: 'TERMINAL TERRESTE DEL PUERTO DE MALABRIGO',
      description: 'INGENIERO DE CALIDAD',
      image: './assets/proyect-4.png',
    },
    {
      id: 4,
      title: 'PUESTO DE SALUD EN PICHIUC - ANCASH',
      description: 'ESPECIALISTA EN MATERIALES',
      image: './assets/proyect-1.png',
    },
    {
      id: 5,
      title: 'MODERNIZACIÓN TURÍSTICA EN CHAN CHAN - TRUJILLO',
      description: 'ESPECIALISTA EN CALIDAD',
      image: './assets/proyect-2.png',
    },
    {
      id: 6,
      title: 'NUEVA SEDE DEL GOBIERNO REGIONAL LA LIBERTAD',
      description: 'ESPECIALISTA EN CONTROL DE CALIDAD',
      image: './assets/proyect-4.png',
    },
  ];

  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Mi portafolio</h4>
      <h2 className="text-center text-5xl font-Ovo">Mis ultimos Proyectos</h2>

      <div className="grid grid-cols-auto my-10 gap-5 dark:text-black">
        {projects.slice(0, 3).map((project) => (
          <div
            key={project.id}
            className={`aspect-square bg-[url('${project.image}')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group`}
          >
            <div className="bg-white bg-opacity-100 md:bg-opacity-60 md:hover:bg-opacity-100 w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-center duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-auto my-10 gap-5 dark:text-black">
        {projects.slice(3, visibleProjects).map((project) => (
          <div
            key={project.id}
            className={`aspect-square bg-[url('${project.image}')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group`}
          >
            <div className="bg-white bg-opacity-100 md:bg-opacity-60 md:hover:bg-opacity-100 w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-center duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {projects.length > 3 && (
        <a
          onClick={handleToggleProjects}
          className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-[#22cb95] duration-500 dark:text-white dark:border-white dark:hover:bg-[#22cb95] cursor-pointer"
        >
          {showMore ? 'Ver menos' : 'Ver más'}
          <img src={right_arrow_blod} alt="" className="w-4 dark:hidden" />
          <img src={right_arrow_blod_dark} alt="" className="w-4 hidden dark:block" />
        </a>
      )}
    </div>
  );
};

export default Work;

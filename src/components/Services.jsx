import React, { useState } from "react";
import right_arrow_bold from "../assets/right-arrow-bold.png";
import left_arrow_bold from "../assets/left-arrow-bold.png";

const Services = () => {
  const [expanded, setExpanded] = useState(null);

  const handleToggle = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const services = [
    {
      title: "Gestión y Documentación de Calidad",
      shortDescription:
        "Supervisión del uso adecuado de materiales en proyectos, asegurando el cumplimiento...",
      longDescription:
        "Supervisión del uso adecuado de materiales en proyectos, asegurando el cumplimiento de las normativas y estándares de calidad.",
    },
    {
      title: "Innovación en Materiales",
      shortDescription:
        "Investigamos y desarrollamos nuevos materiales sostenibles y de alto rendimiento para...",
      longDescription:
        "Investigamos y desarrollamos nuevos materiales sostenibles y de alto rendimiento para diversas aplicaciones industriales.",
    },
    {
      title: "Gestión de Proyectos Estatales",
      shortDescription:
        "Lideramos la gestión y planificación de proyectos de infraestructura pública, garantizando...",
      longDescription:
        "Lideramos la gestión y planificación de proyectos de infraestructura pública, garantizando la eficiencia y el cumplimiento de plazos.",
    },
    {
      title: "Evaluación de Materiales",
      shortDescription:
        "Analizamos y seleccionamos los mejores materiales para garantizar la calidad y durabilidad en...",
      longDescription:
        "Analizamos y seleccionamos los mejores materiales para garantizar la calidad y durabilidad en proyectos de construcción.",
    },
  ];

  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h2 className="text-center text-5xl font-Ovo">Mis Servicios</h2>

      <div className="grid grid-cols-auto gap-6 my-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-10 hover:shadow-black cursor-pointer hover:bg-[#22cb95] hover:-translate-y-1 duration-500 dark:hover:shadow-white"
            onClick={() => handleToggle(index)}
          >
            <h3 className="text-lg my-4 text-gray-700 dark:text-white">
              {service.title}
            </h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
              {expanded === index
                ? service.longDescription
                : service.shortDescription}
            </p>
            <a className="flex items-center gap-2 text-sm mt-5">
              {expanded === index ? "Ver menos" : "Ver más"}{" "}
              <img
                src={expanded === index ? left_arrow_bold : right_arrow_bold}
                alt=""
                className="w-4"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

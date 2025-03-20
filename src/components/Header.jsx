import React from "react";
import profile_img from "../assets/profile-img.png";
import right_arrow_white from "../assets/right-arrow-white.png";
import download_icon from "../assets/download-icon.png";
import curriculum_pdf from "../assets/curriculum.pdf";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div className="mt-10"></div>
      <img src={profile_img} alt="" className="rounded-full w-32" />
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Hola! soy
        <span className="font-bold text-2xl md:text-3xl"> Juan </span>
        <span className="font-bold text-2xl md:text-3xl text-[#22cb95]">
          {" "}
          Medina{" "}
        </span>
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        Ingeniero de Materiales
      </h1>
      <p className="max-w-2xl mx-auto font-Ovo">
        Peruano y con mas de 6 años de Experiencia en Proyectos para el Estado
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border rounded-full bg-gradient-to-r from-[#1a9d75] to-[#22cb95] text-white flex items-center gap-2 dark:border-transparent hover:from-[#22cb95] hover:to-[#1a9d75] transition duration-300"
        >
          contactame <img src={right_arrow_white} alt="" className="w-4" />
        </a>

        <a
          href={curriculum_pdf}
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black hover:bg-gray-200 transition duration-300"
        >
          Mi Curriculum <img src={download_icon} alt="" className="w-4" />
        </a>
      </div>
    </div>
  );
};

export default Header;

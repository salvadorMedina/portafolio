import React from 'react'
import right_arrow_blod from '../assets/right-arrow-bold.png'
import right_arrow_blod_dark from '../assets/right-arrow-bold-dark.png'

const Work = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
    <h4 className="text-center mb-2 text-lg font-Ovo">Mi portafolio</h4>
    <h2 className="text-center text-5xl font-Ovo">Mis ultimos Proyectos</h2>
    <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">Aqui estan algunos de los proyectos de los que he sido parte:</p>

    <div className="grid grid-cols-auto my-10 gap-5 dark:text-black">
        <div className="aspect-square bg-[url('./assets/proyect-1.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">

            <div className="bg-white bg-opacity-100 md:bg-opacity-60 md:hover:bg-opacity-100 w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-center duration-500 group-hover:bottom-7">
                <div>
                    <h2 className="font-semibold">Edificio Principal</h2>
                    <p className="text-sm text-gray-700">Gobierno Regional</p>
                </div>
            </div>
        </div>
        <div className="aspect-square bg-[url('./assets/proyect-2.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">

            <div className="bg-white bg-opacity-100 md:bg-opacity-60 md:hover:bg-opacity-100 w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-center duration-500 group-hover:bottom-7">
                <div>
                    <h2 className="font-semibold">Edificio Principal</h2>
                    <p className="text-sm text-gray-700">Gobierno Regional</p>
                </div>
            </div>
        </div>
        <div className="aspect-square bg-[url('./assets/proyect-3.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">

            <div className="bg-white bg-opacity-100 md:bg-opacity-60 md:hover:bg-opacity-100 w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-center duration-500 group-hover:bottom-7">
                <div>
                    <h2 className="font-semibold">Edificio Principal</h2>
                    <p className="text-sm text-gray-700">Gobierno Regional</p>
                </div>
            </div>
        </div>
        <div className="aspect-square bg-[url('./assets/proyect-4.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">

            <div className="bg-white bg-opacity-100 md:bg-opacity-60 md:hover:bg-opacity-100 w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-center duration-500 group-hover:bottom-7 ">
                <div>
                    <h2 className="font-semibold">Edificio Principal</h2>
                    <p className="text-sm text-gray-700">Gobierno Regional</p>
                </div>
            </div>
        </div>
    </div>
    <a className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500
    dark:text-white dark:border-white dark:hover:bg-darkHover cursor-pointer">Ver mas
        <img src={right_arrow_blod} alt="" className="w-4 dark:hidden"/>
        <img src={right_arrow_blod_dark} alt="" className="w-4 hidden dark:block"/>
    </a>

</div>
  )
}

export default Work

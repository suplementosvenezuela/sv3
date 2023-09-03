import React from "react";
import Image from "next/image";

const cards = [
  {
    image:"/assets/images/aminoacidos/AMINOACIDOS - NUTREX - Lipo 6 black BCAA - 30 serv WATER-FRUIT.png",
    carac1:"30 Serv.",
    carac2:"6 g de BCAA",
    carac3:"125 mg de cafeína natural",
    text1:"Favorece la recuperación muscular",
    text2:"Ayuda a la síntesis de proteínas",
    text3:"Reduce la fatiga muscular",
    producto:"AMINOACIDOS - NUTREX - Lipo 6 black BCAA - 30 serv WATER-FRUIT"
  },
  {
    image:"/assets/images/aminoacidos/AMINOACIDOS - NUTREX - EAA+Hydratation Blood Orange 390 gm.png",
    carac1:"30 Serv.",
    carac2:"8 g de BCAA",
    carac3:"Electrolitos e Hidratación",
    text1:"Favorece la recuperación muscular",
    text2:"Mejora la hidratación",
    text3:"Aumenta la resistencia física",
    producto:"AMINOACIDOS - NUTREX - EAA+Hydratation Blood Orange 390 gm"
  },
  {
    image:"/assets/images/aminoacidos/AMINOACIDOS - NUTREX - Bcca Drive 200 tab.png",
    carac1:"200 Tabletas.",
    carac2:"1 g de BCAA Tab.",
    carac3:"500 g",
    text1:"Favorece la recuperación muscular",
    text2:"Ayuda a la síntesis de proteínas",
    text3:"Reduce la fatiga muscular",
    producto:"AMINOACIDOS - NUTREX - Bcca Drive 200 tab"
  },
  {
    image:"/assets/images/aminoacidos/AMINOACIDOS - NUTREX - Bcca 6000 - 30serv.png",
    carac1:"30 Serv.",
    carac2:"6 g de BCAA",
    carac3:"255 g",
    text1:"Favorece la recuperación muscular",
    text2:"Ayuda a la síntesis de proteínas",
    text3:"Reduce la fatiga muscular",
    producto:"AMINOACIDOS - NUTREX - Bcca 6000 - 30serv"
  },
  
]

export default function Produtos() {
  return (
    <>
      <div className="w-screen flex flex-col bg-black">
        <div className=" mt-16 w-full">
          <Image className="w-full" src="/assets/images/SV_FONDO_LINEAS.png" width={2000} height={2000}/>
        </div>
 


        <div className=" px-5 grid gap-1 grid-cols-1 lg:gap-4 lg:grid-cols-2 w-screen h-auto">
          {
            cards.map((card, index) => {
                return(
                      <div key={index} className="flex flex-col w-full py-5 px-1 border-black mx-auto border-4 2 hover:bg-gradient-to-b from-black to-white/50 sm:w-4/5">
                        <div className="flex w-full flex-col sm:flex-row">
                          <div className="flex flex-row w-full relative top-72 sm:top-0 pt-0 sm:pl-20 sm:flex-col sm:w-1/2 ">
                            <div className="w-1/3 h-24 left-0 pt-7 p-1 mb-2 text-center bg-amber-500 sm:pt-4 sm:w-20 sm:h-20  sm:-left-1/2">
                              <h2 className="text-black text-xl font-semibold">{card.carac1}</h2>
                              <h2 className="text-black text-sm">Presentación</h2>
                            </div>
                            <div className="w-1/3 h-28 left-0 pt-7 p-1 mb-2 text-center sm:pt-4 sm:w-20 sm:h-20 sm:-left-1/2">
                              <h2 className="text-white text-xl font-semibold">{card.carac2}</h2>
                              <h2 className="text-white text-sm">Cantidad</h2>
                            </div>
                            <div className="w-1/3 h-28 left-0 pt-7 p-1 mb-2 text-center sm:pt-4 sm:w-20 sm:h-20 sm:-left-1/2">
                              <h2 className="text-white text-xl font-semibold">{card.carac3}</h2>
                              <h2 className="text-white text-sm">Otros</h2>
                            </div>
                          </div>
                          <div className=" relative -top-36 w-full sm:w-1/2 sm:top-0">
                            <Image className="w-full sm:w-4/5 " src={card.image} width={1020} height={1020} alt={card.producto}/>
                          </div>
                        </div>
                        <div className="w-full flex flex-col mt-2 sm:flex-row">
                          <span className=" bg-white w-full h-1 sm:hidden"></span>
                          <div className=" w-full h-20 px-3 pt-4 sm:w-1/3 mb-2">
                            <p className="text-center text-white text-lg sm:text-sm ">{card.text1}</p>
                          </div>
                          <span className=" bg-white w-full h-1 sm:w-1 sm:h-full"></span>
                          <div className=" w-full h-20 px-3 pt-4 sm:w-1/3 mb-2">
                            <p className="text-center text-white text-lg sm:text-sm">{card.text2}</p>
                          </div>
                          <span className=" bg-white w-full h-1 sm:w-1 sm:h-full"></span>
                          <div className=" w-full h-20 px-3 pt-4 sm:w-1/3 mb-2">
                            <p className="text-center text-white text-lg sm:text-sm">{card.text3}</p>
                          </div>
                        </div>
                        <div className="w-full">
                              <button className=" mt-4 w-full h-10 border-collapse text-white border-2 border-white hover:bg-amber-500 rounded-lg text-lg font-semibold sm:w-1/2 sm:mx-36 lg:mx-44" type="submit">Agregar</button>
                        </div>
                      </div>
                )
            })
          }
        </div>
      </div>
    </>
  )
}
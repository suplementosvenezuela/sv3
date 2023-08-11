import React from "react";
import Image from "next/image";

const cards = [
  {
    image:"/assets/images/SV_CARNIVOR-T.png",
    proteina:"26G",
    servicios:"50",
    bcaas:"5.6G",
    text1:"Hipercalorico / incrementa la masa muscular",
    text2:"Derivado de la carne roja",
    text3:"Libre de lactosa",
    producto:"CARNIVOR-T"
  },
  {
    image:"/assets/images/SV_CARNIVOR-T.png",
    proteina:"30G",
    servicios:"40",
    bcaas:"2.6G",
    text1:"Hipercalorico / incrementa la masa muscular",
    text2:"Derivado de la carne roja",
    text3:"Libre de lactosa",
    producto:"CARNIVOR-T"
  },
  {
    image:"/assets/images/SV_CARNIVOR-T.png",
    proteina:"35G",
    servicios:"60",
    bcaas:"6.6G",
    text1:"Hipercalorico / incrementa la masa muscular",
    text2:"Derivado de la carne roja",
    text3:"Libre de lactosa",
    producto:"CARNIVOR-T"
  },
  {
    image:"/assets/images/SV_CARNIVOR-T.png",
    proteina:"26G",
    servicios:"40",
    bcaas:"5.0G",
    text1:"Hipercalorico / incrementa la masa muscular",
    text2:"Derivado de la carne roja",
    text3:"Libre de lactosa",
    producto:"CARNIVOR-T"
  },
  {
    image:"/assets/images/SV_CARNIVOR-T.png",
    proteina:"30G",
    servicios:"20",
    bcaas:"2.6G",
    text1:"Hipercalorico / incrementa la masa muscular",
    text2:"Derivado de la carne roja",
    text3:"Libre de lactosa",
    producto:"CARNIVOR-T"
  },
  {
    image:"/assets/images/SV_CARNIVOR-T.png",
    proteina:"36G",
    servicios:"40",
    bcaas:"7.6G",
    text1:"Hipercalorico / incrementa la masa muscular",
    text2:"Derivado de la carne roja",
    text3:"Libre de lactosa",
    producto:"CARNIVOR-T"
  },
  {
    image:"/assets/images/SV_CARNIVOR-T.png",
    proteina:"26G",
    servicios:"50",
    bcaas:"5.0G",
    text1:"Hipercalorico / incrementa la masa muscular",
    text2:"Derivado de la carne roja",
    text3:"Libre de lactosa",
    producto:"CARNIVOR-T"
  },
  {
    image:"/assets/images/SV_CARNIVOR-T.png",
    proteina:"26G",
    servicios:"40",
    bcaas:"6.6G",
    text1:"Hipercalorico / incrementa la masa muscular",
    text2:"Derivado de la carne roja",
    text3:"Libre de lactosa",
    producto:"CARNIVOR-T"
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
                              <h2 className="text-black text-xl font-semibold">{card.proteina}</h2>
                              <h2 className="text-black text-sm">Proteina</h2>
                            </div>
                            <div className="w-1/3 h-28 left-0 pt-7 p-1 mb-2 text-center sm:pt-4 sm:w-20 sm:h-20 sm:-left-1/2">
                              <h2 className="text-white text-xl font-semibold">{card.servicios}</h2>
                              <h2 className="text-white text-sm">Servicios</h2>
                            </div>
                            <div className="w-1/3 h-28 left-0 pt-7 p-1 mb-2 text-center sm:pt-4 sm:w-20 sm:h-20 sm:-left-1/2">
                              <h2 className="text-white text-xl font-semibold">{card.bcaas}</h2>
                              <h2 className="text-white text-sm">BCAAs</h2>
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
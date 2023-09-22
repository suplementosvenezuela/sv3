"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Products from "../productos/productos";


export default function Tarjet({marca}) {


const valor = marca;
const productMarca = []
 Products.some((Product) => {
  if (Product.marca == valor) {
    productMarca.push(Product);
  }else if(valor == 'PRODUCTOS'){
    productMarca.push(Product);
  }
})

console.log(productMarca)

  const productsPerPage = 6;
  const totalPages = Math.ceil(productMarca.length / productsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const getPageProducts = (pageNumber) => {
    const start = (pageNumber - 1) * productsPerPage;
    const end = start + productsPerPage;

    return productMarca.slice(start, end);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };


  return (
    <>
      <div className="w-screen h-min flex flex-col bg-black">
        <div className=" px-5 grid gap-1 grid-cols-1 lg:gap-4 lg:grid-cols-2 w-screen h-auto ">
          {
            
            getPageProducts(currentPage).map((Products) => {
                return(

                  <div key={Products.id} className="flex flex-col w-full py-5 px-1 border-black mx-auto border-4 2 hover:bg-gradient-to-b from-black to-white/50 sm:w-4/5">
                    <div className="flex w-full flex-col sm:flex-row">
                      <div className="flex flex-row w-full relative top-72 sm:top-0 pt-0 sm:flex-col sm:w-1/5 ">
                        <div className="w-1/3 h-24 left-0 pt-7 p-1 mb-7 text-center bg-amber-500 sm:pt-4 sm:w-20 sm:h-20  sm:-left-1/2">
                          <h2 className="text-black text-xl font-semibold">{Products.comprinc}</h2>
                          <h2 className="text-black text-sm"></h2>
                        </div>
                        <div className="w-1/3 h-28 left-0 pt-7 p-1 mb-7 text-center sm:pt-4 sm:w-20 sm:h-20 sm:-left-1/2">
                          <h2 className="text-white text-xl font-semibold">{Products.present}</h2>
                          <h2 className="text-white text-sm"></h2>
                        </div>
                        <div className="w-1/3 h-28 left-0 pt-7 p-1 mb-2 text-center sm:pt-4 sm:w-20 sm:h-20 sm:-left-1/2">
                          <h2 className="text-white text-xl font-semibold">{Products.otros}</h2>
                          <h2 className="text-white text-sm"></h2>
                        </div>
                      </div>
                      <div className=" relative -top-36 w-full sm:w-4/5 sm:top-0">
                        <Link className=" w-full h-full bg-white" href={`/productos/${Products.id}`}> <Image className="w-full sm:w-full cursor-pointer" src={Products.image} width={1020} height={1020} alt={Products.name}/> </Link>
                      </div>
                    </div>
                    <div className="w-full flex flex-col mt-2 sm:flex-row">
                      <span className=" bg-white w-full h-1 sm:hidden"></span>
                      <div className=" w-full h-20 px-3 pt-4 sm:w-1/3 mb-2">
                        <p className="text-center text-white text-lg sm:text-sm ">{Products.text1}</p>
                      </div>
                      <span className=" bg-white w-full h-1 sm:w-1 sm:h-full"></span>
                      <div className=" w-full h-20 px-3 pt-4 sm:w-1/3 mb-2">
                        <p className="text-center text-white text-lg sm:text-sm">{Products.text2}</p>
                      </div>
                      <span className=" bg-white w-full h-1 sm:w-1 sm:h-full"></span>
                      <div className=" w-full h-20 px-3 pt-4 sm:w-1/3 mb-2">
                        <p className="text-center text-white text-lg sm:text-sm">{Products.text3}</p>
                      </div>
                    </div>
                    <div className="w-full flex mt-6">
                      <div className="w-1/3 h-28 pt-7 p-1 mb-2 text-center sm:pt-4 sm:w-30 sm:h-30 ">
                        <h2 className=" text-gray-400 text-4xl font-semibold hidden">{Products.precio}$</h2>
                        <h2 className=" text-gray-400 text-4xl font-semibold hidden">{Products.marca}</h2>
                      </div>
                      <button className=" mt-4 w-full h-10 border-collapse text-white border-2 border-white hover:bg-slate-400 rounded-lg text-lg font-semibold sm:w-1/2 sm:mx-36 lg:mx-44" 
                      type="button"
                      onClick={() => {
                        const message = `¡Hola! Saludos, 👋 Les escribo a través de su página web SuplementosVenezuela.com desde la categoría marca "${Products.marca}" y estoy interesado en comprar "${Products.name}" por el precio de: ${Products.precio} y también en recibir asesoría personalizada para el uso del mismo. Gracias de antemano. Mi nombre es:`;
                        const whatsappLink = `https://api.whatsapp.com/send?phone=584140124810&text=${encodeURIComponent(message)}`;
                        window.open(whatsappLink, "_blank");
                    }}
                    >
                        Comprar
                      </button>
                    </div>
                  </div>
                )
            })
          }
        </div>
        <div className="w-screem mt-36 h-36 flex flex-col sm:flex-row justify-around ">
          <button className=" text-2xl text-white shadow-white" onClick={handlePreviousPage}>Página anterior</button>
          <button className=" text-2xl text-white shadow-white" onClick={handleNextPage}>Página siguiente</button>
        </div>
      </div>
    </>
  )
}
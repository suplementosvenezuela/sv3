"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Products from "@/app/productos/productos";

export default function Tarjet() {
  // Filtrar los productos por nombre que contengan las palabras clave
  const filteredProducts = Products.filter((Product) =>
    /prote/i.test(Product.name)
  );

  console.log(filteredProducts);

  const productsPerPage = 6;
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const getPageProducts = (pageNumber) => {
    const start = (pageNumber - 1) * productsPerPage;
    const end = start + productsPerPage;

    return filteredProducts.slice(start, end);
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
        <div className="px-5 grid gap-1 grid-cols-1 lg:gap-4 lg:grid-cols-2 w-screen h-auto">
          {getPageProducts(currentPage).map((Product) => {
            return (
              <div
                key={Product.id}
                className="flex flex-col w-full py-5 px-1 border-black mx-auto border-4 2 hover:bg-gradient-to-b from-black to-white/50 sm:w-4/5"
              >
                // Resto de tu código para mostrar los productos // Aquí asumo
                que deseas mostrar la imagen, nombre y descripción del producto
                <div className="flex w-full flex-col sm:flex-row">
                  <div className="flex flex-row w-full relative top-72 sm:top-0 pt-0 sm:flex-col sm:w-1/5 ">
                    {/* Aquí puedes mostrar otros detalles del producto, como marca, presentación, etc. */}
                  </div>
                  <div className="relative -top-36 w-full sm:w-4/5 sm:top-0">
                    <Link
                      className="w-full h-full bg-white"
                      href={`/productos/${Product.id}`}
                    >
                      <Image
                        className="w-full sm:w-full cursor-pointer"
                        src={Product.image}
                        width={1020}
                        height={1020}
                        alt={Product.name}
                      />
                    </Link>
                  </div>
                </div>
                <div className="w-full flex flex-col mt-2 sm:flex-row">
                  <span className="bg-white w-full h-1 sm:hidden"></span>
                  <div className="w-full h-20 px-3 pt-4 sm:w-1/3 mb-2">
                    <p className="text-center text-white text-lg sm:text-sm ">
                      {Product.text1}
                    </p>
                  </div>
                  <span className="bg-white w-full h-1 sm:w-1 sm:h-full"></span>
                  <div className="w-full h-20 px-3 pt-4 sm:w-1/3 mb-2">
                    <p className="text-center text-white text-lg sm:text-sm">
                      {Product.text2}
                    </p>
                  </div>
                  <span className="bg-white w-full h-1 sm:w-1 sm:h-full"></span>
                  <div className="w-full h-20 px-3 pt-4 sm:w-1/3 mb-2">
                    <p className="text-center text-white text-lg sm:text-sm">
                      {Product.text3}
                    </p>
                  </div>
                </div>
                {/* Fin del código para mostrar detalles del producto */}
                {/* Botón de Comprar */}
                <button
                  className="mt-4 w-full h-10 border-collapse text-white border-2 border-white hover:bg-slate-400 rounded-lg text-lg font-semibold sm:w-1/2 sm:mx-36 lg:mx-44"
                  type="button"
                  onClick={() => {
                    const message = `¡Hola! Saludos, 👋 Les escribo a través de su página web SuplementosVenezuela.com desde la categoría marca "${Product.marca}" y estoy interesado en comprar "${Product.name}" por el precio de: ${Product.precio} y también en recibir asesoría personalizada para el uso del mismo. Gracias de antemano. Mi nombre es:`;
                    const whatsappLink = `https://api.whatsapp.com/send?phone=584140124810&text=${encodeURIComponent(
                      message
                    )}`;
                    window.open(whatsappLink, "_blank");
                  }}
                >
                  Comprar
                </button>
              </div>
            );
          })}
        </div>
        <div className="w-screem mt-36 h-36 flex flex-col sm:flex-row justify-around">
          <button
            className="text-2xl text-white shadow-white"
            onClick={handlePreviousPage}
          >
            Página anterior
          </button>
          <button
            className="text-2xl text-white shadow-white"
            onClick={handleNextPage}
          >
            Página siguiente
          </button>
        </div>
      </div>
    </>
  );
}

"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles_modules/categories_style.css";
import Link from "next/link";
import Image from "next/image";

const cards = [
  {
    image: "/assets/images/SV_PRODUCTOS_aminoacidos_2.png",
    link: "/suplemento/categoria/aminoacidos",
    text: "AMINOACIDOS",
  },
  {
    image: "/assets/images/SV_PRODUCTOS_cooper_2.png",
    link: "/suplemento/categoria/cooperpharma",
    text: "COOPER PHARMA",
  },
  {
    image: "/assets/images/SV_PRODUCTOS_creadores_de_peso.png",
    link: "/suplemento/categoria/ganadores_de_peso",
    text: "GANADORES DE PESO",
  },
  {
    image: "/assets/images/SV_PRODUCTOS_creatinas.png",
    link: "/suplemento/categoria/creatinas",
    text: "CREATINAS",
  },
  {
    image: "/assets/images/SV_PRODUCTOS_precursores_de_testosterona.png",
    link: "/suplemento/categoria/precursores_de_testosterona",
    text: "PRECURSORES DE TESTOSTERONA",
  },
  {
    image: "/assets/images/SV_PRODUCTOS_proteinas2.png",
    link: "/suplemento/categoria/proteinas",
    text: "PROTEÍNAS",
  },
  {
    image: "/assets/images/SV_PRODUCTOS_quemadores_de_grasa.png",
    link: "/suplemento/categoria/quemadores_de_grasa",
    text: "QUEMADORES DE GRASA",
  },
  {
    image: "/assets/images/SV_PRODUCTOS_sars.png",
    link: "/suplemento/categoria/sarms",
    text: "SARMS",
  },
];

export default class Categories extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 250,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      cssEase: "linear",
      pauseOnHover: true,
    };
    return (
      <div className=" w-screen h-screen bg-black">
        <h2 className=" text-2xl font-semibold text-center my-10 text-white">
          {" "}
          CATEGORIAS
        </h2>
        <div className=" w-7/12 h-auto sm:w-1/2 mx-auto bg-black">
          <Slider {...settings}>
            {cards.map((card, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col w-1/2 py-5 px-5 border-black mx-auto cardV cardH border-4 2 lg:flex-row  hover:bg-gradient-to-b from-black to-amber-500"
                >
                  <Link href={card.link}>
                    <div className="w-full mx-auto mb-5 lg:w-1/2 lg:m-0 lg:relative lg:left-1/2 cursor-pointer">
                      <Image
                        className="w-full"
                        src={card.image}
                        width={1000}
                        height={1000}
                        alt={card.text}
                      />
                    </div>
                  </Link>
                  <div className="w-full mb-5 p-auto  lg:w-1/2 lg:relative lg:left-0 text-center lg:-top-36">
                    <Link
                      className=" rounded-lg cursor-pointer text-white py-2 px-2 m-0 hover:text-black text-xl lg:text-3xl"
                      href={card.link}
                      target="_blank"
                    >
                      {card.text}{" "}
                    </Link>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}

'use client'
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./styles_modules/categories_style.css"; 
import Link from "next/link";
import Image from "next/image";

const cards = [
  {
    image:"/assets/images/SV_PRODUCTOS_aminoacidos_2.png",
    link:"https://api.whatsapp.com/send?phone=584140124810&text=%C2%A1Hola!%20Saludos%2C%0A%0AMe%20encuentro%20explorando%20la%20incre%C3%ADble%20variedad%20de%20suplementos%20que%20ofrecen%20en%20la%20categor%C3%ADa%20de%20*Aminoacidos*%20en%20la%20p%C3%A1gina%20web%20de%20SuplementosVenezuela.com.%20Estoy%20muy%20interesado%20en%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20productos%20de%20esta%20categor%C3%ADa%2C%20Gracias%20de%20antemano.%20",
    text:"AMINOACIDOS"
  },
  {
    image:"/assets/images/SV_PRODUCTOS_cooper_2.png",
    link:"https://api.whatsapp.com/send?phone=584140124810&text=%C2%A1Hola!%20Saludos%2C%0A%0AMe%20encuentro%20explorando%20la%20incre%C3%ADble%20variedad%20de%20suplementos%20que%20ofrecen%20en%20la%20categor%C3%ADa%20de%20*COOPER%20PHARMA*%20en%20la%20p%C3%A1gina%20web%20de%20SuplementosVenezuela.com.%20Estoy%20muy%20interesado%20en%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20productos%20de%20esta%20categor%C3%ADa%2C%20Gracias%20de%20antemano.%20",
    text:"COOPER PHARMA"
  },
  {
    image:"/assets/images/SV_PRODUCTOS_creadores_de_peso.png",
    link:"https://api.whatsapp.com/send?phone=584140124810&text=%C2%A1Hola!%20Saludos%2C%0A%0AMe%20encuentro%20explorando%20la%20incre%C3%ADble%20variedad%20de%20suplementos%20que%20ofrecen%20en%20la%20categor%C3%ADa%20de%20*GANADORES%20DE%20PESO*%20en%20la%20p%C3%A1gina%20web%20de%20SuplementosVenezuela.com.%20Estoy%20muy%20interesado%20en%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20productos%20de%20esta%20categor%C3%ADa%2C%20Gracias%20de%20antemano.%20",
    text:"GANADORES DE PESO"
  },
  {
    image:"/assets/images/SV_PRODUCTOS_creatinas.png",
    link:"https://api.whatsapp.com/send?phone=584140124810&text=%C2%A1Hola!%20Saludos%2C%0A%0AMe%20encuentro%20explorando%20la%20incre%C3%ADble%20variedad%20de%20suplementos%20que%20ofrecen%20en%20la%20categor%C3%ADa%20de%20*CREATINAS*%20en%20la%20p%C3%A1gina%20web%20de%20SuplementosVenezuela.com.%20Estoy%20muy%20interesado%20en%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20productos%20de%20esta%20categor%C3%ADa%2C%20Gracias%20de%20antemano.%20",
    text:"CREATINAS"
  },
  {
    image:"/assets/images/SV_PRODUCTOS_precursores_de_testosterona.png",
    link:"https://api.whatsapp.com/send?phone=584140124810&text=%C2%A1Hola!%20Saludos%2C%0A%0AMe%20encuentro%20explorando%20la%20incre%C3%ADble%20variedad%20de%20suplementos%20que%20ofrecen%20en%20la%20categor%C3%ADa%20de%20*PRECURSORES%20DE%20TESTOSTERONA*%20en%20la%20p%C3%A1gina%20web%20de%20SuplementosVenezuela.com.%20Estoy%20muy%20interesado%20en%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20productos%20de%20esta%20categor%C3%ADa%2C%20Gracias%20de%20antemano.%20",
    text:"PRECURSORES DE TESTOSTERONA"
  },
  {
    image:"/assets/images/SV_PRODUCTOS_proteinas2.png",
    link:"https://api.whatsapp.com/send?phone=584140124810&text=%C2%A1Hola!%20Saludos%2C%0A%0AMe%20encuentro%20explorando%20la%20incre%C3%ADble%20variedad%20de%20suplementos%20que%20ofrecen%20en%20la%20categor%C3%ADa%20de%20*PROTE%C3%8DNAS*%20en%20la%20p%C3%A1gina%20web%20de%20SuplementosVenezuela.com.%20Estoy%20muy%20interesado%20en%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20productos%20de%20esta%20categor%C3%ADa%2C%20Gracias%20de%20antemano.%20",
    text:"PROTEÍNAS"
  },
  {
    image:"/assets/images/SV_PRODUCTOS_quemadores_de_grasa.png",
    link:"https://api.whatsapp.com/send?phone=584140124810&text=%C2%A1Hola!%20Saludos%2C%0A%0AMe%20encuentro%20explorando%20la%20incre%C3%ADble%20variedad%20de%20suplementos%20que%20ofrecen%20en%20la%20categor%C3%ADa%20de%20*QUEMADORES%20DE%20GRASA*%20en%20la%20p%C3%A1gina%20web%20de%20SuplementosVenezuela.com.%20Estoy%20muy%20interesado%20en%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20productos%20de%20esta%20categor%C3%ADa%2C%20Gracias%20de%20antemano.%20",
    text:"QUEMADORES DE GRASA"
  },
  {
    image:"/assets/images/SV_PRODUCTOS_sars.png",
    link:"https://api.whatsapp.com/send?phone=584140124810&text=%C2%A1Hola!%20Saludos%2C%0A%0AMe%20encuentro%20explorando%20la%20incre%C3%ADble%20variedad%20de%20suplementos%20que%20ofrecen%20en%20la%20categor%C3%ADa%20de%20*SARMS*%20en%20la%20p%C3%A1gina%20web%20de%20SuplementosVenezuela.com.%20Estoy%20muy%20interesado%20en%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20productos%20de%20esta%20categor%C3%ADa%2C%20Gracias%20de%20antemano.%20",
    text:"SARMS"
  },
]


export default class Categories extends Component {
    render() {
      const settings = {
        dots: false,
        infinite: true,
        speed: 3000,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        cssEase: 'linear',
        pauseOnHover: true,
      };
      return (
        <div className=" w-screen h-screen bg-black">
          <h2 className=" text-2xl font-semibold text-center my-10 text-white"> CATEGORIAS</h2>
          <div className=" w-7/12 h-auto sm:w-1/2 mx-auto bg-black">
            <Slider {...settings}>
            {
             cards.map((card, index) => {
                return(
                <div key={index} className="flex flex-col w-1/2 py-5 px-5 border-black mx-auto cardV cardH border-4 2 lg:flex-row  hover:bg-gradient-to-b from-black to-amber-500">
                  <div className=" w-full mx-auto mb-5 lg:w-1/2 lg:m-0 lg:relative lg:left-1/2">
                    <Image className=" w-full " src={card.image} width={1000} height={1000} alt={card.text}/>
                  </div>
                  <div className="w-full mb-5 p-auto  lg:w-1/2 lg:relative lg:left-0 text-center lg:-top-36">
                    <Link className=" rounded-lg cursor-pointer text-white py-2 px-2 m-0 hover:text-black text-xl lg:text-3xl" href={card.link} target="_blank">{card.text}  </Link>
                  </div>
                </div>
                )
              })
            }
            </Slider>
          </div>
        </div>
      );
    }
  }
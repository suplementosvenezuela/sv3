import React from "react";

export default function Location() {
  return(
    <>
      <div className=" w-screen h-screen bg-black">
        <div className=" w-full px-10">
          <h2 className="text-white text-3xl text-center mt-10 font-semibold lg:text-4xl"> Encuentra nuestra tienda fisica en:</h2>
          <p className="text-white text-lg text-left mt-5 lg:text-2xl lg:w-4/5 lg:relative lg:left-40 xl:w-2/3 xl:left-60 xl:mt-20"></p>
        </div>
        <div className=" w-full h-2/4 pl-8 pt-10">
          <iframe className=" w-4/5 h-full mx-auto" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.10171763627!2d-66.8569842!3d10.492647300000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a5972c6c35729%3A0xcc4b86dd0ea16d26!2sSuplementos%20Venezuela!5e0!3m2!1ses!2sve!4v1692659135709!5m2!1ses!2sve"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>   
   </>
  )
}
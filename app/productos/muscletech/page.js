import React from "react";
import Tarjeta from "@/app/components/tarjeta";
import Image from "next/image";


export default function Muscletech() {




  return (
    <div className=" w-screen  flex flex-col bg-black">
      <div className=" mt-16 w-full">
        <Image className="w-full" src="/assets/images/SV_FONDO_LINEAS.png" width={2000} height={2000}/>
      </div>
      <div className=" text-center mt-2">
        <h2 className=" text-white text-4xl"> MUSCLETECH</h2>
      </div>
      <Tarjeta marca="MUSCLETECH" />
    </div>
  )
}
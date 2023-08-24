import React from "react";
import Image from "next/image";

export default function Objetivos() {
  return(
    <>
    <div className="w-screen grid gap-2 grid-cols-2 lg:grid-cols-5 py-5 bg-black">
      <div className=" w-full h-auto bg-gray-500">
        <Image className=" w-full " src="/assets/images/SV---OBJETIVOS_01.jpg" width={1000} height={1000} alt=""/>
      </div>
      <div className=" w-full h-auto bg-gray-500">
        <Image className=" w-full " src="/assets/images/SV---OBJETIVOS_02.jpg" width={1000} height={1000} alt=""/>
      </div>
      <div className=" w-full h-auto bg-gray-500">
        <Image className=" w-full " src="/assets/images/SV---OBJETIVOS_03.jpg" width={1000} height={1000} alt=""/>
      </div>
      <div className=" w-full h-auto bg-gray-500">
        <Image className=" w-full " src="/assets/images/SV---OBJETIVOS_04.jpg" width={1000} height={1000} alt=""/>
      </div>
      <div className=" w-full h-auto bg-gray-500">
        <Image className=" w-full " src="/assets/images/SV---OBJETIVOS_05.jpg" width={1000} height={1000} alt=""/>
      </div>
    </div>
    </>
  )
}
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Supplements() {
  return(
    <>
      <div className="w-screen h-screen flex pyx-auto bg-black sm:flex-col">
        <div className="w-screen h-1/2 flex flex-col items-center justify-around bg-black sm:flex sm:flex-row px-10">
          <div className="w-full sm:w-1/4 my-10">
            <Link className="" href="/productos/hightech"> <span className="w-auto h-auto"> <Image className="w-1/2 mx-auto" src="/assets/images/hi_tech_pharma.webp" width={1000} height={1000}/> </span></Link>
          </div>
          <div className="w-full sm:w-1/4 my-10">
            <Link className="" href="/productos/nutrex"> <span className="w-auto h-auto"> <Image className="w-1/2 mx-auto" src="/assets/images/Nutrex.webp" width={1000} height={1000}/> </span></Link>
          </div>
          <div className="w-full sm:w-1/4 my-10">
            <Link className="" href="/productos/nutricost"> <span className="w-auto h-auto"> <Image className="w-1/2 mx-auto" src="/assets/images/nutricost.webp" width={1000} height={1000}/> </span></Link>
          </div>
          <div className="w-full sm:w-1/4 my-10">
            <Link className="" href="/productos/cooper"> <span className="w-auto h-auto"> <Image className="w-1/2 mx-auto" src="/assets/images/cooper-logo-w.webp" width={1000} height={1000}/> </span></Link>
          </div>
        </div>
        <div className="w-screen h-1/2 flex flex-col items-center justify-around bg-black sm:flex sm:flex-row px-10">
          <div className="w-full sm:w-1/4 my-10">
            <Link className="" href="/productos/mesoestetic"> <span className="w-auto h-auto"> <Image className="w-1/2 mx-auto" src="/assets/images/muscle-meds.webp" width={1000} height={1000}/> </span></Link>
          </div>
          <div className="w-full sm:w-1/4 my-10">
            <Link className="" href="/productos/muscletech"> <span className="w-auto h-auto"> <Image className="w-1/2 mx-auto" src="/assets/images/Muscletech.webp" width={1000} height={1000}/> </span></Link>
          </div>
          <div className="w-full sm:w-1/4 my-10">
            <Link className="" href="/productos/natrol"> <span className="w-auto h-auto"> <Image className="w-1/2 mx-auto" src="/assets/images/Natrol_1.webp" width={1000} height={1000}/> </span></Link>
          </div>
          <div className="w-full sm:w-1/4 my-10">
            <Link className="" href="/productos/universal"> <span className="w-auto h-auto"> <Image className="w-1/2 mx-auto" src="/assets/images/universal.webp" width={1000} height={1000}/> </span></Link>
          </div>
        </div>
      </div>
      
    </>
  )
}
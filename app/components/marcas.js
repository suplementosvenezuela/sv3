import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Supplements() {
  return(
    <>
      <div className="w-screen flex bg-gray-950 sm:flex-col">
        <div className="w-screen flex flex-col items-center justify-around bg-black sm:flex sm:flex-row px-10">
          <div className="w-full sm:w-1/4 my-20">
            <Link className="" href="/"> <span className="w-auto h-auto"> <Image className="w-full " src="/assets/images/hi_tech_pharma.webp" width={1000} height={1000}/> </span></Link>
          </div>
          <div className="w-full sm:w-1/4 my-20">
            <Link className="" href="/marcas/nutrex"> <span className="w-auto h-auto"> <Image className="w-full" src="/assets/images/Nutrex.webp" width={1000} height={1000}/> </span></Link>
          </div>
          <div className="w-full sm:w-1/4 my-20">
            <Link className="" href="/"> <span className="w-auto h-auto"> <Image className="w-full" src="/assets/images/nutricost.webp" width={1000} height={1000}/> </span></Link>
          </div>
          <div className="w-full sm:w-1/4 my-20">
            <Link className="" href="/"> <span className="w-auto h-auto"> <Image className="w-full " src="/assets/images/cooper-logo-w.webp" width={1000} height={1000}/> </span></Link>
          </div>
        </div>
        <div className="w-screen flex flex-col items-center justify-around bg-black sm:flex sm:flex-row px-10">
          <div className="w-full sm:w-1/4 my-20">
            <Link className="" href="/"> <span className="w-auto h-auto"> <Image className="w-full" src="/assets/images/muscle-meds.webp" width={1000} height={1000}/> </span></Link>
          </div>
          <div className="w-full sm:w-1/4 my-20">
            <Link className="" href="/"> <span className="w-auto h-auto"> <Image className="w-full" src="/assets/images/Muscletech.webp" width={1000} height={1000}/> </span></Link>
          </div>
          <div className="w-full sm:w-1/4 my-20">
            <Link className="" href="/"> <span className="w-auto h-auto"> <Image className="w-full" src="/assets/images/Natrol_1.webp" width={1000} height={1000}/> </span></Link>
          </div>
          <div className="w-full sm:w-1/4 my-20">
            <Link className="" href="/"> <span className="w-auto h-auto"> <Image className="w-full" src="/assets/images/universal.webp" width={1000} height={1000}/> </span></Link>
          </div>
        </div>
      </div>
      
    </>
  )
}
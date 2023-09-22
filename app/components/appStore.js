import React from "react";
import Image from "next/image";

export default function AppStore() {
  return(
    <>
      <div className="w-screen bg-black flex flex-col lg:flex-row ">
        <div className="w-full lg:w-1/2 flex flex-col">
          <div className="w-full ">
            <Image className=" w-1/4 mx-auto" src="/assets/images/sv - logo con fondo negro.png" width={1000} height={1000} />
          </div>
          <div>
          <Image className=" w-full " src="/assets/images/telefono.webp" width={1000} height={1000} />
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col">
          <div className="w-full text-center p-2 my-5 sm:my-20">
            <h2 className=" text-gray-400 text-4xl font-medium">DESCARGA NUESTRA APP!!</h2>
          </div>
          <div className="w-full text-center p-20 my-5 sm:my-20">
            <p className=" text-gray-400 text-lg font-medium" > </p>
          </div>
          <div className="w-full grid gap-2 grid-cols-2 p-2 my-5 sm:my-20">
            <button className=" w-full sm:w-3/5 lg:w-3/5 xl:w-2/5 h-10 rounded-full mx-1 sm:mx-auto bg-gray-400 text-lg font-medium text-white text-center flex  pt-1 pl-10 lg:pl-4 xl:pl-3 hover:bg-orange-300">Play Store <span > <Image className=" w-8 h-8 invert ml-2" src="/assets/images/palystore.ico" width={1000} height={1000} /></span></button>
            <button className=" w-full sm:w-3/5 lg:w-3/5 xl:w-2/5 h-10 rounded-full mx-1 sm:mx-auto  bg-gray-400 text-lg font-medium text-white text-center flex  pt-1 pl-10 lg:pl-4 xl:pl-3 hover:bg-orange-300">App Store <span > <Image className=" w-8 h-8 invert ml-2" src="/assets/images/appstore.ico" width={1000} height={1000} /></span></button>
          </div>
        </div>
      </div>
    </>
  )
}
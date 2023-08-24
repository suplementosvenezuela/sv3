import React from "react";

export default function Blog() {
  return(
    <>
      <div className=" bg-black w-screen h-auto pt-32">
        <div className="bg-gradient-to-r from-orange-500/70 to-orange-500/40 w-screen h-1/2 flex">
          <div className="w-2/5 h-96 relative top-40 pl-5 sm:pl-16">
            <h2 className="text-white text-sm font-medium sm:text-xl lg:text-2xl">texto cool</h2>
            <h2 className="text-white text-md font-medium sm:text-2xl lg:text-4xl">segundo texto cool</h2>
            <p className=" w-full"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae itaque doloribus molestias, laudantium nam reiciendis labore, quis, ad in rerum vel culpa repellat obcaecati quae ab quasi modi suscipit facilis. </p>
          </div>
          <div className=" bg-white/50 ml-4 w-1/2 sm:w-72 lg:w-2/5 h-96">
          <h2 className="text-black text-md font-medium sm:text-2xl lg:text-4xl">imagen cool</h2>
          </div>
        </div>
        <div className="w-screen py-5 lg:px-60 relative -top-20">
          <div className=" bg-white w-full h-auto p-5">
            <p className=" w-full"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae itaque doloribus molestias, laudantium nam reiciendis labore, quis, ad in rerum vel culpa repellat obcaecati quae ab quasi modi suscipit facilis. </p>
            <p className=" w-full"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae itaque doloribus molestias, laudantium nam reiciendis labore, quis, ad in rerum vel culpa repellat obcaecati quae ab quasi modi suscipit facilis. </p>
            <p className=" w-full"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae itaque doloribus molestias, laudantium nam reiciendis labore, quis, ad in rerum vel culpa repellat obcaecati quae ab quasi modi suscipit facilis. </p>
            <p className=" w-full"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae itaque doloribus molestias, laudantium nam reiciendis labore, quis, ad in rerum vel culpa repellat obcaecati quae ab quasi modi suscipit facilis. </p>
            <p className=" w-full"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae itaque doloribus molestias, laudantium nam reiciendis labore, quis, ad in rerum vel culpa repellat obcaecati quae ab quasi modi suscipit facilis. </p>
            <p className=" w-full"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae itaque doloribus molestias, laudantium nam reiciendis labore, quis, ad in rerum vel culpa repellat obcaecati quae ab quasi modi suscipit facilis. </p>
          </div>
        </div>
        <div className=" w-screen h-auto grid gap-1 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-12">
          <div className="w-full flex flex-col px-3 items-center">
            <div className=" bg-white w-4/5 h-40 p-5">
              <p className=" w-full"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae itaque doloribus molestias, laudantium nam reiciendis labore, quis, ad in rerum vel culpa repellat obcaecati quae ab quasi modi suscipit facilis. </p>
            </div>
            <div className="">
              <input className=" bg-orange-400/50 text-white w-64 mt-5 rounded-full h-8 hover:bg-orange-500 cursor-pointer" type="button" value="LEE MAS" />
            </div>
          </div>
          <div className="w-full flex flex-col px-3 items-center">
            <div className=" bg-white w-4/5 h-40 p-5">
              <p className=" w-full"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae itaque doloribus molestias, laudantium nam reiciendis labore, quis, ad in rerum vel culpa repellat obcaecati quae ab quasi modi suscipit facilis. </p>
            </div>
            <div className="">
              <input className=" bg-orange-400/50 text-white w-64 mt-5 rounded-full h-8 hover:bg-orange-500 cursor-pointer" type="button" value="LEE MAS" />
            </div>
          </div>
          <div className="w-full flex flex-col px-3 items-center">
            <div className=" bg-white w-4/5 h-40 p-5">
              <p className=" w-full"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae itaque doloribus molestias, laudantium nam reiciendis labore, quis, ad in rerum vel culpa repellat obcaecati quae ab quasi modi suscipit facilis. </p>
            </div>
            <div className="">
              <input className=" bg-orange-400/50 text-white w-64 mt-5 rounded-full h-8 hover:bg-orange-500 cursor-pointer" type="button" value="LEE MAS" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
"use client"
import React from "react";



export default function Presentation() {
  return(
    <>
      <div className="w-screen flex bg-black mt-24">
        <div className="w-full">
          <video className=" w-full" width="2000" height="2000" autoPlay muted loop preload>
            <source src="/assets/videos/Sv-Video Inicio Web.mp4" type="video/mp4"></source>
          </video>
        </div>
      </div>
    </>
  )
}
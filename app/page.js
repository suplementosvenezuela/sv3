import Presentation from "./components/presentation"
import Products from "./components/products"
import Public from "./components/public"
import Supplements from "./components/supplements"
import Categories from "./components/categories"
import Image from "next/image"
import Link from "next/link"
import Objetivos from "./components/objetivos"
import Location from "./components/location"
import AppStore from "./components/appStore"

export default function Home() {
  return (
    <section className='flex flex-col bg-black'>
      <div className="w-16 h-16 lg:w-24 lg:h-24 rounded-r-lg fixed bottom-5 left-5 z-40 animate-pulse">
        <Link className="cursor-pointer" href="https://api.whatsapp.com/send?phone=584140124810&text=%C2%A1Hola!%20Saludos%2C%0ALes%20escribo%20a%20trav%C3%A9s%20de%20su%20p%C3%A1gina%20web%20principal%20suplementosvenezuela.com%20y%20estoy%20interesado%20en%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20suplementos%20y%20tambi%C3%A9n%20en%20recibir%20asesor%C3%ADa%20personalizada.%20Gracias%20de%20antemano.%20"><Image className="w-full h-full" src="/assets/images/whatsapp-icon.webp" width={500} height={500}/></Link>
      </div>
      <Presentation />
      <Objetivos />
      <Supplements />
      {/* <Public />
      <Products /> */}
      <Categories />
      <AppStore />
      <Location />
    </section>
  )
}

import Presentation from "./components/presentation"
import Products from "./components/products"
import Public from "./components/public"
import Supplements from "./components/supplements"
import Categories from "./components/categories"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <section className='flex flex-col bg-black'>
      <div className="w-16 h-16 lg:w-24 lg:h-24 rounded-r-lg fixed bottom-5 left-5 z-40 animate-pulse">
        <Link className="cursor-pointer" href="https://api.whatsapp.com/send?phone=584140124810&text=Solicitó%20información"><Image className="w-full h-full" src="/assets/images/whatsapp-icon.webp" width={500} height={500}/></Link>
      </div>
      <Presentation />
      <Supplements />
      <Public />
      <Products />
      <Categories />

    </section>
  )
}

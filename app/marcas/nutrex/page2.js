{cards.map((card, index) => {
    const whatsappLink = `https://api.whatsapp.com/send?phone=584142743886&text=${encodeURIComponent(`¡Hola! Saludos, 👋
      Les escribo a través de su página web SuplementosVenezuela.com desde la categoría marca "Nutrex" y estoy interesado en obtener más información y comprar "${card.producto}" por el precio de: ${card.precio} y también en recibir asesoría personalizada para el uso del mismo. Gracias de antemano. Mi nombre es: `)}`;
  
    return (
      <div key={index} className="flex flex-col w-full py-5 px-1 border-black mx-auto border-4 2 hover:bg-gradient-to-b from-black to-white/50 sm:w-4/5">
        {/* ... Resto del contenido ... */}
        <div className="w-full">
          <a
            href={whatsappLink}
            className="mt-4 w-full h-10 border-collapse text-white border-2 border-white hover:bg-amber-500 rounded-lg text-lg font-semibold sm:w-1/2 sm:mx-36 lg:mx-44"
          >
            Comprar
          </a>
        </div>
      </div>
    );
  })}
  
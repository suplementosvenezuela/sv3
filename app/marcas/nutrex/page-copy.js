import React from "react";
import Image from "next/image";

const cards = [
  {
    image:
      "/assets/images/marcas/nutrex/TESTOSTERONA- NUTREX - Anabol Hardcore 60 cap.png",
    carac1: "60 cápsulas",
    carac2: "Fórmula anabólica",
    carac3: "Aumenta la masa muscular",
    text1: "Aumento de la fuerza",
    text2: "Mejora del rendimiento",
    text3: "Apoyo anabólico",
    precio: "40",
    producto: "TESTOSTERONA- NUTREX - Anabol Hardcore 60 cap",
  },
  {
    image:
      "/assets/images/marcas/nutrex/preworkout - nutrex - OutLift Miami Vice 20 serv.png",
    carac1: "20 servicios",
    carac2: "Pre-entrenamiento",
    carac3: "Mejora la energía y el enfoque",
    text1: "Aumenta la resistencia",
    text2: "Mejora la concentración",
    text3: "Impulsa el rendimiento",
    precio: "50",
    producto: "preworkout - nutrex - OutLift Miami Vice 20 serv",
  },
  {
    image:
      "/assets/images/marcas/nutrex/preworkout - Nutrex_Lipo6_Black_Training_30Serv_Wild_Grape__79001.png",
    carac1: "30 servicios",
    carac2: "Fórmula de entrenamiento",
    carac3: "Aumenta la energía y la resistencia",
    text1: "Mejora el rendimiento atlético",
    text2: "Aumenta el enfoque",
    text3: "Apoya la quema de grasa",
    precio: "25",
    producto:
      "preworkout - Nutrex_Lipo6_Black_Training_30Serv_Wild_Grape__79001",
  },
  {
    image:
      "/assets/images/marcas/nutrex/TESTOSTERONA - NUTREX - Vitrix NTS-5  80 caps liquids.png",
    carac1: "80 cápsulas líquidas",
    carac2: "Aumento de testosterona",
    carac3: "Apoya la producción de testosterona",
    text1: "Mejora la libido",
    text2: "Aumenta la vitalidad",
    text3: "Soporte hormonal",
    precio: "45",
    producto: "TESTOSTERONA - NUTREX - Vitrix NTS-5  80 caps liquids",
  },
  {
    image:
      "/assets/images/marcas/nutrex/TESTOSTERONA - NUTREX - Tribulus Black 1300.png",
    carac1: "1300 mg de Tribulus",
    carac2: "Aumento de testosterona natural",
    carac3: "Mejora la función hormonal",
    text1: "Apoya la salud reproductiva",
    text2: "Aumenta la resistencia",
    text3: "Promueve la vitalidad",
    precio: "45",
    producto: "TESTOSTERONA - NUTREX - Tribulus Black 1300",
  },
  {
    image:
      "/assets/images/marcas/nutrex/preworkout - nutrex - alpha pupm ultimate.png",
    carac1: "Fórmula de pre-entrenamiento",
    carac2: "Aumento de energía y enfoque",
    carac3: "Mejora el rendimiento atlético",
    text1: "Aumenta la resistencia",
    text2: "Mejora la concentración",
    text3: "Potencia el rendimiento",
    precio: "35",
    producto: "preworkout - nutrex - alpha pupm ultimate",
  },
  {
    image: "/assets/images/marcas/nutrex/TESTOSTERONA - NUTREX VANADYL.png",
    carac1: "Fórmula de vanadio",
    carac2: "Soporte de glucosa y nutrientes",
    carac3: "Mejora la absorción de nutrientes",
    text1: "Apoya el metabolismo",
    text2: "Regula la glucosa en sangre",
    text3: "Potencia el rendimiento",
    precio: "25",
    producto: "TESTOSTERONA - NUTREX VANADYL",
  },
  {
    image:
      "/assets/images/marcas/nutrex/TESTOSTERONA - NUTREX - HMB 1000 - 120 TAB.png",
    carac1: "1000 mg de HMB por porción",
    carac2: "Apoya la síntesis de proteínas",
    carac3: "Mejora la recuperación muscular",
    text1: "Preserva la masa muscular",
    text2: "Aumenta la resistencia",
    text3: "Promueve la recuperación",
    precio: "45",
    producto: "TESTOSTERONA - NUTREX - HMB 1000 - 120 TAB",
  },
  {
    image:
      "/assets/images/marcas/nutrex/AMINOACIDOS - NUTREX - Bcca 6000 - 30serv.png",
    carac1: "30 servicios",
    carac2: "6000 mg de BCAAs",
    carac3: "Aumenta la síntesis de proteínas",
    text1: "Apoya la recuperación muscular",
    text2: "Mejora la resistencia",
    text3: "Preserva la masa muscular",
    precio: "35",
    producto: "AMINOACIDOS - NUTREX - Bcca 6000 - 30serv",
  },
  {
    image:
      "/assets/images/marcas/nutrex/TESTOSTERONA - NUTREX -T-UP-120-Cap..png",
    carac1: "120 cápsulas",
    carac2: "Fórmula potenciadora de testosterona",
    carac3: "Aumenta la producción de testosterona",
    text1: "Mejora la libido",
    text2: "Aumenta la fuerza",
    text3: "Apoyo hormonal",
    precio: "30",
    producto: "TESTOSTERONA - NUTREX -T-UP-120-Cap.",
  },
  {
    image:
      "/assets/images/marcas/nutrex/AMINOACIDOS - NUTREX - EAA+Hydratation Blood Orange 390 gm.png",
    carac1: "390 gramos",
    carac2: "Aminoácidos esenciales y hidratación",
    carac3: "Mejora la recuperación y la síntesis de proteínas",
    text1: "Aumenta la hidratación",
    text2: "Apoya la resistencia",
    text3: "Mejora el rendimiento",
    precio: "50",
    producto: "AMINOACIDOS - NUTREX - EAA+Hydratation Blood Orange 390 gm",
  },
  {
    image: "/assets/images/marcas/nutrex/preworkout NUTREX - Niox 120 ct.png",
    carac1: "120 cápsulas",
    carac2: "Fórmula de óxido nítrico",
    carac3: "Mejora la vasodilatación y el flujo sanguíneo",
    text1: "Aumenta la entrega de nutrientes",
    text2: "Mejora la energía",
    text3: "Impulsa el rendimiento",
    precio: "30",
    producto: "preworkout NUTREX - Niox 120 ct",
  },
  {
    image:
      "/assets/images/marcas/nutrex/AMINOACIDOS - NUTREX - Bcca Drive 200 tab.png",
    carac1: "200 tabletas",
    carac2: "Fórmula de BCAAs",
    carac3: "Aumenta la síntesis de proteínas",
    text1: "Apoya la recuperación muscular",
    text2: "Preserva la masa muscular",
    text3: "Mejora la resistencia",
    precio: "35",
    producto: "AMINOACIDOS - NUTREX - Bcca Drive 200 tab",
  },
  {
    image:
      "/assets/images/marcas/nutrex/preworkout - nutrex - larginine1000ntx6475.png",
    carac1: "Fórmula de L-Arginina",
    carac2: "Apoya la vasodilatación",
    carac3: "Mejora el flujo sanguíneo y la entrega de nutrientes",
    text1: "Aumenta la energía",
    text2: "Mejora la resistencia",
    text3: "Impulsa el rendimiento",
    precio: "30",
    producto: "preworkout - nutrex - larginine1000ntx6475",
  },
  {
    image:
      "/assets/images/marcas/nutrex/Preworkout - nutrex - HEMORAGE 30 SERV.png",
    carac1: "30 servicios",
    carac2: "Fórmula de pre-entrenamiento",
    carac3: "Aumenta la energía y el enfoque",
    text1: "Mejora la resistencia",
    text2: "Potencia el rendimiento",
    text3: "Impulsa la concentración",
    precio: "50",
    producto: "Preworkout - nutrex - HEMORAGE 30 SERV",
  },
  {
    image:
      "/assets/images/marcas/nutrex/TESTOSTERONA - NUTREX - ALPHA T- Tested 60 - libido.png",
    carac1: "60 cápsulas",
    carac2: "Fórmula potenciadora de testosterona",
    carac3: "Aumenta la producción de testosterona",
    text1: "Mejora la libido",
    text2: "Apoya el rendimiento",
    text3: "Soporte hormonal",
    precio: "35",
    producto: "TESTOSTERONA - NUTREX - ALPHA T- Tested 60 - libido",
  },
  {
    image:
      "/assets/images/marcas/nutrex/AMINOACIDOS - NUTREX - Lipo 6 black BCAA - 30 serv WATER-FRUIT.png",
    carac1: "30 servicios",
    carac2: "BCAAs y electrolitos",
    carac3: "Mejora la recuperación y la hidratación",
    text1: "Aumenta la resistencia",
    text2: "Apoya la síntesis de proteínas",
    text3: "Preserva la masa muscular",
    precio: "35",
    producto: "AMINOACIDOS - NUTREX - Lipo 6 black BCAA - 30 serv WATER-FRUIT",
  },
  {
    image: "/assets/images/marcas/nutrex/DEPURATIVO - NUTREX - Vitadapt.png",
    carac1: "20 servicios",
    carac2: "100 g",
    carac3: "Elimina toxinas",
    text1: "Promueve la salud intestinal",
    text2: "Mejora el sueño",
    text3: "Mejora la digestión",
    precio: "45",
    producto: "DEPURATIVO - NUTREX - Vitadapt",
  },
  {
    image:
      "/assets/images/marcas/nutrex/QUEMADORES DE GRASA - NUTREX 100_ WHEY PROTEIN 5LB CHOCO - Vainilla.png",
    carac1: "60 servicios",
    carac2: "120 g",
    carac3: "Quema grasa",
    text1: "Aumenta la energía",
    text2: "Mejora el rendimiento físico",
    text3: "",
    precio: "80",
    producto:
      "QUEMADORES DE GRASA - NUTREX 100_ WHEY PROTEIN 5LB CHOCO - Vainilla",
  },
  {
    image:
      "/assets/images/marcas/nutrex/QUEMADORES DE GRASA - NUTREX Volu Gro - Vitargo Fruit - Mango.png",
    carac1: "80 servicios",
    carac2: "240 g",
    carac3: "Quema grasa",
    text1: "Aumenta la energía",
    text2: "Mejora el rendimiento físico",
    text3: "",
    precio: "50",
    producto: "QUEMADORES DE GRASA - NUTREX Volu Gro - Vitargo Fruit - Mango",
  },
  {
    image:
      "/assets/images/marcas/nutrex/QUEMADORES DE GRASA - NUTREX Lipo-6 Black UC Intense 60 ct - CAJA.png",
    carac1: "120 servicios",
    carac2: "360 g",
    carac3: "Quema grasa",
    text1: "Aumenta la energía",
    text2: "Mejora el rendimiento físico",
    text3: "",
    precio: "40",
    producto:
      "QUEMADORES DE GRASA - NUTREX Lipo-6 Black UC Intense 60 ct - CAJA",
  },
  {
    image:
      "/assets/images/marcas/nutrex/PROTEINAS - NUTREX - Creatina_Drive__Nutrex_Sakal_Sport.png",
    carac1: "50 servicios",
    carac2: "500 g",
    carac3: "Desarrolla y mantiene la masa muscular",
    text1: "Promueve la recuperación muscular",
    text2: "Aumenta la energía",
    text3: "",
    precio: "50",
    producto: "PROTEINAS - NUTREX - Creatina_Drive__Nutrex_Sakal_Sport",
  },
  {
    image:
      "/assets/images/marcas/nutrex/DEPURATIVO - NUTREX - Lipo 6 black PROBIOTIC.png",
    carac1: "20 servicios",
    carac2: "100 g",
    carac3: "Elimina toxinas",
    text1: "Promueve la salud intestinal",
    text2: "Mejora el sueño",
    text3: "Ayuda a reducir el colesterol",
    precio: "35",
    producto: "DEPURATIVO - NUTREX - Lipo 6 black PROBIOTIC",
  },
  {
    image:
      "/assets/images/marcas/nutrex/PROTEINA - NUTREX Mass Infusion 12lb Vainilla.png",
    carac1: "60 servicios",
    carac2: "600 g",
    carac3: "Desarrolla y mantiene la masa muscular",
    text1: "Promueve la recuperación muscular",
    text2: "Aumenta la energía",
    text3: "",
    precio: "100",
    producto: "PROTEINA - NUTREX Mass Infusion 12lb Vainilla",
  },
  {
    image:
      "/assets/images/marcas/nutrex/DEPURATIVO - NUTREX - MELATONIN 100 TAB 5mg.png",
    carac1: "100 servicios",
    carac2: "500 g",
    carac3: "Mejora el sueño",
    text1: "",
    text2: "",
    text3: "",
    precio: "20",
    producto: "DEPURATIVO - NUTREX - MELATONIN 100 TAB 5mg",
  },
  {
    image:
      "/assets/images/marcas/nutrex/QUEMADORES DE GRASA - NUTREX Lipo-6 Black Ultra Concentrete 60 ct STIM - FREE.png",
    carac1: "60 servicios",
    carac2: "120 g",
    carac3: "Quema grasa",
    text1: "Aumenta la energía",
    text2: "Mejora el rendimiento físico",
    text3: "",
    precio: "35",
    producto:
      "QUEMADORES DE GRASA - NUTREX Lipo-6 Black Ultra Concentrete 60 ct STIM - FREE",
  },
  {
    image:
      "/assets/images/marcas/nutrex/QUEMADORES DE GRASA - NUTREX Lipo-6 Black Diretic 80 ct.png",
    carac1: "80 servicios",
    carac2: "240 g",
    carac3: "Quema grasa",
    text1: "Aumenta la energía",
    text2: "Mejora el rendimiento físico",
    text3: "",
    precio: "30",
    producto: "QUEMADORES DE GRASA - NUTREX Lipo-6 Black Diretic 80 ct",
  },
  {
    image:
      "/assets/images/marcas/nutrex/QUEMADORES DE GRASA - NUTREX - Lipo-6 Black UC Intense 120 ct.png",
    carac1: "120 servicios",
    carac2: "360 g",
    carac3: "Quema grasa",
    text1: "Aumenta la energía",
    text2: "Mejora el rendimiento físico",
    text3: "",
    precio: "65",
    producto: "QUEMADORES DE GRASA - NUTREX - Lipo-6 Black UC Intense 120 ct",
  },
  {
    image:
      "/assets/images/marcas/nutrex/PROTEINAS - NUTREX IsoFit 2lb Shake Chocolate - Vainilla.png",
    carac1: "20 servicios",
    carac2: "100 g",
    carac3: "Proteína de suero de leche",
    text1: "Desarrolla y mantiene la masa muscular",
    text2: "Promueve la recuperación muscular",
    text3: "Apoya la salud ósea",
    precio: "55",
    producto: "PROTEINAS - NUTREX IsoFit 2lb Shake Chocolate - Vainilla",
  },
  {
    image:
      "/assets/images/marcas/nutrex/QUEMADORES DE GRASA - NUTREX - Lipo 6 Defining Gel - FAJA.png",
    carac1: "60 aplicaciones",
    carac2: "150 g",
    carac3: "Fórmula de gel de quema de grasa",
    text1: "Quema grasa",
    text2: "Aumenta la energía",
    text3: "Mejora la definición muscular",
    precio: "55",
    producto: "QUEMADORES DE GRASA - NUTREX - Lipo 6 Defining Gel - FAJA",
  },
  {
    image:
      "/assets/images/marcas/nutrex/Quemadores de grasa - nutrex - Picolinate Cromiun 100 tab - 200mcg.png",
    carac1: "100 tabletas",
    carac2: "200 mcg",
    carac3: "Picolinato de cromo",
    text1: "Ayuda a regular los niveles de azúcar en la sangre",
    text2: "Puede ayudar a perder peso",
    text3: "Mejora la sensibilidad a la insulina",
    precio: "30",
    producto:
      "Quemadores de grasa - nutrex - Picolinate Cromiun 100 tab - 200mcg",
  },
  {
    image:
      "/assets/images/marcas/nutrex/QUEMADORES DE GRASA - NUTREX - Lipo 6 Carnitine 120 Caps.png",
    carac1: "120 cápsulas",
    carac2: "500 mg",
    carac3: "L-carnitina",
    text1:
      "Ayuda a transportar la grasa a los músculos para su uso como energía",
    text2: "",
    text3: "Apoya la salud cardíaca",
    precio: "25",
    producto: "QUEMADORES DE GRASA - NUTREX - Lipo 6 Carnitine 120 Caps",
  },
  {
    image:
      "/assets/images/marcas/nutrex/PROTEINA - NUTREX - creatina drive - nutrex 1000g.png",
    carac1: "50 servicios",
    carac2: "500 g",
    carac3: "Creatina monohidrato",
    text1: "Ayuda a aumentar la masa muscular y la fuerza",
    text2: "",
    text3: "Mejora el rendimiento deportivo",
    precio: "100",
    producto: "PROTEINA - NUTREX - creatina drive - nutrex 1000g",
  },
  {
    image:
      "/assets/images/marcas/nutrex/QUEMADORES DE GRASA - NUTREX - Lipo-6 Keto 60 cap.png",
    carac1: "60 cápsulas",
    carac2: "500 mg",
    carac3: "Fórmula de quema de grasa para ceto",
    text1: "Ayuda a aumentar la cetosis",
    text2: "Aumenta la energía",
    text3: "Mejora la concentración",
    precio: "20",
    producto: "QUEMADORES DE GRASA - NUTREX - Lipo-6 Keto 60 cap",
  },
  {
    image:
      "/assets/images/marcas/nutrex/QUEMADORES DE GRASA - NUTREX - Lipo-6 Black Her UC 60 ct.png",
    carac1: "60 cápsulas",
    carac2: "500 mg",
    carac3: "Fórmula de quema de grasa para mujeres",
    text1: "Quema grasa",
    text2: "Aumenta la energía",
    text3: "Mejora el estado de ánimo",
    precio: "40",
    producto: "QUEMADORES DE GRASA - NUTREX - Lipo-6 Black Her UC 60 ct",
  },
  {
    image:
      "/assets/images/marcas/nutrex/QUEMADORES DE GRASA - NUTREX - Liquid L-Carnitine Berry Blast 16oz.png",
    carac1: "16 onzas",
    carac2: "1000 mg",
    carac3: "L-carnitina líquida",
    text1:
      "Ayuda a transportar la grasa a los músculos para su uso como energía",
    text2: "",
    text3: "Mejora la movilidad",
    precio: "35",
    producto:
      "QUEMADORES DE GRASA - NUTREX - Liquid L-Carnitine Berry Blast 16oz",
  },
  {
    image:
      "/assets/images/marcas/nutrex/QUEMADORES DE GRASA - NUTREX - Caffeine 200.png",
    carac1: "100 cápsulas",
    carac2: "200 mg",
    carac3: "Cafeína",
    text1: "Aumenta la energía",
    text2: "",
    text3: "Mejora el enfoque",
    precio: "30",
    producto: "QUEMADORES DE GRASA - NUTREX - Caffeine 200",
  },
  {
    image:
      "/assets/images/marcas/nutrex/QUEMADORES DE GRASA - NUTREX Lipo-6 Black Nigth Time 30 past.png",
    carac1: "30 cápsulas",
    carac2: "500 mg",
    carac3: "Fórmula de quema de grasa nocturna",
    text1: "Quema grasa",
    text2: "",
    text3: "Mejora el sueño",
    precio: "35",
    producto: "QUEMADORES DE GRASA - NUTREX Lipo-6 Black Nigth Time 30 past",
  },
  {
    image:
      "/assets/images/marcas/nutrex/QUEMADORES DE GRASA - NUTREX - Lipo-6 Black Ultra Concentrete 60 ct CAJA.png",
    carac1: "60 cápsulas",
    carac2: "500 mg",
    carac3: "Fórmula de quema de grasa concentrada",
    text1: "Quema grasa",
    text2: "Aumenta la energía",
    text3: "Promueve la pérdida de peso",
    precio: "35",
    producto:
      "QUEMADORES DE GRASA - NUTREX - Lipo-6 Black Ultra Concentrete 60 ct CAJA",
  },
  {
    image:
      "/assets/images/marcas/nutrex/QUEMADORES DE GRASA - NUTREX Lipo-6 Keto 30 serv - Melon Lemonade.png",
    carac1: "30 servicios",
    carac2: "300 g",
    carac3: "Fórmula de quema de grasa para ceto",
    text1: "Ayuda a aumentar la cetosis",
    text2: "Aumenta la energía",
    text3: "Mejora la concentración",
    precio: "20",
    producto:
      "QUEMADORES DE GRASA - NUTREX Lipo-6 Keto 30 serv - Melon Lemonade",
  },
  {
    image:
      "/assets/images/marcas/nutrex/QUEMADORES DE GRASA - NUTREX LIPO-6 BLACK THYROLEAN.png",
    carac1: "120 cápsulas",
    carac2: "500 mg",
    carac3: "Fórmula termogénica de quema de grasa",
    text1: "Quema grasa",
    text2: "Aumenta la energía",
    text3: "Mejora la concentración",
    precio: "30",
    producto: "QUEMADORES DE GRASA - NUTREX LIPO-6 BLACK THYROLEAN",
  },
  {
    image:
      "/assets/images/marcas/nutrex/QUEMADORES DE GRASA - NUTREX - Lipo 6 Defining Gel - faja.png",
    carac1: "60 aplicaciones",
    carac2: "150 g",
    carac3: "Fórmula de gel de quema de grasa",
    text1: "Quema grasa",
    text2: "Aumenta la energía",
    text3: "Mejora la definición muscular",
    precio: "55",
    producto: "QUEMADORES DE GRASA - NUTREX - Lipo 6 Defining Gel - faja",
  },
  {
    image:
      "/assets/images/marcas/nutrex/QUEMADORES DE GRASA - NUTREX - Cla 90 ct.png",
    carac1: "90 cápsulas",
    carac2: "1000 mg",
    carac3: "Ácido linoleico conjugado",
    text1: "Ayuda a reducir la grasa abdominal",
    text2: "Mejora la salud cardiovascular",
    text3: "Ayuda a reducir el riesgo de enfermedades crónicas",
    precio: "40",
    producto: "QUEMADORES DE GRASA - NUTREX - Cla 90 ct",
  },
  {
    image:
      "/assets/images/marcas/nutrex/QUEMADORES DE GRASA - NUTREX Lipo-6 Black Ultra Concentrete 60 ct.png",
    carac1: "60 cápsulas",
    carac2: "500 mg",
    carac3: "Fórmula de quema de grasa concentrada",
    text1: "Quema grasa",
    text2: "Aumenta la energía",
    text3: "Promueve la pérdida de peso",
    precio: "35",
    producto:
      "QUEMADORES DE GRASA - NUTREX Lipo-6 Black Ultra Concentrete 60 ct",
  },
  {
    image:
      "/assets/images/marcas/nutrex/PROTEINAS - NUTREX - MUSCLE INFUSION 2LB CHOCO -VAINIL-.png",
    carac1: "20 servicios",
    carac2: "100 g",
    carac3: "Proteína de suero de leche",
    text1: "Desarrolla y mantiene la masa muscular",
    text2: "Promueve la recuperación muscular",
    text3: "Apoya la salud ósea",
    precio: "45",
    producto: "PROTEINAS - NUTREX - MUSCLE INFUSION 2LB CHOCO -VAINIL-",
  },
  {
    image:
      "/assets/images/marcas/nutrex/PROTEINAS - NUTREX - Collageno 120 cap.png",
    carac1: "120 cápsulas",
    carac2: "2500 mg",
    carac3: "Colágeno hidrolizado",
    text1:
      "Ayuda a mejorar la salud de la piel, las articulaciones y los huesos",
    text2: "Reduce el riesgo de osteoporosis",
    text3: "Mejora la cicatrización de heridas",
    precio: "25",
    producto: "PROTEINAS - NUTREX - Collageno 120 cap",
  },
  {
    image:
      "/assets/images/marcas/nutrex/QUEMADORES DE GRASA - NUTREX Cla 45 ct.png",
    carac1: "45 cápsulas",
    carac2: "500 mg",
    carac3: "Ácido linoleico conjugado",
    text1: "Ayuda a reducir la grasa abdominal",
    text2: "Mejora la salud cardiovascular",
    text3: "Ayuda a reducir el riesgo de enfermedades crónicas",
    precio: "25",
    producto: "QUEMADORES DE GRASA - NUTREX Cla 45 ct",
  },
  {
    image:
      "/assets/images/marcas/nutrex/QUEMADORES DE GRASA - NUTREX IsoFit 5lb Shake Chocolate - Vainilla.png",
    carac1: "50 servicios",
    carac2: "500 g",
    carac3: "Proteína de suero de leche",
    text1: "Desarrolla y mantiene la masa muscular",
    text2: "Promueve la recuperación muscular",
    text3: "Apoya la salud ósea",
    precio: "110",
    producto:
      "QUEMADORES DE GRASA - NUTREX IsoFit 5lb Shake Chocolate - Vainilla",
  },
];

export default function Produtos() {
  return (
    <>
      <div className="w-screen flex flex-col bg-black">
        <div className=" mt-16 w-full">
          <Image
            className="w-full"
            src="/assets/images/SV_FONDO_LINEAS.png"
            width={2000}
            height={2000}
          />
        </div>
        <div className="px-5 grid gap-1 grid-cols-1 lg:gap-4 lg:grid-cols-2 w-screen h-auto">
          {cards.map((card, index) => {
            return (
              <div
                key={index}
                className="flex flex-col w-full py-5 px-1 border-black mx-auto border-4 2 hover:bg-gradient-to-b from-black to-white/50 sm:w-4/5"
              >
                <div className="flex w-full flex-col sm:flex-row">
                  <div className="flex flex-row w-full relative top-72 sm:top-0 pt-0 sm:pl-20 sm:flex-col sm:w-1/2 ">
                    <div className="w-1/3 h-24 left-0 pt-7 p-1 mb-2 text-center bg-amber-500 sm:pt-4 sm:w-20 sm:h-20  sm:-left-1/2">
                      <h2 className="text-black text-xl font-semibold">
                        {card.carac1}
                      </h2>
                      <h2 className="text-black text-sm">Presentación</h2>
                    </div>
                    <div className="w-1/3 h-28 left-0 pt-7 p-1 mb-2 text-center sm:pt-4 sm:w-20 sm:h-20 sm:-left-1/2">
                      <h2 className="text-white text-xl font-semibold">
                        {card.carac2}
                      </h2>
                      <h2 className="text-white text-sm">Cantidad</h2>
                    </div>
                    <div className="w-1/3 h-28 left-0 pt-7 p-1 mb-2 text-center sm:pt-4 sm:w-20 sm:h-20 sm:-left-1/2">
                      <h2 className="text-white text-xl font-semibold">
                        {card.carac3}
                      </h2>
                      <h2 className="text-white text-sm">Otros</h2>
                    </div>
                  </div>
                  <div className="relative -top-36 w-full sm:w-1/2 sm:top-0 mb-4 sm:mb-0">
                    <Image
                      className="w-full h-auto sm:w-full sm:h-full"
                      src={card.image}
                      alt={card.producto}
                      width={1381}
                      height={1080}
                      layout="responsive"
                    />
                  </div>
                </div>
                <div className="w-full flex flex-col mt-2 sm:flex-row">
                  <span className=" bg-white w-full h-0.5 sm:hidden"></span>

                  <div className="w-full h-16 px-2 pt-2 sm:w-1/3 mb-1">
                    <p className="text-center text-white text-base sm:text-sm ">
                      {card.text1}
                    </p>
                  </div>

                  <span className=" bg-white w-full h-0.5 sm:w-1 sm:h-full"></span>

                  <div className="w-full h-16 px-2 pt-2 sm:w-1/3 mb-1">
                    <p className="text-center text-white text-base sm:text-sm">
                      {card.text2}
                    </p>
                  </div>

                  <span className=" bg-white w-full h-0.5 sm:w-1 sm:h-full"></span>

                  <div className="w-full h-16 px-2 pt-2 sm:w-1/3 mb-1">
                    <p className="text-center text-white text-base sm:text-sm">
                      {card.text3}
                    </p>
                  </div>
                </div>

                <div className="w-full">
                  <button
                    className="mt-4 w-full h-10 border-collapse text-white border-2 border-white hover:bg-amber-500 rounded-lg text-lg font-semibold sm:w-1/2 sm:mx-36 lg:mx-44"
                    type="submit"
                  >
                    Comprar
                  </button>
                </div>
                <div className="w-full flex justify-center items-center mt-4">
                  <div className="bg-gray-900 text-white py-2 px-4 rounded-md text-lg">
                    ${card.precio}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

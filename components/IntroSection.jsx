import { motion } from "framer-motion";


const scrollFadeUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: false, amount: 0.3 }
};

export default function IntroSection() {
    return (
<section>
      
{/* Texto intro*/}
      <motion.section {...scrollFadeUp} className="pl-4 mb-20 text-md">

      {/* Columna 1*/} 
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr] gap-8 border-t-2 border-blue-700 max-h-min pt-5">
        <div className="place-content-center">
        <h1 className="font-bold text-8xl text-blue-700">Gráfica web_ Diseño web + ilustración</h1>
        </div>

      {/* Columna 2*/} 
        <div className="place-content-between">
        <p className="pt-2 text-md font-semibold">Diseñamos páginas web. Por ende, 
          creamos espacios para que las personas y marcas se expresen y se comuniquen con el mundo.
          Estámos enfocados en la web no convencional. Hoy en día, tener una página web no es difícil. 
          Pero tener una única, que resalte, y exprese realmente una identidad, sí. 
          La web se ha vuelto un medio donde la estandarización ha hecho 
          que todo se comience a ver igual. Estámos aquí para acabar con ese problema. 
        </p>
        </div>

      {/* Columna 3*/} 
        <div className="place-content-center">
        <p className="pt-2 text-md font-semibold">Hemos trabajado con compañias, con creativos, con escritores y con diseñadores que han buscado dejar una marca diferente
          en la web. Nuestro trabajo es utilizar este medio como algo que le aporte al contenido, y a la marca.
          </p>
        </div>

      </div>
      </motion.section>

</section>
    );
}
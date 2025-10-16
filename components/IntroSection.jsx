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
      <motion.section {...scrollFadeUp} className="h-screen pr-10 mt-30 mb-20 text-md">

      {/* Columnas*/} 
      <div className="grid grid-cols-2 md:grid-cols-2 gap-0">

      {/* Columna 1*/} 
      <div>
      </div>


      {/* Columna 2*/} 
        <div className="place-content-center w-3/4 border-t-2 border-dashed pt-5">
          <h1 className="text-4xl"><span className="animate-pulse cursor-help hover:animate-none brightness-125">#NoMásTemplates</span> <br></br>Diseño web + Storytelling</h1>
          <br></br>
          <p className="cursor-vertical-text">Hoy en día, tener una página web no es difícil. Pero sí lo es tener una única, que resalte y exprese realmente una identidad. La web se ha vuelto un medio donde la estandarización ha hecho que todo se vea igual. Estamos aquí para acabar con ese problema.</p>
          <br></br>
          <p className="cursor-vertical-text">Hemos trabajado con compañías, creativos, escritores y diseñadores que han buscado dejar una marca diferente en la web. Nuestro trabajo es utilizar este medio en su máximo potencial para crear algo único que aporte valor.</p>

        </div>

      </div>
      </motion.section>
</section>
    );
}
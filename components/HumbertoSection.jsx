import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const scrollFadeUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: false, amount: 0.3 }
};

export default function HumbertoSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [imageIndex, setImageIndex] = useState(0);

  // Your 5 images (add your actual image paths here)
  const images = [
    "/images/humberto/1.png",
    "/images/humberto/2.png",
    "/images/humberto/3.png",
    "/images/humberto/4.png",
    "/images/humberto/5.png",
  ];

  // Mouse move tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    if (isHovered) {
      window.addEventListener("mousemove", handleMouseMove);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
    }

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isHovered]);

  // Image cycling
  useEffect(() => {
    let interval;
    if (isHovered) {
      interval = setInterval(() => {
        setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 500); // change every 500ms
    } else {
      setImageIndex(0); // reset when not hovering
    }

    return () => clearInterval(interval);
  }, [isHovered, images.length]);

  return (
    <motion.section {...scrollFadeUp} className="relative mt-30 pt-40 pl-4 mb-20 text-md h-[80vh]"
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    >
      
      {/* Hover image */}
      {isHovered && (
        <motion.div
          className="pointer-events-none fixed z-[-10]"
          style={{
            left: mousePosition.x - 200,
            top: mousePosition.y - 150,
          }}

          initial={{ opacity: 0.99 }}
          animate={{ opacity: 0.99 }}
          transition={{ duration: 0.9 }}
        >
          <Image
            src={images[imageIndex]}
            alt={`Hover image ${imageIndex + 1}`}
            width={400}
            height={300}
            className="shadow-xl"
          />
        </motion.div>
      )}

      {/* Columns */}
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-8">
        <div>
          <h1 className="font-bold text-6xl relative z-10">
          Web + identidad gráfica_ <a className="cursor-pointer text-blue-700">Humberto Polar</a> 
          </h1>
        </div>
        <div>
          <p className="pt-2 text-md font-semibold">
            Junto con Humberto {' ('}artista, publicista, músico...{') '} radicado en México, 
            trabajamos para construir su mundo digital. Él tenía un problema común: 
            una gran cantidad de contenido que
            era difícil de organizar en una página web tradicional.
          </p>
        </div>
        <div className="place-content-center">
          <p className="pt-2 text-md font-semibold">
            Se trabajó para que la página no solo mostrara su trabajo sino que
            fuera una expansión de su marca.
          </p>
        </div>
      </div>
    </motion.section>
  );
}


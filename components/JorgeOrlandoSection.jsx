import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const scrollFadeUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: false, amount: 0.3 }
};

export default function jorgeOrlandoSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [imageIndex, setImageIndex] = useState(0);

  // Your 5 images (add your actual image paths here)
  const images = [
    "/images/jorgeOrlando/1.png",
    "/images/jorgeOrlando/2.png",
    "/images/jorgeOrlando/3.png",
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
    <motion.section {...scrollFadeUp} className="relative py-10 pl-4 text-md border-b-2 border-dashed"
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
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8">
        <div>
          <h1 className="text-2xl relative z-10 text-white mix-blend-difference">
          Cliente_ <a className="cursor-pointer">jorgeOrlando Circuit</a> 
          <br></br>
          Web + Identidad gráfica
          </h1>
        </div>
        <div>
          <p className="pt-2 text-md text-white">
            Insertar aquuí descripción del proyecto jorgeOrlando Circuit.
          </p>
          <br></br>
          <p className="text-md">
            highlight del trabajo con jorgeOrlando Circuit
          </p>
        </div>
        <div className="place-content-center">
          
        </div>
      </div>
    </motion.section>
  );
}


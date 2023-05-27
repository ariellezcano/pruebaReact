import { motion, useInView } from "framer-motion";
import "./card-personaje.css";
import { useRef } from "react";

function CardPersonajes({ data }) {
  //variants para darle transicion a la imagen
  const variants = {
    initial: { opacity: 0, scale: 0 },
    animate: ({ index }) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 2, delay: index*.1 },
    }),
  };

  const ref = useRef(null);
  const estaVisto = useInView(ref,{
    once:true
  });

  return (
    <div>
      {data.map((item: any, index: number) => (
        <div key={item.id} className="card">
          <motion.img
            ref={ref}
            //drag
            initial="initial"
            animate={estaVisto ? "":"animate"}
            variants={variants}
            custom={{ index }}
            whileHover={{
              scale:1.1
            }}
            src={item.image}
            alt="Avatar"
            id="img"
          />
          <div className="container">
            <h4>
              <b>Nombre:&nbsp;{item.name}</b>
            </h4>
            <p>Especie:&nbsp;{item.species}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardPersonajes;

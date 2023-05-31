import { useEffect, useState } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);

  //se ejecuta cuando el componente se ha creado
  useEffect(() => {
    console.log("Me he creado");
  }, []);

  //se ejecuta cuando el arreglo de dependencias (cariable que se encuentra dentro) sufre algun cambio de estado
  useEffect(() => {
    console.log("Me he actualizado");
  }, [count]);

  const evento = (e: any) => {
    console.log(e);
  };

  useEffect(() => {
    document.addEventListener("wheel", evento);
    return () => {
      document.removeEventListener("wheel", evento);
    };
  }, [count]);

  return (
    <div className="useEffect">
      <button onClick={() => setCount(count + 1)}>Incrementar 1</button>
      <br />
      <h1>{count}</h1>
    </div>
  );
}

export default UseEffect;

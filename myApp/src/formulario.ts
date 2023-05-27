import { useState } from "react";

//esto se llama custorm hooks => separa el codigo ts de tsx
function Formulario() {
  const url_base = "https://rickandmortyapi.com/api/character/?name=";
  const url_status = "&status=alive";

  //el useState manipula los datos y los envia a traves de la funcion set
  const [data, setData] = useState([]);
  const [estaCargando, setEstaCargando] = useState(false);

  async function getMorty(query: string) {
    try {
      const url = `${url_base}${query}${url_status}`;
      setEstaCargando(true);
      //hace que espere la promesa para ejecutar el fetch y muestre la variable cargando en la vista
      await new Promise((resolve: any)=>{
        setTimeout(() => {
            resolve(true)
        }, 3000);
      });

      const response = await fetch(url);
      const jsonData = await response.json();
      setEstaCargando(false);
      setData(jsonData.results);
    } catch (error) {
      console.log(error);
    }
  }

  let valor = "";
  const onChange = (evento: any) => {
    valor = evento.target.value;
  };

  function onSubmit(evento: any) {
    evento.preventDefault();
    getMorty(valor);
  }

  //el hook retorna las funciones o variables al formulario donde se va a utilizar
  return {
    onChange,//funcion
    onSubmit,//funcion
    data,//variable useState
    estaCargando,//variable useState
  };
}

export default Formulario;

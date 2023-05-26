import { useState } from "react";
import Buscador from "./pages/filters/fil-buscador/fil-buscador";
import CardPersonajes from "./pages/lst/card-personaje/card-personajes";

function Formularios() {
  const url_base = "https://rickandmortyapi.com/api/character/?name=";
  const url_status = "&status=alive";

  const [data, setData] = useState([]);

  async function getMorty(query: string) {
    try {
      const url = `${url_base}${query}${url_status}`;
      const response = await fetch(url);
      const jsonData = await response.json();
      console.log(jsonData.results[0].episode);
      setData(jsonData.results);
      //setEpisodes(jsonData.results[0].episode);
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

  return (
    <div className="Form">
      <br />
      <Buscador onSubmit={onSubmit} onChange={onChange} />
      <div>
        <h1 id="h1">Array Ejemplo</h1>
        <CardPersonajes
        data={data}
        />
      </div>
    </div>
  );
}

export default Formularios;

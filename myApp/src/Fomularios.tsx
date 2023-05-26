import { useEffect, useState } from "react";

function Formularios() {
  const url_base = "https://rickandmortyapi.com/api/character/?name=";
  const url_status = "&status=alive";

  const [data, setData] = useState([]);
  const [episode, setEpisodes] = useState([]);
  const [selectedEpisode, setSelectedEpisode] = useState("");

  async function getMorty(query: string) {
    try {
      const url = `${url_base}${query}${url_status}`;
      const response = await fetch(url);
      const jsonData = await response.json();
      console.log(jsonData.results[0].episode);
      setData(jsonData.results);
      setEpisodes(jsonData.results[0].episode);
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
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} />
        <button type="submit">Botón</button>

        <br />
        <div>
          <h1>Array Ejemplo</h1>
          {data.map((item: any) => (
            <div key={item.id}>
              <p>
                <b>{item.name}</b>&nbsp;Especie: {item.species}
              </p>
              <img src={item.image} alt="" />
            </div>
          ))}
          <h1>Episodios</h1>
          {episode.map((item: any, index: number) => (
            <div key={index}>
            <video controls>
              <source src={item} type="video/mp4" />
              <p>{item}</p>
              <source src={item} type="video/webm" />
              Tu navegador no admite la reproducción de video.
            </video>
          </div>
          ))}
        </div>
      </form>
    </div>
  );
}

export default Formularios;

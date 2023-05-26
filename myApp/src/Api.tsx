import { useEffect, useState } from "react";

function Api() {
  const base_url = "https://rickandmortyapi.com/api";

  const [data, setData] = useState([]);

  useEffect(() => {
    const getMorty = async () => {
      try {
        const url = base_url;
        const response = await fetch(url);
        const jsonData = await response.json();
        const chracter = await fetch(jsonData.characters);
        const data = await chracter.json();
        const lst = data.results;
        setData(lst);
        console.log(lst);
      } catch (error) {
        console.log(error);
      }
    };
    getMorty();
  }, []);

  return (
    <div className="Api">
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
      </div>
    </div>
  );
}

export default Api;

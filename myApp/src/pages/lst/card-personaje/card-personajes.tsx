import './card-personaje.css';

function CardPersonajes({ data }) {
  return (
    <div>
      {data.map((item: any) => (
        <div key={item.id} className="card">
          <img src={item.image} alt="Avatar" id="img" />
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

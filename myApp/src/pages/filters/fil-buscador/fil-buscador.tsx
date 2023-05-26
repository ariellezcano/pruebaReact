import "./fil-buscador.css"

function Buscador({onSubmit,onChange}) {
  return (
    <div className="Buscador">
      <form  onSubmit={onSubmit}>
        <input id="inputBuscador" type="text" onChange={onChange} />
        <button type="submit">Botón</button>
      </form>
    </div>
  );
}

export default Buscador;

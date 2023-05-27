import Buscador from "./pages/filters/fil-buscador/fil-buscador";
import CardPersonajes from "./pages/lst/card-personaje/card-personajes";
import Formulario from "./formulario";

function Formularios() {
  //obtiene los datos del custom hooks
  const { onSubmit, onChange, data, estaCargando } = Formulario();

  return (
    <div className="Form">
      <br />
      <Buscador onSubmit={onSubmit} onChange={onChange} />
      <div>
        <h1 id="h1">Array Ejemplo</h1>
        
        {estaCargando ? <h2>Cargando...</h2> : <CardPersonajes data={data} />}
      </div>
    </div>
  );
}

export default Formularios;

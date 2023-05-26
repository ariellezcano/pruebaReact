import { useState } from "react";

function App() {

  const [valorInp, setValor] = useState('');

  const onChange = (evento: any) => {
    const valor = evento.target.value;
    setValor(valor);
  }

  return (
    //con mas de un argumento
    //value={valorInp} onChange={evento => onChange(evento)}
    //con un solo argumento
    //value={valorInp} onChange={onChange}
    <div className="App">
      <input type="text" value={valorInp} onChange={onChange}/>
      <p>{valorInp}</p>
    </div>
  );
}

export default App;

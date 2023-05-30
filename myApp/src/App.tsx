//import { useState } from "react";
import UseRef from "./UseRef";

function App() {

  // const [valorInp, setValor] = useState('');

  // const onChange = (evento: any) => {
  //   const valor = evento.target.value;
  //   setValor(valor);
  // }

  return (
    //con mas de un argumento
    //value={valorInp} onChange={(evento,evento2) => onChange(evento)}
    //con un solo argumento
    //value={valorInp} onChange={onChange}
    <div className="App">
      {/* <input type="text" value={valorInp} onChange={onChange}/>
      <p>{valorInp}</p> */}
      
      {/* agrego el componente */}
    <UseRef></UseRef>

    </div>
  );
}

export default App;

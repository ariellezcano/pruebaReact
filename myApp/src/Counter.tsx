import { useState } from "react";

function Counter(){

    const [counter, setCounter] = useState(0);

    function onClick(){
        setCounter((estado)=>(estado + 1))
        setCounter((estado)=>(estado + 1))
    }


    return (

        <div className="Counter">
            <label > Yo soy el counter</label>
            <button onClick={onClick}>+2</button>
            <p>{counter}</p>
        </div>
    )
}

export default Counter;
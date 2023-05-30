import { useEffect } from "react";

function UseRef() {
    
  useEffect(() => {
    const div = document.querySelector(".UseRef");
    console.log({
      whidth: div?.clientWidth,
      height: div?.clientHeight,
    });
  }, []);

  return (
    <div className="UseRef">
      <h1>Hola mundo</h1>
    </div>
  );
}
export default UseRef;

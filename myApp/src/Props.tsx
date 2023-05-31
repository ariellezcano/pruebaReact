import Cuadrado from "./pages/components/cuadrado/Cuadrado";

function Props() {
  return (
    //envia las props
    <div className="Props">
      <Cuadrado width={1000} height={100} color={"white"}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quo
          distinctio molestias rem itaque autem maiores odio earum nulla vero
          eos, voluptatum sed doloribus nam quaerat dolor alias. Officiis,
          totam!
        </p>
      </Cuadrado>
      <br />
      <Cuadrado width={800} height={800} color={"orange"}>
      <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quo
          distinctio molestias rem itaque autem maiores odio earum nulla vero
          eos, voluptatum sed doloribus nam quaerat dolor alias. Officiis,
          totam!
        </p>
      </Cuadrado>
    </div>
  );
}

export default Props;

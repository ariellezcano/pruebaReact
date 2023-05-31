//recibe las props en forma destructurada
function Cuadrado({width, height, color,children}){
    console.log(width, height, color)
    
    return(
        //se asigna las props al style
        <div style={{
            width,
            height,
            color
        }}>
            <h1>cuadrado</h1>
            <h2>{children}</h2>
        </div>
    )
}

export default Cuadrado;
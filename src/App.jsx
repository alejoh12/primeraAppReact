import Informacion from "./components/Informacion";
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  //Aquí vamos agregar la lógica del componente

  return (
    // Aquí va un poquito de lógica
    // Luego va el resto del componente
    <section className="container my-4">
      <h1 className="text-center display-3">Primera App React</h1>
      <Informacion tituloSecundario="Este titulo fué creado con un props."></Informacion>
      {/* <Informacion /> */}
    </section>
  );
}

export default App

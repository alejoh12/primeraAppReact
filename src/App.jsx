import Informacion from "./components/Informacion";
import Contador from "./components/Contador";
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  //Aquí vamos agregar la lógica del componente
  const anioActual = 2024;

  return (
    // Aquí va un poquito de lógica
    // Luego va el resto del componente
    <section className="container my-4">
      <h1 className="text-center display-3">Primera App React</h1>
      <Informacion tituloSecundario="Este titulo fué creado con un props." anioActualProps={anioActual}></Informacion>
      {/* <Informacion /> */}
      <Contador></Contador>
    </section>
  );
}

export default App

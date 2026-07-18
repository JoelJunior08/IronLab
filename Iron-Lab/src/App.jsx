import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import GrupoMuscular from "./Pages/GrupoMuscular";
import Cadastro from "./Pages/Cadastro/Cadastro";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/grupo/:nome" element={<GrupoMuscular />}/>
      <Route path="/cadastro" element={<Cadastro />} />
    </Routes>
  );
}

export default App;
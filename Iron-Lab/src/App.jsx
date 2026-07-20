import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import GrupoMuscular from "./Pages/GrupoMuscular";
import Cadastro from "./Pages/Cadastro/Cadastro";
import Login from "./Pages/Login/Login";
import Sobre from "./Pages/Sobre/Sobre";
import Contato from "./Pages/Contato/Contato";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/grupo/:nome" element={<GrupoMuscular />}/>
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/contato" element={<Contato />} />
    </Routes>
  );
}

export default App;
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import GrupoMuscular from "./Pages/GrupoMuscular";
import Cadastro from "./Pages/Cadastro/Cadastro";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <Routes>
      <Route path="/IronLab" element={<Home />} />
      <Route path="/grupo/:nome" element={<GrupoMuscular />}/>
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import GrupoMuscular from "./Pages/GrupoMuscular";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/grupo/:nome" element={<GrupoMuscular />}/>
    </Routes>
  );
}

export default App;
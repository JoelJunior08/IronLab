import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { buscarExercicios } from "../Services/api";
import ExerciseCard from "../components/ExerciseCard/ExerciseCard";

function GrupoMuscular(){

    const {nome} = useParams();
    const [exercicios, setExercicios] = useState([]);

    useEffect(() => {
        async function carregarExercicios() {
            const dados = await buscarExercicios(nome)
            setExercicios(dados)            
        }
        carregarExercicios();
    }, [nome]);
    console.log(exercicios)

    return (
        <div className="grupo-container">
            <h1>Exercícios de {nome}</h1>

            {exercicios.map((exercicio) => (
                <ExerciseCard 
                    key={exercicio.id}
                    exercicio={exercicio}
                />
            ))}
        </div>
    );
}

export default GrupoMuscular
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { buscarExercicios } from "../Services/api";
import ExerciseCard from "../components/ExerciseCard/ExerciseCard";
import "./GrupoMuscular.css"
import Header from "../components/Header/Header";

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
        <>
            <Header />
            
            <h1 className="titulo">Exercícios de {nome}</h1>

            <div className="exercicios">
                {exercicios.map((exercicio) => (
                    <ExerciseCard 
                        key={exercicio.id}
                        exercicio={exercicio}
                    />
                ))}
            </div>
        </>
    );
}

export default GrupoMuscular
import { useState } from "react";
import "./ExerciseCard.css";

function ExerciseCard({ exercicio }) {

    const [mostrarInstrucoes, setMostrarInstrucoes] = useState(false);

    return (
        <div className="exercise-card">

            <h2>{exercicio.name}</h2>
            <p>Categoria: {exercicio.category}</p>

            <p>Equipamento: {exercicio.equipment}</p>

            <h3>Músculos primários</h3>

            <ul>
                {exercicio.primaryMuscles.map((musculo, index) => (
                    <li key={index}>{musculo}</li>
                ))}
            </ul>

            {exercicio.secondaryMuscles.length > 0 && (
                <>
                    <h3>Músculos secundários</h3>
                    <ul>
                        {exercicio.secondaryMuscles.map((musculo, index) => (
                            <li key={index}>{musculo}</li>
                        ))}
                    </ul>
                </>
            )}

            <button onClick={() => setMostrarInstrucoes(!mostrarInstrucoes)}>
                {mostrarInstrucoes ? "Ocultar Instruções" : "Ver Instruções"}
            </button>

            {mostrarInstrucoes && (
                <>
                    <h3>Instruções</h3>
                    <ol>
                        {exercicio.instructions.map((instrucao, index) => (
                            <li key={index}>{instrucao}</li>
                        ))}
                    </ol>
                </>
            )}
        </div>
    );
}

export default ExerciseCard;
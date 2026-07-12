import { useParams } from "react-router-dom"

function GrupoMuscular(){

    const {nome} = useParams();

    return (
        <div>
            <h1>{nome}</h1>
        </div>
    );
}

export default GrupoMuscular
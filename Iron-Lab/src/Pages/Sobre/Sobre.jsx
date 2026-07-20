import "./Sobre.css";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";

function Sobre(){
    return(
        <>
            <Header />

            <h1 className="titulo">Sobre</h1>

            <form className="sobre">
                
                <p><br/> Este site foi criado com o intuito de testar e aprimorar as minhas habilidades utilizando React, HTML, CSS, e Javascript <br/> 
                    Desenvolvi esse projeto com o intuito de gerar algo que seja útil, mesmo que para casos específicos. Por esse motivo, decidi usar o tema 'Exercícios' e criar cards com atividades específicas para cada grupo muscular.<br/>
                    Para buscar os exercícios, usei um arquivo JSON de um repostório do GitHub que traduz a API ExerciseDB <br/> 
                </p>
                <p className="creditos">
                    Créditos:  
                </p>
                <Link className="link" rel="stylesheet" href="https://github.com/joao-gugel/exercicios-bd-ptbr/blob/main/exercises/exercises-ptbr-full-translation.json"> GitHub João Gugel</Link>
                <h1>Criador</h1>
                <p>Joel Queiroz da Silva Junior</p>
                <h1>Linkedin</h1>
                <Link className="link" rel="stylesheet" href="https://www.linkedin.com/in/joel-queiroz/" ><p>https://www.linkedin.com/in/joel-queiroz/</p></Link>
                <h1>GitHub</h1>
                <Link className="link" rel="stylesheet" href="https://github.com/JoelJunior08" ><p>https://github.com/JoelJunior08</p></Link>
            </form>
        </>
    )
}

export default Sobre;
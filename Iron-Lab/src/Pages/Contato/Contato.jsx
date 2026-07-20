import "./Contato.css"
import { Link } from "react-router-dom"
import Header from "../../components/Header/Header";

function Contato (){
    return(
        <>
            <Header />
            <h1 className="titulo">Contato</h1>

            <form className="contato" >
                <p className="nome">Joel Queiroz da Silva Junior</p>
                <p>
                    Idade: 21 anos<br/>
                    13/08/2004 <br/>
                </p>
                <h1>Linkedin</h1>
                <Link className="link" rel="stylesheet" href="https://www.linkedin.com/in/joel-queiroz/" ><p>https://www.linkedin.com/in/joel-queiroz/</p></Link>
                <h1>GitHub</h1>
                <Link className="link" rel="stylesheet" href="https://github.com/JoelJunior08" ><p>https://github.com/JoelJunior08</p></Link>
            </form>
        </>
    )
}

export default Contato;
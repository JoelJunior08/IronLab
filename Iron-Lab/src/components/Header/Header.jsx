import './Header.css'
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom"

function Header() {

    return (
        <header className='cabecalho'>
            <div className="cabecalho-login">
                <a>Login</a>
                <Link to={'/cadastro'}>Cadastre-se</Link>
            </div>
            <h1 className='cabecalho-titulo'><strong><a>Iron</a>Lab </strong><img src={logo} alt="Logo"/></h1>
            <p className="cabecalho-lema">Seu guia completo de exercícios para cada grupo muscular!</p>
            <div className='cabecalho-legenda'>
                <nav>
                    <Link className='link' to="/">Início</Link>
                    <Link className='link' to="/">Dicas de Treinos</Link>
                    <Link className='link' to="/">Sobre</Link>
                    <Link className='link' to="/">Contato</Link>
                </nav>
            </div>
            
        </header>
    )
}

export default Header
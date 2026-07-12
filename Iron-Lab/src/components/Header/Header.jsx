import './Header.css'
import logo from "../../assets/logo.png"

function Header() {

    return (
        <header className='cabecalho'>
            <div className="cabecalho-login">
                <a>Login</a>
                <a>Cadastre-se</a>
            </div>
            <h1 className='cabecalho-titulo'><a>Iron</a>Lab <img src={logo} alt="Logo"/></h1>
            <p className="cabecalho-lema">Seu guia completo de exercícios para cada grupo muscular!</p>
            <div className='cabecalho-legenda'>
                <nav>
                    <a>Início</a>
                    <a>Dicas de Treinos</a>
                    <a>Sobre</a>
                    <a>Contato</a>
                </nav>
            </div>
            
        </header>
    )
}

export default Header
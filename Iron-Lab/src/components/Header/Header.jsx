import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../../assets/logo.png"

function Header() {

    const navigate = useNavigate();

    const [logado, setLogado] = useState(false);
    const [nomeUsuario, setNomeUsuario] = useState("");

    useEffect(() => {

        const usuarioLogado = localStorage.getItem("logado");
        const nome = localStorage.getItem("nomeUsuario");

        if (usuarioLogado) {
            setLogado(true);
            setNomeUsuario(nome);
        }

    }, []);

    function logout() {

        localStorage.removeItem("logado");
        localStorage.removeItem("nomeUsuario");

        setLogado(false);
        setNomeUsuario("");

        navigate("/");
    }

    return (

        <header className="cabecalho">

            <div className="cabecalho-login">

                {logado ? (
                    <>
                        <span>Olá, {nomeUsuario}</span>
                        <button
                            className="botao-sair"
                            onClick={logout}
                        >
                            Sair
                        </button>
                    </>
                ) : (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/cadastro">Cadastre-se</Link>
                    </>
                )}

            </div>

            <h1 className="cabecalho-titulo">

                <Link to="/" className="logo-link">
                    <strong>Iron</strong>Lab
                    <img src={logo} alt="Logo" />
                </Link>

            </h1>

            <p className="cabecalho-lema">
                Seu guia completo de exercícios para cada grupo muscular!
            </p>

            <div className="cabecalho-legenda">

                <nav>

                    <Link className="link" to="/">
                        Início
                    </Link>

                    <Link className="link" to="/">
                        Dicas de Treinos
                    </Link>

                    <Link className="link" to="/">
                        Sobre
                    </Link>

                    <Link className="link" to="/">
                        Contato
                    </Link>

                </nav>

            </div>

        </header>

    );
}

export default Header;
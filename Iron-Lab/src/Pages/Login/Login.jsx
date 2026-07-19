import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./Login.css";

export default function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function handleLogin(e) {
        e.preventDefault();

        const usuario = JSON.parse(localStorage.getItem("usuario"));

        if (!usuario) {
            alert("Nenhum usuário cadastrado.");
            return;
        }
        if (
            email === usuario.email &&
            senha === usuario.senha
        ) {
            localStorage.setItem("logado", "true");
            localStorage.setItem("nomeUsuario", usuario.nome)
            alert(`Bem-vindo, ${usuario.nome}!`);
            navigate("/");

        } else {
            alert("E-mail ou senha incorretos.");
        }
    }

    return (
        <>
            <Header />

            <main className="login">

                <h1>Login</h1>

                <form onSubmit={handleLogin}>

                    <input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />

                    <button type="submit">
                        Entrar
                    </button>
                </form>
            </main>
        </>
    );
}
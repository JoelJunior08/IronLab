import { useState } from "react";
import { buscarCep } from "../../Services/viacep";
import Header from "../../components/Header/Header";
import "./Cadastro.css";
import { useNavigate } from "react-router-dom";

export default function Cadastro() {

    const navigate = useNavigate();
    const [form, setForm] = useState({
        nome: "",
        email: "",
        cep: "",
        estado: "",
        cidade: "",
        bairro: "",
        rua: "",
        numero: "",
        senha: "",
        confirmarSenha: "",
    });

    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    async function buscarEndereco() {
        try {
            const endereco = await buscarCep(form.cep);

            setForm((prev) => ({
                ...prev,
                estado: endereco.uf,
                cidade: endereco.localidade,
                bairro: endereco.bairro,
                rua: endereco.logradouro,
            }));

        } catch (erro) {
            alert(erro.message);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (
            !form.nome ||
            !form.email ||
            !form.cep ||
            !form.numero ||
            !form.senha ||
            !form.confirmarSenha
        ) {
            alert("Preencha todos os campos obrigatórios!");
            return;
        }

        if (form.senha !== form.confirmarSenha) {
            alert("As senhas não coincidem!");
            return;
        }

        const usuario = {
            nome: form.nome,
            email: form.email,
            cep: form.cep,
            estado: form.estado,
            cidade: form.cidade,
            bairro: form.bairro,
            rua: form.rua,
            numero: form.numero,
            senha: form.senha,
        };

        localStorage.setItem("usuario", JSON.stringify(usuario));

        alert("Cadastro realizado com sucesso!");

        setTimeout(() => {
            navigate("/login");
        }, 500);
    }

    return (
        <>
            <Header />

            <main className="cadastro">

                <h1>Cadastro</h1>

                <form onSubmit={handleSubmit}>

                    <input
                        className="form-nome"
                        type="text"
                        name="nome"
                        placeholder="Nome"
                        value={form.nome}
                        onChange={handleChange}
                    />

                    <input
                        className="form"
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        value={form.email}
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        name="cep"
                        placeholder="CEP"
                        value={form.cep}
                        onChange={handleChange}
                        onBlur={buscarEndereco}
                    />

                    <input
                        type="text"
                        name="estado"
                        value={form.estado}
                        placeholder="Estado"
                        readOnly
                    />

                    <input
                        type="text"
                        name="cidade"
                        value={form.cidade}
                        placeholder="Cidade"
                        readOnly
                    />

                    <input
                        type="text"
                        name="bairro"
                        value={form.bairro}
                        placeholder="Bairro"
                        readOnly
                    />

                    <input
                        className="form"
                        type="text"
                        name="rua"
                        placeholder="Rua"
                        value={form.rua}
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        name="numero"
                        placeholder="Número"
                        value={form.numero}
                        onChange={handleChange}
                    />

                    <input
                        type="password"
                        name="senha"
                        placeholder="Senha"
                        value={form.senha}
                        onChange={handleChange}
                    />

                    <input
                        type="password"
                        name="confirmarSenha"
                        placeholder="Confirmar senha"
                        value={form.confirmarSenha}
                        onChange={handleChange}
                    />

                    <button type="submit">
                        Criar Conta
                    </button>

                </form>

            </main>

        </>
    );
}
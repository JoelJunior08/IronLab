import { useState } from "react";
import { buscarCep } from "../../Services/viacep";
import Header from "../../components/Header/Header";
import "./Cadastro.css"

export default function Cadastro() {
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
    })

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
                rua: endereco.logradouro
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
            alert("Preencha todos os campos obrigatórios!.")
            return;
        }

        if (form.senha !== form.confirmarSenha) {
            alert("As senhas não coincidem !.")
        }

        alert("Cadastro realizado com sucesso!.");

        console.log(form);

        setForm({
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
                        placeholder="Estado"
                        value={form.estado}
                        readOnly
                    />

                    <input
                        type="text"
                        name="cidade"
                        placeholder="Cidade"
                        value={form.cidade}
                        readOnly
                    />

                    <input
                        type="text"
                        name="bairro"
                        placeholder="Bairro"
                        value={form.bairro}
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
                        className="form-num"
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
                        placeholder="Confirmar Senha"
                        value={form.confirmarSenha}
                        onChange={handleChange}
                    />

                    <button type="submit">Criar Conta</button>
                </form>

            </main>
        </>
    )
}
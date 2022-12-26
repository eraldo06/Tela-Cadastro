import './formulario.css'
import { useState } from "react";

const Formulario = () => {

    const [login, setLogin] = useState('')
    const [senha, setSenha] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [escola, setEscola] = useState('')
    const [recomendacao, setRecomendacao] = useState('')
    const [palavraCha, setPalavraCha] = useState('')
    const [arquivo, setArquivo] = useState()

    let lista = []

    function salvar() {
        if (login.trim() !== ''
            && senha.trim() !== ''
            && palavraCha.trim() !== '') {
            if (lista.find((res) => res.palavraCha === palavraCha)) {
                alert("Você não pode salvar, Já existe essa Palavra Chave")
            } else {
                lista.push({
                    nome: login,
                    senha: senha,
                    email: email,
                    telefone: telefone,
                    escola: escola,
                    remoendacao: recomendacao,
                    palavraCha: palavraCha,
                    arqui: arquivo
                })
                alert("Você salvou com sucesso")
            }
        } else {
            alert("Existem campos em brancos")
        }


    }

    return (
        <>
            <div className="container1">
                <div className="Form">
                    <h2>Cadastre seu Curriculo</h2>
                    <div className="formBox">
                        <div className="input">
                            <input type="text" required onChange={(e) => setLogin(e.target.value)} />
                            <span>Nome</span>
                        </div>
                        <div className="input">
                            <input type="password" required onChange={(e) => setSenha(e.target.value)} />
                            <span>Senha</span>
                        </div>
                        <div className="input">
                            <input type="email" required onChange={(e) => setEmail(e.target.value)} />
                            <span>Email</span>
                        </div>
                        <div className="input">
                            <input type="text" required onChange={(e) => setTelefone(e.target.value)} />
                            <span>Telefone</span>
                        </div>
                        <div className="input">
                            <select name="Escola" id="esco" onChange={(e) => setEscola(e.target.value)}>
                                <option value="" selected>-- Nível Escolaridade --</option>
                                <option value="Ensino Fundamental incompleto">Ensino Fundamental incompleto</option>
                                <option value="Ensino Fundamental completo">Ensino Fundamental completo</option>
                                <option value="Ensino Médio incompleto">Ensino Médio incompleto</option>
                                <option value="Ensino Médio incompleto">Ensino Médio completo</option>
                                <option value="Ensino Superior incompleto">Ensino Superior incompleto</option>
                                <option value="Ensino Superior completo">Ensino Superior completo</option>

                            </select>
                        </div>
                        <div className="input">
                            <input type="text" required onChange={(e) => setRecomendacao(e.target.value)} />
                            <span>Recomendações</span>
                        </div>
                        <div className="input">
                            <input type="text" required onChange={(e) => setPalavraCha(e.target.value)} />
                            <span>Palavra Chave</span>
                        </div>
                        <div className="input">
                            <input type="file" required onChange={(e) => setArquivo(e.target.value)} />
                        </div>
                    </div>
                    <div className="input" >
                        <input type="submit" value="Cadastrar" onClick={salvar} />
                    </div>
                </div>
            </div>
        </>
    )
}


export default Formulario;

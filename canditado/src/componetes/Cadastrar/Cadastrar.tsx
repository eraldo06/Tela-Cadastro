import './cadastrar.css'
import { useState } from "react";

const Formulario = () => {

    const [login2, setLogin] = useState('')
    const [senha2, setSenha] = useState('')
    const [email2, setEmail] = useState('')
    const [telefone2, setTelefone] = useState('')
    const [escola2, setEscola] = useState('')
    const [recomendacao2, setRecomendacao] = useState('')
    const [palavraCha2, setPalavraCha] = useState('')
    const [arquivo, setArquivo] = useState()

    let lista:any = []
    const [items, setItems] = useState(lista)

   
    function salvar() {
        items.push({
            nome:login2,
            senha :senha2,
            email :email2,
            telefone :telefone2,
            escola :escola2,
            remoendacao :recomendacao2,
            palavraCha :palavraCha2,
            arqui :arquivo
        })
    }
    function log() {
        console.log(items);
    }

    return (
        <>
            <div className="container">
                <div className="contactForm">
                    <h2>Cadastre seu Curriculo</h2>
                    <div className="formBox">
                        <div className="inputBox w50">
                            <input type="text" required onChange={(e) => setLogin(e.target.value)} />
                            <span>Nome</span>
                        </div>
                        <div className="inputBox w50">
                            <input type="password" required onChange={(e) => setSenha(e.target.value)} />
                            <span>Senha</span>
                        </div>
                        <div className="inputBox w50">
                            <input type="email" required onChange={(e) => setEmail(e.target.value)} />
                            <span>Email</span>
                        </div>
                        <div className="inputBox w50">
                            <input type="text" required onChange={(e) => setTelefone(e.target.value)} />
                            <span>Telefone</span>
                        </div>
                        <div className="inputBox w50">
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
                        <div className="inputBox w50">
                            <input type="text" required onChange={(e) => setRecomendacao(e.target.value)} />
                            <span>Recomendações</span>
                        </div>
                        <div className="inputBox w50">
                            <input type="text" required onChange={(e) => setPalavraCha(e.target.value)} />
                            <span>Palavra Chave</span>
                        </div>
                        <div className="inputBox w50">
                            <input type="file" required onChange={(e) => setArquivo(e.target.value)} />
                        </div>
                    </div>
                    <div className="inputBox w100" >
                        <input type="submit" value="Cadastrar" onClick={salvar} />
                    </div>
                    <div className="inputBox w100" >
                        <input type="submit" value="log" onClick={log} />
                    </div>

                </div>
            </div>
        </>
    )
}


export default Formulario;

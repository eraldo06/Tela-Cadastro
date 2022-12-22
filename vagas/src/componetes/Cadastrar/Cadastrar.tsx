import './cadastrar.css'
import { useState } from 'react'
function Cadastrar() {

    const [nomeVaga, setNomeVaga] = useState('')
    const [empresa, setEmpresa] = useState('')
    const [localizacao, setLocalizacao] = useState('')
    const [requisitos, setRequisitos] = useState('')
    const [palavraChave, setPalavraChave] = useState('')

    // isso é para mostrar que está salvando
    let lista:any = []
    const [items, setItems] = useState(lista)

    function salvar(){
        items.push({
            nomeVaga:nomeVaga,
            empresa:empresa,
            localizacao:localizacao,
            requisitos:requisitos,
            palavraChave:palavraChave
        })
        console.log(items);
    }

    return (
        <>
            <div className="container1">
                <div className="contactForm1">
                    <h2>Cadastre uma Vaga</h2>
                    <div className="formBox1">
                        <div className="inputBox1">
                            <input type="text" required onChange={(e) => setNomeVaga(e.target.value)} />
                            <span>Nome da Vaga</span>
                        </div>
                        <div className="inputBox1">
                            <input type="text" required onChange={(e) => setEmpresa(e.target.value)} />
                            <span>Empresa</span>
                        </div>
                        <div className="inputBox1">
                            <input type="text" required onChange={(e) => setLocalizacao(e.target.value)}/>
                            <span>Localização</span>
                        </div>
                        <div className="inputBox1">
                            <input type="text" required onChange={(e) => setRequisitos(e.target.value)}/>
                            <span>Requisitos</span>
                        </div>
                        <div className="inputBox1">
                            <input type="text" required onChange={(e) => setPalavraChave(e.target.value)}/>
                            <span>Palavra Chave</span>
                        </div>
                    </div>
                    <div className="inputBox1" >
                        <input type="submit" value="Cadastrar" onClick={salvar} />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Cadastrar
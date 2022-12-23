import './cadastrar.css'
import { useState } from 'react'
import api from '../../api';
import Header from '../Header/Header';

function Cadastrar() {

    const [nomeVaga, setNomeVaga] = useState('')
    const [empresa, setEmpresa] = useState('')
    const [localizacao, setLocalizacao] = useState('')
    const [requisitos, setRequisitos] = useState('')
    const [palavraChave, setPalavraChave] = useState('')
    const [status, setStatus] = useState(Boolean)

    // isso é para mostrar que está salvando
    const [vagas, setVagas] = useState(api)
   

    function salvar(){
        if(vagas.find((res: any) => res.palavrachave == palavraChave)){
            console.log('você não pode salvar');
            return setStatus(false)
        }else{
            console.log("você pode salvar");
            vagas.push({
                empresa:empresa,
                vaga:nomeVaga,
                requisitos:requisitos,
                palavrachave:palavraChave,
                localizacao:localizacao,
            })
            return setStatus(true)
        }

           
           
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
                        <input type="submit" value="Cadastrar" onClick={salvar}/>
                    </div>
                </div>
            </div>
        
             
            
        </>
    )
}

export default Cadastrar
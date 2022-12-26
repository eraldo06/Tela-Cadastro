import './cadastrar.css'
import { useState } from 'react'
import api from '../../api';


function Cadastrar() {

    const [nomeCliente, setNomeCliente] = useState('')
    const [empresa, setEmpresa] = useState('')
    const [localizacao, setLocalizacao] = useState('')
    const [email, setEmail] = useState('')
    const [id, setId] = useState('')
    const [telefone, setTelefone] = useState('')
 
    const vagas= api
   
    function salvar(){
        if(nomeCliente.trim() !== ''
        &&  email.trim() !== ''
        &&  id.trim() !== ''){
            if(vagas.find((res) => res.id === id)){
                alert("Você não pode salvar, Já existe essa ID")
                
            }else{
                vagas.push({
                    empresa:empresa,
                    nomeCliente:nomeCliente,
                    email:email,
                    id:id,
                    localizacao:localizacao,
                    telefone:telefone
                })
                alert("Você salvou com sucesso")
            }
        }else {
            alert("Existem campos em brancos")
        }
        
    }

    return (
        <>
        
            <div className="container1">
                <div className="cadastrar">
                    <h2>Cadastre um Cliente</h2>
                    <div className="form1">
                        <div className="input1">
                            <input type="text" required onChange={(e) => setNomeCliente(e.target.value)} />
                            <span>Nome Cliente</span>
                        </div>
                        <div className="input1">
                            <input type="text" required onChange={(e) => setEmpresa(e.target.value)} />
                            <span>Empresa</span>
                        </div>
                        <div className="input1">
                            <input type="text" required onChange={(e) => setLocalizacao(e.target.value)}/>
                            <span>Localização</span>
                        </div>
                        <div className="input1">
                            <input type="text" required onChange={(e) => setEmail(e.target.value)}/>
                            <span>Email</span>
                        </div>
                        <div className="input1">
                            <input type="text" required onChange={(e) => setId(e.target.value)}/>
                            <span>ID</span>
                        </div>
                        <div className="input1">
                            <input type="text" required onChange={(e) => setTelefone(e.target.value)}/>
                            <span>telefone</span>
                        </div>
                    </div>
                    <div className="input1" >
                        <input type="submit" value="Cadastrar" onClick={salvar}/>
                    </div>
                </div>
            </div>
        
             
            
        </>
    )
}

export default Cadastrar
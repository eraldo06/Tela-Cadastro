import './vagas.css'
import { useState } from "react";

import nota from './api';


let nota1:any = nota



const Vagas = () => {

    function log (){
        nota1.push({
            vaga:"tesre00",
        })

        console.log(nota1);
        
        
    }
    return (
        <>
            <div className="container">
                {nota1.map((res:any) => {
                    return (
                        <div className="contactForm">
                            <h2>{res.vaga}</h2>
                            <div className="formBox">
                                <p>Empresa: {res.empresa}</p>
                                <p>Localização: {res.localizacao}</p>
                            </div>
                            <div className="inputBox w100">
                                <input type="submit" value="Ver vaga" onClick={log}/>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}


export default Vagas;

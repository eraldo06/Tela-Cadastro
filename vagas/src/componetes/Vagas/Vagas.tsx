import './vagas.css'
import { Link } from 'react-router-dom';
import api from '../../api';


const Vagas = () => {
    return (
        <>
            <div className="container">
                {api.map((res:any) => {
                    return (
                        <div className="contactForm">
                            <h2>{res.vaga}</h2>
                            <div className="formBox">
                                <p>Empresa: {res.empresa}</p>
                                <p>Localização: {res.localizacao}</p>
                            </div>
                            <div className="inputBox w100">
                                <Link to={`/detalhes/${res.palavrachave}`}><input type="submit" value="Ver vaga"/></Link> 
                            </div>
                        </div>
                        
                    )
                })}
            </div>
        </>
    )
}


export default Vagas;

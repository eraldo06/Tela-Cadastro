import './cliente.css'
import { Link } from 'react-router-dom';
import api from '../../api';


const Cliente = () => {
    return (
        <>
            <h1 className='h1'>Clientes</h1>
            <div className="container">
                {api.map((res) => {
                    return (
                        <div className="cliente">
                            <h2>{res.nomeCliente}</h2>
                            <p>{res.email}</p>
                            <p>{res.telefone}</p>
                            <p>{res.empresa}</p>
                            <div className="input">
                                <Link to={`/detalhes/${res.id}`}><input type="submit" value="Ver Cliente" /></Link>
                            </div>
                        </div>

                    )
                })}
            </div>
        </>
    )
}


export default Cliente;

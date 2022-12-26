import { useParams } from "react-router-dom";
import api from "../../api";
import './detalhes.css'


const Detalhes = () => {
    const params= useParams()
     const detalheDaVaga = api.find((res) => res.id === params.id);

    return (
        <>
            <div className="container2">
                <div className="detalhes">
                    <h1>{detalheDaVaga.nomeCliente}</h1>
                    <div className="info">
                        <p><strong>Empresa: </strong>{detalheDaVaga.empresa}</p>
                        <p><strong>ID: </strong>{detalheDaVaga.id}</p>
                        <p><strong>Localização: </strong>{detalheDaVaga.localizacao}</p>
                        <p><strong>Email: </strong>{detalheDaVaga.email}</p>
                        <p><strong>Telefone: </strong>{detalheDaVaga.telefone}</p>
                        <p><strong>Nome: </strong>{detalheDaVaga.nomeCliente}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Detalhes;
import { useParams } from "react-router-dom";
import api from "../../api";
import './detalhes.css'


const Detalhes = () => {
    const params: any = useParams()
    const detalheDaVaga = api.find((res: any) => res.palavrachave == params.palavrachave);

    return (
        <>
            <div className="container2">
                <div className="contactForm2">
                    <h1>{detalheDaVaga?.vaga}</h1>
                    <div className="formBox2">
                        <p><strong>Empresa: </strong>{detalheDaVaga?.empresa}</p>
                        <p><strong>Requisitos: </strong>{detalheDaVaga?.requisitos}</p>
                        <p><strong>Localização: </strong>{detalheDaVaga?.localizacao}</p>
                        <p><strong>Palavra Chave: </strong>{detalheDaVaga?.palavrachave}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Detalhes;
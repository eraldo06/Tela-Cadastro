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
                    <h2>{detalheDaVaga?.vaga}</h2>
                    <div className="formBox2">
                        <p>Empresa: {detalheDaVaga?.empresa}</p>
                        <p>Requisitos: {detalheDaVaga?.requisitos}</p>
                        <p>Localização: {detalheDaVaga?.localizacao}</p>
                        <p>Palavra Chave: {detalheDaVaga?.palavrachave}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Detalhes;
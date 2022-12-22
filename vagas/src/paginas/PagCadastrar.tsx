import Formulario from "../componetes/Vagas/Vagas"
import Header from "../componetes/Header/Header"
import Cadastrar from "../componetes/Cadastrar/Cadastrar"
import { LinkProps } from "react-router-dom"
import { useParams } from "react-router-dom"

function PagCadastrar() {
 
    return (
      <>
        <Header></Header>
        <Cadastrar></Cadastrar>
      </>
    )
  }
  
  export default PagCadastrar
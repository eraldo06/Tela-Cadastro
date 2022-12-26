import {Routes as WrapperRoutes, Route, BrowserRouter} from "react-router-dom";
import PagCadastrar from "../paginas/PagCadastrar";
import PagDetalhes from "../paginas/PagDetalhes";
import PagClientes from "../paginas/PagClientes";
export default function Routes(){
    return(
    <BrowserRouter>
    <WrapperRoutes>
        <Route path="/" element={<PagClientes/>} />
        <Route path="/cadastrar" element={<PagCadastrar/>} />
        <Route path={`/detalhes/:id`} element={<PagDetalhes/>} />
    </WrapperRoutes>
    </BrowserRouter>
    )
}

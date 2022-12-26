import {Routes as WrapperRoutes, Route, BrowserRouter} from "react-router-dom";
import PagCadastrar from "../paginas/PagCadastrar";
import PagVagas from "../paginas/PagVagas";
import PagDetalhes from "../paginas/PagDetalhes";
export default function Routes(){
    return(
    <BrowserRouter>
    <WrapperRoutes>
        <Route path="/" element={<PagVagas/>} />
        <Route path="/cadastrar" element={<PagCadastrar/>} />
        <Route path={`/detalhes/:palavrachave`} element={<PagDetalhes/>} />
    </WrapperRoutes>
    </BrowserRouter>
    )
}

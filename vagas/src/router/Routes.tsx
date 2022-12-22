import {Routes as WrapperRoutes, Route, BrowserRouter} from "react-router-dom";
import PagCadastrar from "../paginas/PagCadastrar";
import PagVagas from "../paginas/PagVagas";
export default function Routes(){
    return(
    <BrowserRouter>
    <WrapperRoutes>
        <Route path="/" element={<PagVagas/>} />
        <Route path="/cadastrar" element={<PagCadastrar/>} />
    </WrapperRoutes>
    </BrowserRouter>
    )
}

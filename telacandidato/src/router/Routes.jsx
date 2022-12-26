import {Routes as WrapperRoutes, Route, BrowserRouter} from "react-router-dom";
import PagCurriculo from "../paginas/PagCurriculo";
import PagCadastrar from "../paginas/PagCadastrar";
export default function Routes(){
    return(
    <BrowserRouter>
    <WrapperRoutes>
        <Route path="/" element={<PagCadastrar/>} />
        <Route path="/curriculo" element={<PagCurriculo/>} />
    </WrapperRoutes>
    </BrowserRouter>
    )
}

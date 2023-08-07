import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import LandingPage from './paginas/LandingPage';
import FormularioLogin from './paginas/FormularioLogin';
import Dashboard from './layout/Dashboard';
import Login from "./layout/Login";
import FundamentoUseEffect from "./paginas/FundamentoUseEffect";
import FundamentoUseState from "./paginas/FundamentoUseState";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>

        <Route path="/login" element={<Login />}>
          <Route index element={<FormularioLogin />} />
        </Route>

        <Route path="/fundamentos" element={<Dashboard />}>
          <Route path="usestate" element={<FundamentoUseState />} />
          <Route path="useffect" element={<FundamentoUseEffect />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
export default App

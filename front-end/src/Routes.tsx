import Comandas from "pages/Comandas"
import Relatorios from "pages/Relatorios"
import { BrowserRouter, Switch, Route } from "react-router-dom"

const Routes = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact>
                <Comandas />
            </Route>
            <Route path="/relatorios" >
                <Relatorios />
            </Route>
        </Switch>
        </BrowserRouter>

    )
}

export default Routes;
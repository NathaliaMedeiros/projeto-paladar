import Comandas from "pages/Comandas"
import Pagamento from "pages/Pagamento"
import { BrowserRouter, Switch, Route } from "react-router-dom"

const Routes = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact>
                <Comandas />
            </Route>
           <Route path="/pagamentos" >
                <Pagamento />
            </Route>
        </Switch>
        </BrowserRouter>

    )
}

export default Routes;
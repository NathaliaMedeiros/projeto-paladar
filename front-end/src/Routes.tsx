import Comandas from "pages/Comandas"
import { BrowserRouter, Switch, Route } from "react-router-dom"

const Routes = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact>
                <Comandas />
            </Route>
        </Switch>
        </BrowserRouter>

    )
}

export default Routes;
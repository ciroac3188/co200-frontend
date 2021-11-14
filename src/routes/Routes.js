import { Switch, Route } from "react-router-dom";
import { Redirect } from "react-router";
//import Login from "../components/Login/Login";
import Home from "../pages/home/Home";
import Ventas from "../pages/gestionVentas/GestionVentas";
import Productos from "../pages/gestionProductos/GestionProductos";
import Usuarios from "../pages/gestionUsuarios/GestionUsuarios";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="" />
        <Home />
        {/*<Login/>*/}
      </Route>
      <Route path="/ventas">
        <Ventas />
      </Route>
      <Route path="/productos">
        <Productos />
      </Route>
      <Route path="/usuarios">
        <Usuarios />
      </Route>

    </Switch>
  );
}

export default Routes;
import Login from "./components/Login"
import { GlobalStyle } from "./styles/global";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cadastrar from "./components/Cadastrar";
import Comprar from "./components/Comprar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route  path="/" exact component={Login} />
          <Route  path="/Cadastrar" exact component={Cadastrar} />
          <Route  path="/Comprar" exact component={Comprar} />
        </Switch>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;

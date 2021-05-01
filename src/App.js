import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import PokeDex from "./views/pokedex/PokeDex";
import PokeList from "./views/pokelist/PokeList";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <PokeDex />
          </Route>

          <Route path="/list" exact>
            <PokeList />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;

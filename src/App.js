import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/home/Home.jsx";
import Detail from "./components/detail/Detail.jsx";
import Planets from "./components/planets/Planets.jsx";
import DetailPlanets from "./components/detailPlanets/DetailPlanets.jsx";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/characters/:id" component={Detail} />
          <Route exact path="/planets" component={Planets} />
          <Route exact path="/planets/:id" component={DetailPlanets} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

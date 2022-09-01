import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/home/Home.jsx";
import Detail from "./components/detail/Detail.jsx";
import Planets from "./components/planets/Planets.jsx";
import DetailPlanets from "./components/detailPlanets/DetailPlanets.jsx";
import Vehicles from "./components/vehicles/Vehicles.jsx";
import DetailVehicles from "./components/detailVehicles/DetailVehicles.jsx";
import Species from "./components/species/Species.jsx";
import DetailSpecies from "./components/species/DetailSpecies.jsx";
import Starships from "./components/starships/Starships.jsx";
import DetailStarships from "./components/starships/DetailStarships.jsx";
import Films from "./components/films/Films.jsx";
import DetailFilms from "./components/films/DetailFilms.jsx";


function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/characters/:id" component={Detail} />
          <Route exact path="/planets" component={Planets} />
          <Route exact path="/planets/:id" component={DetailPlanets} />
          <Route exact path="/vehicles" component={Vehicles} />
          <Route exact path="/vehicles/:id" component={DetailVehicles} />
          <Route exact path="/species" component={Species} />
          <Route exact path="/species/:id" component={DetailSpecies} />
          <Route exact path="/starships" component={Starships} />
          <Route exact path="/starships/:id" component={DetailStarships} />
          <Route exact path="/films" component={Films} />
          <Route exact path="/films/:id" component={DetailFilms} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

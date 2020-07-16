import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./Main";
import People from "./people/People";
import Planets from "./planets/Planets";
import Starships from "./starships/Starships";


const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path ="/people"  component={People}/>
      <Route path ="/planets"  component={Planets}/>
      <Route path ="/starships"  component={Starships}/>
    </Switch>
  </BrowserRouter>
);

export default Router;

import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./Navbar";
import Store from "./Store";
import Occasion from "./Occasion";
import MakeYourOwn from "./MakeYourOwn";
import WeeklyFlowers from "./WeeklyFlowers";
import About from "./About";
import Contact from "./Contact";
import Flowers from "./Flowers";
import Plants from "./Plants";
import "./index.css";

const App = () => {
  return (
    <>
      <Navbar />

      <Switch>
        <Route exact path="/store" component={Store} />
        <Route exact path="/occasion" component={Occasion} />
        <Route exact path="/make" component={MakeYourOwn} />
        <Route exact path="/weekly" component={WeeklyFlowers} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/flowers" component={Flowers} />
        <Route exact path="/" component={Plants} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;

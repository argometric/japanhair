import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import ClientsPage from "./ClientsPage";
import { Route, Switch } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import LocationsagePage from "./LocationsPage";

const App = () => {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/clients" component={ClientsPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/locations" component={LocationsagePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
};

export default App;

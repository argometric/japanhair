import React from "react";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ClientsPage from "./pages/ClientsPage";
import NotFoundPage from "./pages/NotFoundPage";
import Header from "./common/Header";
import { Route, Switch } from "react-router-dom";
import TokyoShops from "./others/TokyoShops";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/clients" component={ClientsPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/test" component={TokyoShops} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
};

export default App;

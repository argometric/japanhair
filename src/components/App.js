import React from "react";
import HomePage from "./pages/HomePage";
import BookPage from "./pages/BookPage";
import ClientsPage from "./pages/ClientsPage";
import NotFoundPage from "./pages/NotFoundPage";
import Header from "./common/Header";
import { Route, Switch } from "react-router-dom";
import TestPage from "./pages/TestPage";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/clients" component={ClientsPage} />
        <Route path="/book" component={BookPage} />
        <Route path="/test" component={TestPage} />

        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
};

export default App;

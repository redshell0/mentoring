import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Header from "./components/Header";
import Xss from "./components/Xss";
import SQLin from "./components/SQLin";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Route
          render={({ location }) => (
            <AnimatePresence exitBeforeEnter initial={false}>
              <Switch location={location} key={location.pathname}>
                <Route exact path="/" component={SQLin} />
                <Route exact path="/Xss" component={Xss} />
              </Switch>
            </AnimatePresence>
          )}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;

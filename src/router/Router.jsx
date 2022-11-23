import React from "react";
import { Route, Switch } from "react-router-dom";

import { Login } from "../components/pages/login";
import { Home } from "../components/pages/home";
import { Top } from "../components/pages/top";
import { LoginUserProvider } from "../hooks/providers/useLoginUserProvider";

export const Router = () => {
  return (
    <Switch>
      <LoginUserProvider>
        <Route exact path="/">
          <Top />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
      </LoginUserProvider>
    </Switch>
  );
};

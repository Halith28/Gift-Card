/**
 * @author Abdul Halith
 * @email abd.halith994@gmail.com
 * @create date 2021-03-20
 * @modify date 2021-02-03
 * @desc Different routes and their corresponding component are defined here.
 */

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from "react-router-dom";
import { Routes } from "./routes";

import { NotFound, Home } from "./../screens";

const RouterApp = (props) => {
  return (
    <Router>
      <Switch>
        {/* form component list */}
        <Route exact path={Routes.home} component={Home} />

        {/* For unknow/non-defined path */}
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default RouterApp;

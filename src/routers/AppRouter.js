import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Navbar } from "../components/ui/Navbar";
import { LoginScreen } from '../components/login/LoginScreen';
import { Marvel } from "../components/marvel/Marvel";

export const AppRouter = () => {
    return (
        <Router>
          <div>
            <Navbar/>
            <Switch>
              <Route exact='/marvel' component={ Marvel }/>
              <Route exact='/login' component={LoginScreen}/>
            </Switch>
          </div>
      </Router>
    )
}

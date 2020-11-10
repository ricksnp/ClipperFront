import React from "react";
import { Provider } from "react-redux";
//import { store } from "./Store";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from "./views/LandingPage/LandingPage"
import LoginPage from "./views/LoginPage";
import SignupPage from './views/SignupPage'
import ResetPassword from "./views/ResetPassword"
import HomePage from "./views/HomePage/HomePage";

function App() {
  return (
    <div>
      <div >
        <BrowserRouter>
          <Switch>
            <Route path="/landing-page" component={LandingPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignupPage} />
            <Route path="/reset-password" component={ResetPassword} />
            <Route path="/Home" component={HomePage}/>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

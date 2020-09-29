import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import DashboardPage from "./components/pages/DashboardPage";
import UserRoute from './components/pages/routes/UserRoute';

const App = () => <div className="ui container">
  
  <Route path="/" exact={true} component={HomePage} />
  <Route path="/login" exact={true} component={LoginPage} />
  <UserRoute path="/dashboard" exact={true} component={DashboardPage} />
</div>;



export default App;

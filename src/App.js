import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import DashboardPage from "./components/pages/DashboardPage";
import SignupPage from "./components/pages/SignupPage";
import UserRoute from './components/pages/routes/UserRoute';
import GuestRoute from "./components/pages/routes/GuestRoute";


const App = ({ location }) => (
  <div className="ui container">
    <Route location={location} path="/" exact component={HomePage} />
    <GuestRoute location={location} path="/login" exact component={LoginPage}  />
    <GuestRoute
      location={location}
      path="/signup"
      exact
      component={SignupPage}
    />
    <UserRoute
      location={location}
      path="/dashboard"
      exact
      component={props => <DashboardPage {...props} />}
    />
</div>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default App;

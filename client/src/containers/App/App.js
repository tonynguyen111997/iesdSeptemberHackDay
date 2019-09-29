import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import history from "../../utils/history";
import authClient from "../../auth/authClient";

import Landing from "../../components/pages/Landing/Landing";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Dashboard from "../Dashboard/Dashboard";
import Charts from "../Charts/Charts";

import { API_signin, API_register } from "../../requests/requests";

export default class App extends Component {
  state = {
    registerError: false,
    message: ""
  };

  signin = (values) => {
    
    API_signin()
      .then(response => {})
      .catch(error => {});
  };

  register = (values, setSubmitting) => {
    this.setState({
      registerError: false,
      message: ""
    });

    API_register(values)
      .then(response => {
        setSubmitting(false);

        authClient.authenticate(response.data.token);

        history.push("/dashboard");
      })
      .catch(error => {
        setSubmitting(false);

        this.setState({
          registerError: true,
          message: error.response
            ? error.response.data
            : "An error has occurred"
        });
      });
  };

  render() {
    return (
      <Router history={history}>
        <Route path="/" exact component={Landing} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/charts" exact component={Charts} />
        <Route
          path="/login"
          exact
          render={() => <Login signin={this.signin} />}
        />
        <Route
          path="/register"
          exact
          render={() => (
            <Register
              register={this.register}
              registerError={this.state.registerError}
              message={this.state.message}
            />
          )}
        />
      </Router>
    );
  }
}

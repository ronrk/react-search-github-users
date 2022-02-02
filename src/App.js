import React from "react";
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <AuthWrapper>
        <Router>
          <Switch>
            <PrivateRoute exact path="/">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Error />
          </Switch>
        </Router>
      </AuthWrapper>
    </div>
  );
}

export default App;
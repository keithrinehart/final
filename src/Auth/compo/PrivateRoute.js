import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        !!currentUser ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}
/*<Route
      {...rest}
      render={props => {
        return currentUser ? <Component {...props} /> : <Redirect to="/login" />
      }}
      {...isLoggedIn() ? <Gallery /> : <Redirect to="login" /> }
      {...isSignedIn() ? <Gallery /> : <Redirect to="Signup" /> }

    ></Route>*/

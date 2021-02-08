import React, { useContext } from "react"
import { Route, Redirect } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import Gallery from "../../Gallery";


export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth()
  const { isLoggedIn } = useContext(useAuth);
  const { isSignedIn } = useContext(useAuth);


  return (
    <Route
      {...rest}
      render={props => {
        return currentUser ? <Component {...props} /> : <Redirect to="/login" />
      }}
      {...isLoggedIn() ? <Gallery /> : <Redirect to="login" /> }
      {...isSignedIn() ? <Gallery /> : <Redirect to="Signup" /> }

    ></Route>
  )
}

// 
import React from "react"
import Signup from "./Auth/compo/Signup"
import { Container } from "react-bootstrap" // Container having a CSS effect on the component that is not so good, possible to remove it within return ()
import { AuthProvider } from "./Auth/contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Auth/compo/Dashboard"
import Login from "./Auth/compo/Login"
import PrivateRoute from "./Auth/compo/PrivateRoute"
import ForgotPassword from "./Auth/compo/ForgotPassword"
import UpdateProfile from "./Auth/compo/UpdateProfile"

function Auth() {
  return (

    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "110vh" }}
    >
    
    <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Switch> {/* which Route are we currently on */}
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>

      </Container>
  )
}

export default Auth;
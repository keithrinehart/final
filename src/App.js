import "./App.css";
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import Galleries from "./Galleries";
import Gallery from "./Gallery";
//import Auth from "./Auth";
//import About from "./About";
//import Contact from "./Contact";


/* AUTH */
import React from "react"
import Signup from "./Auth/compo/Signup"
import { AuthProvider } from "./Auth/contexts/AuthContext"
import Dashboard from "./Auth/compo/Dashboard"
import Login from "./Auth/compo/Login"
import PrivateRoute from "./Auth/compo/PrivateRoute"
import ForgotPassword from "./Auth/compo/ForgotPassword"
import UpdateProfile from "./Auth/compo/UpdateProfile"


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Switch> {/* which Route are we currently on */}
          <Route exact path="/" exact component={Home} />
          <Route path="/galleries" component={Galleries} />
          <PrivateRoute path="/newgallery" component={Gallery} />
          {/*<Redirect to="/" />*/}
          
          {/*<AuthProvider>*/}

              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            
          {/*</AuthProvider>*/}

      </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
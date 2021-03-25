import "./App.scss";
import React from "react";
import {
  HashRouter as Router,
  Route, //or BrowserRouter
  Switch,
} from "react-router-dom";
import Home from "./Home";
import Galleries from "./Galleries";
import Gallery from "./Gallery";
import NewGallery from "./NewGallery";
import About from "./About";
//import Auth from "./Auth";
//import About from "./About";
//import Contact from "./Contact";

/* AUTH */
import React from "react";
import Signup from "./Auth/compo/Signup";
import { AuthProvider } from "./Auth/contexts/AuthContext";
import Login from "./Auth/compo/Login";
import PrivateRoute from "./Auth/compo/PrivateRoute";
import ForgotPassword from "./Auth/compo/ForgotPassword";
import UpdateProfile from "./Auth/compo/UpdateProfile";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/galleries" component={Galleries} />
            <Route path="/galleries/:userId" component={Gallery} />

            <PrivateRoute path="/newgallery" component={NewGallery} />
            <PrivateRoute path="/update-profile" component={UpdateProfile} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/about" component={About} />
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

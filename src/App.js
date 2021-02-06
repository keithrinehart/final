import "./App.css";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./Home";
import Galleries from "./Galleries";
import Gallery from "./Gallery";
import Auth from "./Auth";
import About from "./About";
//import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/galleries" component={Galleries} />
          <Route path="/newgallery" component={Gallery} />
          <Route path="/register" component={Auth} />
{/*}
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
*/}
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

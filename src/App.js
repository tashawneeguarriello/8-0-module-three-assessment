import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Locationspage from "./components/Locationspage";
import Moviepage from "./components/Moviepage";
import Peoplepage from "./components/Peoplepage";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movies" component={Moviepage} />
          <Route path="/people" component={Peoplepage} />
          <Route path="/locations" component={Locationspage} />
        </Switch>
      </div>
    );
  }
}
export default App;

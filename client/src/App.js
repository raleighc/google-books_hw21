import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import axios from "axios";

import "./App.css";

function App() {
  useEffect(() => {
    console.log("make an api call");
    axios
      .get("/api/config")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Search}></Route>
          <Route exact path="/search" component={Search}></Route>
          <Route exact path="/saved" component={Saved}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Home from './Components/Home/Home';
import Results from "./Components/Results/Results";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={"/results"}>
          <Results/>
        </Route>
        <Route path={"/"}>
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

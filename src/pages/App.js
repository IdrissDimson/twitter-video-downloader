import './style/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './Home';
import Downloader from './Downloader';

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/video">
          <Downloader />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

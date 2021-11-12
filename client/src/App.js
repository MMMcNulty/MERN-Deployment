import './App.css';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Main from './views/Main';
import New from './views/New';
import Detail from './views/Detail';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Redirect to="/api/pirates" />
        </Route>
        <Route exact path="/api/pirates">
          <Main />
        </Route>
        <Route exact path="/api/pirates/new">
          <New />
        </Route>
        <Route exact path="/api/pirates/:id">
          <Detail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

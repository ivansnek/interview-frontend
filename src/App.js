import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import {
  CoinTopList,
  CoinDetail,
} from './pages';
import './App.css';

function App() {
  return (
    <div className="main-container">
      <div className="content-wrapper">
        <Router>
          <Switch>
          <Route path="/coin/:symbol">
            <CoinDetail />
          </Route>
            <Route path="/">
              <CoinTopList />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;

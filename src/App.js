import './App.css';
import Header from './Header';
import RecommentedVideo from './RecommentedVideo';
import Sidebar from './Sidebar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SearchPage from './SearchPage';

function App() {
  return (
    <div className="App">
    <Router>
    <Header />
    <Switch>
    <Route path="/search/:searchTerm">
    <div className="app__page">
    <Sidebar />
    <SearchPage />
    </div>
      </Route>
      <Route path="/">
    <div className="app__page">
    <Sidebar />
    <RecommentedVideo />
    </div>
      </Route>
    </Switch>
    </Router>
    </div>
  );
}

export default App;

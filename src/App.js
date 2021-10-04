import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';

import About from './components/Friends/About/About';
import Notfound from './components/PageNotFound/Notfound';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Friends from './components/Friends/Friends';
import Header from './components/Header/Header';
import FriendDetail from './components/FriendDetail/FriendDetail';
import Culture from './components/Culture/Culture';

function App() {
  return (
    <div className="App">

      <Router>

        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/Friends">
            <Friends></Friends>
          </Route>
          <Route path="/friend/:friendId">
            <FriendDetail></FriendDetail>
          </Route>
          <Route exact path="/About">
            <About></About>
          </Route>


          <Route path="/about/culture">
            <Culture></Culture>

          </Route>


          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Home from './components/Home';
import PageEasy from './components/PageEasy';
import PageNormal from './components/PageNormal';
import PageHard from './components/PageHard';
import {BrowserRouter as Router ,Switch, Route} from 'react-router-dom';
import Menu from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="HomeStyle">
        <Menu/>
        <Switch>
      <Route path="/" exact component={HomePage}/>
      <Route path="/PageEasy" component={PageEasy}/>
      <Route path="/PageNormal" component={PageNormal}/>
      <Route path="/PageHard" component={PageHard}/>
      </Switch>
        </div>    
    </Router>
  );
}

const HomePage = () => (
  <div>
    <Home/>
  </div>
);

export default App;

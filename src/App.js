import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import India from './Components/India';
import World from './Components/World';
import Footer from './Components/Footer';
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';



function App() {
  return (
      <Router>
        <Header/>
        <div className="container-fluid">
          <Switch>
            <Route exact path="/">
              <India/>
            </Route>
            <Route exact path="/india">
              <India/>
            </Route>
            <Route exact path="/world">
              <World/>
            </Route>
          </Switch>
        </div>
        <Footer/>
      </Router>     
  );
}

export default App;

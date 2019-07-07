import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './Homepage';
import {Route,Switch,} from 'react-router-dom';
import AboutMePage from './AboutMePage';
import MyWorkPage from './MyWorkPage';

function App() {
  return (
    <div className="App">
      <Route path='/'component={Homepage}/>
      <Route path='/aboutme' component={AboutMePage}/>
      <Route path='/MyWork' component={MyWorkPage}/>
    </div>
  );
}

export default App;

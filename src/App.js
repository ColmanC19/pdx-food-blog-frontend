import React from 'react';
import './App.css';
import HomePage from './pages/HomePage'; 
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <Route exact path='/' component={HomePage} />
    </div>
    </Router>
  );
}

export default App;

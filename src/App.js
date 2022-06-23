import './App.css';
import NavBar from './components/NavBar.js';
import Login from "./pages/Login.js";

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Login/>
      </Router>
    </div>
  );
}

export default App;

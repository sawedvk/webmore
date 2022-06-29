import './App.css';
import Login from "./pages/Login.js";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/forgotPassword';
import Verification from './pages/Verification';

function App() {

  const data = [1,2,3,4,5]

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            exact
            path={'/'}
          >
            <Login />
          </Route>

          <Route
            exact
            path={'/forgotpassword'}
          >
            <ForgotPassword 
            // data={data}
            />
          </Route>

          <Route
            exact
            path={'/signUp'}
          >
            <SignUp />
          </Route>

          <Route
            exact
            path={'/verification'}
          >
            <Verification />
          </Route>

          <Route
            exact
            path={'/home'}
          >
            <Home />
          </Route>

        </Switch>
        {/* <NavBar/> */}
        {/* <Login /> */}
      </Router>
    </div>
  );
}

export default App;

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./Admin/Dashboard/Home/Home";
import Login from "./Admin/Login/Login";
import LandingPage from "./User/Home/LandingPage";
import Complete from "./User/Start/Complete";
import Auth from "../helper/Auth"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Login />} />
          <Route path="/test/complete" render={() => <Complete />} />
          <Route path="/test/:domain_name" render={() => <LandingPage />} />
          {Auth.isUserAuthenticated() ? <Route path="/dashboard" render={(props) => <Home {...props} />} /> : 
            <Redirect to="/" />
          }
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

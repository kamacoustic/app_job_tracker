import react from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import AppliedJobs from "./components/AppliedJobs";
import Rejections from "./components/Rejections";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";




const App = () => {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/applied_jobs" exact component={() => <AppliedJobs />} />
          <Route path="/rejections" exact component={() => <Rejections />} />
          <Route path="/login" exact component={() => <LogIn />} />
          <Route path="/signup" exact component={() => <SignUp />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

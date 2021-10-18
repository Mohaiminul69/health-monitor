import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./Components/NotFound/NotFound";
import Header from "./Components/Navbar/Header";
import "./App.css";
import Register from "./Components/Register/Register";
import AuthProvider from "./Context/AuthProvider";
import Login from "./Components/Login/Login";
import ServiceDetails from "./Components/Services/ServiceDetails";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <PrivateRoute path="/service/:serviceDetails">
            <ServiceDetails />
          </PrivateRoute>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;

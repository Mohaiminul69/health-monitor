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
import Footer from "./Components/Footer/Footer";
import VideoCall from "./Components/Services/VideoCall";
import Membership from "./Components/Membership/Membership";
import Services from "./Components/Services/Services";

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
          <Route path="/services">
            <Services />
          </Route>
          <PrivateRoute path="/service/:serviceDetails">
            <ServiceDetails />
          </PrivateRoute>
          <PrivateRoute path="/videoCall">
            <VideoCall />
          </PrivateRoute>
          <PrivateRoute path="/membership">
            <Membership />
          </PrivateRoute>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;

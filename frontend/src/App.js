import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "./components/Home";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import Cart from "./components/Cart";
import { Sidebar } from "./components/Sidebar";
import Checkout from "./Checkout";
import Report from "./components/Report";
// import { Config } from "./Config";
// import { PublicClientApplication } from "@azure/msal-browser";

import "react-toastify/dist/ReactToastify.css";
import { MsalProvider } from "@azure/msal-react";

function App(props) {
  const msalInstance = props.msalInstance;

  return (
    <MsalProvider instance={msalInstance}>
      <div className="App">
        <BrowserRouter>
          <ToastContainer />
          <NavBar />
          <div className="row">
            <div className="col-md-1">
              <Sidebar />
            </div>
            <div className="col-md-11">
              <div className="content-container">
                <Switch>
                  <Route path="/cart" component={Cart} />
                  <Route path="/Report" component={Report} />
                  <Route path="/not-found" component={NotFound} />
                  <Route path="/checkout" component={Checkout} />
                  <Route path="/" exact component={Home} />
                  <Redirect to="/not-found" />
                </Switch>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </div>
    </MsalProvider>
  );
}

export default App;

import React from "react";
import data from "./products";
import Main from "./main.js";
import Header from "./header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import ProductDetails from "./productdetail";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Router>
          <div>
            <Route path="/" exact component={Main} />
            <Route path="/product/:id" component={ProductDetails} />
          </div>
        </Router>
      </div>
    );
  }
}

export default Home;

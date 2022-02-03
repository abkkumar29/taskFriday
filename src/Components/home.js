import React from "react";
import data from "./products";
import Main from "./main.js";
import Header from "./header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductDetails from "./productdetail";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Header />
            <Route path="/" exact component={Main} />
            <Route path="/product/:id" component={ProductDetails} />
          </div>
        </Router>
      </div>
    );
  }
}

export default Home;

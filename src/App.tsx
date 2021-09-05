import React from "react";
import "./style/sass/Main.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Download from "./view/main/Download";
import Features from "./view/main/Features";
import FlashDeal from "./view/main/FlashDeal";
import FoodDetail from "./view/main/FoodDetail";
import Header from "./view/header/Header";
import OrderFinal from "./view/main/OrderFinal";
import Popular from "./view/main/Popular";
import Restaurant from "./view/main/Restaurant";
import SearchFood from "./view/main/SearchFood";
import Working from "./view/main/Working";
import Footer from "./view/Footer/Footer";
import Login from "./view/login/Login";
import Nav from "./view/header/Nav";
import Checkout from "./view/checkout/Checkout";
import Restaurants from "./view/restaurants/Restaurants";

function App() {
  return (
    <Router>
      <div className="container">
        <Nav />
        <main>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route path="/restaurants">
              <Restaurants />
            </Route>
            <Route path="/">
              <Header />
              <FlashDeal />
              <Working />
              <Popular />
              <Restaurant />
              <SearchFood />
              <Features />
              <Download />
              <FoodDetail />
              <OrderFinal />
            </Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

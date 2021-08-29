import React from "react";
import "./style/sass/Main.scss";
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

function App() {
  return (
    <>
      <Nav />
      <main>
        {/* <Header />
        <FlashDeal />
        <Working />
        <Popular />
        <Restaurant />
        <SearchFood />
        <Features />
        <Download />
        <FoodDetail />
      <OrderFinal /> */}
        {/* <Login /> */}
        <Checkout />
      </main>
      <Footer />
    </>
  );
}

export default App;

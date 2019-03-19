import React from 'react';
import './App.css';
import HeaderContainer from "./components/HeaderComponents/HeaderContainer"
import CardContainer from "./components/CardComponents/CardContainer"
import ImageThumbnail from './components/HeaderComponents/ImageThumbnail';
import Footer from "./Footer";

const App = () => {
  return (
    <div className="container"> 
    <ImageThumbnail />
    <div clasName="mainApp">
        <HeaderContainer />
        <CardContainer />
        <Footer />
    </div>
    </div>
  );
};

export default App;



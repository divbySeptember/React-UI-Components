import React from 'react';
import './Card.css';
import banner from '../HeaderComponents/img/react.png';

const CardBanner = () => {
    return (
        <div >
          <img  className="banner" src={banner} />
        </div>
    );
    
}


export default CardBanner
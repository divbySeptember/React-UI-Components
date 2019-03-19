import React from 'react';
import './Header.css';
import lambda from './img/lambda.png';


     
const ImageThumbnail = () => {
    return (
        <div className="logo">
          <img src={lambda} width="50" height="50" />
        </div>
    );
    
}



export default ImageThumbnail
import React from 'react';
import './Header.css';
import moment from 'moment'


let date = moment().format('DD MMM');

const HeaderTitle = () => {
    return (
        <div className="title">
            <h2> Lambda School </h2>
            <h3 className="userTag"> @LambdaSchool </h3>
            <ul id="date">
            <li>{date}</li>

            </ul>
                
            
        </div>
    )
}


export default HeaderTitle

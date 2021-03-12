import React from 'react';

import {Link} from 'react-router-dom';
class Header extends React.Component {
render(){
    return (
        <div className="Header">
        <nav>
        <ul>
        <li className="list"><Link to='/'><img src="https://www.w3schools.com/images/lamp.jpg" alt="logo" /></Link></li>
        
        <li><Link to='/news'>News</Link></li>
        <li><Link to='/about'>About us</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/homes'>Home</Link></li>
        </ul>
        </nav>
       

</div>

    );
}
}

export default Header;
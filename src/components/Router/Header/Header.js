import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

class Header extends React.Component {
    render(){
        return(
            <div>
                <header>
                    <Link to="/">Home</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/about">About</Link>
                </header>
            </div>
        )
    }
}
export default Header;
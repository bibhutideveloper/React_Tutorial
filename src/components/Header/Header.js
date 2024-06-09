import React from 'react';
import './Header.css';

class Header extends React.Component {
    render(){
        return(
            <div>
                <header className='header' style={{color:'blue'}}>
                    <span>Home</span>
                    <span>Shop</span>
                    <span>Contact</span>
                    <span>About</span>
                </header>
            </div>
        )
    }
}
export default Header;
import React, { useContext } from 'react';
import {ThemeContext} from '../contexts/ThemeContext'
import { AuthContext } from '../contexts/AuthContext';


const Navbar = () => {
    const {handleAuthenticated, isAuthenticated} = useContext(AuthContext);
    const {isLightTheme, dark, light} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    return ( 
        <nav style={{background: theme.ui, color: theme.syntax}}>
            <h1>Context App</h1>
            <div onClick={handleAuthenticated}>
                {isAuthenticated ? 'Logged in' : 'Logged out'}
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
     );
}
 
export default Navbar;
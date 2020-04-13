import React, { useContext } from 'react';
import {ThemeContext} from '../contexts/ThemeContext'

const ThemeToggle = () => {
    const {handleThemeToggle} = useContext(ThemeContext)
    return (
        <div>
            <button onClick={handleThemeToggle}>Toggle theme</button>
        </div>  
      );
}
 
export default ThemeToggle;
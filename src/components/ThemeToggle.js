import React, { Component } from 'react';
import {ThemeContext} from '../contexts/ThemeContext'


class ThemeToggle extends Component {
    static contextType = ThemeContext
    render() { 
        return ( 
<div>

 <button onClick={this.context.handleThemeToggle}>Toggle theme</button>


</div>         );
    }
}
 
export default ThemeToggle;
import React, { Component } from 'react';
import {ThemeContext} from '../contexts/ThemeContext'
class BookList extends Component {
 //Here we use the contextType to get the context

    static contextType = ThemeContext
    render() { 
        const {isLightTheme, light, dark} = this.context
        const theme = isLightTheme ? light : dark
        return ( 
            <div className="book-list" style={{background: theme.bg, color: theme.syntax}}>
                <ul>
                    <li style={{background:theme.ui}}>The power of now</li>
                    <li style={{background:theme.ui}}>The road less travelled</li>
                    <li style={{background:theme.ui}}>Talent is overated</li>
                </ul>
            </div>
          );
    }
}
 
export default BookList;
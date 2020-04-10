import React, { Component } from 'react';

class BookList extends Component {
    render() { 
        return ( 
            <div className="book-list">
                <ul>
                    <li>The power of now</li>
                    <li>The road less travelled</li>
                    <li>Talent is overated</li>
                </ul>
            </div>
          );
    }
}
 
export default BookList;
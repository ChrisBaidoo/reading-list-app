import React, {createContext, useState} from 'react';

export const BookContext = createContext()

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: 'name of the wind', id: 1},
        {title: 'gone to be happy', id:21},
        {title: 'ride the wind', id: 3},
        {title: 'stronger wind', id: 5},
    ])
    
    return ( 
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;
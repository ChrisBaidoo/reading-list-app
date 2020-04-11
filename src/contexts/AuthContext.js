import React, { createContext, Component } from 'react';

export const AuthContext = createContext()

class AuthContextProvider extends Component {
    state = { 
        isAuthenticated: false
     }

     handleAuthenticated = () => {
         this.setState({isAuthenticated: !this.state.isAuthenticated})
     }
    render() { 
        return ( 
            <AuthContext.Provider value={{...this.state, handleAuthenticated: this.handleAuthenticated}}>
                {this.props.children}
            </AuthContext.Provider>
         );
    }
}
 
export default AuthContextProvider;
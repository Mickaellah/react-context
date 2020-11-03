import React, { Component } from 'react';

const {Provider, Consumer} = React.createContext();
// ThemeContext.Provider & ThemeContext.Consumer.

class ThemeContextProvider extends Component {
    render() {
        return (
            <Provider value={"light"}>
                {this.props.children}
            </Provider>
        )
    }
}

export {ThemeContextProvider, Consumer as ThemeContextConsumer}
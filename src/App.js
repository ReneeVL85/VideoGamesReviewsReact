import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div classname="container">
              <h1>VideoGame Reviews, Yeah!</h1>
              {this.props.children}
            </div>
        );
    }
}

export default App;

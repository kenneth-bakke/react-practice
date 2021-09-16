import React from 'react';
import ReactDOM from 'react-dom';


if (module.hot) {
  module.hot.accept();
}

class App extends React.Component {
  constructor(props) {
    // Reference to parents' constructor function. Must define every time.
    super(props);

    // State object that will contain useful data. This is the ONLY time we directly assign to this.state
    this.state = { lat: null, errorMessage: ''};

    window.navigator.geolocation.getCurrentPosition(
      position => {
        // Using setState
        this.setState({ lat: position.coords.latitude });

        // We did not do: "this.state.lat = position.coords.latitude" never do it, just. don't. do. it.
      },
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }


  render() {
    // Conditional rendering in it's simplest form
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div> 
    }
    
    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>
    }

    return <div>Loading!</div>
  }    
}

ReactDOM.render(<App />, document.querySelector('#root'));
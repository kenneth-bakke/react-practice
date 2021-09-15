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
    this.state = { lat: null};

    window.navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
        // Using setState
        this.setState({ lat: position.coords.latitude });

        // We did not do: "this.state.lat = position.coords.latitude" never do it, just. don't. do. it.
      },
      err => console.log(err)
    );
  }

  render() {

    return <div>Latitude: {this.state.lat}</div>;
  }    
}

ReactDOM.render(<App />, document.querySelector('#root'));
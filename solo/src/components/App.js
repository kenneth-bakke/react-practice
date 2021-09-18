import './index.css';
import RecipeDisplay from './RecipeDisplay';
import React from 'react';
import Spinner from './Spinner';


class App extends React.Component {

  state = {recipeTitle: '', errorMessage: ''};

  componentDidMount() {

  }

  renderContent () {
    if (this.state.errorMessage && !this.state.recipeTitle) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.recipeTitle) {
      return <RecipeDisplay title={this.state.recipeTitle} />
    }
    
    return (
    <div className='ui container'>
      <Spinner message="Not sure what's taking so long..."/>
    </div>
    );
  }

  render() {
    return (<div className="Bingosa">{this.renderContent()}</div>);
  }
};

export default App;
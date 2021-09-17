import React from 'react';

class SearchBar extends React.Component {
    
  state = {};

  render () {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image search</label>
            <input type="text" autofocus require placeholder="Image search"/>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
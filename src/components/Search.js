import React from 'react';


class Search extends React.Component {

  state = { term: '' };

  onInputClick() {

    console.log('input nha');

  }

  onFormSubmit = (event) => {

    event.preventDefault();

    this.props.onSubmitne(this.state.term);

  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit}
          className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input type="text" value={this.state.term} onChange={(e) => this.setState({ term: e.target.value })} onMouseOver={this.onInputClick} />
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
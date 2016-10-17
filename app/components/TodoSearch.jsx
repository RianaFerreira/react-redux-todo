var React = require('react');

var TodoSearch = React.createClass({
  handleChange: function () {
    var showCompleted = this.refs.showCompletedInput.checked;
    var searchText = this.refs.searchInput.value;

    this.props.onSearch(showCompleted, searchText);
  },
  render: function () {
    return (
      <div>
        <input type="search" ref="searchInput" placeholder="Search todos" onChange={ this.handleChange } />
        <label>
          <input type="checkbox" ref="showCompletedInput" onChange={ this.handleChange } />
          Show completed todos 
        </label>
      </div>
    );
  }
});

module.exports = TodoSearch;
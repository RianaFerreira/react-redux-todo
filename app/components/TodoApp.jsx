// Libraries
var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

// Components
import TodoSearch from 'TodoSearch';
import TodoList from 'TodoList';
import TodoForm from 'TodoForm';

// createClass used for component that maintains state
var TodoApp = React.createClass({
  render: function () {
    return (
      <div className="row">
        <h1 className='page-title'>Todo Application</h1>
        <div className="columns small-12 large-6 small-centered large-centered">
          <div className="container">
            <TodoSearch />
            <TodoList />
            <TodoForm />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TodoApp;
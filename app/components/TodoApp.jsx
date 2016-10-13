var React = require('react');

var TodoSearch = require('TodoSearch');
var TodoList = require('TodoList');
var TodoForm = require('TodoForm');

// createClass used for component that maintains state
var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        { 
          id: 1,
          text: 'Watch video'
        },
        { 
          id: 2,
          text: 'Write code'
        },
        { 
          id: 3,
          text: 'Push code to repo'
        },
        { 
          id: 4,
          text: 'Go shower'
        }
      ]
    }
  },
  render: function () {
    return (
      <div>
        <h1 className='text-center'>Todo Application</h1>
        <TodoSearch />
        <TodoList todos={this.state.todos} />
        <TodoForm />
      </div>
    );
  }
});

module.exports = TodoApp;
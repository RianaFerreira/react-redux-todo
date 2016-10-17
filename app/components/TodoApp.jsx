var React = require('react');

var TodoSearch = require('TodoSearch');
var TodoList = require('TodoList');
var TodoForm = require('TodoForm');

// createClass used for component that maintains state
var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        { id: 1, text: 'Watch video' },
        { id: 2, text: 'Write code' },
        { id: 3, text: 'Push code to repo' },
        { id: 4, text: 'Go shower' }
      ]
    }
  },
  handleSearch: function (showCompleted, searchText) {
    console.log(showCompleted);
    console.log(searchText);
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  handleTodoCreation: function (todoText) {
    var {todos} = this.state;

    this.setState({
      todos: todos.concat({ id: todos.length + 1, text: todoText })
    });
  },
  render: function () {
    return (
      <div className="row">
        <div className="columns small-12 large-4 small-centered large-centered">
          <h1 className='text-center'>Todo Application</h1>
          <TodoSearch onSearch={ this.handleSearch }/>
          <TodoList todos={ this.state.todos } />
          <TodoForm onAddTodo={this.handleTodoCreation } />
        </div>
      </div>
    );
  }
});

module.exports = TodoApp;
// Libraries
var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

// Components
var TodoSearch = require('TodoSearch');
var TodoList = require('TodoList');
var TodoForm = require('TodoForm');

// Data storage
var TodoAPI = require('TodoAPI');

// createClass used for component that maintains state
var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos()
    }
  },
  componentDidUpdate: function () {
    TodoAPI.setTodos(this.state.todos);
  },
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  handleTodoCreation: function (todoText) {
    var {todos} = this.state;

    this.setState({
      // todos: todos.concat({ id: todos.length + 1, text: todoText })
      todos: [
        ...this.state.todos,
        { id: uuid(), text: todoText, completed: false, createdAt: moment().unix(), completedAt: undefined }
      ]
    });
  },
  handleToggle: function (id) {
    var updatedTodos = this.state.todos.map((todo) => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
        todo.completedAt = todo.completed ? moment().unix() : undefined;
      }
      return todo;
    });

    this.setState({ todos: updatedTodos });
  },
  render: function () {
    var { todos, showCompleted, searchText } = this.state;
    var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

    return (
      <div className="row">
        <h1 className='page-title'>Todo Application</h1>
        <div className="columns small-12 large-6 small-centered large-centered">
          <div className="container">
            <TodoSearch onSearch={ this.handleSearch }/>
            <TodoList todos={ filteredTodos } onToggle={ this.handleToggle } />
            <TodoForm onAddTodo={ this.handleTodoCreation } />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TodoApp;
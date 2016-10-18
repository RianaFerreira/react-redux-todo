var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
  render: function () {
    var renderTodo = () => {
      if (this.props.todos.length === 0) {
        return (<p className="container__message">Nothing To Do</p>);
      }

      return this.props.todos.map((todo) => {
        return <Todo key={ todo.id } {...todo} onToggle={this.props.onToggle} />;
      });
    }

    return (
      <div>
        <h2 className="text-center">Todo List</h2>
        { renderTodo() }
      </div>
    );
  }
});

module.exports = TodoList;
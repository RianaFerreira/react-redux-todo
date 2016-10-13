var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
  render: function () {
    var renderTodo = () => {
      return this.props.todos.map((todo) => {
        return <Todo key={ todo.id } {...todo} />;
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
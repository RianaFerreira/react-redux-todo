var React = require('react');

var TodoForm = React.createClass({
  handleSubmit: function (event) {
    event.preventDefault();

    var todoText = this.refs.todoInput.value;

    if (todoText && todoText.length > 0) {
      this.refs.todoInput.value = '';
      this.props.onAddTodo(todoText);
    } else {
      this.refs.todoInput.focus();
    }
  },
  render: function () {
    return (
      <div className="container__footer">
        <form onSubmit={ this.handleSubmit }>
          <input type="text" ref="todoInput" placeholder="What do you need to do?" />
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

module.exports = TodoForm;
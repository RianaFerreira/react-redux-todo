var React = require('react');
// provides access to parent properties and dispatch method
var { connect } = require('react-redux');
var moment = require('moment');
var actions = require('actions');

export var Todo = React.createClass({
  render: function () {
    var { id, text, completed, createdAt, completedAt, dispatch } = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo';
    var renderDate = () => {
      var message = 'Created ';
      var timestamp = createdAt;

      if (completed) {
        message = 'Completed ';
        timestamp = completedAt;
      }

      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    }

    return (
      <div className={ todoClassName } onClick={() => {
        dispatch(actions.startToggleTodo(id, !completed));
      }}>
        <div>
          <input type="checkbox" checked={ completed }/>
        </div>
        <div>
          <p>{ text }</p>
          <p className="todo__subtext">{ renderDate() }</p>
        </div>
      </div>
    );
  }
});

// properties passed down from parent component
// no state needed, only the dispatch function
export default connect()(Todo);

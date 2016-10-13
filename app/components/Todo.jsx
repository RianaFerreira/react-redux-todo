var React = require('react');

var Todo = React.createClass({
  render: function () {
    return (
      <div className="text-center">{ this.props.text }</div>
    );
  }
});

module.exports = Todo;
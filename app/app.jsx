var React = require('react');
var ReactDOM = require('react-dom');

// ES6 destructuring syntax
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Auto require all application child components
// Ref webpack configuration resolve['modulesDirectories']
var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
  console.log('New state ', store.getState());
});

store.dispatch(actions.addTodo('Clean room'));
store.dispatch(actions.setSearchText('room'));
store.dispatch(actions.toggleShowCompleted());

// Load foundation with the css-loader installed
$(document).foundation();

// Custom css styles
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <TodoApp />,
  document.getElementById('app')
);
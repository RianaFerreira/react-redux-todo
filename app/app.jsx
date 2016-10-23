var React = require('react');
var ReactDOM = require('react-dom');
var { Provider } = require('react-redux');

// ES6 destructuring syntax
var { Route, Router, IndexRoute, hashHistory } = require('react-router');

// Auto require all application child components
// Ref webpack configuration resolve['modulesDirectories']
var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');

store.subscribe(() => {
  var state = store.getState();
  console.log('New state ', state);
  TodoAPI.setTodos(state.todos);
});

var initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));

// Load foundation with the css-loader installed
$(document).foundation();

// Custom css styles
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={ store }><TodoApp /></Provider>, 
  document.getElementById('app')
);
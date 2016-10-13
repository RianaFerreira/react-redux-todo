var React = require('react');
var ReactDOM = require('react-dom');

// ES6 destructuring syntax
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Auto require all application child components
// Ref webpack configuration resolve['modulesDirectories']
var TodoApp = require('TodoApp');

// Load foundation with the css-loader installed
$(document).foundation();

// Custom css styles
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <TodoApp />,
  document.getElementById('app')
);
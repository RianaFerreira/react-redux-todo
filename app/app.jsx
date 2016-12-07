var React = require('react');
var ReactDOM = require('react-dom');
var { Provider } = require('react-redux');

// ES6 destructuring syntax
// hashHistory is stored on the client
var { Route, Router, IndexRoute, hashHistory } = require('react-router');

// Auto require all application child components
// Ref webpack configuration resolve['modulesDirectories']
import Login from 'Login';
import TodoApp from 'TodoApp';

var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');

// import './../sandbox/firebase/index';

// Store data in the localStorage replace this with the Firebase JSON store instead
// store.subscribe(() => {
//   var state = store.getState();
//   console.log('New state ', state);
//   TodoAPI.setTodos(state.todos);
// });
// Initialize app data from localStorage replace this with DB data instead
// var initialTodos = TodoAPI.getTodos();
// store.dispatch(actions.addTodos(initialTodos));

store.dispatch(actions.startAddTodos());

// Load foundation with the css-loader installed
$(document).foundation();

// Custom css styles
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/">
        <Route path="todos" component={ TodoApp } />
        <IndexRoute component={ Login } />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);

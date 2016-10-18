// localStorage used to store todo data
var $ = require('jQuery');

module.exports = {
  setTodos: function (todos) {
    if($.isArray(todos)) {
      // localStorage takes a key value pair as args
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function () {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try {
      todos = JSON.parse(stringTodos);
    } catch (error) {
      // if JSON.parse fails
    }

    return $.isArray(todos) ? todos : [];
  },
  filterTodos: function (todos, showCompleted, searchText) {
    var filteredTodos = todos;

    // filter by showCompleted
    // filter takes a callback function that is invoked for each item in given array
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });

    // Filter by searchText



    return filteredTodos;
  }
};
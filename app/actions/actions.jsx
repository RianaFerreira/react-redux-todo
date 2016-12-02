import firebase, { firebaseRef } from 'app/firebase/index';
import moment from 'moment';

// ACTIONS ARE SIMPLE FUNCTIONS THAT RETURN PLAIN OLD JS ACTION OBJECTS
export var setSearchText = (searchText) => {
  return { type: 'SET_SEARCH_TEXT', searchText };
};

export var addTodo = (todo) => {
  return { type: 'ADD_TODO', todo };
};

// Redux Thunk allows the action generator to retun a function instead
// of an action object. This enables the use of asynchronous DB requests.
export var startAddTodo = (text) => {
  return (dispatch, getState) => {
    var todo = {
      text,
      completed: false,
      createdAt: moment().unix(),
      completedAt: null
    };

    var todoRef = firebaseRef.child('todos').push(todo);

    // re-render the component with todo data from the DB
    return todoRef.then(() => {
        dispatch(addTodo({
          ...todo,
          id: todoRef.key
        }));
    });
  };
};

export var toggleShowCompleted = () => {
  return { type: 'TOGGLE_SHOW_COMPLETED' };
};

export var addTodos = (todos) => {
  return { type: 'ADD_TODOS', todos };
};

export var toggleTodo = (id) => {
  return { type: 'TOGGLE_TODO', id };
};

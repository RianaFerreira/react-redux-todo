import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

var expect = require('expect');
var actions = require('actions');

// pass in an array of middleware
var createMockStore = configureMockStore([thunk]);

describe('Actions', () => {
  it('should generate search text action', () => {
    var action = {type: 'SET_SEARCH_TEXT', searchText: 'Some search text'};
    var res = actions.setSearchText(action.searchText);
    expect(res).toEqual(action);
  });

  it('should generate add todo action', () => {
    var action = {
      type: 'ADD_TODO',
      todo: {
        id: '123abc',
        text: 'Drink Coffee',
        completed: false,
        createdAt: 0
      }
    };
    var res = actions.addTodo(action.todo);
    expect(res).toEqual(action);
  });

  it('should generate toggle show completed action', () => {
    var action = { type: 'TOGGLE_SHOW_COMPLETED' };
    var res = actions.toggleShowCompleted();
    expect(res).toEqual(action);
  });

  it('should generate toggle todo action', () => {
    var action = { type: 'TOGGLE_TODO', id: 1 };
    var res = actions.toggleTodo(action.id);
    expect(res).toEqual(action);
  });

  it('should generate add todos action', () => {
    var todos = [{id: 1, text: 'Drink Coffee', completed: false, completedAt: undefined, createdAt: 33000}];
    var action = { type: 'ADD_TODOS', todos };
    var res = actions.addTodos(todos);
    expect(res).toEqual(action);
  });

  // asynchronous DB test
  it('should create todo and dispatch ADD_TODO', (done) => {
    const store = createMockStore({});
    const todoText = "Hang out with Tony";
    // wait for db response
    store.dispatch(actions.startAddTodo(todoText)).then(() =>{
      const actions = store.getActions();
      expect(actions[0]).toInclude({ type: 'ADD_TODO' });
      expect(actions[0].todo).toInclude({ text: 'Hang out with Tony' });
      done();
    }).catch(done);
  })
});

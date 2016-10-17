var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoSearch = require('TodoSearch');

describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist();
  });

  it('should call onSearch when entered input text', () => {
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

    todoSearch.refs.searchInput.value = 'cat';

    TestUtils.Simulate.change(todoSearch.refs.searchInput);

    expect(spy).toHaveBeenCalledWith(false, 'cat');
  });

  it('should call onSearch whit proper checked value', () => {
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

    todoSearch.refs.showCompletedInput.checked = true;

    TestUtils.Simulate.change(todoSearch.refs.showCompletedInput);

    expect(spy).toHaveBeenCalledWith(true, '');
  });
});
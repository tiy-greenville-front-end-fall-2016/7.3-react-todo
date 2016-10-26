var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

var LoginComponent = require('./components/login.jsx').LoginComponent;
var TodoComponent = require('./components/todo.jsx').TodoComponent;
var TodoCollection = require('./models/todos').TodoCollection;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'todo/': 'todo',
  },
  initialize: function(){
    this.username = '';
  },
  index: function(){
    ReactDOM.render(
      React.createElement(LoginComponent, {router: this}),
      document.getElementById('app')
    );
  },
  todo: function(){
    var collection = new TodoCollection();
    collection.fetch();

    ReactDOM.render(
      React.createElement(TodoComponent, {collection: collection, username: this.username}),
      document.getElementById('app')
    );
  }
});

var router = new AppRouter();

module.exports = router;

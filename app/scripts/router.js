var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

var LoginComponent = require('./components/login.jsx').LoginComponent;
var TodoContainer = require('./components/todo.jsx').TodoContainer;
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
    // where is the router? what variable contains the router?
    console.log(this);

    ReactDOM.render(
      // <LoginComponent awesomeSauce={this}/>
      React.createElement(LoginComponent, {router: this}),
      document.getElementById('app')
    );
  },
  todo: function(){
    console.log('todo route');
    ReactDOM.render(
      React.createElement(TodoContainer, {router: this}),
      document.getElementById('app')
    );
  }
});

var router = new AppRouter();

module.exports = router;

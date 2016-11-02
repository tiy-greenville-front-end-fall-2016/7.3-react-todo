var $ = require('jquery');
var React = require('react');
var Backbone = require('backbone');
require('backbone-react-component');

var TodoCollection = require('../models/todos').TodoCollection;
var TemplateComponent = require('./template.jsx').TemplateComponent;

var From = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  getInitialState: function(){
    return {
      title: ''
    };
  },
  handleTitle: function(e){
    var title = e.target.value;
    this.setState({title: title});
  },
  handleSubmit: function(e){
    e.preventDefault();
    // this.props.collection.create({title: this.state.title});
    this.getCollection().create({title: this.state.title});
    var newTodo = {
      'title': this.state.title
    };
    this.props.addTodo({title: this.state.title});
    this.setState({title: ''});
  },
  render: function(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleTitle} name="title" value={this.state.title} placeholder="Todo Title" />
        <button type="submit" className="btn btn-success">Add Todo!</button>
      </form>
    )
  }
});

var List = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  render: function(){
    var collection = this.getCollection();
    var listOfTodos = collection.map(function(todo){
      return <li key={todo.get("_id")}>{todo.get('username')} needs to do {todo.get('title')}</li>;
    });

    return (
      <ul>
        {listOfTodos}
      </ul>
    );
  }
});

var FormAndListSection = React.createClass({
  render: function(){
    return (
      <section>
        <From addTodo={this.props.addTodo}/>
        <List todos={this.props.todos}/>
      </section>
    )
  }
})


var TodoContainer = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  getDefaultProps: function(){
    var collection = new TodoCollection();
    collection.fetch();

    return {
      collection: collection
    };
  },
  // getInitialState: function(){
  //   var collection = new TodoCollection();
  //
  //   return {
  //     collection: collection
  //   };
  // },
  // componentWillMount: function(){
  //   var self = this;
  //   var collection = this.state.collection;
  //
  //   collection.fetch().then(function(){
  //     self.setState({collection: collection});
  //
  //     collection.each(function(model){
  //       model.on('change', function(){self.update()});
  //     });
  //   });
  //
  //   collection.on('add', function(){self.update()});
  // },
  // update: function(){
  //   this.forceUpdate();
  // },
  // getInitialState: function(){
  //   return {
  //     todos: []
  //   }
  // },
  componentWillMount: function(){
    var self = this;
    $.ajax('https://tiny-lasagna-server.herokuapp.com/collections/todos', {
      success: function(todos){
        console.log(this);
        self.setState({todos: todos});
      }
    });
  },
  // addTodo: function(todo){
  //   var todos = this.state.todos;
  //   todo.username = this.props.router.username;
  //
  //   todos.push(todo);
  //
  //   this.setState({todos: todos});
  // },
  render: function(){
    return (
      <TemplateComponent>
        <h2>Hey {this.props.router.username}, Create a Todod</h2>
        <From />
        <List />
        {/*<FormAndListSection todos={this.state.todos} addTodo={this.addTodo}/>*/}
      </TemplateComponent>
    )
  }
});

module.exports = {
  TodoContainer: TodoContainer
}

var React = require('react');
var Backbone = require('backbone');
require('backbone-react-component');

var TodoCollection = require('../models/todos').TodoCollection;
var TemplateComponent = require('./template.jsx').TemplateComponent;

var TodoFrom = React.createClass({
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
    this.getCollection().create({title: this.state.title});
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

var TodoListing = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  render: function(){
    var collection = this.getCollection();
    var listOfTodos = collection.map(function(todo){
      return <li key={todo.get('_id') || todo.cid}>{todo.get('title')}</li>;
    });

    return (
      <ul>
        {listOfTodos}
      </ul>
    );
  }
});


var TodoComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
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
  render: function(){
    return (
      <TemplateComponent>
        <h2>Hey {this.props.username}, Create a Todod</h2>
        <TodoFrom/>
        <TodoListing/>
      </TemplateComponent>
    )
  }
});

module.exports = {
  TodoComponent: TodoComponent
}

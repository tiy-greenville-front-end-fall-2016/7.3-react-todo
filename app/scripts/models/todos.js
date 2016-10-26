var Backbone = require('backbone');

var Todo = Backbone.Model.extend({
  idAttribute: '_id',
  defaults: {
    visible: true
  }
});

var TodoCollection = Backbone.Collection.extend({
  model: Todo,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/todos',
  comparator: function(model){
    console.log(model.cid);
    return -model.cid;
  }
});


module.exports = {
  Todo: Todo,
  TodoCollection: TodoCollection
};

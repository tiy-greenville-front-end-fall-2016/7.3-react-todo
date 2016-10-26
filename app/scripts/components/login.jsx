var React = require('react');

var TemplateComponent = require('./template.jsx').TemplateComponent;

function Directions(){
  return <p>Please login to create ToDos</p>
}

var LoginFrom = React.createClass({
  getInitialState: function(){
    return {
      username: ''
    };
  },
  handleUsername: function(e){
    var username = e.target.value;
    this.setState({username: username});
  },
  handleSubmit: function(e){
    e.preventDefault();
    var router = this.props.router;

    router.username = this.state.username;
    router.navigate('todo/', {trigger: true});
    this.setState({username: ''});
  },
  render: function(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleUsername} name="username" value={this.state.username} placeholder="Username" />
        <button type="submit" className="btn btn-success">Login!</button>
      </form>
    )
  }
})

var LoginComponent = React.createClass({
  render: function(){
    return (
      <TemplateComponent>
        <LoginFrom router={this.props.router}/>
        <Directions />
      </TemplateComponent>
    )
  }
});

module.exports = {
  LoginComponent: LoginComponent
}

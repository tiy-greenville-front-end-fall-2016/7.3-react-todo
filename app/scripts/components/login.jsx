var React = require('react');

var TemplateComponent = require('./template.jsx').TemplateComponent;

function Directions(){
  return <p>Please login to create ToDos</p>
}

var LoginForm = React.createClass({
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
    console.log(this.props.router);
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
    // where is the router stored?
    console.log('router: ', this.props.router);
    return (
      <TemplateComponent>
        <LoginForm router={this.props.router}/>
        <Directions />
      </TemplateComponent>
    )
  }
});

module.exports = {
  LoginComponent: LoginComponent
}

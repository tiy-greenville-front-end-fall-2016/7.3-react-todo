var React = require('require');


function LoggedInHeader(props){
  return (
    <header>
      <nav></nav>
      <img src="..." className="logo"/>
    </header>
  )
}

function AnnonHeader(props){
  return (
    <header>
      <nav></nav>
      <img src="..." className="logo"/>
    </header>
  )
}

var Header = React.createClass({
  render: function(){
    return (
      <div className={this.props.styles}>
        {this.props.user.loggedIn() ? <LoggedInHeader /> : <AnnonHeader />}
      </div>
    );
  }
});

module.exports = {
  Header: Header
};

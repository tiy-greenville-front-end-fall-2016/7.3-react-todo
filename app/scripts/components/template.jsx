var React = require('react');
var Well = require('react-bootstrap').Well;

var TemplateComponent = React.createClass({
  render: function(){
    return (
      <div className="container">
        <Well>
          <h1>Awesome Todo App</h1>
        </Well>

        {this.props.children}

        <footer>
          <strong>Awesome</strong> Since 2016
        </footer>
      </div>
    );
  }
});

module.exports = {
  TemplateComponent: TemplateComponent
}

var React = require('react');
var Well = require('react-bootstrap').Well;


/**
 * DON'T DO MODALS LIKE THIS!!!!!!
 * SERIOUSLY, DON'T... USE REACT MODAL
 */
var $ = window.jQuery = window.$ = require('jquery');
require('bootstrap-sass/assets/javascripts/bootstrap');
var Modal = React.createClass({
  componentWillReceiveProps: function(nextProps){
    if(nextProps.showModal){
      $('#demoModal').modal({show: true});
    }else{
      $('#demoModal').modal({show: false});
    }
  },
  render: function(){
    return (
      <div id="demoModal" className="modal fade" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title">Modal title</h4>
            </div>
            <div className="modal-body">
              <p>One fine body&hellip;</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>{/* comment */}
      </div>
    );
  }
});


var TemplateComponent = React.createClass({
  getInitialState: function(){
    return {
      showModal: true
    }
  },
  toggleModal: function(){
    this.setState({showModal: !this.state.showModal});
  },
  render: function(){
    return (
      <div className="container">
        <Well>
          <h1>Awesome Todo App</h1>
        </Well>

        {this.props.children}

        <button onClick={this.toggleModal} type="button" className="btn btn-primary btn-lg">
          Launch demo modal
        </button>

        <footer>
          <strong>Awesome</strong> Since 2016
        </footer>

        <Modal showModal={this.state.showModal} />
      </div>
    );
  }
});

module.exports = {
  TemplateComponent: TemplateComponent
}

// @App.jsx
define(function(require){

  var React = require('react');
  var ReactDOM = require('react-dom');

  function App() {
    this.AppView = React.createClass({
      render: function () {
        return (
          <div>
            <p>Hello, RequireJS-React-Test!</p>
          </div>
        );
      }
    });
  }

  App.prototype.init = function () {
    ReactDOM.render(<this.AppView />, document.getElementById("test1"));
  };

  return App;

});
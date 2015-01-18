var React = require("react");

module.exports = React.createClass({
  getInitialState() {
    return {n: 3};
  },

  decrement() {
    if(this.state.n > 0) {
      this.setState({n: this.state.n - 1});
    }
  },

  increment() {
    this.setState({n: this.state.n + 1});
  },

  render() {
    var count = this.state.n;
    // var zeroAlert = (count == 0 ? <p>counter cannot go less than zero</p> : null)
    return <div>
      <h1> count: {count} </h1>
      <input type="button" value="+" onClick={this.increment}/>
      <input type="button" value="-" onClick={this.decrement}/>
      {count == 0 ? <p>counter cannot go less than zero</p> : null}
    </div>
  }
});
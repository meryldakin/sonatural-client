import { connect } from "react-redux";
import * as actions from "./actions";
import React, { Component } from "react";

class DemoCounter extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchDemos();
  }

  countDemos = () => {
    let counterObject = {};
    let result = [];
    this.props.demos.map(
      demo =>
        counterObject[demo.line]
          ? (counterObject[demo.line] += 1)
          : (counterObject[demo.line] = 1)
    );
    for (var key in counterObject) {
      counterObject.hasOwnProperty(key)
        ? result.push(<div key={key}>{key + ": " + counterObject[key]}</div>)
        : null;
    }
    return result;
  };

  render() {
    const { loading, demos } = this.props;
    return loading ? (
      <div className="well">
        <h1>Demos this month</h1>
        <p>"i'm a spinner"{this.props.name}</p>
      </div>
    ) : (
      <div>
        <h1>Demos this month</h1>
        {this.props.name.map(name => name[0])}
        {this.countDemos()}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    demos: state.demos,
    loading: state.loading
  };
};

export default connect(mapStateToProps, actions)(DemoCounter);

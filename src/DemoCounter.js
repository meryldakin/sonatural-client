import { connect } from 'react-redux'
import * as actions from './actions'
import React, { Component } from 'react';

class DemoCounter extends Component {
  constructor(props){
    super(props)

  }

  componentDidMount(){
    this.props.fetchDemos()
  }

  countDemos = () => {
    let counterObject = {}
    this.props.demos.map(demo => {
      if (counterObject[demo.line]){
        return counterObject[demo.line] += 1
      } else {
        return counterObject[demo.line] = 1
      }
    })

    for (var key in counterObject) {
      if (counterObject.hasOwnProperty(key)) {
        return <div>{key + " -> " + counterObject[key]}<div>
      }
    }
  }

  render(){
    return (
      loading
      ? <div>"i'm a spinner"</div>
      : <div>{this.countDemos()}</div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    demos: state.demos,
    loading: state.loading
  }
}

export default (connect(mapStateToProps, actions)(DemoCounter))

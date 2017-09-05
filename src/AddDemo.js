import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel, Button } from "react-bootstrap";
import Datetime from "react-datetime";
import moment from "moment";
export default class AddDemo extends Component {
  constructor() {
    super();
    this.state = {
      line: "",
      store: "",
      datetime: "",
      comments: ""
    };
  }

  handleChange = event => {
    let key = event.target.id;
    this.setState({
      [key]: event.target.value
    });
    console.log(this.state);
  };

  handleDateChange = event => {
    this.setState({
      datetime: event
    });
    console.log(this.state);
  };

  handleAddDemo = () => {};

  FieldGroup({ id, label, help, ...props }) {
    return (
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props} />
      </FormGroup>
    );
  }
  render() {
    return (
      <div>
        <div>
          <h1>Add Demo</h1>
          <form>
            <FormGroup controlId="line" onChange={this.handleChange}>
              <ControlLabel>Line</ControlLabel>
              <FormControl componentClass="select" placeholder="select">
                <option value="select">Select One</option>
                <option value="Nordic Naturals">Nordic Naturals</option>
                <option value="Aloe Life">Aloe Life</option>
                <option value="Bluebonnet">Bluebonnet</option>
                <option value="Host Defense">Host Defense</option>
              </FormControl>
            </FormGroup>

            <this.FieldGroup
              id="store"
              type="text"
              label="Store"
              placeholder="Enter store name"
              onChange={this.handleChange}
            />
            <label>Date</label>
            <Datetime onChange={this.handleDateChange} />

            <this.FieldGroup
              id="comments"
              type="text"
              label="Comments"
              placeholder=""
              onChange={this.handleChange}
            />

            <Button type="submit">Submit</Button>
          </form>
        </div>
      </div>
    );
  }
}

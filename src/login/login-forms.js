import React, { Component } from "react";
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock
} from "react-bootstrap";
import useSheet from "react-jss";

const styles = {
  container: {
    border: "solid 2px"
  },
  form: {
    padding: "15px 15px 15px 15px"
  }
};

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class LoginForms extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <form className={classes.form}>
          <FieldGroup
            id="formControlsEmail"
            type="email"
            label="Email address"
            placeholder="Enter email"
          />
          <FieldGroup
            id="formControlsPassword"
            label="Password"
            type="password"
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default useSheet(styles)(LoginForms);

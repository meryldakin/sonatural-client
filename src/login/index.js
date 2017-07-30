import React, { Component } from 'react';
import useSheet from 'react-jss';
import LoginForms from './login-forms'
import classNames from 'classnames'

const styles = {
  forms: {
    padding: "20px 20px 0px 20px"
  }
}

class Login extends Component {
  render() {
    const { classes, pageId } = this.props;
    console.log(pageId)
    console.log(this.props)
    return (
      <div className={classNames(classes.forms, "col-md-6 col-md-offset-3")}>
        <h1>Sign In</h1>
        <LoginForms />
      </div>
    );
  }
}

export default useSheet(styles)(Login);

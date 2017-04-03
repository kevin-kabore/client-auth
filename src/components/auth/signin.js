import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../actions';


class Signin extends Component {
  handleFormSubmit({ email, password }) {
    console.log(email, password);
    // Need to do something to sign user in
    this.props.signInUser({email, password})
  }
  render() {
    //from reduxForm
    const { fields:{email, password}, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Email</label>
          <input {...email} className="form-control"/>
        </fieldset>
        <fieldset className="form-group">
          <label>Email</label>
          <input {...password} className="form-control"/>
        </fieldset>
        <button className="btn btn-primary">Sign In</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
}, null, actions)(Signin)

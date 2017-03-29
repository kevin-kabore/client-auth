import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';


const renderField = ({input, meta:{touched, error}}) => {
    return (
      <fieldset  className="form-group" >
        <label> {input.name && input.name[0].toUpperCase() + input.name.slice(1)}: </label>
        <input {...input} className="form-control"/>
      </fieldset>
    )
}


class Signin extends Component {
  handleFormSubmit({ email, password }) {
    console.log(email, password);
    // Need to do something to sign user in
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
})(Signin)

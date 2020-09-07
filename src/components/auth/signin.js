import React, { Component } from "react"

import { reduxForm, field } from 'redux-form'

export default class SignIn extends Component {
   render() {
      return (
         <div className='signin'>
            sign in
         </div>
      )
   }
}

SignIn = reduxForm({
   form: 'SignIn'
})(SignIn);
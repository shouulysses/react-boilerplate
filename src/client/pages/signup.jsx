import React from 'react';
import { Form } from 'semantic-ui-react';
import { Link } from 'react-router';

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
  }

  handleLogin = (e) => {
    e.preventDefault();
  };
  
  render(){
    return (
      <div className="login-container">
        <div className="login-box">
          <div className="col-12 col-md-6 left">
           <h1>Sign up</h1>
            <Form onSubmit={this.handleLogin}>
              <Form.Field>
                <label htmlFor="login-email" className="label-field"><span className="label-field-name">Email</span></label>
                <input ref={email => (this.email = email)} name="email" type="text" required />
              </Form.Field>
              <Form.Field>
                <label htmlFor="login-password" className="label-field"><span className="label-field-name">Password</span></label>
                <input ref={password => (this.password = password)} name="password" type="password" required />
              </Form.Field>
              <Form.Field>
                <label htmlFor="login-confirm-password" className="label-field"><span className="label-field-name">Confirm Password</span></label>
                <input ref={confirmPassword => (this.confirmPassword = confirmPassword)} name="confirmPassword" type="password" required />
              </Form.Field>
              <div className="field">
                <div className="ui checkbox">
                  <input type="checkbox" tabindex="0" class="hidden"></input>
                  <label>I agree to the Terms and Conditions</label>
                </div>
              </div>
              <div className="btn-group">
                <button className="btn-green" type="submit">Sign In</button>
              </div>
            </Form>
            <div className="mt2">
              <Link to="/">I want to Log In</Link>
            </div>
          </div>
          <div className="col-12 col-md-6 right bg-sea-blue">
            <img src="/static/logo.png" />
          </div>
        </div>
      </div>
    );
  }
};


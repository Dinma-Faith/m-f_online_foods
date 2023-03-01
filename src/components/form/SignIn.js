import React from 'react';
import './sign.css';

const SignIn = () => (
  <section className="bg-apply">
    <div className="sign-up">
      <h1 className="form-h1">Sign In</h1>
      <form className="form">

        <input
          type="email"
          placeholder="Enter email"
          className="form-control"
        />

        <input
          type="password"
          placeholder="Enter password"
          className="form-control"
        />

        <div>
          <div>
            <div>
              <button type="submit" className="button">
                Submit
              </button>
            </div>
            <p className="reg">
              Not registered ➜
              {' '}
              <a href="/sign-up">sign up?</a>
            </p>
          </div>
        </div>
      </form>
    </div>
  </section>
);

export default SignIn;

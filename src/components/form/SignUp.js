import React from 'react';
import './sign.css';

const SignUp = () => (
  <section className="bg-apply">
    <div className="sign-up">
      <h1 className="form-h1">Sign Up</h1>
      <form className="form">
        <input
          type="text"
          placeholder="First name"
        />

        <input type="text" placeholder="Last name" />

        <input
          type="email"
          placeholder="Enter email"
        />

        <input
          type="password"
          placeholder="Enter password"
        />

        <div>
          <button type="submit" className="button">
            Sign Up
          </button>
        </div>
        <p className="reg">
          Already registered ➜
          {' '}
          <a href="/sign-in">sign in?</a>
        </p>
      </form>
    </div>
  </section>
);

export default SignUp;

import React from 'react';
// import { NavLink } from 'react-router-dom';
import './splashscreen.css';

const SplashScreen = () => (
  <section className="splash-bg">
    <div>
      <h1 className="splash-h1">Welcome to M-F Online Foods!</h1>
      <p className="splash-p">
        We are a food delivery service that delivers
        {' '}
        <strong>fresh</strong>
        {' '}
        and
        {' '}
        <strong>healthy</strong>
        {' '}
        meals to your doorstep.
      </p>

      <p className="register-p">Please Register Below</p>
      <div className="btn-splash">
        <button type="submit" className="splash-button">
          <a href="/sign-in">SignIn</a>
        </button>
        <button type="submit" className="splash-button">
          <a href="/sign-up">SignUp</a>
        </button>
      </div>
    </div>
  </section>
);

export default SplashScreen;

import React from 'react';
import SignupForm from './components/SignupForm';
import SigninForm from './components/SigninForm';

const App = () => {
  return (
    <div className="container">
      <h1>Signup</h1>
      <SignupForm />

      <hr />

      <h1>Signin</h1>
      <SigninForm />
    </div>
  );
};

export default App;

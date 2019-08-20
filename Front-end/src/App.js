import React from 'react';
import './App.css';
import Login from './Login'
import Ballot from './ballot'
import "./tabler-react/dist/Tabler.css";
import Aadhar from './Aadhar'
import OTP from './OTP'
import Success from './RequestGenerated'
import Test from './Test'
import './utils';


class App extends React.Component {
  
  render() {
  return (
    <div>
      <Success />
      <Aadhar />
      <OTP />
      <Login />
      <Ballot />

    </div>
  );
  }

}




export default App;

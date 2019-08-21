//require('dotenv').config();
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './App.css';

import './utils';
import { setProvider } from './utils';

let rootElement =  document.getElementById("root")

if (rootElement) {
  	ReactDOM.render(<App />,  document.getElementById("root"))
} else {
  	throw new Error("Could not find root element to mount to!")
}	

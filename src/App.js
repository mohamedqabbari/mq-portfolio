import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/HeaderComponent';
import './style.css';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
        </Router>
      </div>
    );
  }
}

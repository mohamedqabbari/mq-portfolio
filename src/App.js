import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Header from './components/HeaderComponent';
import Home from './views/HomePage';
import Contact from './views/ContactmePage';
import About from './views/AboutmePage';
import './style.css';

export default class App extends React.Component {
  render() {
    const HomePage = () => {
      return <Home/>;
    }
    const ContactmePage = () => {
      return <Contact/>;
    }
    const AboutmePage = () => {
      return <About/>;
    }
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/home" component={HomePage}/>
            <Route path="/aboutme" component={AboutmePage}/>
            <Route path="/contactme" component={ContactmePage}/>
            <Redirect to="/home" />
          </Switch>
        </Router>
      </div>
    );
  }
}

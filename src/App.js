import React, {Component} from 'react';
import './App.css';
import Landing from './components/Landing';
import Appa from './components/image-upload/Appa'
import Apps from './login/Apps'
// import { render } from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import Footer from './components/Footer'
import ImageList from './components/ImageList'
import ImageCard from './components/ImageCard'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Landing />
          <Route path='/' exact component={Appa} />
          <Route path='/login' component={Apps} />
          <div>
            <ImageList />
            {/* <ImageCard /> */}
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

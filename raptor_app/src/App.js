import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing';
import MultipleImageUploadComponent from './components/multiple-image-upload';
// import { render } from 'react-dom';
import Buttons from './components/Buttons';
import { Login } from './components/login';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing />
        <div className='container'>
          <div className='row'>
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  Multiple Image Upload Preview
                </div>
                <div className="card-body">
                  <MultipleImageUploadComponent />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header">
                    <Buttons />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default App;

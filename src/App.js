import React, { Component } from 'react';
import Label from './formElements/Label';
import Checkbox from './formElements/Checkbox';
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
            <div>
              <Label
                for="some_checkbox"
              >
                  Label
              </Label>
              <Checkbox
                id="some_checkbox"
              />
            </div>
            <div>
              <Label
                  for="some_checkbox2"
              >
                  <Checkbox id="some_checkbox2"/>
                  Another Label
              </Label>
            </div>
        </div>
    );
  }
}

export default App;

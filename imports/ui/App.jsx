import React, {Component} from 'react'
import Header from './components/Header.jsx'

// App component - represents the whole app
export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Header/>
      </div>
    );
  }
}
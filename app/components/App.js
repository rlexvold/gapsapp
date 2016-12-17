/*eslint no-unused-vars: 0*/
/*eslint no-undef: 0 */
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar history={this.props.history} />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default App
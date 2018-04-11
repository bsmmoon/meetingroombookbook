import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'This is my new react app',
    };
  }

  render () {
    return (
      <div>
        <p>{this.state.message}</p>
      </div>
    )
  }
}

export default App

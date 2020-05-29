import React, { Component } from 'react';
// import { render } from '@testing-library/react';
// import PropTypes from 'prop-types';

// function App() {
//   return (
//     <React.Fragment>
//       <label htmlFor="bar">BAR</label>
//       <input type="box" onClick={() => { console.log("Clicked") }} />
//     </React.Fragment>
//   );
// }

const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(props) {
    super(props)
    console.log(this.state)
    this.state = { count: 0 }
  }

  handlePlusButton = () => {
    this.setState({ count: this.state.count + 1 })
    console.log(this.state.count)
  }

  handleMinusButton = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 })
    }
    console.log(this.state.count)
  }

  render() {
    {/* console.log(this.state.count) */ }
    return (
      <>
        <div>Counter:{this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </>
    );
  }
}

export default App;
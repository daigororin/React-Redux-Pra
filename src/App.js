import React from 'react';

function App() {
  return (
    <React.Fragment>
      <label htmlFor="bar">BAR</label>
      <input type="box" onClick={() => { console.log("Clicked") }} />
    </React.Fragment>
  );
}

export default App;
import React from 'react';
// import { render } from '@testing-library/react';
import propTypes from 'prop-types';

// function App() {
//   return (
//     <React.Fragment>
//       <label htmlFor="bar">BAR</label>
//       <input type="box" onClick={() => { console.log("Clicked") }} />
//     </React.Fragment>
//   );
// }

const App = () => {
  const profiles = [
    { name: 'Taro', age: 20 },
    { name: 'Hanako', age: 15 },
    { name: 'Yuko', age: 15 },
    { name: 'Takashi', age: 3 },
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </div>
  );
}

const User = (props) => {
  return <div>Hi! I'm {props.name}! and {props.age} years old.</div>
}

User.propTypes = {
  name: propTypes.string,
  age: propTypes.number.isRequired
}

export default App;
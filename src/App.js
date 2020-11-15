// eslint-disable-next-line
import React from 'react';

// function App() {
//   // const greeting = "Hi, Tom!";
//   // const dom = <h1 className="foo">{greeting}</h1>;
//   // return dom;

//   return (
//     <React.Fragment>
//         <label htmlFor="bar">bar</label>
//       <input type="text" onClick={() => {console.log("I am clicked!")}}/>
//     </React.Fragment>
//   )
// }

const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}

const Cat = () => {
  return <div>Neow!</div>
}

export default App;
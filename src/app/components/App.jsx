// import React from 'react';

import "./App.css";
// import logo from '/public/images/logo.png'; // Place your logo image in the src folder
// import leftCurtain from '/public/images/curtainleft.png'; // Place the left curtain image in the src folder
// import rightCurtain from '/public/images/curtainright.png';

const App = () => {
  //   const [curtainsOpen, setCurtainsOpen] = useState(false);

  // const handleCurtains = () => {
  //   setCurtainsOpen(true);
  // };
  return (
    <div className="App">
      <header className="App-header">
        <div className="curtains">
          <img
            src="/images/curtainleft.png"
            className="left-curtain"
            alt="left curtain"
          />
        </div>

        <div className="curtain2">
          <img
            src="/images/curtainright.png"
            className="right-curtain"
            alt="right curtain"
          />
        </div>

        <div className="content">
          <img src="/images/logo.png" className="App-logo" alt="App logo" />
          <h1>Coming soon...</h1>
        </div>
      </header>
    </div>
  );
};

export default App;

// import React, { useState } from 'eact';
// import logo from './logo.svg';
// import curtain1 from '/public/images/curtainleft.png';
// import curtain2 from '/public/images/curtainright.png';
// import backgroundImage from 'C:\Users\asus\.vscode\Advay-website-nextjs\public\images\back.jpeg';
// import './App.css';

// function App() {
//   const [curtainOpen, setCurtainOpen] = useState(false);

//   const handleCurtainOpen = () => {
//     setCurtainOpen(true);
//   };

//   return (
//     <div className="background">
//       <img
//         src={curtain1}
//         className="curtain"
//         onClick={handleCurtainOpen}
//       />
//       <img
//         src={curtain2}
//         className="curtain"
//         onClick={handleCurtainOpen}
//       />
//       <div className="logo-container">
//         <img src={logo} className="logo" />
//         <h1>CKUB</h1>
//       </div>
//     </div>
//   );
// }

// export default App;

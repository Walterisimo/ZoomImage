import React from 'react';
import './App.css';
import Sections from './Components/Sections';


function App() {

  return (
    <div className="App">
      <Sections id={'section1'}  />
      <Sections id={'section2'}  />
      <Sections id={'section3'}  />
      <Sections id={'section4'}  />
      <Sections id={'section5'}  />
      <Sections id={'section6'}  />
    </div>
  );
}

export default App;

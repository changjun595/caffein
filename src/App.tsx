import React from 'react';

function App() {
  const handleClick = () => {
    const divContent = document.getElementById("helloDiv");

    divContent!.innerHTML = "Hello"; 
  } 

  return (
    <div className="App">
      <button id="helloButton" onClick={handleClick}>Click Me</button>
      <div id="helloDiv"></div>
    </div>
  );
}

export default App;

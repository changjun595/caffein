import React from 'react';

function App() {
  const handleClick = () => {
    const divContent = document.getElementById("helloDiv");

    divContent!.innerHTML = "Hello"; 
  } 

  const handleClick2 = () => {
    const divText = document.getElementById("worldDiv");

    divText!.innerHTML = "World";
  } 
  



  return (
    <div className="App">
      <button id="helloButton" onClick={handleClick}>Click Me</button>
      <div id="helloDiv"></div>

      <button id="worldButton" onClick={handleClick2}>Click Me2</button>
      <div id="worldDiv"></div>
      <div>hello world</div>
      <div>master</div>
    </div>
  );
}

export default App;


import React from "react";
import ColorList from './Components/ColorList.js';
import AddColorForm from "./Components/AddColorForm";

function App() {

  return (
    <React.Fragment>
      <AddColorForm/>
      <ColorList/>
    </React.Fragment>
  );
}

export default App;

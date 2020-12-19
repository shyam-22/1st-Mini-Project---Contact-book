import React from "react"
import Contacts from "./COMPONENTS/Contacts/Contacts"
import Navbar from "./COMPONENTS/Elements/Navbar"
import "./Style_Folder/App.scss"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container">
        <div className="py-3"> 
            <Contacts/>
        </div>
      </div>
    </div>
    
  );
}

export default App;

//className ="py-3" //top and padding me padding dalega